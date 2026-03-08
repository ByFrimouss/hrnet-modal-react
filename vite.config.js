import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  // Mode bibliothèque — Vite construit un package npm
  build: {
    lib: {
      // Point d'entrée de la bibliothèque
      entry: resolve(__dirname, "src/index.js"),
      // Nom global
      name: "HRnetModal",
      // Noms des fichiers générés dans dist/
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // React n'est PAS inclus dans le bundle
      // L'utilisateur a déjà React installé
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
