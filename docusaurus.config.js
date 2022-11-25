// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'nuMetagen SDK',
  tagline: 'Documentation for nuMetagen AR SDK',

  url: 'https://docs.numetagen.id',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  organizationName: 'nuMetagen',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/Leguna/nuMetagenDocs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'nuMetagen',
        logo: {
          alt: 'nuMetagen Logo',
          src: 'img/logo.png',
        },
        hideOnScroll: true,
        items: [{
            type: 'doc',
            docId: 'Introduction/getting-started',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/nuMetagen/',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //   ],
          // },
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
