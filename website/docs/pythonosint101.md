---
id: pythonosint101
title: PythonOSINT101 Passive-Only, End-to-End Guide
---

# PythonOSINT101: Passive-Only, End-to-End OSINT Workflow

A no-BS, fully passive OSINT workflow using only public data sources—no port scans, no active probes, and zero legal risk.

---

## 1. Prerequisites

1. **Platform**: Linux / macOS / WSL2  
2. **Python** ≥ 3.10  
3. **Virtual Environment**  
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate   # Linux/macOS
   .venv\Scripts\activate      # Windows
   pip install --upgrade pip
   ```
4. **Install Dependencies**  
   ```bash
   pip install \
     python-whois dnspython requests beautifulsoup4 \
     censys shodan securitytrails ipinfo-python PyGithub pyhibp \
     exifread PyPDF2 python-dotenv
   ```
5. **API Keys** (read-only) in a `.env` file:
   ```dotenv
   DOMAIN=example.com
   USERNAME=johndoe
   SHODAN_API_KEY=your_shodan_key
   CENSYS_API_ID=your_censys_id
   CENSYS_API_SECRET=your_censys_secret
   SECURITYTRAILS_API_KEY=your_securitytrails_key
   IPINFO_TOKEN=your_ipinfo_token
   GITHUB_TOKEN=your_github_token
   HIBP_API_KEY=your_hibp_key
   ```

---

## 2. Passive Domain Recon

### 2.1 WHOIS / RDAP
```python
import whois
from pprint import pprint

w = whois.whois("example.com")
pprint({
  "Registrar": w.registrar,
  "Creation Date": w.creation_date,
  "Name Servers": w.name_servers
})
```

### 2.2 DNS Records
```python
import dns.resolver

records = {}
for rtype in ("A", "NS", "MX", "TXT"):
    answers = dns.resolver.resolve("example.com", rtype, lifetime=5)
    records[rtype] = [r.to_text() for r in answers]
print(records)
```

---

## 3. Passive Subdomain Enumeration

### 3.1 Certificate Logs (crt.sh)
```python
import requests

resp = requests.get("https://crt.sh/?q=%25example.com&output=json")
subs = {entry["name_value"] for entry in resp.json()}
print("CRT.sh domains →", subs)
```

### 3.2 SecurityTrails API (Passive DNS & Historical)
```python
import os, requests

API_KEY = os.getenv("SECURITYTRAILS_API_KEY")
hdr = {"APIKEY": API_KEY}
domain = "example.com"
# Historical subdomains
url = f"https://api.securitytrails.com/v1/domain/{domain}/subdomains"
resp = requests.get(url, headers=hdr, params={"children_only":"false"})
subs = [f"{s}.{domain}" for s in resp.json().get("subdomains",[])]
print("SecurityTrails subdomains →", subs)
```
> *SecurityTrails free tier gives read-only access to historical DNS and WHOIS data* citeturn0search4.

### 3.3 DNSDumpster (Web-Scrape)
Visit [dnsdumpster.com](https://dnsdumpster.com/) and paste your domain to get passive DNS records, MX, NS, and subdomains.

---

## 4. SSL & Certificate Transparency

### 4.1 Censys Certificates
```python
from censys.search import CensysCertificates

cc = CensysCertificates()
results = cc.search("parsed.names: example.com", per_page=50)
ct_domains = {name
              for cert in results
              for name in cert.get("parsed", {}).get("names", [])}
print("Censys CT domains →", ct_domains)
```

### 4.2 CertSpotter (SSL Mate)
Use the free [CertSpotter API](https://sslmate.com/certspotter/) to query CT logs without scanning citeturn0search5.

---

## 5. Web Archive & Caches

- **Wayback Machine**  
  ```python
  import requests
  wb = requests.get("http://archive.org/wayback/available?url=example.com").json()
  print("Wayback URL →", wb["archived_snapshots"]["closest"]["url"])
  ```
- **Archive.today**: Paste URL at https://archive.today.  
- **Google Cache**: `cache:example.com` in Google Search.  
- **Bing Cache**: `https://cc.bingj.com/cache.aspx?q=example.com`.  
- **Memento TimeGate**:  
  ```
  https://timetravel.mementoweb.org/timegate/example.com
  ```

