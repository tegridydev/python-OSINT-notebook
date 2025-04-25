# Shodan Host Analyzer

Query Shodan for a given IP or domain and summarize open ports, services, and metadata.

---

## Usage
- Requires: `shodan` Python package (`pip install shodan`)
- Needs a Shodan API key (`SHODAN_API_KEY` env var)
- Run: `python shodan_host_analyzer.py <ip_or_domain>`

---

```python
import sys, os
import shodan
from rich import print

API_KEY = os.getenv('SHODAN_API_KEY')
api = shodan.Shodan(API_KEY)

def main(target):
    print(f"[bold cyan]Shodan scan for:[/] [yellow]{target}")
    try:
        result = api.host(target)
        print(f"[bold]IP:[/] {result['ip_str']}")
        print(f"[bold]Org:[/] {result.get('org')}")
        print(f"[bold]Open Ports:[/]")
        for item in result['data']:
            print(f"- {item['port']} {item.get('product', '')}")
    except Exception as e:
        print(f"[red]Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python shodan_host_analyzer.py <ip_or_domain>")
        sys.exit(1)
    main(sys.argv[1])
```
