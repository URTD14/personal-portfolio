<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,30&height=180&section=header&text=Dhyey%20Patel&fontSize=60&fontColor=2C2C2A&animation=fadeIn&fontAlignY=38&desc=Building%20things%20that%20build%20things&descAlignY=58&descSize=16" width="100%"/>
</div>

<p align="center">
  <a href="https://dhyey-portfolio.vercel.app"><img src="https://img.shields.io/badge/Live_Site-F5ECD7?style=for-the-badge&logo=vercel&logoColor=2C2C2A&labelColor=F5ECD7&color=B04A1C" alt="Live Site" /></a>
  <a href="https://motion-videos-resume.vercel.app"><img src="https://img.shields.io/badge/Motion_Portfolio-F5ECD7?style=for-the-badge&logo=manim&logoColor=2C2C2A&labelColor=F5ECD7&color=B04A1C" alt="Motion Portfolio" /></a>
  <a href="https://github.com/URTD14"><img src="https://img.shields.io/badge/GitHub-2C2C2A?style=for-the-badge&logo=github&logoColor=F5ECD7&labelColor=2C2C2A&color=2C2C2A" alt="GitHub" /></a>
  <br/>
  <a href="#-structure"><img src="https://img.shields.io/badge/%F0%9F%93%81_Structure-EDE3CB?style=flat-square&labelColor=EDE3CB&color=2C2C2A" alt="Structure"/></a>
  <a href="#-tech"><img src="https://img.shields.io/badge/%F0%9F%9B%A0_Tech_Stack-EDE3CB?style=flat-square&labelColor=EDE3CB&color=2C2C2A" alt="Tech"/></a>
  <a href="#-sections"><img src="https://img.shields.io/badge/%F0%9F%93%B8_Sections-EDE3CB?style=flat-square&labelColor=EDE3CB&color=2C2C2A" alt="Sections"/></a>
  <a href="#%EF%B8%8F-custom-domain"><img src="https://img.shields.io/badge/%F0%9F%8C%90_Custom_Domain-EDE3CB?style=flat-square&labelColor=EDE3CB&color=2C2C2A" alt="Domain"/></a>
</p>

---

## 🧭 Overview

Personal portfolio of **Dhyey Patel** — Technical Co-founder @ GLOQONT, ML Engineer, Quant Builder.

Built with **Next.js 16** + **Tailwind CSS v4**, deployed on **Vercel**. Mirrors the warm parchment-and-rust aesthetic of my motion design portfolio.

**Live**: [personal-portfolio-brown-rho.vercel.app](https://dhyey-portfolio.vercel.app)

---

## 📁 Structure

```
src/
├── app/
│   ├── globals.css        # Theme variables + Tailwind
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Composes all sections
├── components/
│   ├── Navbar.tsx         # Fixed nav with blur backdrop
│   ├── Hero.tsx           # Typing animation + badges
│   ├── About.tsx          # Bio section
│   ├── Projects.tsx       # Project cards with GitHub stars
│   ├── MotionGallery.tsx  # Video grid + modal player
│   ├── Stats.tsx          # GitHub activity graph
│   └── Contact.tsx        # Social links + email
```

---

## 🛠 Tech

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-2C2C2A?style=flat-square&logo=next.js&logoColor=F5ECD7" />
  <img src="https://img.shields.io/badge/TypeScript-2C2C2A?style=flat-square&logo=typescript&logoColor=F5ECD7" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-2C2C2A?style=flat-square&logo=tailwindcss&logoColor=F5ECD7" />
  <img src="https://img.shields.io/badge/Vercel-2C2C2A?style=flat-square&logo=vercel&logoColor=F5ECD7" />
  <img src="https://img.shields.io/badge/React_19-2C2C2A?style=flat-square&logo=react&logoColor=F5ECD7" />
  <img src="https://img.shields.io/badge/ESLint-2C2C2A?style=flat-square&logo=eslint&logoColor=F5ECD7" />
</p>

---

## 📸 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, cycling typing animation, skill pill badges |
| 2 | **About** | "Who I Am" — bio, GLOQONT, looped transformer, trading arena |
| 3 | **Projects** | 6 project cards: Looped-Transformer, AlphaBeta, from-scratch, Compass, Aushadh-AI, Demand Forecasting |
| 4 | **Motion Gallery** | Embedded video grid from motion portfolio — branding (6), reels (6), long form (2) with modal player |
| 5 | **Stats** | GitHub activity graph |
| 6 | **Contact** | LinkedIn, X, GitHub pill buttons + email |

### 🎨 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#F5ECD7` | Background — warm parchment |
| `--text` | `#2C2C2A` | Body text — dark charcoal |
| `--accent` | `#B04A1C` | Accent — deep rust/orange |
| `--muted` | `#6B6B68` | Secondary text |
| `--card-bg` | `#EDE3CB` | Card backgrounds |

---

## 🌐 Custom Domain

This site runs on **dhyey.indevs.in** (via [Stackryze FreeDomains](https://github.com/stackryze/FreeDomains)).

1. Claim subdomain at [domain.stackryze.com](https://domain.stackryze.com)
2. Add CNAME → `dhyey-portfolio.vercel.app`
3. Add domain in Vercel project settings

---

## 🚀 Local Dev

```bash
git clone https://github.com/URTD14/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## ⚖️ License

**All Rights Reserved.** See [LICENSE](./LICENSE).

This repository and all its contents (code, design, assets) are the exclusive property of Dhyey Patel. No copying, modification, distribution, or commercial use is permitted without explicit written consent.

---

<p align="center">
  <sub>Built from scratch. Understand every weight. Then ship.</sub>
  <br/>
  <br/>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,30&height=80&section=footer" width="100%"/>
</p>
