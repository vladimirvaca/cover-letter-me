# Cover Letter Me: Personal Portfolio

A modern, responsive portfolio and cover letter site for Vladimir Vaca, built with [Astro](https://astro.build/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Project Overview
This site showcases professional experience, tech stack, and projects in a clean, modular design. It is data-driven and easy to customize for your own use.

## 📁 Project Structure
- `src/pages/index.astro` — Main entry page, composes the site from modular React components.
- `src/components/` — UI sections: Header, Developer, TechStack, Experience, Projects, Footer, Terminal.
- `src/constants/Constants.ts` — Centralized data for sections, tech stack, companies, projects, and social links.
- `src/layouts/Layout.astro` — HTML layout, global styles, and theme logic (light/dark mode).
- `src/assets/` — Images and icons for branding and content.
- `src/styles/global.css` — Tailwind and custom CSS variables.
- `public/` — Static files (e.g., favicon).

## ⚙️ How It Works
- Modular React components rendered via Astro for performance and flexibility.
- Data-driven: Tech stack, experience, and projects are defined in constants and mapped into UI.
- Responsive and theme-aware (light/dark mode toggle).
- Easily extensible for new sections or content.

## 🛠️ Setup & Usage
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Preview the production build:
   ```sh
   npm run preview
   ```

## ✏️ Customization
- Update `src/constants/Constants.ts` to change content (tech stack, companies, projects, social links).
- Add images/icons to `src/assets/` as needed.
- Adjust styles in `src/styles/global.css` or via Tailwind classes.

Feel free to fork and adapt for your own portfolio!

---

> **Developed with ❤️ by vladimirvaca 👽**