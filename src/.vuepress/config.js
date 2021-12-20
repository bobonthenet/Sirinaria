const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Sirinaria',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'bobonthenet/Sirinaria',
    editLinks: true,
    docsDir: '',
    editLinkText: 'Edit',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'House Rules',
        link: '/houserules/'
      },
      {
        text: 'Blog',
        link: 'https://bobonthenet.com'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        {
          title: 'Places',
          collapsable: true,
          children: [
            'ChThulWoodlands',
            'Greegate',
            'Hawksmont',
            'Hollow',
          ]
        },
        {
          title: 'People',
          collapsable: true,
          children: [
            'Ceonre',
            'Nimrinde'
          ]
        }
      ],
      '/houserules/': [
        '',
        'DeathAndDismemberment'
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
