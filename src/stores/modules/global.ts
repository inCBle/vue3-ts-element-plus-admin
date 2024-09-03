import { defineStore } from "pinia";
import { GlobalState } from "@/stores/interface";

export const useGlobalStore = defineStore("global", {
  state: (): GlobalState => ({
    // 布局模式(纵向: vertical, 横向: horizontal, 分栏: columns)
    layout: "vertical",
    // element 组件大小
    assemblySize: "default",
    // 当前系统语言(中文: zh, 英文: en)
    language: "zh",
    // 页面是否全屏
    isFullscreen: false,
    // 主题颜色
    themeColor: "#409EFF",
    // 深色模式
    isDark: false,
    // 灰色模式
    isGrey: false,
    // 色弱模式
    isWeak: false,
    // 侧边栏反转
    asideInverted: false,
    // 头部反转
    headerInverted: false,
    // 折叠菜单
    isCollapse: false,
    // 菜单手风琴
    isAccordion: true,
    // 页面水印
    isWatermark: false,
    // 面包屑导航
    isBreadcrumb: true,
    // 面包屑导航图标
    isBreadcrumbIcon: true,
    // 标签页
    isTab: true,
    // 标签页图标
    isTabsIcon: true,
    // 页脚
    isFooter: true,
  }),
  actions: {
    setGlobalState<K extends keyof GlobalState>(key: K, value: GlobalState[K]) {
      (this as GlobalState)[key] = value;
    },
  },
});
