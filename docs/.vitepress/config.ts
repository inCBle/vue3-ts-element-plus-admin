import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Admin 组件库",
  description: "后台管理项目中的业务组件库文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown 示例", link: "/markdown-examples" },
          { text: "Runtime API 示例", link: "/api-examples" },
          { text: "Pro Form", link: "/pro-form" },
          { text: "Pro Table", link: "/pro-table" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/inCBle/vue3-ts-element-plus-admin.git" },
    ],
  },
});
