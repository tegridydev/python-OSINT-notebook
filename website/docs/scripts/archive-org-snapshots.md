# Archive.org Snapshot Finder

Finds all snapshots for a domain or URL using the Wayback Machine API.

---

## Usage
- Requires: `requests`, `rich`
- Run: `python archive_org_snapshots.py <domain_or_url>`

---

```python
import sys, requests
from rich import print

API = "http://web.archive.org/cdx/search/cdx?url={}&output=json&fl=timestamp,original&collapse=urlkey"

def main(target):
    r = requests.get(API.format(target))
    if r.status_code != 200:
        print("[red]Not found or error")
        return
    data = r.json()
    print(f"[bold cyan]Snapshots for {target}:[/]")
    for entry in data[1:]:
        print(f"- {entry[0]} {entry[1]}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python archive_org_snapshots.py <domain_or_url>")
        sys.exit(1)
    main(sys.argv[1])
```
