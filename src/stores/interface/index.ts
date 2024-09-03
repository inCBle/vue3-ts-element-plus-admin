export type LayoutType = "vertical" | "classic" | "transverse" | "columns";

export type AssemblySizeType = "large" | "default" | "small";

export type LanguageType = "zh" | "en";

export interface GlobalState {
  layout: LayoutType;
  assemblySize: AssemblySizeType;
  language: LanguageType;
  isFullscreen: boolean;
  themeColor: string;
  isDark: boolean;
  isGrey: boolean;
  isWeak: boolean;
  asideInverted: boolean;
  headerInverted: boolean;
  isCollapse: boolean;
  isAccordion: boolean;
  isWatermark: boolean;
  isBreadcrumb: boolean;
  isBreadcrumbIcon: boolean;
  isTab: boolean;
  isTabsIcon: boolean;
  isFooter: boolean;
}

export interface AuthStare {
  routeName: string;
  authMenuList: Menu.MenuOptions[];
  authButtonList: {
    [key: string]: string[];
  };
}
