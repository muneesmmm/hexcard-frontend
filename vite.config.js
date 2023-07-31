import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createVuePlugin } from "vite-plugin-vue2"; // Import the plugin for Vue 2

export default defineConfig({
  plugins: [
    vue(),
    createVuePlugin(), // Use the Vite 2 plugin for Vue 2 compatibility
  ],
});
