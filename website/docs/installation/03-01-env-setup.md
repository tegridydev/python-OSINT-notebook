---
id: 03-01-env-setup
title: Installation & Config › Environment Setup
---

# Environment Setup

A consistent, isolated environment ensures reliable installs, reproducible builds, and clean dependency management.

---

## 1. Python & Virtual Environment

1. **Install Python ≥ 3.10**  
   - Official installer: https://python.org/downloads/  
   - Linux (Debian/Ubuntu):  
     ```bash
     sudo apt update && sudo apt install python3 python3-venv python3-pip
     ```
   - macOS (Homebrew):  
     ```bash
     brew install python@3.10
     ```

2. **Create & Activate a Virtual Environment**  
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate   # Linux/macOS
   .venv\Scripts\activate      # Windows (PowerShell)
   pip install --upgrade pip
   ```

3. **Lock Dependencies**  
   ```bash
   pip install -r requirements.txt     # your project dependencies
   pip freeze > requirements.txt       # update lock file
   ```

---

## 2. Node.js & npm (for Docusaurus)

Docusaurus requires Node.js and npm to build the documentation site.

1. **Install Node.js ≥ 16**  
   - Official installer: https://nodejs.org/  
   - macOS (Homebrew):  
     ```bash
     brew install node@16
     ```
   - Linux (NodeSource):  
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
     sudo apt install nodejs
     ```

2. **Verify Versions**  
   ```bash
   node -v   # should output v16.x or higher
   npm -v    # should output corresponding npm version
   ```

3. **Install Docusaurus Dependencies**  
   In the `website/` directory:
   ```bash
   npm install
   ```

---

## 3. Optional Tooling

- **Git**: Version control  
  ```bash
  git --version
  ```
- **Docker**: Containerized builds (optional)  
  ```bash
  docker --version
  docker-compose --version
  ```
- **Yarn** (alternative to npm):  
  ```bash
  npm install -g yarn
  yarn install
  ```

---

## 4. Quick Sanity Checks

After installing:

```bash
# From project root
source .venv/bin/activate

# In website/ folder
npm run clear      # remove stale builds
npm run start      # spin up local server at http://localhost:3000
```

If you see your docs homepage and navigation, your environment is correctly configured!