---
id: 03-05-post-install
title: Installation & Config › Post-Installation
---

# Post-Installation Configuration

After installing your OSINT tools and environment, perform these final steps to secure and optimize your setup.

---

## 1. Configure API Keys

Many passive OSINT tools require API keys for enhanced data sources:

1. **Create a `.env` file** in your project root:
   ```dotenv
   SHODAN_API_KEY=your_shodan_key
   CENSYS_API_ID=your_censys_id
   CENSYS_API_SECRET=your_censys_secret
   SECURITYTRAILS_API_KEY=your_securitytrails_key
   GITHUB_TOKEN=your_github_token
   HIBP_API_KEY=your_hibp_key
   IPINFO_TOKEN=your_ipinfo_token
   ```
2. **Load variables** automatically when you activate your venv. Add to `~/.bashrc` or `~/.zshrc`:
   ```bash
   export $(grep -v '^#' /path/to/your/.env | xargs)
   ```
3. **Verify** in your shell:
   ```bash
   echo $SHODAN_API_KEY
   ```

---

## 2. Configure Tor & Proxies

Use Tor or other proxies to anonymize and route requests:

1. **Install Tor** (Linux):
   ```bash
   sudo apt update && sudo apt install tor
   ```
2. **Start the Tor service**:
   ```bash
   sudo systemctl start tor
   ```
3. **Set environment variables** for your shell session:
   ```bash
   export HTTP_PROXY="socks5h://127.0.0.1:9050"
   export HTTPS_PROXY="socks5h://127.0.0.1:9050"
   ```
4. **Test** connectivity:
   ```bash
   curl --proxy socks5h://127.0.0.1:9050 https://check.torproject.org/api/ip
   ```

---

## 3. Database & Storage Configuration

### Recon-ng (SQLite)

- Default workspace DB: `~/.recon-ng/<workspace>/data/recon.db`  
- **Backup**:
  ```bash
  cp ~/.recon-ng/default/data/recon.db ~/osint-backups/recon.db.bak
  ```

### Maltego (MongoDB)

- Community edition uses MongoDB for transform results:  
  - **Install MongoDB**:
    ```bash
    sudo apt install -y mongodb
    sudo systemctl enable --now mongodb
    ```
  - **Configure Maltego** to connect to `mongodb://localhost:27017`.

### Custom Storage

- Use **PostgreSQL** or **TimescaleDB** for large-scale:  
  - **Example**:  
    ```bash
    sudo apt install postgresql
    sudo -u postgres createuser osintuser
    sudo -u postgres createdb osintdb
    ```
  - Configure your Python scripts via `SQLALCHEMY_DATABASE_URI`.

---

## 4. Logging & Monitoring

- **Centralized Logs**: Configure `logrotate` for OSINT tool logs:
  ```bash
  /var/log/osint/*.log {
    daily
    rotate 14
    compress
    missingok
    notifempty
  }
  ```
- **Monitoring**: Use **Prometheus** & **Grafana** to track:
  - API call counts  
  - Tool failures  
  - Data volume processed  

---

## 5. Security & Hardening

1. **Least Privilege**: Run OSINT scripts under a dedicated non-root user.  
2. **Network Isolation**: Use Docker networks or VLANs to contain traffic.  
3. **Dependency Audits**:  
   ```bash
   pip install safety
   safety check --full-report
   ```
4. **Regular Updates**:  
   ```bash
   pip list --outdated
   pip install --upgrade <package>
   ```

---

## Next Steps

Proceed to the **Scripting Examples** section to start writing automated OSINT workflows:
