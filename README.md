# Jayaditya Vetsa Portfolio

Recruiter-first personal website for Jayaditya Vetsa, built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Three.js.

## Focus

- Warm editorial visual system with burnt-orange accents and a scroll-responsive SVG motion study.
- Selected project case studies instead of a broad activity dump.
- Separate sections for research, experience, UT Austin organizations, education, and contact.
- Individual viewport reveals, reading progress, and reduced-motion support.
- Responsive navigation and an expandable project archive.
- Working resume link from `public/resume/jayaditya-vetsa-resume.pdf`.
- Direct email and professional social links instead of a fake contact form.

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Content

Primary site content lives in:

```text
src/data/portfolio.ts
```

The app shell and section rendering live in:

```text
src/App.tsx
src/index.css
```

Content updated October 28, 2026 from the supplied Texas Humanoids resume-book PDF. The public PDF at `/resume/jayaditya-vetsa-resume.pdf` is an exact copy of that file. Education reflects May 2029 and a 4.0 GPA. UT roles include the supplied Gazebo/ROS 2 arm evaluation and humanoid workflow preparation; ongoing research remains described as ongoing.

## Analytics

Vercel Web Analytics is integrated for production builds. In the Vercel project dashboard, open Analytics and enable Web Analytics, then redeploy if it was not enabled before this deployment. Visitor and page-view statistics appear after new traffic arrives; past visits cannot be reconstructed.

Optional custom events (`resume_open` and `portfolio_link_click`) are wired through the shared link component, using only the displayed link label as event metadata. Vercel requires Pro or Enterprise for custom events. To activate them on an eligible plan, set `VITE_TRACK_CLICKS=true` in Vercel and redeploy. This repository does not enable a paid plan. Direct visits to the static PDF do not run JavaScript and are not recorded by this page-view integration; `resume_open` measures clicks from the portfolio.
