// website/src/pages/index.js
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container text--center">
        <h1 className="hero__title">Python-OSINT-Notebook</h1>
        <p className="hero__subtitle" style={{fontSize: '1.3rem', margin: '1rem 0 2rem 0'}}>Your modular toolkit for passive OSINT workflows, scripts, and guides.</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
          <Link className="button button--primary button--lg" to="/start-here">Get Started</Link>
          <Link className="button button--secondary button--lg" to="/scripts/">Scripts & Tools</Link>
          <Link className="button button--outline button--lg" to="https://github.com/tegridydev/python-OSINT-notebook">GitHub</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Passive Python OSINT workflows, tools, and guides."
    >
      <HomepageHeader />
      <main>
        {/* Quick Mission/Intro Block */}
        <section className="margin-vert--lg">
          <div className="container">
            <h2 style={{textAlign:'center', fontWeight:700}}>What is this?</h2>
            <p style={{maxWidth:700, margin:'0 auto', textAlign:'center', fontSize:'1.1rem'}}>
              <b>Python-OSINT-Notebook</b> is your all-in-one, plug-and-play resource for passive OSINT. Whether you’re new to OSINT or just want a no-BS toolkit, you’ll find modular guides and ready-to-run scripts for every skill level.
            </p>
          </div>
        </section>

        {/* Visual Features Grid */}
        <section className="margin-vert--lg">
  <div className="container">
    <h2 style={{textAlign:'center', fontWeight:700}}>Core Features</h2>
    <ul style={{maxWidth:700, margin:'2rem auto', fontSize:'1.08rem', lineHeight:1.6}}>
      <li><b>Passive Recon:</b> DNS, WHOIS, CT logs, and metadata with zero noise.</li>
      <li><b>Automation:</b> Multi-tool scripts for domains, social, threat intel, and more.</li>
      <li><b>Community & Learning:</b> Step-by-step docs and real-world use cases.</li>
    </ul>
  </div>
</section>

        {/* Scripts Section Preview */}
        <section className="margin-vert--lg" style={{background:'#f5f6fa',padding:'2rem 0'}}>
  <div className="container">
    <h2 style={{textAlign:'center', fontWeight:700}}>Featured Scripts</h2>
    <ul style={{maxWidth:700, margin:'2rem auto', fontSize:'1.08rem', lineHeight:1.6}}>
      <li><b><Link to="/scripts/domain-recon-combo">Domain Recon Combo</Link>:</b> DNS, WHOIS, CT logs in one shot.</li>
      <li><b><Link to="/scripts/social-media-multi-profile">Social Multi-Profile</Link>:</b> Check usernames across major platforms.</li>
      <li><b><Link to="/scripts/all-in-one-passive-recon">All-in-One Recon</Link>:</b> Full passive recon workflow.</li>
      <li><b><Link to="/scripts/shodan-host-analyzer">Shodan Host Analyzer</Link>:</b> Open ports, banners, and metadata.</li>
      <li><b><Link to="/scripts/pdf-bulk-metadata">PDF Bulk Metadata</Link>:</b> Extracts metadata from many PDFs.</li>
    </ul>
    <div style={{textAlign:'center',marginTop:'2rem'}}>
      <Link className="button button--primary button--lg" to="/scripts/">See All Scripts</Link>
    </div>
  </div>
</section>

        {/* Community Section */}
        <section className="margin-vert--lg">
          <div className="container text--center">
            <h2>Join the Community</h2>
            <p style={{fontSize:'1.1rem',maxWidth:700,margin:'0 auto'}}>Share your workflows, ask questions and contribute to the project.</p>
            <div style={{display:'flex',justifyContent:'center',gap:'1.5rem',marginTop:'1rem',flexWrap:'wrap'}}>
              <a className="button button--secondary" href="https://github.com/tegridydev/python-OSINT-notebook" target="_blank">GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
