---
id: 03-03-windows
title: Installation & Config › Windows
---

# Installing on Windows

This guide covers setting up your Python OSINT environment on Windows, including native and WSL2 approaches.

---

## 1. Install Python & pip

1. **Download** the latest Python 3.10+ installer from  
   https://www.python.org/downloads/windows/  
2. **Run the installer** and **check** “Add Python to PATH”.  
3. **Verify** in PowerShell or CMD:  
   ```powershell
   python --version    # e.g. Python 3.10.x
   pip --version
   ```

---

## 2. Enable WSL2 (Recommended)

For the most Linux-compatible tooling, install WSL2:

```powershell
# In an elevated PowerShell prompt:
wsl --install
```

- By default installs Ubuntu.  
- **Restart** when prompted.  
- **Launch** your Linux distro from the Start menu and complete setup.

From within WSL2, follow the Linux instructions in [03-02-linux](03-02-linux).

---

## 3. Install OSINT Tools via pip (Native Windows)

Once Python is set up:

```powershell
# Upgrade pip
python -m pip install --upgrade pip

# Install core tools
pip install \
  spiderfoot \
  recon-ng \
  snscrape \
  osrframework \
  theHarvester \
  dnsrecon
```

- Some tools (e.g., SpiderFoot CLI) may require additional dependencies; consult their docs.

---

## 4. PowerShell Execution Policy

Allow running local scripts if you encounter policy errors:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 5. Optional: Chocolatey Package Manager

Chocolatey simplifies Windows installs:

```powershell
# Install Chocolatey (in elevated PS):
Set-ExecutionPolicy Bypass -Scope Process -Force; `
  [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
  iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Use Chocolatey to install Python and Git:
choco install python git -y
```

---

## 6. Verify Your Setup

```powershell
# Check key commands
spiderfoot --version
recon-ng --version
sherlock --help
snscrape --version
```

After this, you’re ready to run passive OSINT workflows on Windows.  

