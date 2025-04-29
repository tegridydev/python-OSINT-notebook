# Domain Recon Combo

A Python script that combines DNS, WHOIS, and SSL certificate transparency lookups for a domain. Outputs everything in a single, easy to digest summary.

---

## Usage
- Requires: `requests`, `whois`, `rich`
- Run: `python domain_recon_combo.py example.com`

---

```python
import sys
import requests
import whois
from rich import print
from rich.table import Table

def fetch_ct_logs(domain):
    url = f"https://crt.sh/?q={domain}&output=json"
    try:
        r = requests.get(url, timeout=10)
        r.raise_for_status()
        return r.json()
    except Exception as e:
        return []

def fetch_dns(domain):
    try:
        return requests.get(f"https://dns.google/resolve?name={domain}").json()
    except Exception as e:
        return {}

def main(domain):
    print(f"[bold cyan]Recon for:[/] [yellow]{domain}[/]")
    print("\n[bold]WHOIS:[/]")
    try:
        w = whois.whois(domain)
        print(w)
    except Exception as e:
        print("[red]WHOIS failed:", e)
    print("\n[bold]DNS:[/]")
    dns = fetch_dns(domain)
    print(dns)
    print("\n[bold]CT Logs:[/]")
    ct = fetch_ct_logs(domain)
    if ct:
        for entry in ct[:10]:
            print(f"- {entry.get('name_value')}")
    else:
        print("[red]No CT log entries found.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("[red]Usage: python domain_recon_combo.py <domain>")
        sys.exit(1)
    main(sys.argv[1])
```
