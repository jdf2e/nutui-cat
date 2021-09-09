'use strict';

var rollup = require( 'rollup' );
var babel = require('rollup-plugin-babel');

rollup.rollup({
  entry: 'src/index.js',
  plugins: [
    babel()
  ]
}).then( function ( bundle ) {
  // CommonJS
  bundle.write({
    format: 'cjs',
    dest: 'dest/index.js'
  });
  // UMD
  bundle.write({
    format: 'umd',
    moduleName: 'SillyDatetime',
    dest: 'dest/index.umd.js'
  });
});