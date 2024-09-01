import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "回到首頁",
      link: "/",
      icon: "ic:round-home",
    },
    {
      text: "最新文章",
      link: "/news/",
      icon: "ic:outline-new-releases",
      prefix: "news",
      children: "structure",
    },
    {
      text: "入庫文章",
      link: "/posts/",
      icon: "mdi:sitemap",
      prefix: "posts",
      children: "structure",
    },
  ],
});
