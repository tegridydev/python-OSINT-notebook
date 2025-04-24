---
id: 05-automation-pipelines
title: Automation & Pipelines
---

# Automation & Pipelines

Once your scripts run correctly, automate them to collect and process OSINT on a schedule. Below are examples for UNIX cron, Windows Task Scheduler, and GitHub Actions.

---

## 1. Cron / Linux Task Scheduler

Use cron to run your `osint101.py` (or `passive_osint101.py`) daily at 2 AM:

```cron
# Edit with `crontab -e` and add:
0 2 * * * cd /path/to/project && /path/to/.venv/bin/python osint101.py >> logs/osint.log 2>&1
```

- **Redirect** stdout/stderr to a log file for auditing.  
- **cd** into the project root so relative paths resolve.

---

## 2. Windows Task Scheduler

1. **Open** Task Scheduler.  
2. **Create Basic Task** → Name: “OSINT Daily Run”.  
3. **Trigger**: Daily at 03:00.  
4. **Action**: Start a program:  
   ```
   Program/script: C:\path\to\.venv\Scripts\python.exe
   Add arguments: C:\path\to\osint101.py
   Start in:       C:\path\to\project
   ```  
5. **Finish** and **enable** the task.  
6. **Optional**: Under Settings, check “Run task as soon as possible after a scheduled start is missed.”

---

## 3. Docker + Cron in Container

Run your script inside a lightweight Alpine container:

```dockerfile
# Dockerfile-osint
FROM python:3.10-alpine
WORKDIR /app
COPY requirements.txt osint101.py ./
RUN pip install --no-cache-dir -r requirements.txt
COPY logs/ ./logs/
# Add cron and your script
RUN apk add --no-cache curl
COPY crontab /etc/crontabs/root
CMD ["crond", "-f", "-l", "8"]
```

`crontab` file:
```cron
0 4 * * * cd /app && python osint101.py >> logs/osint.log 2>&1
```

Build and run:
```bash
docker build -t osint-cron -f Dockerfile-osint .
docker run -d --name osint-cron osint-cron
```

---

## 4. GitHub Actions

Leverage GitHub Actions to run OSINT on a schedule and store outputs in the repo or an artifact.

```yaml
# .github/workflows/osint.yml
name: OSINT Daily Run

on:
  schedule:
    - cron: '0 5 * * *'  # UTC time

jobs:
  run-osint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt

      - name: Run OSINT script
        run: |
          mkdir -p results
          python osint101.py > results/osint_report_$(date +'%Y%m%d').csv

      - name: Upload results as artifact
        uses: actions/upload-artifact@v3
        with:
          name: osint-report-${{ github.run_date }}
          path: results/osint_report_*.csv
```

- **Artifacts**: Store generated reports for later review.  
- **Secrets**: Add API keys in GitHub repo Settings → Secrets and reference them via `${{ secrets.SHODAN_API_KEY }}` in your workflow.

---

## 5. Monitoring & Alerting

Consider integrating with Slack or email notifications:

```yaml
# snippet in GitHub Actions
- name: Send Slack notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    fields: repo,commit,author
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

Or use a simple Python SMTP snippet at the end of your script to email yourself if anomalies are detected.

---
