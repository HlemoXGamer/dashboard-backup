import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import vuetify from "vite-plugin-vuetify";
import dynamicImport from 'vite-plugin-dynamic-import'

// @ts-expect-error Known error: https://github.com/sxzz/unplugin-vue-macros/issues/257#issuecomment-1410752890
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dynamicImport(),
    vue(),
    vueJsx(),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      styles: {
        configFile: "src/styles/variables/_vuetify.scss",
      },
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(
          new URL("./src/plugins/il8n/locales/**", import.meta.url),
        ),
      ],
    }),
    Pages({
      dirs: ["./src/pages"],
    }),
    Layouts({
      layoutsDirs: "./src/layouts/",
    }),
    Components({
      dirs: [
        "src/@core/components",
        "src/views/demos",
        "src/components",
      ],
      dts: true,
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "@vueuse/math",
        "pinia",
        "vue-i18n",
      ],
      vueTemplate: true,
    }),
    DefineOptions(),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@themeConfig": fileURLToPath(
        new URL("./themeConfig.js", import.meta.url),
      ),
      "@core": fileURLToPath(new URL("./src/@core", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/@layouts", import.meta.url)),
      "@images": fileURLToPath(
        new URL("./src/assets/images/", import.meta.url),
      ),
      "@styles": fileURLToPath(new URL("./src/styles/", import.meta.url)),
      "@configured-variables": fileURLToPath(
        new URL("./src/styles/variables/_template.scss", import.meta.url),
      ),
      "@axios": fileURLToPath(new URL("./src/plugins/axios", import.meta.url)),
      "@validators": fileURLToPath(
        new URL("./src/@core/utils/validators", import.meta.url),
      ),
      apexcharts: fileURLToPath(
        new URL("node_modules/apexcharts-clevision", import.meta.url),
      ),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ["vuetify"],
    entries: ["./src/**/*.vue"],
  },
});