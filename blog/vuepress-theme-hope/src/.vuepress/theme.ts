import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://relax.benny.pp.ua",

  author: {
    name: "Benny Chou",
    url: "https://github.com/bennyz327",
    email: "bennyz327@gmail.com",
  },

  license: "CC BY-NC-ND",

  logo: "/assets/images/author-icon.png",

  repo: "bennyz327/bennyz327.github.io",

  repoDisplay: false,

  docsDir: "blog/vuepress-theme-hope/src",

  hideSiteNameOnMobile: false,

  editLink: false,

  iconAssets: "iconify",

  fullscreen: true,

  blog: {
    medias: {
      Email: "mailto:bennyz327@gmail.com",
      GitHub: "https://github.com/bennyz327",
      Linkedin: "https://www.linkedin.com/in/benny-chou",
      Youtube: "https://www.youtube.com/@bennyz327",
      "cakeresume": {
        icon: "https://www.cakeresume.com/_next/static/media/cake-square.1f46e187.svg",
        link: "https://www.cakeresume.com/s--DpsoGkde21f53rH7CDfa7g--/benny-b7fdca",
      },
    },
    timeline: "邁向未來",
    articlePerPage: 10,
    articleInfo: ["Author", "Category", "Date", "ReadingTime"],
  },

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "轉發請註明出處 授權條款採用<a target='_blank' href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en\">姓名標示-非商業性-禁止改作 4.0 國際</a>",
      displayFooter: true,
      blog: {
        description: "後端開發者",
        intro: "/intro.html",
      },
      metaLocales: {
        editLink: "在 GitHub 上編輯此頁",
      },
    },
    // TODO 英文版
    // "/en/": {
    //   navbar: enNavbar,
    //   sidebar: enSidebar,
    //   footer: "No more!",
    //   displayFooter: true,
    //   blog: {
    //     description: "Backend Developer",
    //     intro: "/en/intro.html",
    //   },
    //   metaLocales: {
    //     editLink: "Edit this page on GitHub",
    //   },
    // },
  },

  encrypt: {
    // config: {
    //   "/demo/encrypt.html": ["1234"],
    //   "/zh/demo/encrypt.html": ["1234"],
    // },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: {
      article: "/article/"
    },
    comment: {
      provider: "Giscus",
      repo: "bennyz327/bennyz327.github.io",
      repoId: "R_kgDOMpoNlQ",
      category: "Announcements",
      categoryId: "DIC_kwDOMpoNlc4CiAxH",
      mapping: "title",
    },
    components: {
      components: ["Badge", "VPCard", "PDF", "Share"],
    },
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    seo: true,
    docsearch: {
      appId: "POEVSCEGFE",
      apiKey: "3311d4e353658bd5d42bca150d8b1986",
      indexName: "bennyblog",
      locales: {
        '/': {
          placeholder: '搜尋部落格',
          translations: {
            button: {
              buttonText: '搜尋部落格',
            }
          }
        },
      }
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
}, {
  custom: true,
});
