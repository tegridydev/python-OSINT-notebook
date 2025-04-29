# PDF Bulk Metadata Extractor

Extracts metadata from a list of PDF files (local or URLs).

---

## Usage
- Requires: `requests`, `PyPDF2`, `rich`
- Run: `python pdf_bulk_metadata.py files.txt`

---

```python
import sys, requests
from PyPDF2 import PdfReader
from rich import print

def get_pdf_meta(path):
    try:
        if path.startswith('http'):
            r = requests.get(path)
            r.raise_for_status()
            from io import BytesIO
            pdf = PdfReader(BytesIO(r.content))
        else:
            pdf = PdfReader(path)
        return pdf.metadata
    except Exception as e:
        print(f"[red]Error: {e}")
        return {}

def main(files_txt):
    with open(files_txt) as f:
        for line in f:
            path = line.strip()
            if not path: continue
            meta = get_pdf_meta(path)
            print(f"[bold cyan]{path}[/]")
            for k, v in meta.items():
                print(f"[yellow]{k}[/]: {v}")
            print()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python pdf_bulk_metadata.py files.txt")
        sys.exit(1)
    main(sys.argv[1])
```
