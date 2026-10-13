# Prathvik — Personal Portfolio

An editorial, minimalist, and authentic portfolio website designed for a **Computer Science Engineering student and student-community leader**.

## 🎨 Theme & Aesthetic
- **Warm Charcoal Editorial Palette**: Deep warm charcoal background (`#11100e`), soft cream text (`#ece7df`), and subtle warm amber accents (`#e59a44`).
- **Typography**: Editorial serif headings (`Newsreader`) paired with clean mono accents (`JetBrains Mono`) and readable body text (`Inter`).
- **Two-Column Layout**: Editorial section numbering (`01 About`, `02 Projects`, `03 Experience & Leadership`, `04 Skills`, `05 Resume`, `06 Contact`).
- **Authentic Student Tone**: Real student narrative, actual ACM Student Chapter membership role, and clean placeholder slots for quick updates.

## 🛠️ Project Structure
```
portfolio_final/
├── public/
│   ├── favicon.svg          # Minimalist code terminal favicon
│   ├── resume.pdf           # Placeholder PDF for download/view
│   └── photo.jpg            # Place your headshot here (replaces placeholder)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav with italic logo & active bullet indicators
│   │   ├── Hero.tsx         # Hero with photo box, serif name, and social buttons
│   │   ├── About.tsx        # Story & "Currently" arrow list
│   │   ├── Projects.tsx     # Editorial projects with problem statement styling
│   │   ├── Experience.tsx   # Timeline with amber dots & ACM role details
│   │   ├── Skills.tsx       # Minimalist clean tabular grid
│   │   ├── Resume.tsx       # View / Download buttons & clean note
│   │   ├── Contact.tsx      # Direct mail, socials, and contact form
│   │   ├── Footer.tsx       # Minimal footer
│   │   └── SocialIcons.tsx  # Crisp SVG icons for GitHub, LinkedIn, Instagram
│   ├── data/
│   │   └── portfolioData.ts # Central content file to edit your projects & info
│   ├── index.css            # Exact design tokens and layout styling
│   ├── App.tsx              # Theme management and active scroll tracking
│   └── main.tsx             # React DOM root entry
├── package.json
└── vite.config.ts
```

## 🚀 Running Locally
```bash
npm install
npm run dev
```

## 📝 How to Update Your Content
Open [`src/data/portfolioData.ts`](file:///c:/Users/PRATHVIK/Desktop/Coding/portfolio_final/src/data/portfolioData.ts):
1. **Photo**: Save your photo as `public/photo.jpg`.
2. **Resume**: Replace `public/resume.pdf` with your updated resume PDF.
3. **Projects**: Replace `[PROJECT NAME 01]`, `[PROJECT DETAILS]`, `[The problem it solves]` and GitHub links.
4. **Social Links**: Replace `[YOUR_GITHUB_USERNAME]`, `[YOUR_LINKEDIN_USERNAME]`, and `[YOUR_EMAIL@DOMAIN.COM]`.
