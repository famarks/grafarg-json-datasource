module.exports = {
  title: 'JSON API for Grafarg',
  url: 'https://grafarg.github.io',
  baseUrl: '/grafarg-json-datasource/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'grafarg', // Usually your GitHub org/user name.
  projectName: 'grafarg-json-datasource', // Usually your repo name.
  scripts: [],
  themeConfig: {
    navbar: {
      title: 'JSON API Data Source for Grafarg',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/famarks/grafarg-json-datasource',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://grafarg.com/plugins/marcusolsson-json-datasource',
          label: 'Marketplace',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: '/',
            },
            {
              label: 'Configuration',
              to: 'configuration/',
            },
            {
              label: 'Query editor',
              to: 'query-editor/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/famarks/grafarg-json-datasource/discussions',
            },
            {
              label: 'Support',
              href: 'https://github.com/famarks/grafarg-json-datasource/discussions/categories/q-a',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grafarg Labs`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/famarks/grafarg-json-datasource/edit/main/website/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
