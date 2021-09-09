import 'swiper/css/swiper.min.css';
import Swiper from 'swiper/js/swiper.min.js';

export default (...args) => {
  return Promise.resolve().then(() => {
    return new Swiper(...args);
  });
};
