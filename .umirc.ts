import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'wood-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  description: '描述',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  devServer: {
    port: 3001,
  },
  // more config: https://d.umijs.org/config
});
