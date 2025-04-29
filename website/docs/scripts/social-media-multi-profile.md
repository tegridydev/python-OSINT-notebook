# Social Media Multi-Profile OSINT

A Python script to search multiple social media platforms for a given username, easy to digest output.

---

## Usage
- Requires: `requests`, `rich`
- Run: `python social_media_multi_profile.py username`

---

```python
import sys
import requests
from rich import print

PLATFORMS = {
    "Twitter": "https://twitter.com/{}",
    "GitHub": "https://github.com/{}",
    "Reddit": "https://reddit.com/user/{}",
    "Instagram": "https://instagram.com/{}",
    "TikTok": "https://www.tiktok.com/@{}",
}

def check_profile(platform, url):
    try:
        r = requests.get(url, timeout=5)
        if r.status_code == 200:
            return True
    except:
        pass
    return False

def main(username):
    print(f"[bold cyan]Checking username:[/] [yellow]{username}[/]")
    for plat, url_fmt in PLATFORMS.items():
        url = url_fmt.format(username)
        exists = check_profile(plat, url)
        if exists:
            print(f"[green]✔ {plat}:[/] {url}")
        else:
            print(f"[red]✘ {plat}:[/] Not found")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("[red]Usage: python social_media_multi_profile.py <username>")
        sys.exit(1)
    main(sys.argv[1])
```
