# Passive Metadata Harvester

Extracts metadata from public files (PDF, DOCX, images) from a given URL list. Simple, safe, passive.

---

## Usage
- Requires: `requests`, `python-magic`, `exifread`, `rich`
- Run: `python passive_metadata_harvester.py urls.txt`

---

```python
import sys
import requests
import magic
import exifread
from rich import print


def fetch_file(url):
    try:
        r = requests.get(url, timeout=10)
        r.raise_for_status()
        return r.content
    except Exception as e:
        print(f"[red]Could not fetch {url}: {e}")
        return None

def extract_metadata(data):
    try:
        tags = exifread.process_file(data)
        return tags
    except Exception as e:
        print(f"[red]EXIF extraction failed: {e}")
        return {}

def main(urls_file):
    with open(urls_file) as f:
        urls = [line.strip() for line in f if line.strip()]
    for url in urls:
        print(f"[bold cyan]URL:[/] {url}")
        data = fetch_file(url)
        if data:
            meta = extract_metadata(data)
            if meta:
                for k, v in meta.items():
                    print(f"[yellow]{k}[/]: {v}")
            else:
                print("[red]No metadata found.")
        print()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("[red]Usage: python passive_metadata_harvester.py urls.txt")
        sys.exit(1)
    main(sys.argv[1])
```
