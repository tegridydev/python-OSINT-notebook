---
title: Beginner Guide
slug: /beginner-guide
---

# Beginner Guide

Welcome! This is your launchpad if you’re new to OSINT or Python. We’ll use simple building blocks, lots of analogies, and hands-on examples.

## 🕵️‍♂️ What is OSINT?
- **Open Source Intelligence (OSINT)** is like being a digital detective using only publicly available info (websites, social media, docs, etc.).
- Think: Google searches, public records, social profiles, and more.

## 🐍 Python Basics for OSINT
- Python is your “toolbox” — easy to learn, super flexible.
- You don’t need to be a coder! Here’s a basic Lego block:

```python
print("Hello, OSINT world!")
```

- You can run this with [Repl.it](https://replit.com/) or your terminal.

## 🦺 Safe OSINT Practices
- Never break the law. Only use public info.
- Use a VPN or privacy browser if you’re researching sensitive topics.
- Respect privacy and ethics. Don’t stalk, harass, or dox anyone.

## 🧩 Lego Block Recipes
- **Google Dorking** (finding hidden info with Google):
  ```text
  site:gov filetype:pdf "confidential"
  ```
- **Python: Download a webpage**
  ```python
  import requests
  r = requests.get('https://example.com')
  print(r.text)
  ```
- **Find all links on a page**
  ```python
  from bs4 import BeautifulSoup
  import requests
  url = 'https://example.com'
  soup = BeautifulSoup(requests.get(url).text, 'html.parser')
  for link in soup.find_all('a'):
      print(link.get('href'))
  ```

## 🖼️ Visual Explainers
- [ ] Add diagrams showing how info flows from the web to your screen
- [ ] Add screenshots of tools in action

## 🚀 Next Steps
- Try the code above!
- Move on to the [Intermediate Guide](./intermediate-guide) when you’re ready for more.

If you get stuck, check the [FAQ](./faq) or ask for help on GitHub.
