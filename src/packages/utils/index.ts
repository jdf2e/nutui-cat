const Utils = {
  get: function(child: any, parent: any, min: any) {
    if (typeof parent !== 'object') {
      min = parent;
      parent = this;
    }
    // console.log('child:', child,'parent:', parent)
    let nodes = child ? child.split('.') : [], result:any = false;
    // console.log('nodes:', nodes)
    for (let i = 0; i <= nodes.length; i++) {
      if (!parent && parent !== 0 && parent !== "0") {
        break;
      } else {
        if (i == nodes.length) {
          // console.log('i', i)
          if (min) {
            if (parent instanceof Array && parent.length >= min) {
              result = parent;
            }
          } else {
            result = parent
            // console.log('result2:', result)
          }
        } else {
          // console.log('nodes[i]:', nodes[i])
          parent = parent[nodes[i]]
          // console.log('result3:', parent)
        }
      }
    }
    return result;
  }
  // export function get(this: any, path: any, parent:any = this, num?: any) {
  //   if (typeof parent !== 'object') {
  //     num = parent;
  //     parent = this;
  //   }
  //   let pathArr = path.replace(/\[/g, '.')
  //   .replace(/\]/g, '')
  //   .split('.')
  //   let res = pathArr.reduce((o: any, k: any) => {
  //     return (o || {})[k]
  //   }, parent)
  //   if ((Array.isArray(res) && num)) {
  //     return res.length >= num ? res.slice(0, num) : null
  //   } else {
  //     return res
  //   }
  // }
};

export default Utils;


