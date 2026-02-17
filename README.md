# Cover Letter Me: Personal Portfolio

A modern, responsive portfolio and cover letter site for Vladimir Vaca, built with [Astro](https://astro.build/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Project Overview
This site showcases professional experience, tech stack, and projects in a clean, modular design. It is data-driven and easy to customize for your own use. It also includes a functional contact form with email notifications and spam protection.

## 📁 Project Structure
- `src/pages/index.astro` — Main entry page, composes the site from modular React components.
- `src/components/` — UI sections: Header, Developer, TechStack, Experience, Projects, Footer, Terminal, and ContactForm.
- `src/constants/Constants.ts` — Centralized data for sections, tech stack, companies, projects, and social links.
- `src/layouts/Layout.astro` — HTML layout, global styles, and theme logic (light/dark mode).
- `src/assets/` — Images and icons for branding and content.
- `src/styles/global.css` — Tailwind and custom CSS variables.
- `public/` — Static files (e.g., favicon).
- `netlify/functions/contact.ts` — Serverless function to handle contact form submissions.

### 🖼️ Icon System
- Devicon icons are included globally via CDN in `src/layouts/Layout.astro`:
  ```html
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
  ```
- To use a Devicon icon, reference its class in the constants or component, e.g.:
  ```html
  <i class="devicon-vitest-plain colored"></i>
  ```
- The TechStack section supports both Material Symbols and Devicon icons. To add a Devicon, set the `deviconClass` property in the skill object in `src/constants/Constants.ts`.

## ⚙️ How It Works
- Modular React components rendered via Astro for performance and flexibility.
- Data-driven: Tech stack, experience, and projects are defined in constants and mapped into UI.
- Responsive and theme-aware (light/dark mode toggle).
- **Contact Form**: The contact form is protected by Google reCAPTCHA v3 to prevent spam. It uses a Netlify serverless function to verify the reCAPTCHA token and then sends emails via [Resend](https://resend.com/). This ensures that form submissions are from legitimate users.

## 🛠️ Setup & Usage

### Prerequisites
To use all the features of this project, especially the contact form, you will need accounts for the following services:
- **Netlify**: For hosting the site and deploying the serverless function.
- **Resend**: For sending and receiving emails from the contact form.
- **Google reCAPTCHA**: To protect the contact form from spam.

All of these services offer free tiers with usage limits that are more than enough for a personal portfolio.

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root of the project and add the following variables. You can get the keys from Resend and Google reCAPTCHA.
   ```
   # Resend API Key
   RESEND_API_KEY="your_resend_api_key"
   # Email to receive messages
   TO_EMAIL="your_email@example.com"

   # Google reCAPTCHA Keys
   PUBLIC_RECAPTCHA_SITE_KEY="your_recaptcha_site_key"
   RECAPTCHA_SECRET_KEY="your_recaptcha_secret_key"
   ```
   When deploying to Netlify, you must set these environment variables in the Netlify UI.

3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Build for production:**
   ```sh
   npm run build
   ```
5. **Preview the production build:**
   ```sh
   npm run preview
   ```

## 🖨️ PDF Viewer Modal

The **PdfViewerModal** React component displays a PDF (like a CV) in a modal window, letting users view documents directly on the site. It uses [react-modal](https://github.com/reactjs/react-modal) for accessibility and an `<iframe>` for fast PDF rendering. Control its visibility and content with the `isOpen`, `onRequestClose`, and `pdfUrl` props. Place your PDF in the `public/` folder and pass its path to `pdfUrl`.

Example:
```tsx
<PdfViewerModal isOpen={isModalOpen} onRequestClose={closeModal} pdfUrl="/vladimir_vaca_cv.pdf" />
```

## ✏️ Customization
- Update `src/constants/Constants.ts` to change content (tech stack, companies, projects, social links).
- Add images/icons to `src/assets/` as needed.
- Adjust styles in `src/styles/global.css` or via Tailwind classes.

Feel free to fork and adapt for your own portfolio!

---

> **Developed with ❤️ by vladimirvaca 👽**
