/// <reference types="vite-plugin-pages/client" />;
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    API_KEY: JSON.stringify("2e15d9ad5a01ad9794aae8f3b6f6aca0"),
  },

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
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@/pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },
});
