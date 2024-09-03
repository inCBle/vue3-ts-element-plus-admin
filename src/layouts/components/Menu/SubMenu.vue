<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <ElSubMenu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <ElIcon v-if="subItem.meta.icon">
          <component :is="subItem.meta.icon"></component>
        </ElIcon>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </ElSubMenu>
    <ElMenuItem v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <ElIcon v-if="subItem.meta.icon">
        <component :is="subItem.meta.icon"></component>
      </ElIcon>
      <template #title>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
    </ElMenuItem>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
defineProps<{ menuList: Menu.MenuOptions[] }>();

const router = useRouter();

const handleClickMenu = (subItem: Menu.MenuOptions) => {
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank");
  router.push(subItem.path);
};
</script>

<style scoped></style>
