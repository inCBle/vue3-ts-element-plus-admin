import "./assets/style.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";

createApp(App).use(ElementPlus).mount("#app");
