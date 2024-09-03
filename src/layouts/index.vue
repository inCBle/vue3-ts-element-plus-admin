<template>
  <ElWatermark id="watermark" :font="font" content="水印内容">
    <component :is="LayoutComponents[layout]" />
  </ElWatermark>
</template>

<script setup lang="ts">
import { reactive, computed, type Component } from "vue";
import { ElWatermark } from "element-plus";
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutTransverse from "./LayoutTransverse/index.vue";
import LayoutColumns from "./LayoutColumns/index.vue";
import { LayoutType } from "@/stores/interface";
import { useGlobalStore } from "@/stores/modules/global";

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutTransverse,
  columns: LayoutColumns,
};

const globalStore = useGlobalStore();

const layout = computed(() => globalStore.layout);

const font = reactive({ color: "rgba(0,0,0,.15)" });
</script>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>
