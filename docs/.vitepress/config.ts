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
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
          { text: 'Fellnari Forest', link: '/gazetteer/fellnariforest' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bobonthenet/Sirinaria' }
    ]
  }
})
