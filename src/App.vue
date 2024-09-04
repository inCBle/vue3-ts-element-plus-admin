<script setup lang="ts">
import { onMounted, computed, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { ElConfigProvider } from "element-plus";
import { useGlobalStore } from "@/stores/modules/global";
import { getBrowserLang } from "@/utils";
import { useTheme } from "@/hooks/useTheme";
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const globalStore = useGlobalStore();
const { locale } = useI18n();
const { initTheme } = useTheme();
initTheme();

const elementLocal = computed(() => {
  if (globalStore.language === "zh") return zhCn;
  if (globalStore.language === "en") return en;
  return getBrowserLang() === "zh" ? zhCn : en;
});

const assemblySize = computed(() => globalStore.assemblySize);

const buttonConfig = reactive({ autoInsertSpace: true });

onMounted(() => {
  const language = globalStore.language ?? getBrowserLang();
  locale.value = language;
  globalStore.setGlobalState("language", language);
});
</script>

<template>
  <ElConfigProvider :locale="elementLocal" :size="assemblySize" :button="buttonConfig">
    <router-view />
  </ElConfigProvider>
</template>
