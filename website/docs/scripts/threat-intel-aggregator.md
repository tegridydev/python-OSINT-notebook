# Threat Intel Aggregator

Pulls threat intelligence indicators (IPs/domains/hashes) from multiple public feeds and outputs a deduped, pretty table.

---

## Usage
- Requires: `requests`, `rich`
- Run: `python threat_intel_aggregator.py`

---

```python
import requests
from rich import print
from rich.table import Table

FEEDS = [
    "https://feodotracker.abuse.ch/downloads/ipblocklist.txt",
    "https://urlhaus.abuse.ch/downloads/text/",
    "https://malc0de.com/bl/IP_Blacklist.txt",
]

def fetch_feed(url):
    try:
        resp = requests.get(url, timeout=10)
        resp.raise_for_status()
        return resp.text.splitlines()
    except Exception as e:
        print(f"[red]Error fetching {url}: {e}")
        return []

def main():
    indicators = set()
    for feed in FEEDS:
        indicators.update(fetch_feed(feed))
    indicators = {i for i in indicators if i and not i.startswith('#')}
    table = Table(title="Threat Intel Aggregator")
    table.add_column("Indicator", style="cyan")
    for ind in sorted(indicators):
        table.add_row(ind)
    print(table)

if __name__ == "__main__":
    main()
```
