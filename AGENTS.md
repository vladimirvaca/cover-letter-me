# AGENTS.md

## Essential Guidance for AI Coding Agents

### Project Architecture & Data Flow
- **Astro + React + Tailwind CSS**: The site is composed in Astro (`src/pages/index.astro`), which imports modular React components for each section. Styling is handled via Tailwind and custom CSS variables in `src/styles/global.css`.
- **Data-Driven UI**: All static content (tech stack, companies, projects, social links) is centralized in `src/constants/Constants.ts` and typed via `src/types/types.ts`. Components map over these arrays to render UI.
- **Theme Logic**: Light/dark mode is managed in `src/layouts/Layout.astro` using a script that toggles the `dark` class on `<html>` based on user preference or system settings.
- **Icon System**: Devicon icons are loaded globally via CDN in `Layout.astro`. To add icons, set the `deviconClass` property in skill objects in `Constants.ts`.

### Critical Workflows
- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Environment Variables**: Define keys for Resend and Google reCAPTCHA in `.env` (see README for details). When deploying to Netlify, set these in the Netlify UI.

### Project-Specific Conventions
- **Component Structure**: Each section (Header, Developer, TechStack, Experience, Projects, Footer, Terminal, ContactForm) is a React functional component in `src/components/`.
- **Section Composition**: To add a new section, create a React component, add its data to `Constants.ts`, and import it in `index.astro`.
- **Type Safety**: All data structures are typed via interfaces in `src/types/types.ts`.
- **Accessibility**: Use semantic HTML and ensure a11y compliance. Modal components (e.g., PdfViewerModal) use [react-modal](https://github.com/reactjs/react-modal) for accessibility.
- **Styling**: Use Tailwind utility classes and reference custom properties from `global.css`.

### Integration Points
- **Contact Form**: Uses Google reCAPTCHA v3 for spam protection and Netlify serverless function (`netlify/functions/contact.ts`) to verify tokens and send emails via Resend.
- **PDF Viewer**: `PdfViewerModal` displays PDFs from the `public/` folder in a modal using an `<iframe>`.

### Examples & Patterns
- **Add Tech/Project**: Update the relevant array in `Constants.ts`.
- **Add Icon/Image**: Place in `src/assets/` and reference in constants or components.
- **Meta Tags**: Open Graph and Twitter meta tags are set in `Layout.astro` using values from `SITE_META` in `Constants.ts`.

### Key Files & Directories
- `src/pages/index.astro`: Main entry, composes sections
- `src/components/`: Modular React UI
- `src/constants/Constants.ts`: Centralized data
- `src/types/types.ts`: Type definitions
- `src/layouts/Layout.astro`: Layout, global styles, theme logic
- `src/styles/global.css`: Tailwind/custom CSS
- `netlify/functions/contact.ts`: Serverless contact handler
- `public/`: Static assets (PDFs, favicon)

---

**Follow these patterns for immediate productivity. Reference constants/types for all data-driven UI.**

