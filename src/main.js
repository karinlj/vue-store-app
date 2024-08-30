import { createApp } from "vue";
import "./assets/styles/global.scss";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/products", component: Products },
  ],
});

createApp(App).use(router).mount("#app");
