function requestAniFrame() {
  if (typeof window !== 'undefined') {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  } else {
    return function(callback: any) {
      setTimeout(callback, 1000 / 60);
    };
  }
}

export { requestAniFrame };
