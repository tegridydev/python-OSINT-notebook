# python-OSINT-notes/notebook
## [a rough written "guide" compiled from years of ADHD brain notes - enjoy]
### ~tegridy

## 1\. Introduction & Scope

Open-Source Intelligence (OSINT) is about collecting and interpreting publicly available data from websites, social networks, and other internet-connected resources. Python remains popular for OSINT thanks to its large ecosystem and active open-source community.

I've tried my best to make this python-OSINT-notebook up to date and relevant for (2025), it compiles a bunch of my ADHD brain OSINT notes and streamlined some examples, focusing on python open-source tools, libraries, and techniques for anyone interested in gathering and analyzing public data.

**WhatIsIt?**: This current version of my python-OSINT-notebook covers:

  - A survey of notable Python OSINT tools and libraries, with current versions, main features, and GitHub or PyPI references.
  - Practical guidance on installing, configuring, and using these tools on different operating systems and container environments.
  - Code samples that show how to apply OSINT techniques in Python, including ways to customize or chain tools together.
  - Considerations for performance, security, and ethics when performing OSINT.
  - Future-oriented notes on Python advancements, AI integration, and evolving data access policies.

Not everything is 100% this is a WIP rough guide so always double check and verify stuff before you install/run it (youalreadydothatyeah?) <3

-----

## 2\. Core Tools & Libraries


### 2.1 OSINT Frameworks and Multi-Tool Platforms

