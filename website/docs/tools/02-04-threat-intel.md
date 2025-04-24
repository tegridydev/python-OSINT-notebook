---
id: 02-04-threat-intel
title: Core Tools & Libraries › Threat Intelligence
---

# Threat Intelligence & Leaked Credentials

Threat intelligence tools help you collect, store, and analyze indicators of compromise (IoCs), leaked credentials, and underground chatter. These platforms and utilities enable passive ingestion of community-fed data or scanning of code repositories for secrets.

---

## PyMISP (v2.4.154)

- **Function:** Python client for the MISP threat-intelligence platform. Create, query, and export events and attributes via API.  
- **Install:**  
  ```bash
  pip install pymisp
  ```  
- **Usage Example:**  
  ```python
  from pymisp import ExpandedPyMISP

  misp = ExpandedPyMISP(
      'https://misp.example.com',
      'YOUR_API_KEY',
      ssl=False
  )
  # Search for events related to example.com
  events = misp.search(controller='events', value='example.com')
  for e in events:
      print(e['Event']['info'])
  ```  
- **Link:** https://github.com/MISP/PyMISP  

---

## OpenCTI (client v5.2.0)

- **Function:** Client library for OpenCTI, a collaborative threat-intelligence platform supporting STIX/TAXII.  
- **Install:**  
  ```bash
  pip install pycti
  ```  
- **Usage Example:**  
  ```python
  from pycti import OpenCTIConnectorHelper, OpenCTIApiClient

  client = OpenCTIApiClient('https://opencti.example.com', 'YOUR_API_TOKEN')
  # Fetch threat actors
  actors = client.threat_actor.list()
  for actor in actors:
      print(actor['name'])
  ```  
- **Link:** https://github.com/OpenCTI-Platform/client-python  

---

## TruffleHog (v3.0.0)

- **Function:** Deep-history search for high-entropy strings (API keys, passwords) in Git repositories.  
- **Install:**  
  ```bash
  pip install trufflehog
  ```  
- **Usage Example:**  
  ```bash
  # Scan a remote Git repo
  trufflehog git https://github.com/org/repo.git
  ```  
- **Link:** https://github.com/trufflesecurity/trufflehog  

---

## GitLeaks (v8.21.0)

- **Function:** Detect hardcoded credentials and secrets in Git repos using regex rules. Supports CLI and GitHub Actions.  
- **Install (Go):**  
  ```bash
  go install github.com/zricethezav/gitleaks/v8@latest
  ```  
- **Usage Example:**  
  ```bash
  # Scan current repo
  gitleaks detect --source .
  ```  
- **Link:** https://github.com/gitleaks/gitleaks  

---

## Dark Web Monitoring

### OnionScan (v0.0.7)

- **Function:** Crawl and analyze .onion sites to enumerate links, files, and metadata.  
- **Install (Go):**  
  ```bash
  go install github.com/s-rah/onionscan@latest
  ```  
- **Usage Example:**  
  ```bash
  onionscan https://exampleonion.onion --format json > onionscan.json
  ```  
- **Link:** https://github.com/s-rah/onionscan  

### Stem (v1.8.0)

- **Function:** Python controller library for Tor, useful for automating .onion requests and tunneling traffic.  
- **Install:**  
  ```bash
  pip install stem
  ```  
- **Usage Example:**  
  ```python
  from stem import Signal
  from stem.control import Controller

  with Controller.from_port(port=9051) as controller:
      controller.authenticate()
      controller.signal(Signal.NEWNYM)
  ```  
- **Link:** https://stem.torproject.org/  

---

