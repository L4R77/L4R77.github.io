# L4R77.github.io

Professional cybersecurity portfolio of **L4R-77**.

Deployed at: **[https://L4R77.github.io](https://L4R77.github.io)**

---

## Identity

| Context | Alias |
|---|---|
| 💻 Main | **L4R77** |
| 🛡️ Blue Team | **L4R-77** |
| 🧪 CTF / Labs | **L77Ghost** |
| 🔧 Linux / Labs | **LarryRoot777** |

This repository hosts the main portfolio website. All other
projects, tools, labs and writeups live in separate repositories
within the same GitHub ecosystem.

---

## Portfolio Sections

- **Home** — Identity, focus areas, and terminal introduction.
- **About Me** — Professional profile and learning path.
- **Skills** — Technical capabilities organized by category.
- **Projects** — Active and planned projects with filtering.
- **Labs & Machines** — Reproducible cybersecurity lab documentation.
- **Blue Team** — Defensive security workflow and domains.
- **CTF / Writeups** — Capture The Flag documentation (L77Ghost).
- **Security Tools** — Defensive tooling repository structure.
- **Notes** — Technical documentation and knowledge base.
- **Contact** — Professional links and connection points.

---

## Repository Ecosystem

| Repository | Purpose |
|---|---|
| `L4R77.github.io` | Main portfolio website (this repository). |
| `cybersecurity-tools` | Defensive security scripts and tools. |
| `blue-team-lab` | Blue Team lab documentation and playbooks. |
| `ctf-writeups` | CTF and lab writeups (L77Ghost identity). |
| `cybersecurity-notes` | Technical notes and knowledge base. |
| `linux-labs` | Linux security and administration labs. |

---

## Technology

- **HTML5** — Semantic, accessible markup.
- **CSS3** — Custom properties, responsive design, dark theme.
- **JavaScript (Vanilla)** — Dynamic project rendering and filtering.
- **GitHub Pages** — Static hosting with custom domain support.

No frameworks. No external dependencies. Fully static and
maintainable.

---

## Security

This portfolio adheres to strict security practices:

- No credentials, tokens, API keys or secrets in any file.
- `.gitignore` configured for sensitive file patterns.
- All data is static; no server-side processing or databases.
- External links use `rel="noopener noreferrer"`.
- Content Security Policy ready for future implementation.
- Regular scanning for accidentally committed secrets.

### `.gitignore` Recommendations
Sensitive

.env
.env.*
*.pem
.key
.pfx
.p12
credentials.
secrets.
config.local.
System

.DS_Store
Thumbs.db
desktop.ini
Editor

.vscode/
.idea/
*.swp
*.swo
Dependencies (if ever added)

node_modules/
text


---

## Deployment

This site is deployed via **GitHub Pages** from the `main` branch.

### Local Development

```bash
# Clone the repository
git clone https://github.com/L4R77/L4R77.github.io.git

# Navigate to the directory
cd L4R77.github.io

# Start a local server (choose one)
python3 -m http.server 8000
# or
npx serve .

Open http://localhost:8000 in your browser.