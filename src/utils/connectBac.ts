import { get } from '@/utils/index'

interface Params {
  [props: string]: [];
}

/**
 * 判断字符串中括号是否成对
 * @param s
 * @returns
 */
function isDouble(s) {
  if (s.length % 2 == 1) return false;

  const stock: string[] = [];

  const map = new Map();
  map.set("[", "]");

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stock.push(s[i]);
    } else {
      if (map.get(stock[stock.length - 1]) == s[i]) {
        stock.pop();
      }
    }
  }

  return stock.length == 0;
}

/**
 * 获取对象类型
 * @param data 
 * @returns 
 */
function getDataType(data) {
  const reg = /([a-zA-Z]+)/g;
  const str = Object.prototype.toString.call(data).split(" ")[1] || "";

  if (str && str.match(reg) && str.match(reg)?.length) {
    return (str.match(reg) as string[])[0];
  } else {
    return data
  }

}

/**
 * 查找当前对象下的路径的值
 * @param object
 * @param path
 * @returns
 */
function find(object: {}, path) {

  const regex = /(\[|\])/g;

  if (regex.test(path) && isDouble(path)) {
    path = path.replace(/(\])/g, "").replace(/(\[)/g, ".");
  }

  const props = path.split(".");

  for (let i = 0; i < props.length; i++) {
    const p = props[i];

    if (object && object.hasOwnProperty(p)) {
      object = object[p];
    } else {
      return undefined;
    }
  }

  return object;
}



function connectData(data: any, params: Params = {}) {
  if (data) {
    const defaultParams = {
      cName: ['name'], // 名称
      cNameTag: false, // 名称前的标签
      cDesc: ['desc'], // 利益点
      cImage: ['image'], // 图片
      cLogo: false, // logo图
      cLabel: false, // 标签，通常用于左上角，一般只有一个
      cTag: false, // 标签，通常用于内容区，个数可能不止一个
      cDistance: false, // 距离，通常用于LBS
      cBottom: false, // 底部操作区
      cRight: false, // 右侧操作区
      cPrice: ['pPrice'], // 价格
      cPrePrice: false, // 价格前的内容
      cAfterPrice: false, // 价格后的内容
      cLinePrice: ['linePrice'], // 划线价格
      cPreLinePrice: false // 划线价格前的内容
    };

    Object.assign(defaultParams, params);
    Object.keys(defaultParams).forEach((key: string) => {
      if (defaultParams[key]) {
        defaultParams[key].forEach(target => {
          if (getDataType(target) == "String") {
            if (target) {
              defaultParams[key] = find(data, target);
            } else {
              defaultParams[key] = "";
            }
          }
        });
      }
    });

    Object.assign(data, defaultParams);

    return data;
  }
}

export default connectData;
