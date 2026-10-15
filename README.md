# TechSynchronic

A light-themed company website built with React, TypeScript, and Vite. The pages are Home (`/`), Services (`/services/`), About (`/about/`), and Project Inquiry (`/contact/`). Shared content and components live in `src/data` and `src/components`; page compositions live in `src/pages`.

## Local development

- `npm install` installs dependencies.
- `npm run dev` starts Vite.
- `npm run build` type-checks, builds the client, and generates HTML for every page in `dist/`.
- `npm run preview` serves the production build.
- `npm run lint` and `npm run typecheck` are available for manual checks.

Deploy the contents of `dist/` to a static host supporting directory index files. `scripts/prerender.tsx` generates page-specific HTML, titles, descriptions, social metadata, and `404.html`. Preserve directory URLs when configuring hosting. Existing homepage section destinations for services, process, and why-us remain available; former contact/estimator/pricing destinations lead to the inquiry page.

## Contact integration

`src/lib/leadSubmission.ts` retains the existing FormSubmit AJAX endpoint and both configured recipient email addresses. The form supports service preselection, accessible validation, loading, confirmed success, retryable errors, and a 20-second request timeout. A response must explicitly report success before the success message appears. Delivery still depends on the existing FormSubmit account activation and service availability. Direct email links provide an alternative.

The floating WhatsApp button is available on every page. Visitors select a service and enter a custom message, then continue to a prefilled chat with **+91 9650266046**. The widget uses a native GET form to `https://wa.me/919650266046`, with the selected service and message encoded in the `text` parameter. Visitors review the message and tap Send inside WhatsApp; the website does not send it automatically. Closing and reopening the panel retains the draft. Escape and the close button return focus to the floating button.

Selecting a service fills in a ready-to-send message, with three relevant quick-message options per service, including “I’m not sure yet.” Visitors can edit the suggested text or use “Write my own” to start fresh. Switching services replaces untouched suggestions while preserving personalized messages.

## Animations

Motion powers the staggered hero and section entrances and detects when the business diagram is visible. The tsParticles v4 React provider initializes the slim engine in a separately loaded decorative canvas. Particles use brand blue, adapt their density to the available area, and pause when off-screen or the tab is inactive. Radar animations and connection signals also pause when outside the viewport or the tab is hidden.

Device reduced-motion preferences disable animations automatically. Static HTML remains readable without JavaScript, and the particle canvas never intercepts navigation or form interaction. The hero diagram follows a flat radar layout with four service cards, a circular blue business hub, grid lines, rotating rings and sweep, and SVG connection signals. Capability pills, card hover, and keyboard focus select the highlighted service; highlights also cycle automatically while the diagram is visible and no control is being used. Cards link to their service details. The compact diagram keeps the business hub centered between all four cards at every size; descriptions are omitted in narrow containers to preserve the arrangement and readable labels. The former tilted, layered 3D scene and support card have been removed.

## Brand assets and content

Colors are `#3784FC`, `#000000`, and `#FDFDFD`, with neutral supporting surfaces. No uploaded company logo file was present in the supplied checkout or attachment, so the existing text wordmark and terminal symbol are retained. Replace the shared `Brand` component when the official logo asset is available. Unverified case studies, statistics, testimonials, placeholder phone/scheduling links, and non-existent policy links are omitted.

The existing Google Analytics ID and Vercel Analytics integration are retained.
