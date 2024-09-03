interface INavigator extends Navigator {
  userLanguage?: string;
}

export function getBrowserLang() {
  const navigatorInstance: INavigator = navigator;
  const language = navigatorInstance.language ?? navigatorInstance.userLanguage;
  let defaultBrowserLang = "";
  if (["cn", "zh", "zh-cn", "zh-CN", "zh-HK", "zh-TW"].includes(language)) {
    defaultBrowserLang = "zh";
  } else {
    defaultBrowserLang = "en";
  }
  return defaultBrowserLang;
}

export function getShowMenuList(
  menuList: Menu.MenuOptions[]
): Menu.MenuOptions[] {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));

  return newMenuList.filter((item) => {
    item.children?.length && (item.children = getShowMenuList(item.children));
    return !item.meta?.isHide;
  });
}
