import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/reset.scss";
import "@/assets/iconfont/iconfont.css";
import "element-plus/dist/index.css";

import ElementPlus from "element-plus";

import { router } from "@/router";

import { i18n } from "@/languages";

import { pinia } from "@/stores";

createApp(App).use(ElementPlus).use(router).use(i18n).use(pinia).mount("#app");
