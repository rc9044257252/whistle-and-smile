# Whistle and Smile — React Landing Page

Exact pixel-perfect recreation of the Whistle and Smile invisible aligners website from the provided screenshots.

## 🚀 Run Locally

```bash
npm install
npm run dev
```
Open http://localhost:5173

## 🏗️ Build for Production

```bash
npm run build
```

---

## ✅ Task A — 3 Figma Frames Recreated

1. **Navbar** (`src/components/Navbar.jsx`) — Sticky white navbar with Whistle logo (purple) and phone CTA button (purple pill on desktop, circle icon on mobile). Exact match with screenshots.

2. **Hero Section** (`src/sections/HeroSection.jsx`) — Lavender (#EDEEFF) background, bold heading "Invisible Aligners for a dream smile", sub text with purple "worth ₹1500", woman smiling image on right. Below: radio question, name + phone form, "Book a Free Scan" purple button, consent checkbox.

3. **Comparison Table** (`src/sections/ComparisonTable.jsx`) — "What sets Whistle apart?" with expandable rows (Task C interaction), Whistle logo column with light blue bg, green ✓ and red ✗ icons, text comparisons — exact match from screenshots.

All CSS written from scratch. No UI libraries used. Consistent inline-style approach with CSS modules per component.

---

## ✅ Task B — Dynamic Data (JSONPlaceholder API)

**API:** `https://jsonplaceholder.typicode.com/posts?_limit=4`

Used in: **Results Section** (`src/sections/Results.jsx`)

- `useEffect` + `useState` for fetch lifecycle
- **Loading state:** Shimmer skeleton cards matching result card dimensions
- **Error state:** Falls back to static data with user-friendly message if API fails
- API post data is merged with local result metadata (concern, duration) since JSONPlaceholder doesn't have dental data

---

## ✅ Task C — Interaction: Comparison Table Accordion

The **Comparison Table** (`src/sections/ComparisonTable.jsx`) has accordion expand/collapse on each feature row — clicking any row shows a detailed explanation. This matches the chevron (∨) icons visible in the screenshots next to each feature name.

**Additional interactions:**
- **Marquee ticker** (`MarqueeBanner`) — CSS scroll animation
- **Clinic Finder dropdown** — click "Find Clinic" to show city list
- **Happy Smilers carousel** — left/right arrow scroll
- **Hero form** — radio select, form validation, success state on submit
- **FAQ accordion** — open/close questions with +/− icons (matching screenshots exactly)
- **Video play button** in How It Works section
- **Sticky bottom CTA bar** — "Book scan at Home" / "Book scan at Clinic"

---

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.jsx/.css
│   ├── AnnouncementBar.jsx/.css
│   └── StickyFooterCTA.jsx/.css
├── sections/
│   ├── HeroSection.jsx/.css
│   ├── ClinicSection.jsx/.css
│   ├── MarqueeBanner.jsx/.css
│   ├── WhyWhistle.jsx/.css
│   ├── WhistleDifference.jsx/.css
│   ├── HowItWorks.jsx/.css
│   ├── Pricing.jsx/.css
│   ├── ComparisonTable.jsx/.css
│   ├── Results.jsx/.css
│   ├── HappySmilers.jsx/.css
│   ├── DoctorLed.jsx/.css
│   ├── FAQ.jsx/.css
│   └── Footer.jsx/.css
├── styles/global.css
├── App.jsx
└── main.jsx
```

## 🎨 Design Tokens (matching Whistle brand)
- Primary purple: `#7C3AED`
- Announcement bar: gradient `#C8F2D0 → #B8E8F0`
- Hero bg: `#EDEEFF`
- Section bg: `#EEF3FF`
- Font: Inter (Google Fonts)

---

## ⚠️ Windows 32-bit Fix

This project uses **Vite 5** (not Vite 8) for compatibility with Windows 32-bit systems.

If you face any issues:
```bash
# Delete node_modules and package-lock.json, then reinstall:
rm -rf node_modules package-lock.json
npm install
npm run dev
```
