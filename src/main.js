import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import SvgIcon from "vue-svgicon";
import VueTruncate from 'vue-truncate-filter';
// import VueLazyLoad from 'vue-lazyload';
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'

import 'intersection-observer';
Vue.use(VueTinyLazyloadImg);

Vue.use(SvgIcon, {
  tagName: "svgicon"
});

Vue.use(VueTruncate);

// Vue.use(VueLazyLoad, {
//   preLoad: 1,
//   error: './error.png',
//   loading: './loading.gif',
//   attempt: 1
// });

Vue.filter('installs-round', (string) => {
  const num = Number(string);
  if (isNaN(num)) {
    return '';
  }
  return num >= 1e6
    ? Math.round(num / 1e6) + 'KK.'
    : num >= 1e3
      ? Math.round(num / 1e3) + 'K.'
      : num;
});

Vue.filter('truncate-mobile', (string, length, screenSize) => {
  if (screenSize && window.innerWidth > screenSize) {
    return string;
  }
  if (string.length > length) {
    string = string.substring(0, length) + '...';
  }
  return string;
});


Vue.filter('point-rating', (string) => {
  if (typeof string !== 'string') {
    string = string.toString();
  }
  return string.replace('.', ',');
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
