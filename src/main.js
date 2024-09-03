import { createApp } from "vue";
import "./assets/styles/global.scss";
import "primeicons/primeicons.css";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/products/:filter", name: "products", component: Products },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
