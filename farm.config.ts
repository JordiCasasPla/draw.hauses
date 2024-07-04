import { defineConfig } from '@farmfe/core';
import farmPluginPostcss from '@farmfe/js-plugin-postcss';
import path from 'path';

export default defineConfig({
  plugins: [
    '@farmfe/plugin-react',
    farmPluginPostcss()
  ],
  compilation: {
    resolve: {
      alias: {
        "@/": path.join(process.cwd(), "src"),
      },
    },
  },
});
