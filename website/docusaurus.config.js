// website/docusaurus.config.js
// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Python-OSINT-Handbook',
  tagline: 'Passive OSINT via Python',
  favicon: 'img/favicon.ico',

  url: 'https://tegridydev.github.io',
  baseUrl: '/python-OSINT-notebook/',
  organizationName: 'tegridydev',
  projectName: 'python-OSINT-notebook',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          editUrl:
            'https://github.com/tegridydev/python-OSINT-notebook/edit/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
      image: 'img/docusaurus-social-card.jpg',

      announcementBar: {
        id: 'star-us',
        content:
          '⭐️ If this handbook helps you, please ⭐ the GitHub repo!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Python-OSINT-Handbook',
        logo: {
          alt: 'OSINT Handbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'pythonosint101',
            position: 'left',
            label: 'OSINT101',
          },
          {
            href: 'https://github.com/tegridydev/python-OSINT-notebook',
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
              { label: 'Introduction', to: '01-introduction' },
              { label: 'OSINT101', to: 'pythonosint101' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Awesome-OSINT',
                href: 'https://github.com/jivoi/awesome-osint',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/osint',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tegridydev/python-OSINT-notebook',
              },
              { label: 'Docusaurus', href: 'https://docusaurus.io' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} tegridydev`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
