---
id: extra-passive-sources
title: PythonOSINT101 › Additional Passive Data Sources
---

# Additional Passive Data Sources (No API Keys)

Beyond the core APIs and tools covered earlier, here’s a curated list of **public**, **read-only**, **no-key** data sources—ideal for completely passive OSINT.

---

## Web Archives & Snapshots

1. **Archive.today**  
   - Create or retrieve point-in-time captures of any URL.  
   - Web UI: https://archive.today  
   - CLI example (via cURL):  
     ```bash
     curl -X POST -d url=https://example.com https://archive.today/submit/
     ```

2. **Wayback Machine**  
   - Official Internet Archive snapshots.  
   - API endpoint:  
     ```
     http://archive.org/wayback/available?url=example.com
     ```

3. **WebCitation**  
   - Alternative archive for pages not in Wayback.  
   - Web UI: https://webcitation.org/  

4. **Memento TimeGate**  
   - Unified interface to multiple archives.  
   - URL pattern:  
     ```
     https://timetravel.mementoweb.org/timegate/example.com
     ```

---

## DNS & Certificate History

5. **crt.sh (Certificate Transparency Logs)**  
   - Query historical certificates & subdomains.  
   - JSON output:  
     ```
     https://crt.sh/?q=%25example.com&output=json
     ```

6. **Common Crawl**  
   - Petabytes of web crawl data available on AWS S3.  
   - S3 bucket: `s3://commoncrawl/`  
   - Use AWS CLI or tools like `warcprox` to filter WARC files offline.

7. **DNSDumpster**  
   - Passive DNS enumeration (subdomains, MX, NS).  
   - Web UI: https://dnsdumpster.com/  

8. **SecurityTrails (Free Tier)**  
   - Passive DNS, WHOIS, and subdomain history without active scanning.  
   - Try the free REST API at https://securitytrails.com/corp/api  

---

## Code & Webpage Search

9. **PublicWWW**  
   - Search HTML/JS/CSS code across indexed sites.  
   - Web UI: https://publicwww.com/  

10. **Sourcegraph**  
    - Universal code search across public repositories.  
    - Web UI: https://sourcegraph.com/  

11. **GitHub Web Search**  
    - Dork for secrets or references:  
      ```
      site:github.com/example.com in:file api_key
      ```

---

## Data Dumps & Social Archives

12. **Pushshift.io (Reddit)**  
    - Complete Reddit comment & post archives in JSON.  
    - Download: https://files.pushshift.io/reddit/  

13. **GDELT Project**  
    - Global event and media datasets (CSV, JSON).  
    - Browse: https://data.gdeltproject.org/  

14. **PGP Keyservers**  
    - Search public PGP keys by email or name.  
    - Web UI: https://keys.openpgp.org/  

---

## Search Engine Techniques

15. **Google Cache**  
    - View Google’s latest cached copy:  
      ```
      cache:example.com
      ```

16. **Bing Cache**  
    - Access via URL:  
      ```
      https://cc.bingj.com/cache.aspx?q=example.com
      ```

17. **Search Dorks**  
    - File-type targeting, e.g.:  
      ```
      site:example.com filetype:pdf
      ```
    - Combine with `inurl:`, `intitle:`, etc., for precision.

---

> **Tip:** Combine these sources programmatically via Python’s `requests` or `httpx` libraries and parse JSON or HTML to integrate them into your passive OSINT pipelines.

```python
import requests

# Example: fetch crt.sh subdomains
resp = requests.get('https://crt.sh/?q=%25example.com&output=json')
domains = {entry['name_value'] for entry in resp.json()}
print(domains)
