---
id: 03-04-docker
title: Installation & Config › Docker
---

# Installing via Docker

Containerizing your OSINT tools ensures consistent environments, isolates dependencies, and simplifies cleanup.

---

## Prerequisites

- **Docker**: Install Docker Desktop on Windows/macOS, or Docker Engine on Linux.  
- **Docker Compose** (optional but recommended): Simplifies managing multi-container setups.

---

## Running SpiderFoot

SpiderFoot provides an official Docker image for quick startup:

```bash
docker run --rm -p 5001:5001 smicallef/spiderfoot
```

- **--rm**: Remove container after exit  
- **-p 5001:5001**: Map container port 5001 to localhost:5001  

Once running, open your browser at:  
```
http://localhost:5001
```

---

## Running Recon-ng

There are community Docker images for Recon-ng. Example:

```bash
docker run --rm -it \
  -v $(pwd)/data:/workspace/data \
  reconly/recon-ng:latest
```

- **-it**: Interactive terminal  
- **-v …/data:/workspace/data**: Persist scan results on host  

Within the container, start Recon-ng:

```bash
recon-ng
```

---

## Docker Compose Example

Use Docker Compose to manage multiple OSINT services together:

```yaml
# docker-compose.yml
version: '3.8'
services:
  spiderfoot:
    image: smicallef/spiderfoot
    ports:
      - "5001:5001"
    restart: unless-stopped

  recon-ng:
    image: reconly/recon-ng:latest
    volumes:
      - ./data/recon-ng:/root/.recon-ng
    entrypoint: ["recon-ng", "--no-banner"]
    restart: on-failure

  social-analyzer:
    image: qeeqbox/social-analyzer:latest
    volumes:
      - ./data/social-analyzer:/app/output
    command: ["python3","main.py","--domain","example.com","--module","social_media"]
    restart: "no"
```

- **volumes**: Mount host directories for persistent storage  
- **restart**: Auto-restart policies  

Launch all services:

```bash
docker-compose up -d
```

---

## Tips & Best Practices

- **Environment Variables**: Pass API keys securely via `docker run -e` or a `.env` file loaded by Compose.  
- **Data Persistence**: Always mount volumes for logs, databases, and reports.  
- **Networking**: Use Docker networks to link containers and restrict external exposure.  
- **Cleanup**:  
  ```bash
  docker-compose down --volumes
  docker system prune --volumes
  ```

---
