# All-in-One Passive Recon

A super-script that combines domain, social, threat, and metadata checks. Ez, modular, and safe.

---

## Usage
- Requires: `requests`, `whois`, `rich`, `exifread`, `python-magic`
- Run: `python all_in_one_passive_recon.py <domain> <username> <urls.txt>`

---

```python
import sys
from domain_recon_combo import main as domain_recon
from social_media_multi_profile import main as social_media
from threat_intel_aggregator import main as threat_intel
from passive_metadata_harvester import main as metadata

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python all_in_one_passive_recon.py <domain> <username> <urls.txt>")
        sys.exit(1)
    domain = sys.argv[1]
    username = sys.argv[2]
    urls_file = sys.argv[3]
    print("\n=== DOMAIN RECON ===")
    domain_recon(domain)
    print("\n=== SOCIAL MEDIA ===")
    social_media(username)
    print("\n=== THREAT INTEL ===")
    threat_intel()
    print("\n=== METADATA ===")
    metadata(urls_file)
```
