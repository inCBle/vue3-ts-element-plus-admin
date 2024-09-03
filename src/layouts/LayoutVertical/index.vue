<!-- 纵向布局 -->
<template>
  <ElContainer class="layout">
    <ElAside>
      <div>logo</div>
      <ElScrollbar>
        <ElMenu
          :router="false"
          :default-active="activeMenu"
          :unique-opened="isAccordion"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <SubMenu :menu-list="menuList" />
        </ElMenu>
      </ElScrollbar>
    </ElAside>
    <ElContainer>
      <ElHeader> 头部 </ElHeader>
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

const route = useRoute();
const globalStore = useGlobalStore();
const authStore = useAuthStore();

const activeMenu = computed(
  () => (route.meta.activeMenu && route.path) as string
);

const menuList = computed(() => authStore.showMenuListGet);

const isAccordion = computed(() => globalStore.isAccordion);
const isCollapse = computed(() => globalStore.isCollapse);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
