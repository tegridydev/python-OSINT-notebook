# Email Breach Checker

Checks if an email appears in public breach databases (using HaveIBeenPwned API).

---

## Usage
- Requires: `requests`, `rich`
- Run: `python email_breach_checker.py <email>`

---

```python
import sys, requests
from rich import print

API = "https://haveibeenpwned.com/api/v3/breachedaccount/{}"
HEADERS = {"User-Agent": "OSINT-Tool", "hibp-api-key": "YOUR_API_KEY"}

def main(email):
    r = requests.get(API.format(email), headers=HEADERS)
    if r.status_code == 200:
        breaches = r.json()
        print(f"[bold cyan]Breaches for {email}:[/]")
        for b in breaches:
            print(f"- {b['Name']}")
    elif r.status_code == 404:
        print("[green]No breaches found!")
    else:
        print(f"[red]Error: {r.status_code}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python email_breach_checker.py <email>")
        sys.exit(1)
    main(sys.argv[1])
```
