# blue-team-lab

Defensive security laboratory documentation, detection
content, incident response playbooks and hardening guides.

Part of the **L4R-77** cybersecurity ecosystem.

---

## Purpose

This repository documents Blue Team practices, procedures
and lab environments. It serves as a reference for defensive
security workflows and a reproducible knowledge base for
detection, investigation and response.

---

## Repository Structure
blue-team-lab/
│
├── README.md
│
├── detection/
│ ├── sigma/ # Sigma detection rules
│ └── rules/ # Custom detection logic
│
├── incident-response/
│ ├── playbooks/ # IR playbooks and procedures
│ └── procedures/ # Step-by-step response guides
│
├── threat-hunting/
│ ├── hypotheses/ # Hunting hypotheses and queries
│ └── techniques/ # Hunting techniques and methods
│
├── hardening/
│ ├── linux/ # Linux security hardening
│ └── windows/ # Windows security hardening
│
├── monitoring/
│ ├── dashboards/ # Monitoring dashboard configs
│ └── alerts/ # Alert configurations
│
└── documentation/ # General Blue Team documentation


---

## Folder Descriptions

### detection/
Detection rules and logic for identifying malicious activity.

- **sigma/** — Sigma rules for SIEM-agnostic detection.
- **rules/** — Platform-specific detection rules and queries.

### incident-response/
Procedures and playbooks for security incident handling.

- **playbooks/** — Step-by-step response playbooks organized by incident type.
- **procedures/** — Detailed procedures for specific response actions.

### threat-hunting/
Documentation and queries for proactive threat hunting.

- **hypotheses/** — Hunting hypotheses based on threat intelligence.
- **techniques/** — Methods and techniques for hunting activities.

### hardening/
Security configuration guides and baselines.

- **linux/** — Linux system hardening (SSH, kernel, services, auditd).
- **windows/** — Windows system hardening (GPO, firewall, logging).

### monitoring/
Configurations for security monitoring infrastructure.

- **dashboards/** — Dashboard configurations for SIEM and monitoring tools.
- **alerts/** — Alert rules and threshold configurations.

---

## Principles

- **Defensive Only** — All content is focused on protection
  and detection. No offensive techniques.

- **Reproducible** — Labs and procedures should be reproducible
  in standard environments.

- **Authorized** — Only document labs and environments where
  you have explicit authorization to practice.

- **No Sensitive Data** — Never include real credentials, IPs,
  or sensitive configuration details.

---

## What Belongs Here

✅ Detection rules and logic.

✅ Incident response procedures and playbooks.

✅ Threat hunting documentation.

✅ Hardening guides and security baselines.

✅ Monitoring configurations.

✅ Lab documentation and architecture diagrams.

---

## What Does NOT Belong Here

❌ Offensive tools or attack techniques.

❌ Real credentials, tokens or secrets.

❌ Real IP addresses or sensitive infrastructure details.

❌ Proprietary detection content from employers.

❌ Unauthorized lab documentation.

---

## Security Notice

This repository contains **defensive security documentation only**.
All content is intended for learning, reference and authorized
lab practice.

Before adding any content, verify:

1. No real credentials or tokens are included.
2. No sensitive infrastructure details are exposed.
3. All lab documentation is from authorized environments.
4. `.gitignore` is properly configured.

---

## Status

🟡 **In Development** — Content is added as labs are built
and documented.

---

## Related Repositories

| Repository | Purpose |
|---|---|
| [L4R77.github.io](https://github.com/L4R77/L4R77.github.io) | Main portfolio |
| [cybersecurity-tools](https://github.com/L4R77/cybersecurity-tools) | Security tools |
| [ctf-writeups](https://github.com/L4R77/ctf-writeups) | CTF and lab writeups |
| [cybersecurity-notes](https://github.com/L4R77/cybersecurity-notes) | Technical notes |

---

> "Detection is a mindset. Response is a skill."
>
> — L4R-77