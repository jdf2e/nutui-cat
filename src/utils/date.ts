const Utils = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function(y: number): boolean {
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
  },

  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay: function(year: number, month: number, day: number): string {
    const date = new Date(year + '/' + month + '/' + day);
    const index = date.getDay();
    const dayNames = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ];
    return dayNames[index];
  },

  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay: function(year: number, month: number): number {
    const date = new Date(year + '/' + month + '/01');
    let day = date.getDay();
    if (day == 0) {
      day = 7;
    }
    return day;
  },

  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays: function(year: string, month: any): number {
    if (/^0/.test(month)) {
      month = month.split('')[1];
    }
    return [
      0,
      31,
      this.isLeapYear(Number(year)) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ][month];
  },

  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function(n: number): string {
    n = Number(n);
    return (n > 9 ? '' : '0') + n;
  },

  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function(date: Date, split?: string): string {
    split = split || '-';
    const y = date.getFullYear();
    const m = this.getNumTwoBit(date.getMonth() + 1);
    const d = this.getNumTwoBit(date.getDate());
    return [y, m, d].join(split);
  },

  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay: function(i: number): string {
    i = i || 0;
    let date = new Date();
    const diff = i * (1000 * 60 * 60 * 24);
    date = new Date(date.getTime() + diff);
    return this.date2Str(date);
  },

  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function(date1: string, date2: string): boolean {
    const startTime = new Date(date1.replace('-', '/').replace('-', '/'));
    const endTime = new Date(date2.replace('-', '/').replace('-', '/'));
    if (startTime >= endTime) {
      return false;
    }
    return true;
  },

  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(date1: string, date2: string): boolean {
    const startTime = new Date(date1).getTime();
    const endTime = new Date(date2).getTime();
    if (startTime == endTime) {
      return true;
    }
    return false;
  },

    /**
   * 寻找数据节点，不存在或节点为list小于需要的最小长度则返回false
   *
   * @export
   * @param {*} child string 查找的节点 例子:'dataHeader.dataHead.list.0.pictureUrl'
   * @param {*} parent obj 查找的起始节点,选填
   * @param {*} min Number 查找的节点list最小长度过滤,选填
   * @returns 节点 or false
   */
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
};

export default Utils;
