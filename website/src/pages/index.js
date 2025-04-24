// website/src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const features = [
  {
    title: 'Passive Recon',
    description:
      'Gather DNS, WHOIS, CT logs, and metadata using read-only APIs and public archives.',
  },
  {
    title: 'Modular Tools',
    description:
      'Leverage frameworks like SpiderFoot & Recon-ng, or utilities like Sherlock & snscrape.',
  },
  {
    title: 'Automated Pipelines',
    description:
      'Schedule daily runs with cron, GitHub Actions, or Docker-based task runners.',
  },
  {
    title: 'Ethical Practices',
    description:
      'Honor ToS, robots.txt, rate limits, and always log your sources.',
  },
  {
    title: 'Extensible Code',
    description:
      'Ready Python scripts & examples to customize OSINT workflows.',
  },
];

const quickLinks = [
  { label: 'Introduction', to: '/01-introduction' },
  { label: 'Frameworks', to: '/tools/02-01-frameworks' },
  { label: 'Domain Recon', to: '/tools/02-02-domain-infra' },
  { label: 'Social Media', to: '/tools/02-03-people-social' },
  { label: 'Threat Intel', to: '/tools/02-04-threat-intel' },
  { label: 'Installation', to: '/installation/03-01-env-setup' },
  { label: 'OSINT101 Guide', to: '/pythonosint101' },
  { label: 'Resources', to: '/07-resources' },
];

export default function Home() {
  return (
    <Layout
      title="Python-OSINT-Handbook"
      description="Your guide to completely passive, no-BS OSINT workflows in Python"
    >
      {/* Hero Section */}
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>Python-OSINT-Handbook</h1>
          <p className={styles.heroSubtitle}>
            A complete, up-to-date guide to passive OSINT in Python—no active scans, no legal risk.
          </p>
          <div className={styles.buttons}>
            <Link
              to="/01-introduction"
              className="button button--primary button--lg"
            >
              Get Started
            </Link>
            <Link
              to="https://github.com/tegridydev/python-OSINT-notebook"
              className="button button--outline button--lg"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Core Features */}
        <section className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Core Features</h2>
            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <div key={feature.title} className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.quickLinks}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Quick Links</h2>
            <ul className={styles.linkGrid}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="button button--secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className="container text--center">
            <h2>Contribute &amp; Stay Updated</h2>
            <p className={styles.ctaDesc}>
              Found an issue or want to add a new tool? Contributions are welcome!
              Follow the repo for updates and join our community of OSINT practitioners.
            </p>
            <Link
              to="https://github.com/tegridydev/python-OSINT-notebook/issues"
              className="button button--primary button--lg"
            >
              Submit an Issue
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
