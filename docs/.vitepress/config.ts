import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sirinaria",
  description: "Sirinaria campaign setting.",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://bobonthenet.com' }
    ],

    sidebar: [
      {
        text: 'History',
        items: []
      },
      {
        text: 'The Pantheon of Sirinaria',
        items: [
          { text: 'Introduction', link: '/pantheon/' },
          { text: 'Thunir', link: '/pantheon/Thunir' },
          { text: 'Keeyar and Noeyar', link: '/pantheon/Keeyarandnoeyar'}
        ],
      },
      {
        text: 'Lineages of Sirinaria',
        items: [
          { text: 'Dwarves', link: '/lineages/Dwarves' },
          { text: 'Elves', link: '/lineages/Elves' },
          { text: 'Gnomes', link: '/lineages/Gnomes'}
        ]
      },
      {
        text: 'Gazetteer of Sirinaria',
        items: [
          { text: 'Introduction', link: '/gazetteer/' },
          { text: "Dwar'Cathr", link: '/gazetteer/dwarcathr'},
          { text: 'Fellnari Forest', link: '/gazetteer/fellnariforest' },
          { text: 'Hastdurn', link: '/gazetteer/hastdurn'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bobonthenet/Sirinaria' }
    ]
  }
})
