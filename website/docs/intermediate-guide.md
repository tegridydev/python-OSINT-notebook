---
title: Intermediate Guide
slug: /intermediate-guide
---

# Intermediate Guide

Welcome to the next level! Here you’ll start snapping together more complex Lego blocks — building your own OSINT tools, automating workflows, and solving real-world problems.

## 🔎 Tool Deep-Dives
- **Recon-ng**: Modular OSINT framework for automation.
  - Lego analogy: Like a big baseplate you can add modules to.
  - Try: `pip install recon-ng`
- **theHarvester**: Finds emails/domains from public sources.
  - Lego analogy: Like a search radar brick.
  - Try: `pip install theHarvester`
- **SpiderFoot**: All-in-one OSINT automation tool (GUI/web).
  - Lego analogy: Like a robot that assembles blocks for you.

## 🛠️ Scripting Workflows
- Automate repetitive tasks with Python scripts.
- Example: Find all PDF links on a site and download them:

```python
import requests
from bs4 import BeautifulSoup
url = 'https://example.com'
soup = BeautifulSoup(requests.get(url).text, 'html.parser')
pdfs = [link.get('href') for link in soup.find_all('a') if link.get('href', '').endswith('.pdf')]
for pdf in pdfs:
    print('Downloading:', pdf)
    r = requests.get(pdf)
    with open(pdf.split('/')[-1], 'wb') as f:
        f.write(r.content)
```

## 🌐 Real-World Scenarios
- **Username checks**: See if a username exists across social platforms.
- **Domain footprinting**: Map out all subdomains and related assets.
- **Data enrichment**: Combine info from multiple sources for a fuller picture.

## 🧩 Troubleshooting & Pro Tips
- If a script fails, check:
  - Typos in URLs
  - Missing Python packages (`pip install ...`)
  - Website blocks (try headers or proxies)
- Use print statements to debug (like Lego instructions for each step)
- Don’t be afraid to break things — that’s how you learn!

## 🚀 Next Steps
- Try writing your own script for a small OSINT task.
- Move on to the [Advanced Guide](./advanced-guide) for automation pipelines and threat intel.

If you get stuck, check the [FAQ](./faq) or open an issue on GitHub.
