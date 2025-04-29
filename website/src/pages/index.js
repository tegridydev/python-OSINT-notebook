// website/src/pages/index.js
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container text--center">
        <h1 className="hero__title">Python-OSINT-Notebook</h1>
        <p className="hero__subtitle" style={{fontSize: '1.3rem', margin: '1rem 0 2rem 0'}}>Your ADHD/autism-friendly, modular toolkit for passive OSINT workflows, scripts, and guides.</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
          <Link className="button button--primary button--lg" to="/docs/start-here">Get Started</Link>
          <Link className="button button--secondary button--lg" to="/docs/scripts/README">Scripts & Tools</Link>
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
              <b>Python-OSINT-Notebook</b> is your all-in-one, plug-and-play resource for passive OSINT. Whether you’re neurodivergent, new to OSINT, or just want a no-BS toolkit, you’ll find modular guides, ready-to-run scripts, and ADHD/autism-friendly explanations for every skill level.
            </p>
          </div>
        </section>

        {/* Visual Features Grid */}
        <section className="margin-vert--lg">
          <div className="container">
            <h2 style={{textAlign:'center', fontWeight:700}}>Core Features</h2>
            <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center',marginTop:'2rem'}}>
              <div style={{flex:'1 1 220px',maxWidth:300,minWidth:220,background:'#282c34',borderRadius:16,padding:24,color:'#fff',textAlign:'center'}}>
                <img src={"/img/Boost.svg"} alt="Recon" width={48} height={48} />
                <h3>Passive Recon</h3>
                <p>DNS, WHOIS, CT logs, and metadata with zero noise.</p>
              </div>
              <div style={{flex:'1 1 220px',maxWidth:300,minWidth:220,background:'#282c34',borderRadius:16,padding:24,color:'#fff',textAlign:'center'}}>
                <img src={"/img/Time.svg"} alt="Automation" width={48} height={48} />
                <h3>Automation</h3>
                <p>Multi-tool scripts for domains, social, threat intel, and more.</p>
              </div>
              <div style={{flex:'1 1 220px',maxWidth:300,minWidth:220,background:'#282c34',borderRadius:16,padding:24,color:'#fff',textAlign:'center'}}>
                <img src={"/img/Community.svg"} alt="Community" width={48} height={48} />
                <h3>Community & Learning</h3>
                <p>Step-by-step, neurodivergent-friendly docs and real-world use cases.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scripts Section Preview */}
        <section className="margin-vert--lg" style={{background:'#f5f6fa',padding:'2rem 0'}}>
          <div className="container">
            <h2 style={{textAlign:'center', fontWeight:700}}>Featured Scripts</h2>
            <div style={{display:'flex',flexWrap:'wrap',gap:'1.5rem',justifyContent:'center',marginTop:'2rem'}}>
              <Link to="/docs/scripts/domain-recon-combo" className="card padding--md" style={{minWidth:210,maxWidth:260,background:'#fff',borderRadius:12,boxShadow:'0 2px 8px #0001'}}>
                <h4>Domain Recon Combo</h4>
                <p style={{fontSize:'0.95rem'}}>DNS, WHOIS, CT logs in one shot.</p>
              </Link>
              <Link to="/docs/scripts/social-media-multi-profile" className="card padding--md" style={{minWidth:210,maxWidth:260,background:'#fff',borderRadius:12,boxShadow:'0 2px 8px #0001'}}>
                <h4>Social Multi-Profile</h4>
                <p style={{fontSize:'0.95rem'}}>Check usernames across major platforms.</p>
              </Link>
              <Link to="/docs/scripts/all-in-one-passive-recon" className="card padding--md" style={{minWidth:210,maxWidth:260,background:'#fff',borderRadius:12,boxShadow:'0 2px 8px #0001'}}>
                <h4>All-in-One Recon</h4>
                <p style={{fontSize:'0.95rem'}}>Full passive recon workflow.</p>
              </Link>
              <Link to="/docs/scripts/shodan-host-analyzer" className="card padding--md" style={{minWidth:210,maxWidth:260,background:'#fff',borderRadius:12,boxShadow:'0 2px 8px #0001'}}>
                <h4>Shodan Host Analyzer</h4>
                <p style={{fontSize:'0.95rem'}}>Open ports, banners, and metadata.</p>
              </Link>
              <Link to="/docs/scripts/pdf-bulk-metadata" className="card padding--md" style={{minWidth:210,maxWidth:260,background:'#fff',borderRadius:12,boxShadow:'0 2px 8px #0001'}}>
                <h4>PDF Bulk Metadata</h4>
                <p style={{fontSize:'0.95rem'}}>Extracts metadata from many PDFs.</p>
              </Link>
            </div>
            <div style={{textAlign:'center',marginTop:'2rem'}}>
              <Link className="button button--primary button--lg" to="/docs/scripts/README">See All Scripts</Link>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="margin-vert--lg">
          <div className="container text--center">
            <h2>Join the Community</h2>
            <p style={{fontSize:'1.1rem',maxWidth:700,margin:'0 auto'}}>Share your workflows, ask questions, or just vibe with other OSINT nerds.</p>
            <div style={{display:'flex',justifyContent:'center',gap:'1.5rem',marginTop:'1rem',flexWrap:'wrap'}}>
              <a className="button button--secondary" href="https://discord.gg/yourdiscord" target="_blank">Discord</a>
              <a className="button button--secondary" href="https://twitter.com/yourtwitter" target="_blank">Twitter</a>
              <a className="button button--secondary" href="https://github.com/tegridydev/python-OSINT-notebook" target="_blank">GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
