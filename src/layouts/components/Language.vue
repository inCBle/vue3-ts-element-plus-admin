<template>
  <ElDropdown trigger="click" @command="changeLanguage">
    <i class="iconfont icon-fanyi"></i>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="item in languageList"
          :key="item.value"
          :command="item.value"
          :disabled="language === item.value"
        >
          {{ item.label }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";
import { useGlobalStore } from "@/stores/modules/global";
import { useI18n } from "vue-i18n";

import type { LanguageType } from "@/stores/interface";

const { locale, t } = useI18n();
const globalStore = useGlobalStore();

const language = computed(() => globalStore.language);

const languageList = [
  { label: "简体中文", value: "zh" },
  { label: "English", value: "en" },
];

const changeLanguage = (lang: string) => {
  locale.value = lang;
  globalStore.setGlobalState("language", lang as LanguageType);
};
</script>

<style scoped></style>
