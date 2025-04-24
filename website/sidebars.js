// website/sidebars.js
// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    '01-introduction',
    {
      type: 'category',
      label: 'Core Tools & Libraries',
      items: [
        'tools/02-01-frameworks',
        'tools/02-02-domain-infra',
        'tools/02-03-people-social',
        'tools/02-04-threat-intel',
        'tools/02-05-emerging-tools',
      ],
    },
    {
      type: 'category',
      label: 'Installation & Configuration',
      items: [
        'installation/03-01-env-setup',
        'installation/03-02-linux',
        'installation/03-03-windows',
        'installation/03-04-docker',
        'installation/03-05-post-install',
      ],
    },
    '04-scripting-examples',
    '05-automation-pipelines',
    '06-tuning-ethics',
    '07-resources',
    {
      type: 'category',
      label: 'Walkthrough Guides',
      items: [
        'pythonosint101',
        'extra-passive-sources',
      ],
    },
  ],
};

module.exports = sidebars;
