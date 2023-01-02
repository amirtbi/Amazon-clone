/// <reference types="vite-plugin-pages/client" />;
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      router: {
        extendRoutes(routes, resolve) {
          routes.push({
            name: "custom",
            path: "*",
            component: resolve(__dirname, "pages/404.vue"),
          });
        },
      },
      exclude: ["**/components/*.vue", "src/pages/**/components/*.vue"],
      dirs: [{ dir: resolve(__dirname, "./src/pages"), baseRoute: "" }],
    }),
  ],
});
