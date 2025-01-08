import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mike Thielvoldt",
  description: "The works and services of an enginer and educator",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/_pages/projects'},
      { text: 'Services', link: '/_pages/services' },
      { text: 'Blog', link: '/_pages/blog'}, 
      { text: 'Contact', link: '/_pages/contact'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Aqua-Volta', link: '/projects/aqua-volta'},
          { text: 'Jackrabbit Devices', link: '/projects/jackrabbit'},
          { text: 'LiveSpark', link: '/projects/livespark'},
          { text: 'Packable E-Scooter', link: '/projects/scooter'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mthielvoldt' }
    ]
  }
})