---

## 6. Content & Metadata Extraction

### 6.1 HTML Metadata
```python
from bs4 import BeautifulSoup
import requests

r = requests.get("https://example.com", timeout=5)
soup = BeautifulSoup(r.text, "html.parser")
print("Title →", soup.title.string)
desc = soup.find("meta", {"name":"description"})
print("Description →", desc and desc["content"])
```

### 6.2 PDF Metadata
```python
from PyPDF2 import PdfReader

reader = PdfReader(open("report.pdf","rb"))
print("PDF Metadata →", reader.metadata)
```

### 6.3 Image EXIF
```python
import exifread

with open("photo.jpg","rb") as f:
    tags = exifread.process_file(f)
    for tag,val in tags.items():
        print(f"{tag}: {val}")
```

---

## 7. Social Media & Username Enumeration

- **Sherlock** (passive HTTP HEAD checks)  
  ```bash
  sherlock johndoe --print-found --timeout 5
  ```
- **snscrape** (no API keys)  
  ```bash
  snscrape twitter-search "from:johndoe since:2024-01-01" --jsonl > tweets.json
  ```

---

## 8. Passive Threat Intel & Breaches

### 8.1 Shodan (Index-Only)
```python
import os, shodan

api = shodan.Shodan(os.getenv("SHODAN_API_KEY"))
res = api.search(f"hostname:{os.getenv('DOMAIN')}")
print("Shodan hosts →", [m["ip_str"] for m in res["matches"]])
```

### 8.2 Censys IPv4
```python
from censys.search import CensysIPv4

ci = CensysIPv4()
hosts = ci.search(
  "services.tls.certificates.leaf_data.names: example.com", per_page=20
)
print("Censys IPs →", [h["ip"] for h in hosts])
```

### 8.3 Have I Been Pwned (Email)
```python
from pyhibp import pwned_account
import os

email = f"{os.getenv('USERNAME')}@{os.getenv('DOMAIN')}"
breaches = pwned_account(email, api_key=os.getenv("HIBP_API_KEY"))
print("Breaches →", breaches or "None")
```

---

## 9. Code Leak & Data-Exposure

### 9.1 GitHub Code Search
```python
from github import Github
import os

gh = Github(os.getenv("GITHUB_TOKEN"))
query = f'{os.getenv("DOMAIN")} in:file extension:env'
files = gh.search_code(query, order="desc")[:10]
print("GitHub leaks →", [f"{f.repository.full_name}/{f.path}" for f in files])
```

### 9.2 PublicWWW & Sourcegraph
- **PublicWWW**: Search HTML/CSS/JS for your domain at https://publicwww.com/.  
- **Sourcegraph**: Browse code references at https://sourcegraph.com/.

---

## 10. IP Geolocation & Enrichment

```python
import ipinfo, os

handler = ipinfo.getHandler(os.getenv("IPINFO_TOKEN"))
for ip in ["93.184.216.34"]:
    info = handler.getDetails(ip)
    print(f"{ip} → {info.city}, {info.country_name}")
```

---

## 11. Extra Passive Data Sources

1. **Common Crawl**: WARC archives on S3 (`s3://commoncrawl/`).  
2. **GDELT**: Global events CSV dumps at https://data.gdeltproject.org/.  
3. **DNS History**: SecurityTrails `/v1/domain/{domain}/dns/history` citeturn0search7.  
4. **PGP Keyservers**: https://keys.openpgp.org/  
5. **Pushshift Reddit Dumps**: https://files.pushshift.io/reddit/  
6. **WebCitation**: https://webcitation.org/  
7. **StackPrinter**: http://stackprinter.appspot.com/ for StackOverflow Q&A.  
8. **Search-Engine Dorking**:  
   ```
   site:example.com filetype:pdf
   ```

---

## 12. Consolidated Script

Save as `passive_osint101.py`:

