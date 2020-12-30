module.exports = {
  title: 'Sirinaria',
  tagline: 'Information about my homebrew campaign setting.',
  url: 'https://sirinaria.bobonthenet.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bobonthenet', // Usually your GitHub org/user name.
  projectName: 'Sirinaria', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sirinaria',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Gazetteer',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/bobonthenet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Gazetteer',
              to: 'docs/',
            },
            {
              label: 'House Rules',
              to: 'docs/houserules/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/pRtR54YwjW',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/bobonthenet',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Homepage',
              href: 'http://bobonthenet.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} bobonthenet.com`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
