# Mahmodur Rahman — Portfolio Website

A personal portfolio website built with **HTML, CSS, and vanilla JavaScript** — featuring dark/light mode, scroll animations, Google Sheets contact integration, and full unit test coverage.

---

## 🔗 Live Demo & Design

- **Live Site:** [https://Mahmud2702.github.io/portfolio](https://Mahmud2702.github.io/portfolio)
- **Figma Prototype:** [Add your Figma shareable link here]

---

## 📋 Features

| Section | Description |
|---|---|
| 🏠 Home | Hero with photo, name, tagline, CV download, and social links |
| 👤 About | Bio, quick stats, internship status, and key info card |
| 🎓 Education | Timeline — IIUC, Mohsin College, Collegiate School |
| ⚙️ Skills | Categorized skill tags (Languages, Frontend, Backend, ML, Security, DevOps) |
| 🚀 Projects | Bachelor's Point, ClinicAssist AI, BFIM, Smart Shop, Portfolio |
| 🏆 Achievements | UniferaIT internship, research papers, ICPC, Codeforces |
| 📝 Blogs | Blog article cards + hobbies/interests |
| 📄 Publications | NeuroStack & GlucoXAI research papers (under review) |
| 📬 Contact | Form connected to Google Sheets + email notification |

### Additional Features
- 🌙 Dark / ☀️ Light theme toggle (persisted in localStorage)
- Smooth scroll-reveal animations on section entry
- Fully responsive (mobile, tablet, desktop)
- Accessible (ARIA labels, keyboard navigation, alt text)
- Unit tested with Jest + jsdom (12 test suites, 35+ assertions)

---

## 🛠 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, CSS Grid, Flexbox, animations
- **JavaScript (ES6+)** — DOM manipulation, Intersection Observer, Fetch API
- **Google Apps Script** — serverless backend for form → Google Sheets
- **Jest + jsdom** — unit testing

---

## 📁 Project Structure

```
My Portfolio/
├── index.html              # Main HTML (all sections)
├── style.css               # All styles + responsive + theme
├── My Image.jpeg           # Profile photo
├── Mahmodur_Rahman.pdf     # CV / Resume
├── portfolio.test.js       # Unit tests (Jest + jsdom)
├── google-apps-script.js   # Google Apps Script for contact form
└── README.md               # This file
```

---

## 🚀 Running Locally

### Prerequisites
- A modern browser (Chrome, Firefox, Edge)
- [Node.js](https://nodejs.org/) v16+ (only needed for running tests)
- Git

### Step-by-Step Installation

**1. Clone the repository**
```bash
git clone https://github.com/Mahmud2702/portfolio.git
```

**2. Navigate into the project folder**
```bash
cd portfolio
```

**3. Open the site**
```bash
# Option A — open directly in browser (double-click index.html)

# Option B — use a local server (recommended)
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

**4. Install test dependencies**
```bash
npm install --save-dev jest jsdom
```

**5. Run unit tests**
```bash
npx jest portfolio.test.js --verbose
```

---

## 📬 Google Sheets Contact Form Setup

1. Create a new [Google Sheet](https://sheets.google.com) named **"Portfolio Contact Messages"**
2. Add headers in Row 1: `Timestamp | Name | Email | Subject | Message`
3. Go to **Extensions → Apps Script**
4. Paste the contents of `google-apps-script.js` into the editor
5. Click **Deploy → New Deployment**:
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the generated **Web App URL**
7. In `index.html`, replace:
   ```js
   const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
   with your copied URL

---

## 🖥 Git Commands Used

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git remote add origin https://github.com/Mahmud2702/portfolio.git
git branch -M main
git push -u origin main
```

To push future updates:
```bash
git add .
git commit -m "Your descriptive commit message"
git push
```

---

## 🧪 Test Coverage

The test suite covers:
- Page structure (all sections present)
- Navigation links and theme toggle
- Hero section (photo, CV link, socials, CTAs)
- Education timeline entries
- Skills grouping and tags
- Project cards (title, description, tech tags)
- Achievement cards
- Blog cards and hobby tags
- Publication cards
- Contact form fields and validation
- Accessibility (alt text, aria-labels, external link targets)

---

## 👨‍💻 Developer

**MD Mahmodur Rahman**  
CSE Student, IIUC | Intern at UniferaIT  
📧 mahmodurrahman2702@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/mahmodur-rahman/)  
🐙 [GitHub](https://github.com/Mahmud2702)

---

## 📜 License

MIT — free to use and adapt for your own portfolio.

---

*Built by Mahmodur Rahman · 2025*
