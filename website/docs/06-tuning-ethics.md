---
id: 06-tuning-ethics
title: Performance Tuning & Ethical Considerations
---

# Performance Tuning

Efficient OSINT pipelines balance speed with reliability. Below are key strategies and code examples.

## 1. Concurrency

- **Threading** for I/O-bound tasks (HTTP requests, DNS lookups)  
- **Asyncio** for large-scale async I/O  

### ThreadPoolExecutor Example

```python
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

domains = ['example.com', 'openai.com', 'github.com']

def fetch_whois(domain):
    resp = requests.get(f'https://api.example-whois.com/{domain}')
    return domain, resp.json()

with ThreadPoolExecutor(max_workers=5) as exe:
    futures = [exe.submit(fetch_whois, d) for d in domains]
    for fut in as_completed(futures):
        domain, data = fut.result()
        print(domain, data.get('registrar'))
```

### Asyncio + HTTPX Example

```python
import asyncio
import httpx

async def fetch_ct(domain):
    url = f'https://crt.sh/?q=%25{domain}&output=json'
    async with httpx.AsyncClient(timeout=10) as client:
        r = await client.get(url)
        return domain, r.json()

async def main(domains):
    tasks = [fetch_ct(d) for d in domains]
    for coro in asyncio.as_completed(tasks):
        domain, entries = await coro
        print(domain, len(entries), 'certs')

asyncio.run(main(['example.com','openai.com']))
```

---

## 2. Caching

Avoid redundant API calls or web requests by caching results:

```python
import requests_cache

# Cache responses in SQLite for 1 hour
requests_cache.install_cache('osint_cache', expire_after=3600)

def get_subdomains(domain):
    resp = requests_cache.CachedSession().get(
        f'https://api.securitytrails.com/v1/domain/{domain}/subdomains',
        headers={'APIKEY': 'YOUR_KEY'}
    )
    return resp.json().get('subdomains', [])
```

Alternatively, use **Redis** for distributed caching in multi-process setups.

---

## 3. Rate Limiting

Respect provider limits to avoid bans or API throttling.

### Using `ratelimit` Decorator

```python
from ratelimit import limits, sleep_and_retry

# 30 calls per minute
ONE_MINUTE = 60

@sleep_and_retry
@limits(calls=30, period=ONE_MINUTE)
def query_shodan(query):
    return shodan_client.search(query)

# Now calls to query_shodan will automatically sleep to respect rate limits
```

Or manually insert delays:

```python
import time

for idx, domain in enumerate(domains):
    process(domain)
    time.sleep(2)  # 2-second pause between requests
```

---

## 4. Logging & Monitoring

- **Structured Logging**: Use `logging` module with JSON formatter for easy parsing.  
- **Metrics**: Track success/failure counts, API call rates, and latencies.  
- **Alerts**: Integrate with Slack or email on errors or threshold breaches.

```python
import logging
logging.basicConfig(
    format='%(asctime)s %(levelname)s %(message)s',
    level=logging.INFO
)
logging.info('Starting passive OSINT scan for %s', domain)
```

---

# Ethical Considerations

Even passive OSINT carries responsibilities. Follow these guidelines to stay within legal and ethical boundaries.

## 1. Legal & Terms of Service

- **Review ToS** of each site or API: many forbid automated scraping.  
- **Copyright & Privacy Laws**: Respect jurisdictional regulations (e.g., GDPR, CCPA).  
- **No Unauthorized Access**: Stick strictly to **public** data; do not log in or bypass paywalls.

## 2. Robots.txt & Crawl Policies

Honor `robots.txt` directives—even if not legally binding, it reflects site owner preferences.

```python
import urllib.robotparser

rp = urllib.robotparser.RobotFileParser()
rp.set_url('https://example.com/robots.txt')
rp.read()
if rp.can_fetch('*', '/path'):
    # safe to proceed
    pass
else:
    # skip scraping this path
    pass
```

## 3. Anonymity & OpSec

- Use **Tor** or **residential proxies** to avoid IP blocks and protect privacy.  
- Separate investigative identities from personal accounts.  
- Use **dedicated VMs** or containers for sensitive research.

## 4. Data Protection

- **Encrypt** sensitive findings at rest (e.g., PGP, disk encryption).  
- **Access Controls**: Restrict who can view collected intelligence.  
- **Retention Policies**: Delete or anonymize data once it’s no longer needed.

## 5. Transparency & Accountability

- **Log Sources & Timestamps**: Maintain audit trails for all data collection.  
- **Report Responsibly**: If you discover vulnerabilities or breaches, follow responsible disclosure guidelines.  
- **Community Standards**: Engage with OSINT communities (e.g., Tactical Tech, OSINT Curious) to share best practices.

---

> **Remember:** Ethical OSINT builds trust and credibility. Always prioritize legality, privacy, and respect for site owners while pursuing intelligence gathering.
