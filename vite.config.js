import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    env({
      /**
       * prefix for client-side injection
       * @default 'VUE_APP'
       */
      prefix: "REACT_APP_",
      /**
       * client-side env path
       * @default 'process.env'
       */
      mountedPath: "process.env",
      /**
       * write to process.env
       * vite default not，whilte vue-cli yes
       * @default false
       */
      ignoreProcessEnv: true,
    }),
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
