import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      refresh: true,
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": [
            "react",
            "react-dom",
            "axios",
            "jodit",
            "jodit-react",
          ], // Split vendor libraries
          "product-form": ["resources/js/Pages/Products/ProductForm.jsx"], // Split specific component
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit if needed
  },
  define: {
    "process.env": {
      STRIPE_PUBLIC_KEY: JSON.stringify(process.env.STRIPE_PUBLIC_KEY),
    },
  },
});
