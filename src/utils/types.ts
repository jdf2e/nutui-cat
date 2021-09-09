
export function isString(obj: any) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isNumber(val: any) {
  var regPos = /^\d+(\.\d+)?$/
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/
  if (regPos.test(val) || regNeg.test(val)) {
    return true
  } else {
    return false
  }
}

export function isArray(val: any) {
  return val instanceof Array
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isFunction = (functionToCheck: any) => {
  var getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

export const isUndefined = (val: any) => {
  return val === void 0
}

export const isDefined = (val: any) => {
  return val !== undefined && val !== null
}

export function isHtmlElement(node: any) {
  return node && node.nodeType === Node.ELEMENT_NODE
}


// export default Types;