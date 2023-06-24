import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-bundle/",
  plugins: [react()],
  server: {
    port: 8080,
  },
});
