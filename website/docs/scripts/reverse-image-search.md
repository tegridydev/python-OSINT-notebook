# Reverse Image Searcher

Checks a list of image URLs against TinEye and Google Images for matches.

---

## Usage
- Requires: `requests`, `rich`
- Run: `python reverse_image_search.py images.txt`

---

```python
import sys, requests, webbrowser
from rich import print

def google_search(img_url):
    q = f"https://www.google.com/searchbyimage?image_url={img_url}"
    print(f"[cyan]Google:[/] {q}")
    webbrowser.open(q)

def tineye_search(img_url):
    q = f"https://tineye.com/search?url={img_url}"
    print(f"[cyan]TinEye:[/] {q}")
    webbrowser.open(q)

def main(images_txt):
    with open(images_txt) as f:
        for url in f:
            url = url.strip()
            if url:
                google_search(url)
                tineye_search(url)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python reverse_image_search.py images.txt")
        sys.exit(1)
    main(sys.argv[1])
```
