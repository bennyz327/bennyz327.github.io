import {defineClientConfig} from "vuepress/client";
import Experiences from "./components/Experiences.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Experiences", Experiences);
  },
  // setup() {
  //   setupTransparentNavbar({ light: "#333", dark: "#fff" });
  // },
});
