import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首頁",
    link: "/home",
    icon: "ic:round-home",
  },
  {
    text: "新文章",
    link: "/news/",
    icon: "ic:outline-new-releases",
  },
  {
    text: "精選文章",
    icon: "ic:baseline-recommend",
    link: "/tag/pin/",
  },
]);
