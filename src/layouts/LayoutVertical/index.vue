<!-- 纵向布局 -->
<template>
  <ElContainer class="w-full h-full">
    <ElAside>
      <div class="flex flex-col h-full transition-[width] ease duration-300" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="flex justify-center items-center box-border h-[55px]">
          <img class="w-[28px] object-contain" src="@/assets/images/logo.svg" alt="logo" />
          <span v-show="!isCollapse" class="logo-text ml-[6px] text-size-[21.5px] font-semibold text-nowrap">{{ title }}</span>
        </div>
        <ElScrollbar class="h-[calc(100%-55px)]">
          <ElMenu
            class="w-full overflow-x-hidden"
            :router="false"
            :default-active="activeMenu"
            :unique-opened="isAccordion"
            :collapse="isCollapse"
            :collapse-transition="false"
          >
            <SubMenu :menu-list="menuList" />
          </ElMenu>
        </ElScrollbar>
      </div>
    </ElAside>
    <ElContainer>
      <ElHeader> <ElButton type="primary">头部</ElButton> </ElHeader>
      <ElMain> 内容 </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ElMenu } from "element-plus";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";

import { useAuthStore } from "@/stores/modules/auth";
import { useGlobalStore } from "@/stores/modules/global";

const title = import.meta.env.VITE_GLOB_APP_TITLE;

const route = useRoute();
const globalStore = useGlobalStore();
const authStore = useAuthStore();

const activeMenu = computed(() => (route.meta.activeMenu && route.path) as string);

const menuList = computed(() => authStore.showMenuListGet);

const isAccordion = computed(() => globalStore.isAccordion);
const isCollapse = computed(() => globalStore.isCollapse);
</script>

<style scoped lang="scss">
.el-aside {
  width: auto;
  background-color: var(--el-menu-bg-color);
  border-right: 1px solid var(--el-menu-border-color);
}
.el-menu {
  border-right: none;
}
.logo-text {
  color: var(--el-aside-logo-text-color);
}
</style>
