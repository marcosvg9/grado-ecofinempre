import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // rutas relativas: permite abrir dist/ sin servidor
  build: {
    // El índice de búsqueda pasa de 500 kB a propósito: es un chunk aparte
    // que solo se descarga al entrar en #/buscar.
    chunkSizeWarningLimit: 600,
  },
});
