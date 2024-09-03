import { getBrowserLang } from "@/utils";
import { createI18n } from "vue-i18n";


import zh from "./modules/zh.json";
import en from "./modules/en.json";

type MessageSchema = typeof zh;

export const i18n = createI18n<[MessageSchema], "zh" | "en">({
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    zh,
    en,
  },
});
