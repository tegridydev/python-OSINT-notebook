---
id: 03-02-linux
title: Installation & Config › Linux
---

# Installing on Linux

This section covers setting up your OSINT environment on popular Linux distributions.

---

## Debian & Ubuntu

1. **Update package lists**  
   ```bash
   sudo apt update
   ```
2. **Install Python, Git, and cURL**  
   ```bash
   sudo apt install -y python3-venv python3-pip git curl
   ```
3. **Optional: Go for Go-based tools**  
   ```bash
   sudo apt install -y golang
   ```
4. **Python-based OSINT tools**  
   ```bash
   pip install --upgrade pip
   pip install spiderfoot osrframework theHarvester dnsrecon
   ```

---

## Kali Linux

Kali comes with many OSINT tools pre-installed.

1. **Update packages**  
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
2. **Verify pre-installed tools**  
   ```bash
   which recon-ng theHarvester spiderfoot
   ```
3. **Install any missing utilities**  
   ```bash
   sudo apt install -y dnsrecon
   pip install osrframework
   ```

---

## Red Hat / CentOS / Fedora

1. **Enable EPEL (CentOS/RHEL)**  
   ```bash
   sudo yum install -y epel-release
   ```
2. **Install Python & Git**  
   ```bash
   sudo yum install -y python3 python3-venv python3-pip git curl   # RHEL/CentOS
   sudo dnf install -y python3 python3-venv python3-pip git curl   # Fedora
   ```
3. **Install Go (for Go-based tools)**  
   ```bash
   sudo yum install -y golang   # or `sudo dnf install -y golang`
   ```
4. **Install Python tools**  
   ```bash
   pip3 install --upgrade pip
   pip3 install spiderfoot osrframework theHarvester dnsrecon
   ```

---

## Arch Linux

1. **Install core packages**  
   ```bash
   sudo pacman -Sy --needed python python-virtualenv git curl go
   ```
2. **Install OSINT tools from AUR or pip**  
   ```bash
   # Example: via pip
   pip install spiderfoot osrframework
   ```

---

## Docker on Linux

Running OSINT tools in containers isolates dependencies:

```yaml
# docker-compose.yml
version: '3.8'
services:
  spiderfoot:
    image: smicallef/spiderfoot
    ports:
      - "5001:5001"
  recon-ng:
    image: reconly/recon-ng
    command: recon-ng
```

```bash
# Launch containers
docker-compose up -d
```

---

> **Tip:** Use a non-root user in Docker (`--user $(id -u):$(id -g)`) or create a dedicated `osint` user on your host to run these tools securely.
