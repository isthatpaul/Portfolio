# Paul Crisologo — Career Portfolio

**Live website:** [https://isthatpaul.github.io/Portfolio/](https://isthatpaul.github.io/Portfolio/)

**Repository:** [github.com/isthatpaul/Portfolio](https://github.com/isthatpaul/Portfolio)

This is the career e-portfolio of **Paul Martin Ryan Alipio Crisologo**, a Computer Science undergraduate majoring in Software Technology at De La Salle University.

## What is included

- A responsive editorial portfolio with Work, About, and Life and all views.
- Academic work covering predictive modeling, data analytics, software systems, and train-delay routing.
- Experience and leadership entries from DLSU Data Science Society, DLSU Tech Summit, and La Salle Computer Society.
- A scrapbook-style Life and all gallery featuring campus, sports, tech events, and personal moments.
- Resume, LinkedIn, GitHub, and email contact actions.

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Hero, academic works, and experience |
| `/about/` | Editorial biography, toolkit, and interests |
| `/life/` | Scrapbook photo gallery |

## Technology

- Next.js 15 App Router with TypeScript
- Tailwind CSS with CSS-variable design tokens
- Framer Motion for interaction and transitions
- Lucide React icons
- Static export for GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To verify the production export:

```bash
npm run build
```

The generated static site is written to `out/`.

## Deployment

GitHub Pages deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). A push to `main` builds the static export and publishes it to:

**[https://isthatpaul.github.io/Portfolio/](https://isthatpaul.github.io/Portfolio/)**

The project is configured for the GitHub Pages project path `/Portfolio` so navigation and local image assets resolve correctly after deployment.

## Repository structure

```text
src/app/                 Next.js routes and global styles
src/components/          Layout and portfolio sections
src/data/portfolio.ts    Centralized portfolio content
public/assets/           Profile, Life gallery, and resume assets
.github/workflows/       GitHub Pages deployment workflow
```

## Note

The resume path is prepared at `public/assets/resume/resume.pdf`. Add the final PDF there when ready; the next push to `main` will redeploy the site automatically.
