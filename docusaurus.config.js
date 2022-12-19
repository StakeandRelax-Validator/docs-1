// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OKP4 Docs',
  tagline: 'Unleash the Knowledge Economy 🚀',
  url: 'https://okp4.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'OKP4',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/okp4/docs/edit/main/docs/${docPath}`,
          remarkPlugins: [require('remark-math'), require('mdx-mermaid')],
          rehypePlugins: [require('rehype-katex')],
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss')
        }
      })
    ]
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OKP4',
        logo: {
          alt: 'OKP4 Logo',
          src: '/img/logotype-okp4-light.svg',
          srcDark: '/img/logotype-okp4-dark.svg'
        },
        items: [
          {
            to: '/whitepaper/abstract',
            position: 'left',
            label: 'Whitepaper (Work in progress)',
            activeBasePath: "/whitepaper"
          },
          {
            to: '/nodes/introduction',
            position: 'left',
            label: 'Nodes & Validators',
            activeBasePath: "/nodes"
          },
          {
            type: 'dropdown',
            label: 'API',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Contracts',
                docId: 'README',
                docsPluginId: 'contracts'
              },
              {
                type: 'doc',
                label: 'Modules',
                docId: 'logic',
                docsPluginId: 'modules',
              },
              {
                type: 'doc',
                label: 'Commands',
                docId: 'okp4d',
                docsPluginId: 'commands',
              },
            ],
          },
          {
            to: '/faq',
            position: 'left',
            label: 'FAQ',
            activeBasePath: "/faq"
          },
          {
            href: 'https://discord.gg/okp4',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord'
          },
          {
            href: 'https://github.com/okp4',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/contracts/', label: 'Latest version'}],
            docsPluginId: 'contracts',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/modules/logic', label: 'Latest version'}],
            docsPluginId: 'modules',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/commands/okp4d', label: 'Latest version'}],
            docsPluginId: 'commands',
            dropdownActiveClassDisabled: true,
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Whitepaper',
                to: '/whitepaper/abstract'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/okp4'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OKP4_Protocol'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/okp4'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/okp4'
              },
              {
                label: 'OKP4.network',
                href: 'https://okp4.network'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OKP4`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    ['drawio', {}],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: "/"
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contracts',
        path: 'contracts',
        routeBasePath: 'contracts/'
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'modules',
        path: 'modules',
        routeBasePath: 'modules/'
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'commands',
        path: 'commands',
        routeBasePath: 'commands/'
      },
    ],
  ],
  scripts: [
    "/js/matomo.js",
    "/js/redirect.js",
  ]
}

module.exports = config
