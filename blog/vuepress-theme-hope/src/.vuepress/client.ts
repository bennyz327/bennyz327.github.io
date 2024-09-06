import {defineClientConfig} from "vuepress/client";
import Experiences from "./components/Experiences.vue";
import MyPostLayout from "./layouts/MyPostLayout.vue";
import {Layout} from "vuepress-theme-hope/client/export.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Experiences", Experiences);
  },
  // setup() {
  //   setupTransparentNavbar({ light: "#333", dark: "#fff" });
  // },
  layouts: {
    // 取代默認布局
    Layout: MyPostLayout,
    Origin: Layout,
  },
});
