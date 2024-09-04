declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    redirect?: string;
    meta: MetaOptions;
    children?: MenuOptions[];
  }

  interface MetaOptions {
    icon: string;
    title: string;
    activeMenu?: string;
    isLink?: string;
    isHide: boolean;
    isFull: boolean;
    isAffix: boolean;
    isKeepAlive: boolean;
  }
}

/* Vite */
declare interface ViteEnv {
  VITE_GLOB_APP_TITLE: string;
}

interface ImportMetaEnv extends ViteEnv {}
