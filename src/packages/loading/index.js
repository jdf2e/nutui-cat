import { prefix } from '@/utils/prefix';
import './index.scss';

/**
 * @module actLoadingJoy
 */
const STROKE_WIDTH = 20;
const joy = '<svg\n  class="act-page-loading__joy"\n  viewBox="'
  .concat(-STROKE_WIDTH, ' ')
  .concat(-STROKE_WIDTH, ' ')
  .concat(555 + STROKE_WIDTH * 2, ' ')
  .concat(
    435 + STROKE_WIDTH * 2,
    '"\n>\n  <path\n    class="act-page-loading__path"\n    fill="none"\n    stroke="#f24d3b"\n    stroke-dasharray="2100"\n    stroke-dashoffset="2100"\n    stroke-linecap="round"\n    stroke-width="'
  )
  .concat(
    STROKE_WIDTH,
    'px"\n    d="M235.48,249.38c-19.36,0.03-39.57,14.78-56.2,33.28c-16.64,18.5-29.7,40.76-34.77,55.81c-4.95,14.7-2.76,28.67,3.95,38.23c6.71,9.56,17.93,14.72,31.04,11.82c2.7-0.58,4.77-1.85,6.26-2.33s2.39-0.19,2.74,2.33c-1.45,6.09-2.92,10.93-3.42,15.59s-0.02,9.12,2.42,14.44c4.11,8.99,16.05,14.33,29.25,16c13.19,1.67,27.63-0.32,36.74-5.99c6.29-3.92,9.06-10.92,11.62-18.12c2.56-7.2,4.92-14.6,10.37-19.31c0.33,0,0.92,0,1.5,0s1.17,0,1.5,0c5.45,4.71,8.06,12,10.87,19.1c2.81,7.09,5.84,13.99,12.13,17.9c9.11,5.67,23.55,7.66,36.75,5.99c13.19-1.67,25.14-7.01,29.25-15.99c2.44-5.32,2.91-9.78,2.42-14.43c-0.5-4.65-1.96-9.49-3.42-15.57c-0.81-3.66,0.33-3.88,2.23-3.08c1.9,0.81,4.55,2.64,6.77,3.08c13.11,2.9,24.34-2.26,31.05-11.81c6.71-9.55,8.91-23.5,3.95-38.19c-5.07-15.04-18.14-37.27-34.78-55.75c-16.64-18.48-36.86-33.22-56.22-33.25c-0.63-3.77-1.06-6.35-1.06-6.35c6.92-2.16,36.61-11.12,66.87-33.02c30.25-21.9,61.06-56.73,70.2-110.64c3.37,0.22,6.62,2.4,9.91,4.94c3.28,2.54,6.6,5.43,10.09,7.06c13.19,6.17,32.27,8.51,48.38,6.14c16.11-2.37,29.27-9.46,30.62-22.14c0.63-5.87-3.21-12.43-8.78-19.61c-5.57-7.18-12.89-15-19.22-23.39c-7.34-9.73-11.93-17.93-16.26-25.1c-4.33-7.17-8.41-13.3-14.74-18.9c-1.65-1.46-4.25-2.76-7.27-3.54c-3.01-0.78-6.44-1.05-9.73-0.46c-10.36,1.88-17.84,8.09-24.87,14.85s-13.59,14.07-22.13,18.15c-1.76,0.86-6.73-1.7-12.15-4.82s-11.29-6.8-14.85-8.18c-9.84-3.81-40.42-16.57-85-22S216.32-1.38,150.5,24.16c-3.56,1.38-9.43,5.06-14.85,8.18c-5.42,3.12-10.39,5.68-12.15,4.83c-8.54-4.09-15.11-11.41-22.13-18.17c-7.02-6.77-14.5-12.98-24.86-14.86c-3.3-0.6-6.72-0.33-9.73,0.46c-3.01,0.78-5.61,2.08-7.26,3.55c-6.32,5.61-10.4,11.75-14.73,18.92s-8.92,15.38-16.26,25.12c-6.33,8.4-13.64,16.22-19.21,23.41s-9.41,13.75-8.78,19.63c1.35,12.7,14.5,19.79,30.61,22.17c16.11,2.37,35.18,0.03,48.37-6.15c3.49-1.64,6.81-4.53,10.09-7.07c3.28-2.54,6.53-4.72,9.91-4.94c9.12,53.86,39.81,88.69,70,110.62s59.87,30.94,66.95,33.15L235.48,249.38z"\n  />\n</svg>'
  );

/**
 * @module actPageLoading
 */
let count = 0; //显示计数

let dom = null; //页面loading的dom

let hiding = false; //是否正在隐藏

/**
 * 点击的回调
 */

function onTouchStart(e) {
  e.preventDefault();
}
/**
 * 当隐藏过渡结束的回调
 */

function onHideTransitionEnd() {
  document.body.removeChild(dom);
  dom.removeEventListener(prefix.transitionEnd, onHideTransitionEnd);
  dom = null;
  hiding = false;
}
/**
 * 显示页面loading
 */

function showPageLoading() {
  if (hiding) {
    hiding = false;
    dom.removeEventListener(prefix.transitionEnd, onHideTransitionEnd);
    dom.addEventListener('touchstart', onTouchStart);
    dom.classList.remove('act-page-loading--hide');
  }

  count++;

  if (!dom) {
    dom = document.createElement('div');
    dom.className = 'act-flex--c act-page-loading act-page-loading--hide';
    dom.innerHTML = '<div class="act-page-loading__icon">'.concat(
      joy,
      '</div>'
    );
    dom.addEventListener('touchstart', onTouchStart);
    document.body.appendChild(dom);
    dom.offsetWidth; //强制渲染
    dom.classList.remove('act-page-loading--hide');
  }
}
/**
 * 隐藏页面loading
 * @param {Boolean} [ignoreCount = false] - 忽略显示计数
 */

function hidePageLoading() {
  const ignoreCount =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (ignoreCount) {
    count = 0;
  } else if (count > 0) {
    count--;
  }

  if (!count && !hiding && dom) {
    hiding = true;
    dom.addEventListener(prefix.transitionEnd, onHideTransitionEnd);
    dom.removeEventListener('touchstart', onTouchStart);
    dom.classList.add('act-page-loading--hide');
  }
}

export default { hide: hidePageLoading, show: showPageLoading };
