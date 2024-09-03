import { defineStore } from "pinia";
import { AuthStare } from "@/stores/interface";
import { getAuthMenuListApi } from "@/api/modules/login";
import { getShowMenuList } from "@/utils";

export const useAuthStore = defineStore("auth", {
  state: (): AuthStare => ({
    // 按钮权限列表
    authButtonList: {},
    // 菜单权限列表
    authMenuList: [],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: "",
  }),
  getters: {
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),
  },
  actions: {
    async getAuthMenuList() {
      const { data } = await getAuthMenuListApi();
      this.authMenuList = data;
    },
  },
});
