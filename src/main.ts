import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/index.scss";
import "@/assets/iconfont/iconfont.css";

import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/element-dark.scss";
import "@/styles/element.scss";

import ElementPlus from "element-plus";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { router } from "@/router";

import { i18n } from "@/languages";

import { pinia } from "@/stores";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus).use(router).use(i18n).use(pinia).mount("#app");
