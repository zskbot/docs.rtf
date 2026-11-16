# OCODEJS Login & Authentication Integration

## Current state

- Learning frontend: `zskbot/docs.rtf`, a static GitHub Pages site.
- Login route: `/dang-nhap`; the dedicated responsive UI is present after PR #10.
- Authentication backend: `OCodejs/mcp.auth.ocodejs`, Next.js + Auth.js v5 + Prisma/PostgreSQL.
- Backend capabilities in source: email/password credentials, GitHub OAuth, Google OAuth, account registration, and Auth.js sessions.
- Backend health endpoint: `GET /api/health`.

## Important integration boundary

The learning frontend is currently served from `zskbot.github.io`, while the Auth.js application is a separate Vercel application. A static GitHub Pages page cannot securely create or read the Auth.js host-only session cookie on another origin.

Do not solve this by:
- Sending passwords from the static site to a third-party API without a reviewed CSRF/CORS design.
- Storing session tokens or passwords in localStorage.
- Disabling Vercel SSO protection or changing OAuth/database secrets as an unreviewed workaround.
- Treating a successful page render or `/api/health` response as proof that login works.

## Verified deployment/configuration findings

- Vercel project: `mcp-auth-ocodejs` (linked to `OCodejs/mcp.auth.ocodejs`).
- Vercel project metadata reports a READY deployment on `main`.
- Vercel project metadata also reports SSO protection enabled for all deployments and `live: false`; deployment content could not be fetched through the current Vercel connection (403 authorization denial).
- Therefore, public accessibility, database readiness, OAuth callbacks, and end-to-end sign-in are **not verified**.
- No production configuration, SSO protection, DNS, OAuth credentials, or database settings were changed as part of this assessment.

## Recommended integration architecture

Use one browser-visible origin for the learning UI and Auth.js session boundary. Preferred implementation is to serve the learning frontend and Auth.js routes behind the same application origin (or a reviewed same-origin reverse proxy/BFF). The login form must submit to the Auth.js server-side flow; the server owns password verification, CSRF validation, session cookies, and OAuth callbacks.

If the static GitHub Pages hosting model is retained, first design and implement a proper authorization-code + PKCE handoff with one-time codes, strict redirect URI allowlisting, replay protection, and a server-side session exchange. A plain cross-origin redirect or CORS toggle is not sufficient to establish a secure logged-in session on the learning site.

## Release gates

1. Choose the canonical public learning-site origin and hosting model.
2. Confirm the Auth.js deployment is reachable by intended users; resolve Vercel SSO access through the project owner without weakening protections blindly.
3. Provision and verify a dedicated OCodeJS Preview PostgreSQL database; do not reuse a Velclaw database or another application's database.
4. Configure OAuth callback URLs and credentials in Preview only; do not commit secrets.
5. Implement the same-origin/BFF or PKCE integration and add automated tests for CSRF, redirect allowlisting, replay, cookie flags, login/logout, and session expiry.
6. Verify registration, duplicate-email rejection, invalid credentials, OAuth callbacks, session persistence, logout, and password reset in Preview.
7. Only after explicit approval, consider merge or Production rollout.

## Current status

The dedicated login UI is implemented, but real authentication from the learning site remains blocked on the hosting/session integration decision and verified public access to the Auth.js service. Do not label the learning-site login as functional until the release gates above pass.