```python
#!/usr/bin/env python3
import os, csv, whois, dns.resolver, requests, exifread
from bs4 import BeautifulSoup
from censys.search import CensysCertificates, CensysIPv4
import shodan, ipinfo
from github import Github
from pyhibp import pwned_account
from dotenv import load_dotenv

load_dotenv()
domain = os.getenv("DOMAIN")
username = os.getenv("USERNAME")

# WHOIS
w = whois.whois(domain)

# DNS
dns_data = {rt: [r.to_text() for r in dns.resolver.resolve(domain, rt, lifetime=5)]
            for rt in ("A", "NS", "MX", "TXT")}

# CRT.sh
crt = requests.get(f"https://crt.sh/?q=%25{domain}&output=json").json()
crt_subs = {e["name_value"] for e in crt}

# SecurityTrails
st_key = os.getenv("SECURITYTRAILS_API_KEY")
hdr = {"APIKEY": st_key}
st = requests.get(f"https://api.securitytrails.com/v1/domain/{domain}/subdomains",
                  headers=hdr).json().get("subdomains", [])
st_subs = [f"{s}.{domain}" for s in st]

# Wayback
wb = requests.get(f"http://archive.org/wayback/available?url={domain}").json()
wayback_url = wb.get("archived_snapshots", {}).get("closest", {}).get("url","")

# HTML metadata
r = requests.get(f"https://{domain}", timeout=5)
soup = BeautifulSoup(r.text, "html.parser")
title = soup.title.string if soup.title else ""

# Shodan
sh = shodan.Shodan(os.getenv("SHODAN_API_KEY"))
sh_ips = [m["ip_str"] for m in sh.search(f"hostname:{domain}")["matches"]]

# Censys IPv4
ci = CensysIPv4()
censys_ips = [h["ip"] for h in ci.search(
    f"services.tls.certificates.leaf_data.names: {domain}", per_page=10
)]

# HIBP
email = f"{username}@{domain}"
breaches = pwned_account(email, api_key=os.getenv("HIBP_API_KEY")) or []

# GitHub code leaks
gh = Github(os.getenv("GITHUB_TOKEN"))
leaks = [f"{f.repository.full_name}/{f.path}"
         for f in gh.search_code(f"{domain} in:file extension:env", order="desc")[:10]]

# Geolocation
iph = ipinfo.getHandler(os.getenv("IPINFO_TOKEN"))
geo = {ip: iph.getDetails(ip).all for ip in sh_ips + censys_ips}

# Export
with open("passive_osint_report.csv","w",newline="") as csvfile:
    wtr = csv.writer(csvfile)
    wtr.writerow(["Section","Key","Value"])
    wtr.writerow(["WHOIS","Registrar", w.registrar])
    for rt, vals in dns_data.items():
        wtr.writerow(["DNS", rt, ";".join(vals)])
    wtr.writerow(["CRT","crt.sh", ";".join(crt_subs)])
    wtr.writerow(["ST","SecurityTrails", ";".join(st_subs)])
    wtr.writerow(["Web","Wayback", wayback_url])
    wtr.writerow(["Web","Title", title])
    wtr.writerow(["Threat","ShodanIPs", ";".join(sh_ips)])
    wtr.writerow(["Threat","CensysIPs", ";".join(censys_ips)])
    wtr.writerow(["Breach","HIBP", ";".join([b["Name"] for b in breaches])])
    wtr.writerow(["Leaks","GitHub", ";".join(leaks)])
    for ip, info in geo.items():
        wtr.writerow(["Geo", ip, f"{info.get('city')}, {info.get('country_name')}"])
```

Make it executable and run:
```bash
chmod +x passive_osint101.py
./passive_osint101.py
```

Generates `passive_osint_report.csv` with all passive findings.

---

## 13. Schedule & Ethics

- **Cron** (`crontab -e`):
  ```
  0 4 * * * cd /path/to && /path/to/.venv/bin/python passive_osint101.py
  ```
- **Ethics**:
  - Only query public, read-only APIs and archives.  
  - Respect `robots.txt`, API rate limits and Terms of Service.  
  - Do **not** scan, probe, or fingerprint live hosts.  
  - Log timestamps and sources for auditability.
```


