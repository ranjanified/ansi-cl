import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), svelte()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      },
    },
  },
});
