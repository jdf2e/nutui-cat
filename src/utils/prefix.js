/**
 * @module jmddPrefix
 *
 * @example
 * animation小驼峰属性名（以下2种方式均可）
 prefix.animation; //根据兼容性返回animation或webkitAnimation
 prefix.animation.lcc; //根据兼容性返回animation或webkitAnimation
 *
 * @example
 * animation大驼峰属性名
 prefix.animation.bcc; //根据兼容性返回animation或WebkitAnimation
 *
 * @example
 * animation短横线属性名
 prefix.animation.kc; //根据兼容性返回animation或-webkit-animation
 *
 * @example
 * animationStart事件名
 prefix.animationStart; //根据兼容性返回animationstart或webkitAnimationStart
 *
 * @example
 * animationIteration事件名
 prefix.animationIteration; //根据兼容性返回animationiteration或webkitAnimationIteration
 *
 * @example
 * animationEnd事件名
 prefix.animationEnd; //根据兼容性返回animationend或webkitAnimationEnd
 *
 * keyframes小驼峰属性名（以下2种方式均可）
 prefix.keyframes; //根据兼容性返回keyframes或webkitKeyframes
 prefix.keyframes.lcc; //根据兼容性返回keyframes或webkitKeyframes
 *
 * @example
 * keyframes大驼峰属性名
 prefix.keyframes.bcc; //根据兼容性返回keyframes或WebkitKeyframes
 *
 * @example
 * keyframes短横线属性名
 prefix.keyframes.kc; //根据兼容性返回keyframes或-webkit-keyframes
 *
 * @example
 * perspective小驼峰属性名（以下2种方式均可）
 prefix.perspective; //根据兼容性返回perspective或webkitPerspective
 prefix.perspective.lcc; //根据兼容性返回perspective或webkitPerspective
 *
 * @example
 * perspective大驼峰属性名
 prefix.perspective.bcc; //根据兼容性返回perspective或WebkitPerspective
 *
 * @example
 * perspective短横线属性名
 prefix.perspective.kc; //根据兼容性返回perspective或-webkit-perspective
 *
 * @example
 * transform小驼峰属性名（以下2种方式均可）
 prefix.transform; //根据兼容性返回transform或webkitTransform
 prefix.transform.lcc; //根据兼容性返回transform或webkitTransform
 *
 * @example
 * transform大驼峰属性名
 prefix.transform.bcc; //根据兼容性返回transform或WebkitTransform
 *
 * @example
 * transform短横线属性名
 prefix.transform.kc; //根据兼容性返回transform或-webkit-transform
 *
 * @example
 * transition小驼峰属性名（以下2种方式均可）
 prefix.transition; //根据兼容性返回transition或webkitTransition
 prefix.transition.lcc; //根据兼容性返回transition或webkitTransition
 *
 * @example
 * transition大驼峰属性名
 prefix.transition.bcc; //根据兼容性返回transition或WebkitTransition
 *
 * @example
 * transition短横线属性名
 prefix.transition.kc; //根据兼容性返回transition或-webkit-transition
 *
 * @example
 * transitionEnd事件名
 prefix.transitionEnd; //根据兼容性返回transitionend或webkitTransitionEnd
 */

/**
 * @namespace prefix
 * @property {String} animation - animation小驼峰属性名
 * @property {String} animation.lcc - animation小驼峰属性名
 * @property {String} animation.bcc - animation大驼峰属性名
 * @property {String} animation.kc - animation短横线属性名
 * @property {String} animationStart - animationStart事件名
 * @property {String} animationIteration - animationIteration事件名
 * @property {String} animationEnd - animationEnd事件名
 * @property {String} keyframes - keyframes小驼峰属性名
 * @property {String} keyframes.lcc - keyframes小驼峰属性名
 * @property {String} keyframes.bcc - keyframes大驼峰属性名
 * @property {String} keyframes.kc - keyframes短横线属性名
 * @property {String} perspective - perspective小驼峰属性名
 * @property {String} perspective.lcc - perspective小驼峰属性名
 * @property {String} perspective.bcc - perspective大驼峰属性名
 * @property {String} perspective.kc - perspective短横线属性名
 * @property {String} transform - transform小驼峰属性名
 * @property {String} transform.lcc - transform小驼峰属性名
 * @property {String} transform.bcc - transform大驼峰属性名
 * @property {String} transform.kc - transform短横线属性名
 * @property {String} transition - transition小驼峰属性名
 * @property {String} transition.lcc - transition小驼峰属性名
 * @property {String} transition.bcc - transition大驼峰属性名
 * @property {String} transition.kc - transition短横线属性名
 * @property {String} transitionEnd - transitionEnd事件名
 */
const prefix = {};
const style = document.documentElement.style;
/**
 * 首字母大写
 * @param {String} str - 要首字母大写的字符串
 * @returns {String} 首字母大写后的字符串
 */

function capitalize(str) {
  return str.replace(/^./, function(str) {
    return str.toUpperCase();
  });
}
/**
 * 添加属性到prefix中
 * @param {String} key - 要添加属性的键名
 * @param {String} val - 要添加属性的键值
 * @param {Boolean} addPrefix - 键值是否添加前缀
 */

function addToPrefix(key, val, addPrefix) {
  const capitalizedVal = capitalize(val);
  const cc = addPrefix ? 'webkit' + capitalizedVal : val;
  const bcc = addPrefix ? 'Webkit' + capitalizedVal : val;
  const kc = addPrefix
    ? '-webkit-' +
      val.replace(/[A-Z]/g, function(str) {
        return '-' + str.toLowerCase();
      })
    : val;
  prefix[key] = {
    cc: cc,
    lcc: cc,
    bcc: bcc,
    kc: kc,
    toString: function toString() {
      return cc;
    }
  };
}
[
  {
    prop: 'animation',
    relates: ['keyframes'],
    events: ['start', 'iteration', 'end']
  },
  {
    prop: 'perspective'
  },
  {
    prop: 'transform'
  },
  {
    prop: 'transition',
    events: ['end']
  }
].forEach(function(_ref) {
  const prop = _ref.prop,
    _ref$events = _ref.events,
    events = _ref$events === void 0 ? [] : _ref$events,
    _ref$relates = _ref.relates,
    relates = _ref$relates === void 0 ? [] : _ref$relates;
  const withPrefix = !(prop in style); //是否有前缀

  addToPrefix(prop, prop, withPrefix);
  relates.forEach(function(relate) {
    return addToPrefix(relate, relate, withPrefix);
  });
  events.forEach(function(event) {
    const capitalizedEvent = capitalize(event);
    addToPrefix(
      prop + capitalizedEvent,
      prop + (withPrefix ? capitalizedEvent : event),
      withPrefix
    );
  });
});

export { prefix };
