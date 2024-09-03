import { RouteRecordRaw } from "vue-router";
import { ElNotification } from "element-plus";
import { useAuthStore } from "@/stores/modules/auth";
import { router } from "@/router/index";
import { LOGIN_URL } from "@/config";

const modules = import.meta.glob("@/views/**/*.vue");

export const initDynamicRouter = async () => {
  const authStore = useAuthStore();
  try {
    // 1.获取菜单列表 && 按钮权限列表
    await authStore.getAuthMenuList();

    // 2.判断当前用户有没有菜单权限
    if (!authStore.authMenuList.length) {
      ElNotification({
        title: "无权限访问",
        message: "当前账号无任何权限，请联系管理员",
        type: "warning",
        duration: 3000,
      });
      router.replace(LOGIN_URL);
      return Promise.reject("当前账号无任何权限，请联系管理员");
    }
    // 3.动态添加路由
    authStore.authMenuList.forEach((item) => {
      if (item.component && typeof item.component === "string") {
        item.component = modules[`/src/views${item.component}.vue`];
      }

      if (item.meta?.isFull) {
        router.addRoute(item as RouteRecordRaw);
      } else {
        router.addRoute("layout", item as RouteRecordRaw);
      }
    });
  } catch (error) {
    // 当按钮 || 菜单权限获取失败时，跳转到登录页面
    router.replace(LOGIN_URL);
    return Promise.reject(error);
  }
};
