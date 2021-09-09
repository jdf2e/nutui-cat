const {join} = require('path');
const {existsSync} = require('fs');
const t = require('babel-types');

const filesStatCache = new Set();
const isLocaleExtra = curr => ~['locale', 'i18n'].indexOf(curr);
const isExportFuncExtra = curr => ~['dialog', 'toast', 'flex', 'steps', 'skeleton'].indexOf(curr);

/**
 * 生成新的specifiers
 * @param {array} specifiers 
 * @param {object} opts - babel plugin传入的参数
 * @returns {array}
 */
function genImportDeclaration(specifiers = [], opts) {
    const packagesPath = `${opts.libraryName}/${opts.libraryDirectory}/`;
    return specifiers.reduce(function(newSpecifiers, curr) {
        const _curr = curr.toLowerCase();
        const isLocale = isLocaleExtra(_curr);
        const {style, sourceCode} = opts;
        const importLocal = t.identifier(curr);
        const importDefault = t.importDefaultSpecifier(importLocal);
        const imported = t.importSpecifier(importLocal, importLocal);
        const imports = [
            t.importDeclaration([
                isLocale? imported: importDefault
            ], t.stringLiteral(getTarget(_curr, packagesPath, sourceCode)))
        ]
        if(style && !isLocale) {
            const cssTarget = `${packagesPath + _curr}/${_curr}.${style}`;
            const cssFile = join(process.cwd(), 'node_modules', cssTarget);
      
            if(!filesStatCache.has(cssFile)) {
                const hasFile = existsSync(cssFile);
                if(hasFile) {
                    filesStatCache.add(cssFile);
                }
            }
            if(filesStatCache.has(cssFile)) {
                imports.push(t.importDeclaration([], t.stringLiteral(cssTarget)));
            }
        }
        return newSpecifiers.concat(imports);
    }, []);
}

/**
 * 根据参数改变引用文件类型
 */
function getTarget(pkgName, pkgPath, isSourceCode) {
    let target = pkgPath;
    if(isSourceCode) {
        const isLocale = isLocaleExtra(pkgName);
        const isExportFunc = isExportFuncExtra(pkgName);
        const localePath = join(pkgPath, '..', 'locales');
        const exportFuncTarget = `${pkgPath}/${pkgName}/_${pkgName}.js`; 
        const sourceFile = `${pkgPath + pkgName}/${pkgName}.vue`;
        target = isLocale? localePath: isExportFunc? exportFuncTarget: sourceFile;
    }else{
        target = `${target + pkgName}/${pkgName}.js`;
    }
    return target;
}

module.exports = function() {

    return {
        visitor: {
            ImportDeclaration(path, {opts = {}}) {
                if(!opts.libraryName) opts.libraryName = '@nutui/nutui';
                if(!opts.libraryDirectory) opts.libraryDirectory = 'dist/packages';
                if(!opts.sourceCode) opts.sourceCode = false;
                const {style} = opts;
                const {node} = path;
                opts.style = style ? (style === 'scss'? 'scss': 'css') : '';
                if(!node.source) return;
                const {value} = node.source;
                const {specifiers} = node;
                if(value === opts.libraryName && specifiers && specifiers.length) {
                    const spes = specifiers.filter(specifier => specifier.type === 'ImportSpecifier').map(specifier => specifier.local.name);
                    if(spes.length) {
                        path.replaceWithMultiple(genImportDeclaration(spes, opts))
                    }
                }
            }
        }
    }
}

