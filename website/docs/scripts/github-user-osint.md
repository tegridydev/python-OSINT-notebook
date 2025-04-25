# GitHub User OSINT

Pulls public info, repo stats, and social links for a GitHub username.

---

## Usage
- Requires: `requests`, `rich`
- Run: `python github_user_osint.py <username>`

---

```python
import sys, requests
from rich import print

API_URL = "https://api.github.com/users/{}"

def main(username):
    r = requests.get(API_URL.format(username))
    if r.status_code != 200:
        print("[red]User not found")
        return
    data = r.json()
    print(f"[bold cyan]GitHub User:[/] {data['login']}")
    print(f"[bold]Name:[/] {data.get('name')}")
    print(f"[bold]Bio:[/] {data.get('bio')}")
    print(f"[bold]Location:[/] {data.get('location')}")
    print(f"[bold]Blog:[/] {data.get('blog')}")
    print(f"[bold]Public Repos:[/] {data['public_repos']}")
    print(f"[bold]Followers:[/] {data['followers']}")
    print(f"[bold]Following:[/] {data['following']}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python github_user_osint.py <username>")
        sys.exit(1)
    main(sys.argv[1])
```
