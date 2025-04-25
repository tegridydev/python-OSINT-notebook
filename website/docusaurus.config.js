// website/docusaurus.config.js
// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Python-OSINT-Notebook',
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
    locales: ['en', 'es', 'fr', 'de'], // Scaffold for future translations
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
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/tegridydev/python-OSINT-notebook/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-XXXXXXX',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Python-OSINT-Notebook',
        logo: {
          alt: 'Python OSINT Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {to: '/', label: 'Docs', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/showcase', label: 'Showcase', position: 'left'},
          {to: '/docs/scripts/README', label: 'Scripts', position: 'left'},
          {to: '/contributing', label: 'Contributing', position: 'right'},
          {to: '/start-here', label: 'Start Here', position: 'right'},
          {href: 'https://github.com/tegridydev/python-OSINT-notebook', label: 'GitHub', position: 'right'},
        ],
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: {
        id: 'star-us',
        content:
          '⭐️ If this Notebook helps you, please ⭐ the GitHub repo!',
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
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/OSINT/',
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

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
