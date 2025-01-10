import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mike Thielvoldt",
  description: "The works and services of an enginer and educator",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Services', link: '/' },
      { text: 'Projects', link: '/_pages/projects'},
      { text: 'Blog', link: '/_pages/blog'}, 
      { text: 'Contact', link: '/_pages/contact'}
    ],

    sidebar: [
      {
        text: 'Past Jobs',
        items: [
          { text: 'Lunar Energy', link: '/projects/lunat'},
          { text: 'Gradient', link: '/projects/gradient'},
          { text: 'Aqua-Volta', link: '/projects/aqua-volta'},
          { text: 'LiveSpark', link: '/projects/livespark'},
          { text: 'Jackrabbit Devices', link: '/projects/jackrabbit'},
        ]
      },
      {
        text: 'My Projects',
        items: [
          { text: 'Firmware Tooling', link: '/projects/firment'},
          { text: 'Productivity App', link: '/projects/habit3'},
          { text: 'Checklist App', link: '/projects/listpalette'},
          { text: 'Event Planner App', link: '/projects/lite-invite'},
          { text: 'Folding E-Scooter', link: '/projects/scooter'},
          { text: 'Fuel Injection ECU', link: '/projects/ecuality'},
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mthielvoldt' }
    ]
  }
})
