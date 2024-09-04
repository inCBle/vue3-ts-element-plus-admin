import { toRefs } from "vue";
import { useGlobalStore } from "@/stores/modules/global";
import { Theme } from "./interface";
import { DEFAULT_PRIMARY } from "@/config";
import { ElMessage } from "element-plus";
import { getDarkColor, getLightColor } from "@/utils/color";

export const useTheme = () => {
  const globalStore = useGlobalStore();
  const { themeColor, isDark, isGrey, isWeak, layout, asideInverted, headerInverted } = toRefs(globalStore);
  console.log(themeColor, isDark, isGrey, isWeak, layout, asideInverted, headerInverted);

  //   切换暗黑主题 ==> 同时修改主题颜色、侧边栏、头部颜色
  const switchDark = () => {
    const html = document.documentElement;
    if (isDark.value) html.setAttribute("data-theme", "dark");
    else html.setAttribute("data-theme", "light");
    //   修改主题颜色
    changeThemeColor(themeColor.value);
  };

  //   切换主题颜色
  const changeThemeColor = (color: string) => {
    if (!color) {
      color = DEFAULT_PRIMARY;
      ElMessage.success(`主题颜色已重置为 ${DEFAULT_PRIMARY}`);
    }

    // 计算主题颜色变化
    document.documentElement.style.setProperty("--el-color-primary", color);
    document.documentElement.style.setProperty(
      "--el-color-primary-dark-2",
      isDark.value ? `${getLightColor(color, 0.2)}` : `${getDarkColor(color, 0.3)}`
    );

    for (let i = 1; i <= 9; i++) {
      const primaryColor = isDark.value ? `${getDarkColor(color, i / 10)}` : `${getLightColor(color, i / 10)}`;
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
    }

    globalStore.setGlobalState("themeColor", color);
  };

  const changeGreyOrWeak = (type: Theme.GreyOrWeakType, value: boolean) => {};

  const initTheme = () => {
    switchDark();
    if (isGrey.value) changeGreyOrWeak("grey", true);
    if (isWeak.value) changeGreyOrWeak("weak", true);
  };
  return { initTheme };
};
