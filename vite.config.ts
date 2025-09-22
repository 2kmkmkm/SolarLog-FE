import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
    },
    includeAssets: ["Logo_img.svg", "Logo_word.svg"],
    manifest: {
      name: "Solarlog",
      short_name: "Solarlog",
      description: "Solarlog",
      theme_color: "#FAFAFA",
      background_color: "#FAFAFA",
      display: "standalone",
      icons: [
        {
          "src": "maskable_icon_x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "maskable_icon_x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        }
      ]
    }
  })],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
});
