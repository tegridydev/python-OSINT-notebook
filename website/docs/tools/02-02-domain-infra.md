---
id: 02-02-domain-infra
title: Core Tools & Libraries › Domain & Infrastructure
---

# Domain & Infrastructure Reconnaissance

Passive domain and infrastructure reconnaissance lets you collect subdomains, DNS records, SSL certificate data, and other network metadata without active scanning. These tools tap public indices, certificate transparency logs, and passive DNS services.

---

## OWASP Amass (v4.2.0)

- **Function:** Attack-surface mapping, passive DNS and certificate enumeration, subdomain discovery.  
- **Install:**  
  ```bash
  go install github.com/OWASP/Amass/v3/...@latest
  ```  
- **Usage Example:**  
  ```bash
  # Passive enumeration of subdomains
  amass enum -passive -d example.com -o amass.txt
  ```  
- **Link:** https://github.com/OWASP/Amass  

---

## Subfinder (v2.7.0)

- **Function:** Ultra-fast passive subdomain enumeration using certificate transparency logs, search engines, and third-party APIs.  
- **Install:**  
  ```bash
  go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
  ```  
- **Usage Example:**  
  ```bash
  subfinder -d example.com -o subfinder.txt
  ```  
- **Link:** https://github.com/projectdiscovery/subfinder  

---

## MassDNS (v0.2.1)

- **Function:** High-performance bulk DNS resolver for processing large lists of names.  
- **Install:**  
  ```bash
  git clone https://github.com/blechschmidt/massdns.git
  cd massdns && make
  ```  
- **Usage Example:**  
  ```bash
  # Resolve a list of candidate subdomains
  massdns -r resolvers.txt -t A -o S subdomains.txt > resolved.txt
  ```  
- **Link:** https://github.com/blechschmidt/massdns  

---

## Legacy Tools

### theHarvester

- **Function:** Aggregate email addresses, hostnames, and subdomains from public sources (search engines, PGP servers).  
- **Install & Usage:**  
  ```bash
  pip install theHarvester
  theHarvester -d example.com -b bing -l 100
  ```  

### dnsrecon

- **Function:** Passive and brute-force DNS enumeration (A, MX, NS, zone transfers, reverse lookups).  
- **Install & Usage:**  
  ```bash
  pip install dnsrecon
  dnsrecon -d example.com -t brt
  ```  

### Metagoofil

- **Function:** Download and extract document metadata (PDF, DOCX, PPTX) to reveal authors, software versions, and internal paths.  
- **Usage Note:**  
  - No active repo; use Python libraries like `PyPDF2` or `ExifTool` wrappers to replicate functionality.  
  - Example with `PyPDF2`:  
    ```python
    from PyPDF2 import PdfReader
    reader = PdfReader("report.pdf")
    print(reader.metadata)
    ```

---

