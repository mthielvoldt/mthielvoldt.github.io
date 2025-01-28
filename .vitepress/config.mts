import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mike Thielvoldt",
  description: "The works and services of an enginer and educator",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Services', link: '/' },
      { text: 'Projects', link: '/projects/projects' },
      { text: 'Contact', link: '/_pages/contact' }
    ],

    sidebar: {
      '/projects/': [
        {
          text: 'Past Jobs',
          items: [
            { text: 'Lunar Energy', link: '/projects/lunar' },
            { text: 'Gradient', link: '/projects/gradient' },
            { text: 'Aqua-Volta', link: '/projects/aqua-volta' },
            { text: 'LiveSpark', link: '/projects/livespark' },
            { text: 'Jackrabbit Devices', link: '/projects/jackrabbit' },
          ]
        },
        {
          text: 'My Projects',
          items: [
            { text: 'Firmware Tooling', link: '/projects/firment' },
            { text: 'Productivity App', link: '/projects/habit3' },
            { text: 'Checklist App', link: '/projects/list-palette' },
            { text: 'Event Planner App', link: '/projects/lite-invite' },
            { text: 'Folding E-Scooter', link: '/projects/scooter' },
            { text: 'Fuel Injection ECU', link: '/projects/ecuality' },
          ]
        },
      ],
      '/services/': [
        {
          text: 'My Services', items: [
            { text: 'Home', link: '/'},
            { text: 'My Strategy', link: '/services/how-i-work' },
            { text: 'My Capabilities', link: '/services/capabilities'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mthielvoldt' },
      { icon: 'linkedin', link: 'http://linkedin.com/in/mike-thielvoldt' }
    ]
  }
})
