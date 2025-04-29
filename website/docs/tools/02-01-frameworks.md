---
id: 02-01-frameworks
title: Core Tools & Libraries › Frameworks & Platforms
---

# OSINT Frameworks & Multi-Tool Platforms

Modern OSINT workflows often begin with a **framework** or **platform** that orchestrates multiple modules and data sources. These tools provide:

- **Modular Architecture**: Load only the components you need (subdomains, social media, metadata extraction, etc.)  
- **Unified Interface**: Web UI or CLI to manage scans, workspaces, and results  
- **Data Persistence & Export**: Built-in databases (SQLite, MongoDB) and exports to JSON, CSV, or HTML  
- **Extensibility**: Custom transforms, API integrations, or plugin systems  

Below are the most popular, actively maintained Python-based OSINT platforms as of 2025.

---

## SpiderFoot (v4.0.1)

- **Description**  
  SpiderFoot is a highly modular OSINT automation platform with **200+ reconnaissance modules** covering DNS, IP, domains, social media, breach data, dark web, and more. It supports both a Web UI for interactive scans and a CLI for scripting.

- **Install**  
  ```bash
  git clone https://github.com/smicallef/spiderfoot.git
  cd spiderfoot
  pip install -r requirements.txt
  ```

- **Usage**  
  - **Web UI**:  
    ```bash
    python sf.py --headless --port 5001
    # then browse http://localhost:5001
    ```
  - **CLI scan**:  
    ```bash
    python sf.py --headless \
      --scan-target example.com \
      --modules passive_dns,ssl,o365 \
      --format json > sf_report.json
    ```

- **Links**  
  - GitHub: https://github.com/smicallef/spiderfoot  
  - Official Docs & API: https://spiderfoot.net/documentation/  

---

## Recon-ng (v5.1.2)

- **Description**  
  Recon-ng is inspired by Metasploit: a **console-based** framework with a “marketplace” of modules. It maintains a workspace-backed SQLite database and makes chaining modules (e.g., from DNS to WHOIS to social profiles) straightforward.

- **Install**  
  ```bash
  pip install recon-ng
  ```

- **Quickstart**  
  ```bash
  recon-ng
  workspaces create myproject
  marketplace install all
  add domains example.com
  load recon/domains-hosts/bing
  run
  show hosts
  ```

- **Links**  
  - GitHub: https://github.com/lanmaster53/recon-ng  
  - Docs: https://recon-ng.readthedocs.io  

---

## OSRFramework (v0.20.5)

- **Description**  
  A **collection of lightweight tools** (usufy, mailfy, searchfy, passfy) for username checks, email lookups, DNS queries, and more. Each utility can run standalone or be combined in a script.

- **Install**  
  ```bash
  pip install osrframework
  ```

- **Usage Examples**  
  ```bash
  # Check if 'alice' exists on known sites
  usufy -u alice

  # Find data breaches related to an email
  mailfy -e alice@example.com

  # Search pages for keywords
  searchfy -q "example.com breach"
  ```

- **Links**  
  - GitHub: https://github.com/i3visio/osrframework  
  - PyPI: https://pypi.org/project/osrframework/  

---

## (Optional) DataSploit

> **Note:** DataSploit (v1.0) has not been updated since 2017. You may encounter forks or community patches, but consider replacing it with scripted workflows using the above frameworks.

- GitHub: https://github.com/datasploit/datasploit  

---

### Additional Resources

- **Awesome-OSINT Frameworks** (community-curated list):  
  https://github.com/jivoi/awesome-osint#frameworks  
- **Comparative Review** of OSINT platforms:  
  https://osintframework.com/  

> **Tip:** For maximum flexibility, mix and match modules from these platforms via custom Python scripts or orchestration tools like `invoke` or `Makefile`.  
```