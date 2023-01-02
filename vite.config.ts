/// <reference types="vite-plugin-pages/client" />;
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      exclude: ["**/components/*.vue", "src/pages/**/components/*.vue"],
      dirs: [{ dir: resolve(__dirname, "./src/pages"), baseRoute: "" }],
    }),
    Layouts(),
  ],
});
