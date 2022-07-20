import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill"
import rollupNodePolyFill from "rollup-plugin-node-polyfills"
import builtins from "rollup-plugin-node-builtins"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        builtins(),
        rollupNodePolyFill(),
      ],
    },
  },
  server: {
    proxy: {
      "https://rpc.ankr.com/solana": {
        target: "https://rpc.ankr.com/solana",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/solana/, ""),
      },
    },
  },
})
