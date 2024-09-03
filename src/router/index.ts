import { createRouter, createWebHistory } from "vue-router";
import { errorRouter, staticRouter } from "@/router/modules/staticRouter";
import { initDynamicRouter } from "@/router/modules/dynamicRouter";
import { useAuthStore } from "@/stores/modules/auth";

export const router = createRouter({
  history: createWebHistory(),
  routes: [...staticRouter, ...errorRouter],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.authMenuList.length === 0) {
    await initDynamicRouter();
    return next({ ...to, replace: true });
  }

  // 路由守卫
  next();
});
