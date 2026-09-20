# Hitesh Rawat — portfolio

Local-first Next.js 15 / React 19 portfolio. No deployment, database, authentication, CMS or analytics.

Current frontend: [Portfolite redesign and media replacement](docs/FRONTEND-REDESIGN.md). Six project and two supporting visuals are local, optimized, explicitly labelled AI-generated concept illustrations; the portrait remains empty for a real photo. First dev/build downloads official Satoshi webfonts; cached local font binaries are not redistributed in Git.

From this `site` directory:

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:3000. If that port is occupied, Next prints the available port. Stop with Ctrl+C.

Production verification:

```powershell
npm run build
npm start
```

Development uses `.next-dev`; production uses `.next-production`, preventing simultaneous local processes—or an obsolete `.next` cache—from corrupting the active build.

Quality checks: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.

See [handoff and configuration](docs/HANDOFF.md), [QA results](docs/QA.md), [content gaps](docs/CONTENT-GAPS.md), and [evidence](docs/EVIDENCE.md). Planning and AI-context documents are isolated in `project_scaffold/`. Set email/canonical configuration yourself; deployment remains yours.
