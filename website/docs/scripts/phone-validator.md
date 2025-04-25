# Phone Validator & OSINT

Checks if a phone number is valid, carrier info, and if it appears in public paste sites.

---

## Usage
- Requires: `requests`, `phonenumbers`, `rich`
- Run: `python phone_validator.py <number>`

---

```python
import sys, requests
import phonenumbers
from rich import print

def validate_number(number):
    try:
        num = phonenumbers.parse(number)
        valid = phonenumbers.is_valid_number(num)
        carrier = phonenumbers.carrier.name_for_number(num, "en")
        return valid, carrier
    except:
        return False, None

def check_pastes(number):
    url = f"https://publicwww.com/websites/%22{number}%22/"
    print(f"[cyan]Paste search:[/] {url}")

def main(number):
    valid, carrier = validate_number(number)
    print(f"[bold cyan]Number:[/] {number}")
    print(f"[bold]Valid:[/] {valid}")
    print(f"[bold]Carrier:[/] {carrier}")
    check_pastes(number)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python phone_validator.py <number>")
        sys.exit(1)
    main(sys.argv[1])
```
