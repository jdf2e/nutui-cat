import { getQueryString } from './query';

/**
 *
 * 数组拆分函数
 * @static
 * @param {number} N 拆分长度
 * @param {any[]} Q 将要拆分的数组
 * @returns {Array}
 * @memberof Utils
 */
export function spArray(N: number, Q: any[]): Array<any> {
  let R: any[] = [],
    F: number;
  for (F = 0; F < Q.length; ) {
    R.push(Q.slice(F, (F += N)));
  }
  return R;
}

/**
 * 时间戳转换为年月日格式
 * Date的‘toJSON’方法返回格林威治时间的JSON格式字符串，实际是使用‘toISOString’方法的结果。字符* 串形如‘2018-08-09T10:20:54.396Z’，转化为北京时间需要额外增加八个时区，我们需要取字符串前19* * 位，然后把‘T’替换为空格，即是我们需要的时间格式。
 */
export function formatTime(time: number = +new Date()) {
  const date = new Date(time + 8 * 3600 * 1000);
  return date
    .toJSON()
    .substr(0, 19)
    .replace('T', ' ')
    .replace(/-/g, '.');
}
/**
 * 时间戳对比
 * @param beginTime
 * @param endTime
 */
export function diffTime(beginTime: number, endTime: number) {
  // 1分钟 时间戳
  const minutesTimestamp = 1000 * 60;
  // 1小时 时间戳
  const hoursTimestamp = minutesTimestamp * 60;
  // 1天 时间戳
  const daysTimestamp = hoursTimestamp * 24;

  // 时间戳差
  const timestampDiff = endTime - beginTime;
  // 分钟差
  const minutesDiff = timestampDiff / minutesTimestamp;
  // 小时差
  const hoursDiff = timestampDiff / hoursTimestamp;
  // 天差
  const dayDiff = timestampDiff / daysTimestamp;

  return {
    minutesTimestamp,
    hoursTimestamp,
    daysTimestamp,
    day: Math.floor(dayDiff),
    hours: Math.floor(hoursDiff),
    minutes: Math.floor(minutesDiff),
    seconds: Math.floor(timestampDiff / 1000),
    timestampDiff
  };
}

/**
 * 获取渠道号
 */
export function getBabelChannel(this: any) {
  let babelChannel = getQueryString('babelChannel') || '';
  babelChannel = babelChannel.replace(/\?.*/, '');
  if (!/^ttt[0-9]*$/g.test(babelChannel)) babelChannel = 'NULL';
  return babelChannel;
}

/**
 * 将cms返回的楼层数据转换成对象形式
 *
 * @param floorList
 * @returns {Object}
 */
export function convertListToData(floorList = []) {
  let floorData: any = {}, list = [].concat(floorList)
  for (let i = 0, floor: any; i < list.length; i++) {
    floor = list[i]
    // 打散数据
    if (floor && floor['data']) {
      for (let key in floor['data']) {
        let newKey = key
        if (!(/^data/).test(key)) newKey = `data${key.replace(key[0], key[0].toUpperCase())}`
        // console.warn(newKey, key)
        floor[newKey] = floor['data'][key]
      }
      delete floor['data']
    }
    // 合并楼层
    floorData[floor['alias']] = floor
    if ((/_/g).test(floor['alias'])) {
      let newAlias = floor['alias'].split('_')[0]
      if (floor['alias'].split('_')[1]) {
        if (floorData[newAlias]) {
          floorData[newAlias].push(floor)
        } else {
          floorData[newAlias] = [floor]
        }
      }
    } else {
      floorData[floor['alias']] = floor
    }
  }
  return floorData
}

/**
 * 寻找数据节点，不存在或节点为list小于需要的最小长度则返回false
 * 使用方法
  1、get('extension.shortBenefit', item)
  1、get('list', item, 3)
  *
  * @export
  * @param {string} path 必须 对象
  * @param {object|array} [parent=this] 选填 数据源，如果如参数字，则parent默认为this，num为当前入参值
  * @param {number} num 选填 获取数组的数目
  * @returns
*/
export function get(this: any, path: any, parent:any = this, num?: any) {
  if (typeof parent !== 'object') {
    num = parent;
    parent = this;
  }
  let pathArr = path.replace(/\[/g, '.')
  .replace(/\]/g, '')
  .split('.')
  let res = pathArr.reduce((o: any, k: any) => {
    return (o || {})[k]
  }, parent)
  if ((Array.isArray(res) && num)) {
    return res.length >= num ? res.slice(0, num) : null
  } else {
    return res
  }
}
// export function get(this: any, child: any, parent:any = this, min?: any) {
//   if (typeof parent !== 'object') {
//     min = parent;
//     parent = this;
//   }
//   let nodes = child ? child.split('.') : [], result:any = false;
//   // console.log('nodes:', nodes)
//   for (let i = 0; i <= nodes.length; i++) {
//     if (!parent && parent !== 0 && parent !== "0") {
//       break;
//     } else {
//       if (i == nodes.length) {
//         // console.log('i', i)
//         if (min) {
//           if (parent instanceof Array && parent.length >= min) {
//             result = parent;
//           }
//         } else {
//           result = parent
//           // console.log('result2:', result)
//         }
//       } else {
//         // console.log('nodes[i]:', nodes[i])
//         parent = parent[nodes[i]]
//         // console.log('result3:', parent)
//       }
//     }
//   }
//   return result;
// }

/**
 * 判断css属性支持情况
 *
 * @export
 * @param {*} attr 属性名
 * @param {*} value 属性值
 * @returns
 */
export function cssSupport (attr: any, value: string): boolean {
  const element = document.createElement('div')
  if (attr in element.style) {
    element.style[attr] = value
    return element.style[attr] === value
  }
  return false
}
/**
 * 拆分价格
 *
 * @export
 * @param {((number|string))} price 价格
 * @param {number} [small=2]  保留小数点后几位,默认2位
 * @returns ['&yen;', 整数, 小数] 如splitPrice(124.46) => ['&yen;', 124, '46']
 */
export function splitPrice (price: (number|string), small = 2): [string, number, string?] {
  let _val: string[] = []
  let end: string | undefined
  price = Number(price).toFixed(small)
  if (Number(price) === 0) {
    price = 0
    return ['&yen;', 0]
  }
  _val = price.split('.')
  if (_val[1] !== '00') {
    end = _val[1]
  }
  return ['&yen;', +_val[0], end]
}