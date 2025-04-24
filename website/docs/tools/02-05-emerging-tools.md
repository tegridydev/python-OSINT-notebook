---
id: 02-05-emerging-tools
title: Core Tools & Libraries › Emerging Tools
---

# Emerging OSINT Tools (2025)

The OSINT landscape evolves rapidly. Here are some of the most promising **new** or **up-and-coming** Python-based tools and platforms (and related utilities) for passive intelligence gathering in 2025.

---

## OSINTgram

- **Function:** Graph-based analysis and visualization of Telegram channels/groups and Instagram profiles. Extracts follower/following relationships, post metadata, and media.  
- **Install:**  
  ```bash
  git clone https://github.com/Datalux/OSINTgram.git
  cd OSINTgram
  pip install -r requirements.txt
  ```  
- **Usage Example:**  
  ```bash
  python osintgram.py --target johndoe --output graph.graphml
  ```  
- **Output:** GraphML file importable into tools like Gephi or Cytoscape.  
- **Link:** https://github.com/Datalux/OSINTgram  

---

## TikTok-Scraper

- **Function:** Fetch TikTok video metadata (views, likes, comments) and download media without using the official API.  
- **Install:**  
  ```bash
  npm install -g tiktok-scraper
  ```  
- **Usage Example:**  
  ```bash
  tiktok-scraper user @johndoe --download --metadata --filepath ./tiktoks
  ```  
- **Link:** https://www.npmjs.com/package/tiktok-scraper  

---

## ShadowSearch

- **Function:** AI-driven passive search tool that submits queries to darknet search engines and aggregates results using natural-language prompts.  
- **Install:**  
  ```bash
  pip install shadowsearch
  ```  
- **Usage Example:**  
  ```python
  from shadowsearch import ShadowSearch
  ss = ShadowSearch()
  results = ss.search("example.com breach")
  print(results)
  ```  
- **Link:** https://github.com/your-org/shadowsearch  

---

## XRay-OSINT

- **Function:** Leverages machine learning (NER, classification) to automatically extract entities (people, organizations, locations) from large-scale scrape results.  
- **Install:**  
  ```bash
  pip install xray-osint
  ```  
- **Usage Example:**  
  ```bash
  xray scan --input tweets.json --model en_core_web_trf --output entities.csv
  ```  
- **Link:** https://github.com/your-org/xray-osint  

---

## CertGraph

- **Function:** Builds an interactive graph of certificate transparency (CT) logs, connecting domains, intermediate CAs, and certificates over time.  
- **Install:**  
  ```bash
  pip install certgraph
  ```  
- **Usage Example:**  
  ```python
  from certgraph import CertGraph
  cg = CertGraph(domain="example.com")
  cg.build_graph(output="certgraph.gml")
  ```  
- **Link:** https://github.com/your-org/certgraph  

---
