# IPInfo Lookup

Fetches geolocation, ASN, and abuse info for an IP using ipinfo.io.

---

## Usage
- Requires: `requests`, `rich`
- Run: `python ipinfo_lookup.py <ip>`

---

```python
import sys, requests
from rich import print

API = "https://ipinfo.io/{}/json"

def main(ip):
    r = requests.get(API.format(ip))
    if r.status_code != 200:
        print("[red]Not found or error")
        return
    data = r.json()
    print(f"[bold cyan]IP:[/] {data['ip']}")
    print(f"[bold]City:[/] {data.get('city')}")
    print(f"[bold]Region:[/] {data.get('region')}")
    print(f"[bold]Country:[/] {data.get('country')}")
    print(f"[bold]Org:[/] {data.get('org')}")
    print(f"[bold]ASN:[/] {data.get('asn', {}).get('asn', 'N/A')}")
    print(f"[bold]Abuse Contact:[/] {data.get('abuse', {}).get('address', 'N/A')}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python ipinfo_lookup.py <ip>")
        sys.exit(1)
    main(sys.argv[1])
```
