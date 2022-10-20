// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'nuMetagen SDK',
  tagline: 'Dinosaurs are cool',

  url: 'https://leguna.github.io',
  baseUrl: '/nuMetagenDocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Leguna',
  projectName: 'nuMetagenDocs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nuMetagen/nuMetagenDocs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/nuMetagen/nuMetagenDocs/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '59H0GXZDVV',
        apiKey: '10f312d22225eaf811f41435756fb486',
        indexName: 'dev_numetagen',
        contextualSearch: true,

        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        searchPagePath: 'search',
      },
      navbar: {
        title: 'nuMetagen',
        logo: {
          alt: 'nuMetagen Logo',
          src: 'img/logo.svg',
        },
        items: [{
            type: 'doc',
            docId: 'getting-started/overview',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/nuMetagen/nuMetagenDocs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Docs',
            items: [{
                label: 'Getting Started',
                to: '/docs/getting-started/overview',
              },
              {
                label: 'Features',
                to: '/docs/etc/features',
              },
              {
                label: 'Release Notes',
                to: '/docs/etc/release-notes',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     // {
          //     //   label: 'Stack Overflow',
          //     //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     // },
          //     // {
          //     //   label: 'Discord',
          //     //   href: 'https://discordapp.com/invite/docusaurus',
          //     // },
          //     // {
          //     //   label: 'Twitter',
          //     //   href: 'https://twitter.com/docusaurus',
          //     // },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [{
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nuMetagen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
