---
id: 02-03-people-social
title: Core Tools & Libraries › People & Social Media
---

# People & Social Media OSINT

Social platforms harbor rich troves of publicly available data—profiles, posts, connections, and metadata. The following Python tools enable passive enumeration, scraping, and analysis of user presence across multiple networks without requiring official API access.

---

## Sherlock (v0.16.8)

- **Function:** Checks if a username exists on 300+ social media and content sites using HTTP HEAD/GET requests.  
- **Install:**  
  ```bash
  pip install sherlock
  ```  
- **Usage:**  
  ```bash
  sherlock targetusername --timeout 5 --print-found
  ```  
- **Output:** CSV or table of found/unfound accounts.  
- **Link:** https://github.com/sherlock-project/sherlock  

---

## Social-Analyzer (v1.0.0)

- **Function:** Aggregates profile data by username, email, or phone across 1,000+ platforms. Offers CLI, Python library, and Docker support.  
- **Install & Run:**  
  ```bash
  git clone https://github.com/qeeqbox/social-analyzer.git
  cd social-analyzer
  pip install -r requirements.txt
  python3 main.py --domain example.com --module social_media
  ```  
- **Output:** JSON report with matched profiles and metadata.  
- **Link:** https://github.com/qeeqbox/social-analyzer  

---

## Holehe (v1.2.0)

- **Function:** Uses “forgot password” endpoints to passively check if an email is registered on ~120 platforms.  
- **Install:**  
  ```bash
  pip install holehe
  ```  
- **Usage:**  
  ```bash
  holehe target@example.com
  ```  
- **Link:** https://github.com/megadose/holehe  

---

## snscrape (v0.5.0)

- **Function:** Scrapes public posts and profiles from Twitter (X), Reddit, Telegram, and more—without API keys.  
- **Install:**  
  ```bash
  pip install snscrape
  ```  
- **Usage:**  
  ```bash
  # Fetch recent tweets by user
  snscrape twitter-user johndoe > tweets.json
  ```  
- **Link:** https://github.com/JustAnotherArchivist/snscrape  

---

## Instaloader (v4.10)

- **Function:** Downloads Instagram profiles, posts, stories, and metadata (public or accessible private).  
- **Install:**  
  ```bash
  pip install instaloader
  ```  
- **Usage:**  
  ```bash
  # Download all posts from profile
  instaloader profile johndoe
  ```  
- **Link:** https://github.com/instaloader/instaloader  

---

