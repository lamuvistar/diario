import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Diario',
  description: 'Log of insanity',
  icon: '/icons8-forest-32.png',
  logo: {
    light: 'https://img.icons8.com/ios/50/deciduous-tree.png',
    dark: 'https://img.icons8.com/emoji/48/deciduous-tree-emoji.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
    footer: {
      message: 'Built by rspress.dev | Icons by icons8.com',
    },
  },
});