**SpiderFoot** – [GitHub - smicallef/spiderfoot](https://github.com/smicallef/spiderfoot) - *OSINT Automation Platform*.
SpiderFoot is a multi-module OSINT tool that scans various data sources (DNS, IP addresses, domain details, social media, dark web sites, etc.). It offers both a web-based interface and a CLI. The open-source version (v4.x) supports at least 200 modules and can export data in multiple formats (CSV, JSON, and others). SpiderFoot is under the MIT license and remains popular for mapping and correlating information about a target, such as a domain or an email address.

**Recon-ng** – [GitHub - lanmaster53/recon-ng](https://github.com/lanmaster53/recon-ng) - *Modular Reconnaissance Framework*.
Recon-ng is a Python-based framework with a console interface inspired by Metasploit. It includes a marketplace of modules for collecting details about domains, IP ranges, people, and more. Many modules rely on API keys for services like Shodan, Bing, or GitHub. Recon-ng organizes collected info in a database and lets you export final results in a variety of formats.

**DataSploit** – [GitHub - datasploit/datasploit](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/datasploit/datasploit) - *Automated OSINT Framework*.
DataSploit focuses on automating recon tasks for various targets—domains, emails, phone numbers, etc.—to gather data from multiple sources. It can generate HTML or JSON reports. Its development slowed in recent years, so if you’re interested, check for updated forks or community-maintained versions. The framework’s main value is its ability to do one-stop OSINT across multiple data points.

**OSRFramework** –  - *Open Sources Research*.
OSRFramework includes several Python tools (usufy.py, mailfy.py, searchfy.py) that check usernames on popular sites, search for email address usage, or do DNS lookups. It also includes a console tool. It’s installable via pip, and each sub-tool can be run independently or used as part of a workflow.

### 2.2 Domain and Infrastructure OSINT Tools

**theHarvester** – [GitHub - laramies/theHarvester](https://github.com/laramies/theHarvester) - *Search Aggregation for Domains*.
theHarvester queries search engines (Google, Bing, DuckDuckGo, etc.) and other databases (PGP key servers, DNS) to find emails, subdomains, and hosts linked to a target domain. It’s included in Kali Linux and can be installed via pip. It’s often used early in a domain recon process to see what quick results come up from public sources.

**Metagoofil** –  *Metadata Extraction from Public Files*.
Metagoofil searches for publicly accessible documents related to a domain (PDF, DOCX, PPT) and downloads them to extract metadata such as creator names or software versions. Although it’s an older tool, the concept of scanning for metadata remains relevant for OSINT. In practice, you can replicate some of its behavior with Python libraries like pypdf or ExifTool wrappers.

**Sublist3r** – [GitHub - aboul3la/Sublist3r](https://github.com/aboul3la/Sublist3r) & **DNS Recon** – *Subdomain Enumeration*.
Sublist3r enumerates subdomains by checking various search engines and DNS queries, while dnsrecon performs DNS lookups, zone transfers, and more. They’re both Python-based and commonly used in the reconnaissance phase to map out an organization’s subdomains.

**Shodan (Python Library)** – [PyPI - shodan](https://pypi.org/project/shodan/) - *Internet-Device Search*.
Shodan is a search engine that scans the internet for open ports and device banners. Its official Python library offers an easy interface for the Shodan API. You can query by hostname, IP, or service and retrieve detailed port, banner, and vulnerability data without doing direct scanning yourself.

**Censys (Python Library)** – [PyPI - censys](https://pypi.org/project/censys/) - *Internet Assets Search*.
Censys is another internet-wide scanning platform with a Python library that provides structured data on IPv4 hosts, certificates, and domains. It supports more in-depth queries on SSL certificates and has an API similar in concept to Shodan’s. Both services require an API key to do anything beyond the free tier.

### 2.3 People and Social Media OSINT Tools

**Sherlock** – [GitHub - sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) - *Find Usernames Across Platforms*.
Sherlock checks whether a given username exists on hundreds of social media sites and other platforms. It doesn’t rely on official APIs for most sites but instead checks URLs or account pages. The result is a list of confirmed or unconfirmed accounts, which helps you map a person’s online presence.

**Social Analyzer** – [GitHub - qeeqbox/social-analyzer](https://github.com/qeeqbox/social-analyzer) - *Profiles & Intelligence Aggregator*.
Social Analyzer searches up to 1000+ platforms by username, email, phone, or full name. It also has modules that try to confirm whether a discovered profile truly belongs to the target. It can be run as a CLI, library, or through a web interface (with Docker support), making it handy for large-scale persona investigations.

**Holehe** – [GitHub - megadose/holehe](https://github.com/megadose/holehe) - *Email to Registered Accounts*.
Holehe checks if an email address is registered on about 120 platforms by automating the “forgot password” function, which often reveals if an account exists. This method is passive in the sense that it doesn’t send reset links to the email owner but relies on the site’s response. Holehe can be run from the command line or integrated into a Python script (using async calls).

**Snscrape** – [GitHub - JustAnotherArchivist/snscrape](https://github.com/JustAnotherArchivist/snscrape) - *Social Network Scraping*.
Snscrape collects posts and user data from platforms like Twitter (X), Reddit, Instagram, Telegram channels, and so on, often without official API keys. It can be used as a CLI tool or a Python library to gather recent or historical posts. Because it scrapes publicly available data, it’s a good alternative when an official API is unavailable or limited.

**Instaloader** – [GitHub - instaloader/instaloader](https://github.com/instaloader/instaloader) - *Instagram Media & Metadata*.
Instaloader is a Python package that retrieves posts, metadata, and stories from public or (with login) private Instagram accounts you follow. You can use it to download images, captions, and other profile data for OSINT research.

### 2.4 Threat Intelligence

**Maltego Transforms in Python**
Maltego is a graphical OSINT tool (proprietary but with a community edition) that uses “transforms” to pull data from various sources. These transforms can be written in Python, allowing developers to integrate custom data feeds or specialized logic into Maltego’s graph-based interface.

**MISP / OpenCTI**
These threat intelligence platforms provide APIs and Python libraries (like PyMISP) to store and share OSINT findings in a structured format. They let security teams collaborate, correlate threat indicators, and enrich data with community-fed intelligence. While not purely OSINT tools, they can serve as repositories for discovered indicators.

**Dark Web Monitoring**
OSINT can involve scanning onion sites for mentions of a target or checking for leaked data in underground forums. Python scripts can use the Tor network via libraries like **Stem**, or specialized platforms like OnionScan (though OnionScan itself is in Go) to gather info. It typically requires custom code to handle captcha or forum logins.

-----

## 3\. Installation & Configuration

This section explains how to install and configure Python-based OSINT tools on Linux, Windows, macOS, and Docker. It also touches on setting up API keys and verifying your setup.

### 3.1 General Environment Setup

  - **Python Version:** Most tools need Python 3.7+ or newer. Python 3.10+ is recommended.
  - **Virtual Environments:** Creating a `venv` (or using Anaconda) avoids library conflicts.
  - **Common Dependencies:** Many OSINT libraries rely on `requests`, `beautifulsoup4`, or `dns.resolver`. If installing from `requirements.txt`, dependencies usually get installed automatically. Tools like **snscrape** might need system libraries (e.g., `libxml2-dev` on Linux) for `lxml`.

### 3.2 Installing on Linux

  - On **Kali Linux**, tools like `theHarvester`, `recon-ng`, or **SpiderFoot** might be pre-installed or installable via `apt`.
  - For the latest versions or other distros (Ubuntu, Debian, etc.), you can typically install them from pip or clone from GitHub.
  - Examples:
      - `pip install recon-ng` (then `recon-ng` from CLI).
      - `git clone https://github.com/smicallef/spiderfoot.git && pip install -r requirements.txt` (run `python sf.py`).
  - If a tool calls external commands (e.g., `nmap`, `whatweb`), also install those from your package manager.

### 3.3 Installing on Windows

  - Install Python 3 from the [official site](https://www.python.org/downloads/) or Microsoft Store.
  - Use pip to install the tools as on Linux. Some OS commands might not be available, so you may need **WSL** (Windows Subsystem for Linux) or additional Windows ports of Linux utilities.
  - Tools like SpiderFoot or recon-ng run fine in Windows if dependencies are in place. Sherlock is also straightforward.
  - For more stability, consider installing and running the tools under WSL2 (Ubuntu on Windows), which behaves like a Linux environment.

### 3.4 Installing via Docker

  - Many OSINT projects have official or community Docker images.
  - For example, `docker run -p 5001:5001 smicallef/spiderfoot` runs SpiderFoot in a container, exposing its web UI at localhost:5001.
  - Sherlock, Social Analyzer, and others often have Dockerfiles. This approach isolates them from your main system and simplifies dependency management.
  - Docker Compose can run multiple OSINT containers in one go (e.g., Social Analyzer + MongoDB + a web interface).

### 3.5 Post-Installation Configuration

  - **API Keys:** Tools like recon-ng, SpiderFoot, or Shodan require keys for certain modules. Check each tool’s config to add them.
  - **Tor/Proxies:** If you want anonymity or access .onion sites, install Tor and configure the tool’s proxy settings (e.g., `--tor` in Sherlock).
  - **Databases:** Some frameworks rely on MongoDB or SQLite to store results. Follow their docs if you need persistent storage.

### 3.6 Special Considerations (macOS, Cloud, etc.)

  - On **macOS**, installation is similar to Linux. Use Homebrew for system libs if needed.
  - **Cloud Deployment:** You can spin up a Linux VM or container in AWS/Azure and run these tools for scheduled recon tasks. Make sure you secure your API keys and handle usage limits.
  - **Containers in Cloud:** Docker on cloud platforms can orchestrate advanced OSINT pipelines.

-----

## 4\. Custom Stuff

In this section, we walk through typical ways to run these OSINT tools, plus Python snippets for more advanced usage or automation.

### 4.1 Using OSINT Tools via CLI

  - **theHarvester** example:
      ` bash   theHarvester -d example.com -l 100 -b bing    `
      Collects up to 100 results from Bing for any mention of `example.com`, returning emails and subdomains.

  - **Recon-ng** example:
      1. `workspaces create test1`
      2. `add domains example.com`
      3. `marketplace install hackertarget`
      4. `load recon/domains-hosts/hackertarget`
      5. `run`
      6. `show hosts`

  - **SpiderFoot** example:
      ` bash   # Web UI:   python sf.py -l 127.0.0.1:5001   # Then open [http://127.0.0.1:5001](http://127.0.0.1:5001) and set up a scan    `
      You can also run headless scans via CLI scripts (`sfcli.py`).

  - **Sherlock** example:
      ` bash   sherlock alicebob --timeout 5 --csv    `
      Outputs discovered accounts to a CSV file.

  - **Holehe** example:
      ` bash   holehe target@example.com    `
      Checks if `target@example.com` is registered on known platforms.

### 4.2 Python Scripting with OSINT Libraries

**Shodan API**:

```python
import shodan

api = shodan.Shodan("YOUR_API_KEY")
results = api.search("net:198.51.100.0/24")
for match in results["matches"]:
    print(match["ip_str"], match.get("ports", []))
```

**Censys API**:

```python
from censys.search import CensysCertificates

cc = CensysCertificates()
query = "example.com AND parsed.names: example.com"
results = cc.search(query)
for cert in results:
    print(cert.get("parsed.names"))
```

**Using Sherlock in a Python Script** (subprocess approach):

```python
import subprocess, csv

res = subprocess.run(["sherlock", "--csv", "johnsmith"], capture_output=True, text=True)
lines = res.stdout.splitlines()
for row in csv.reader(lines):
    if row[2].lower() == "exists":
        print(f"Found username on {row[0]}: {row[1]}")
```

### 4.3 Combining Tools in a Script

Here’s a quick example that retrieves subdomains from crt.sh and then checks them with Shodan:

```python
import requests
import shodan

domain = "example.com"
res = requests.get(f"[https://crt.sh/?q=%25](https://crt.sh/?q=%25){domain}&output=json")
subdomains = set()
for entry in res.json():
    names = entry["name_value"].split("\n")
    for name in names:
        if name.endswith(domain):
            subdomains.add(name)

api = shodan.Shodan("YOUR_KEY")
for sub in list(subdomains)[:10]:
    # Resolve subdomain to IP:
    dns_info = requests.get(f"[https://dns.google/resolve?name=](https://dns.google/resolve?name=){sub}&type=A").json()
    if "Answer" in dns_info:
        ip = dns_info["Answer"][0]["data"]
        try:
            info = api.host(ip)
            print(sub, ip, info.get("ports"))
        except shodan.APIError:
            pass
```

### 4.4 OSINT Data Integration

Tools like **pandas** or **NetworkX** can help store or visualize OSINT results. For geolocation data, **Folium** can generate maps.

Example with NetworkX:

```python
import networkx as nx

G = nx.Graph()
person = "John Doe"
accounts = ["twitter/johndoe", "github/johndoe123"]
G.add_node(person, type="person")
for acc in accounts:
    G.add_node(acc, type="account")
    G.add_edge(person, acc)
nx.write_graphml(G, "output.graphml")
```

-----

### 4.5 Social Media Intelligence

1.  **Profile Enumeration**: Use Sherlock or Social Analyzer to find accounts across platforms.
2.  **Data Extraction**: For Twitter, you can scrape with snscrape. For Instagram, Instaloader can download posts.
3.  **Analysis**: Summaries, sentiment, entity extraction with libraries like spaCy.
4.  **Custom Scraping**: If official APIs are restricted, you might need to automate a browser with Selenium or create site-specific scrapers.

### 4.6 Network Reconnaissance and Asset Mapping

1.  **Find Domains & IP Ranges**: theHarvester, Sublist3r, and certificate logs for subdomain data.
2.  **Search Shodan/Censys**: Skip direct scans; these services already index open ports.
3.  **Tech Fingerprinting**: Tools like Wappalyzer (Python library) or Recon-ng modules.
4.  **Output to CSV or a database**: Then filter relevant hosts. Possibly tie in vulnerability data from Vulners or the NVD.

### 4.7 Automation & Pipelines

  - Schedulers (cron, Windows Task Scheduler) can run OSINT tasks regularly.
  - CI/CD or Docker Compose can orchestrate multiple containers that handle different parts of OSINT.
  - Custom dashboards with Flask or Django can present aggregated findings in real time.

-----

## 5\. Misc.

### 5.1 Tuning / Rate Limits

  - **Concurrency**: Tools often spend time waiting on network responses. Using async or threading can speed things up.
  - **Caching**: Store query results to avoid re-fetching. For example, don’t re-pull the same IP info from Shodan every day.
  - **Filtering Early**: Skip unneeded sources to save time if you have a large list of potential targets.
  - **Rate Limiting**: Insert sleeps or concurrency controls to avoid site bans.

### 5.2 Security and Ethical Considerations (dontdodumbshitandblamethisreadmelol)

  - **Legal Boundaries**: Stay within authorized use, avoid scraping that breaks ToS or tries to bypass paywalls.
  - **Ethics & Privacy**: Even if data is public, be cautious about how you store, share, or repackage it.
  - **Operational Security**: If investigations are sensitive, use Tor/VPN, separate accounts, or dedicated VMs.
  - **Data Protection**: Encrypt or properly store breach data, personal info, or anything sensitive.
  - **Log Activities**: Keep logs of what was collected to show that you only accessed public sources.

## 6\. OSINT extra knowledge4u/links

  - **Awesome OSINT**: [GitHub - jivoi/awesome-osint: :scream: Awesome OSINT](https://github.com/jivoi/awesome-osint) – A large index of OSINT resources.
  - **Kali Linux Tools**: [Kali Linux Tools | Kali Linux](https://www.kali.org/tools/) – for theHarvester, recon-ng, and others pre-bundled with Kali Linux.
  - **Python Releases**: [Python Releases for Windows, macOS, Linux, Source code](https://www.python.org/downloads/) – for notes on Python 3.10+ and upcoming changes.
