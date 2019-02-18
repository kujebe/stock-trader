import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import VueResource from "vue-resource";

import router from "./router";
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-1b153.firebaseio.com/";

Vue.filter("currency", value => {
  return "N" + value.toLocaleString();
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
