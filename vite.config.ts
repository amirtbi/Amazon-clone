/// <reference types="vite-plugin-pages/client" />;
import { fileURLToPath } from "url";
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
      dirs: [
        {
          dir: fileURLToPath(new URL("./src/pages", import.meta.url)),
          baseRoute: "",
        },
      ],
    }),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@/pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },
});
