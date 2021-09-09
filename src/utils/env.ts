const _window = window as any;

export const env = {
  JD: isApp("jd"), // 是否在京东APP
  WX: isApp("wx"), // 是否在微信
  QQ: isApp("qq"), // 是否在QQ
  WEIBO: isApp("weibo"), // 是否在微博
  IOS: isIOS(), // 是否在IOS
  ANDROID: isAndroid(), // 是否在IOS
  WK: isWebview("wk"), // 是否在webkit
  MOBILE: isMobile(), // 是否移动端
  VERSION: getAppVersion("jd"), // app版本
};

/**
 * 判断当前环境是否是 app
 * @param  {string}  name app 名称，支持名字 [ wx, qq, weibo, jd ]
 * @param  {string}  [ua]   userAgent 字符串
 * @return {Boolean}
 */
export function isApp(appName: string, ua?: string) {
  ua = ua || navigator.userAgent;
  if (appName === "wx") return /micromessenger/i.test(ua);
  if (appName === "qq") return /qq\//i.test(ua);
  if (appName === "weibo") return /weibo/i.test(ua);
  if (appName === "jd") return /^jdapp/i.test(ua);
  if (appName === "mp") {
    return (
      (navigator.userAgent.match(/micromessenger/i) &&
        navigator.userAgent.match(/miniprogram/i)) ||
        _window.__wxjs_environment === "miniprogram"
    );
  }
  return false;
}

/**
 * 判断是否在微信小程序环境中
 *
 * @export
 * @returns {Boolean}
 */
export function isWeChatMiniApp(callback?: any) {
  return new Promise((resolve) => {
    let _isMp = () => {
      return _window.__wxjs_environment === "miniprogram";
    };
    if (
      /micromessenger/i.test(_window.navigator.userAgent) &&
      (!_window.WeixinJSBridge || !_window.WeixinJSBridge.invoke)
    ) {
      document.addEventListener(
        "WeixinJSBridgeReady",
        function () {
          resolve(_isMp());
        },
        false
      );
    } else {
      resolve(_isMp());
    }
  });
}

/**
 * 判断是否为 android 设备, iOS jdapp内的webview有'android'字样
 * @param  {string}  [ua]   userAgent 字符串
 * @return {Boolean}
 */
export function isAndroid(ua?: string) {
  ua = ua || navigator.userAgent;
  return /android/i.test(ua) && !isIOS();
}

/**
 * 判断是否为 ios 设备
 * @param  {string}  [ua]   userAgent 字符串
 * @return {Boolean}
 */
export function isIOS(ua?: string) {
  ua = ua || navigator.userAgent;
  return /ip(hone|od)|ipad/i.test(ua);
}

/**
 * 判断是否为平板设备
 * @param  {string}  [ua]   userAgent 字符串
 * @return {Boolean}
 */
export function isTablet(ua: string) {
  ua = ua || navigator.userAgent;
  return (
    /ipad/i.test(ua) || (/android/i.test(ua) && !/mobi|mini|fennec/i.test(ua))
  );
}

/**
 * 判断是否为手机设备
 * @param  {string}  [ua]   userAgent 字符串
 * @return {Boolean}
 */
export function isMobile(ua?: string) {
  ua = ua || navigator.userAgent;
  return !!ua.match(
    /ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/i
  );
}

/**
 * 判断是否为jdApp内的WKWebview
 * @param  {string}  name webview 名称，支持名字 [ xview, wk ]
 * @param  {string}  [ua]   userAgent 字符串
 * @return {Boolean}
 */
export function isWebview(name: string, ua?: string) {
  ua = ua || navigator.userAgent;
  if (name === "xview") return typeof _window.XView !== "undefined";
  if (name === "wk")
    return !!ua.match(/supportjdshwk/i) || _window._is_jdsh_wkwebview == 1;
  return false;
}

/**
 * 获取 jd app 的 uuid
 * @param  {string}  [ua]   userAgent 字符串
 * @return {string}
 */
export function getUUID(ua?: string) {
  ua = ua || navigator.userAgent;
  if (!isApp("jd", ua)) return null;
  return ua.split(";")[4];
}

/**
 * 获取 app 版本信息
 * @param  {string}  appName app 名称，支持名字 [ wx, qq, jd ]
 * @param  {string}  [ua]   userAgent 字符串
 * @return {Boolean}
 */
export function getAppVersion(appName: string, ua?: string) {
  ua = ua || navigator.userAgent;

  if (appName === "jd") return ua.split(";")[2] || null;
  if (appName === "wx")
    return /micromessenger\/([\S]*)/i.test(ua) ? RegExp.$1 : null;
  if (appName === "qq") return /qq\/([\S]*)/i.test(ua) ? RegExp.$1 : null;

  return "";
}

/**
 * 获取 android 版本号
 * @param {string} [ua] userAgent 字符串
 * @return {string}
 */
export function getAndroidVersion(ua: string) {
  ua = ua || navigator.userAgent;
  let match = ua.match(/android\s([0-9\.]*)/i);
  return match ? match[1] : "unknown";
}

/**
 * 获取 ios 版本号
 * @param {string} [ua] userAgent 字符串
 * @return {string}
 */
export function getIOSVersion(ua: string) {
  ua = ua || navigator.userAgent;
  let match = ua.match(/OS ((\d+_?){2,3})\s/i);
  return match ? match[1].replace(/_/g, ".") : "unknown";
}

/**
 * 版本号比较
 * @param  {String} a 版本号 a
 * @param  {String} b 版本后 b
 * @return {Number}   0: a == b， 1：a > b, -1: a < b
 */
export function versionCompare(a: any, b: any) {
  if (a === b) return 0;

  a = a.split(".");
  b = b.split(".");

  const len = a.length - b.length;

  const pad:any = [];
  for (let i = 0; i < Math.abs(len); i++) {
    pad.push(0);
  }

  if (len > 0) {
    b = b.concat(pad);
  } else if (len < 0) {
    a = a.concat(pad);
  }

  for (var i = 0; i < a.length; i++) {
    a[i] = parseInt(a[i], 10);
    b[i] = parseInt(b[i], 10);

    if (a[i] > b[i]) return 1;
    else if (a[i] < b[i]) return -1;
  }

  return 0;
}