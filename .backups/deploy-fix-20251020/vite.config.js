import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// backup of vite.config.js before deploy fixes (2025-10-20)
export default defineConfig({
  plugins: [react()],
});
