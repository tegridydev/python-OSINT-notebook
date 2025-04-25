# Favicon Hash Lookup

Calculates the hash of a site's favicon and searches Shodan for matching services.

---

## Usage
- Requires: `requests`, `hashlib`, `shodan`, `rich`
- Needs a Shodan API key (`SHODAN_API_KEY` env var)
- Run: `python favicon_hash_lookup.py <url>`

---

```python
import sys, requests, hashlib, base64, os
import shodan
from rich import print

API_KEY = os.getenv('SHODAN_API_KEY')
api = shodan.Shodan(API_KEY)

def get_favicon_hash(url):
    r = requests.get(url, timeout=10)
    if r.status_code != 200:
        print("[red]Failed to fetch favicon")
        sys.exit(1)
    b64 = base64.b64encode(r.content)
    h = hashlib.md5(b64).hexdigest()
    return h

def main(url):
    print(f"[bold cyan]Favicon hash for:[/] {url}")
    h = get_favicon_hash(url)
    print(f"[bold]Hash:[/] {h}")
    print("[bold]Shodan search:[/]")
    for banner in api.search_cursor(f"http.favicon.hash:{h}"):
        print(f"- {banner['ip_str']}:{banner['port']}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python favicon_hash_lookup.py <url>")
        sys.exit(1)
    main(sys.argv[1])
```
