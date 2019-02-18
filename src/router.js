import vue from "vue";
import vueRouter from "vue-router";

vue.use(vueRouter);

const routes = [
  {
    path: "/",
    component: require("./components/Home.vue")
  },
  {
    path: "/stocks",
    component: require("./components/stocks/Stocks.vue")
  },
  {
    path: "/portfolio",
    component: require("./components/portfolio/Portfolio.vue")
  }
];

export default new vueRouter({ mode: "history", routes });
