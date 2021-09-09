
/**
 * 获取地址栏参数值
 * @static
 * @param {string} name 获取的参数名称
 * @returns {string} value
 * @memberof Utils
 */
export function getQueryString(name: string): string {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(decodeURI(r[2]));
  } else {
    return '';
  }
}
/**
 * 为url添加/修改参数
 *
 * @export
 * @param {*} url 链接
 * @param {*} key
 * @param {*} value
 * @returns {string} 修改参数后的url
 */
export function updateUrlQuery(url: string, key: string, value: string) {
  if (!value) return url
  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  var separator = url.indexOf('?') !== -1 ? '&' : '?'
  if (url.match(re)) {
    return url.replace(re, '$1' + key + '=' + value + '$2')
  } else {
    return url + separator + key + '=' + value
  }
}

