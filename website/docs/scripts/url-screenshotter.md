# URL Screenshotter

Takes screenshots of a list of URLs using the ScreenshotAPI (or similar service).

---

## Usage
- Requires: `requests`, `rich`
- Needs API key for screenshot API
- Run: `python url_screenshotter.py urls.txt`

---

```python
import sys, requests, os
from rich import print

API_KEY = os.getenv('SCREENSHOT_API_KEY')
API_URL = "https://shot.screenshotapi.net/screenshot"

def screenshot_url(url):
    params = {
        "token": API_KEY,
        "url": url,
        "output": "image",
    }
    r = requests.get(API_URL, params=params)
    if r.status_code == 200:
        fname = url.replace('://','_').replace('/','_')+".png"
        with open(fname, 'wb') as f:
            f.write(r.content)
        print(f"[green]Saved:[/] {fname}")
    else:
        print(f"[red]Failed for {url}")

def main(urls_file):
    with open(urls_file) as f:
        for url in f:
            url = url.strip()
            if url:
                screenshot_url(url)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python url_screenshotter.py urls.txt")
        sys.exit(1)
    main(sys.argv[1])
```
