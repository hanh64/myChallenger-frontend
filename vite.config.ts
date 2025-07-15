import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mychallenger": path.resolve(__dirname, "./src"),
      "@entretienpro": path.resolve(__dirname, "src/modules/entretienpro"),
    },
  },
});
