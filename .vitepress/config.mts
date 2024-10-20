import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /* Options... */
  documentRootPath: '/',
  scanStartPath: 'contents',
  resolvePath: 'contents',
  useTitleFromFileHeading: true,
  hyphenToSpace: true,
  capitalizeFirst: true,
  excludeFolders: ['vitepress-how-to']
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "[book @ GB ~]",
  description: "All the stuffs here",
  rewrites: {
    'contents/:page*': ':page*'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
