---
id: 04-scripting-examples
title: Python Scripting Examples
---

# Python Scripting Examples

This section provides ready-to-use Python snippets for common passive OSINT tasks: querying public indices, certificate transparency logs, and combining data sources into a simple workflow.

---

## Shodan API Lookup

Use the official Shodan Python client to query Shodan’s indexed data without active scanning.

```python
import os
import shodan

# Load your API key from env var
api = shodan.Shodan(os.getenv("SHODAN_API_KEY"))

# Search for hosts related to example.com
for match in api.search("hostname:example.com")["matches"]:
    ip = match["ip_str"]
    ports = match.get("ports", [])
    print(f"{ip} → open ports: {ports}")
```

---

## Censys Certificate Transparency

Query Censys’s certificate database to enumerate certificates and extract covered domains.

```python
from censys.search import CensysCertificates

# Initialize client (uses CENSYS_API_ID & CENSYS_API_SECRET from env)
cc = CensysCertificates()

# Search for certificates whose parsed names include example.com
for cert in cc.search("parsed.names: example.com"):
    names = cert.get("parsed", {}).get("names", [])
    print("Certificate covers:", names)
```

---

## Combined Passive Workflow

Pull subdomains from crt.sh and enrich with Shodan metadata in one script:

```python
import os
import requests
import shodan

# Load API key
api = shodan.Shodan(os.getenv("SHODAN_API_KEY"))

# 1. Fetch subdomains from crt.sh
resp = requests.get("https://crt.sh/?q=%25example.com&output=json")
subdomains = {entry["name_value"] for entry in resp.json()}

# 2. Query Shodan for each subdomain’s resolved IP
for sub in sorted(subdomains):
    # Resolve via DNS-over-HTTPS
    dns = requests.get(f"https://dns.google/resolve?name={sub}&type=A").json()
    answers = dns.get("Answer", [])
    if not answers:
        continue
    ip = answers[0]["data"]
    try:
        shodan_info = api.host(ip)
        print(f"{sub} ({ip}): ports = {shodan_info.get('ports')}")
    except shodan.APIError:
        print(f"{sub} ({ip}): no Shodan data")
```

---

## Best Practices & Tips

- **Error Handling**: Wrap API calls in try/except to handle timeouts or rate limits.  
- **Concurrency**: Use `concurrent.futures.ThreadPoolExecutor` for parallel queries, respecting rate limits.  
- **Caching**: Store responses locally (e.g., JSON files) to avoid re-querying the same IPs.  
- **Environment Variables**: Keep API keys out of code; load them via `python-dotenv` or your shell.

---
