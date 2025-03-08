import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    hmr: true,
    port: 5173,
    host: "localhost",
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  plugins: [react()],
});
