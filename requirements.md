# Requirements

## Chosen stack

The Leather website uses **Next.js 16 with React 19 and JavaScript**. Node.js is the development and build runtime; it is not an alternative to Next.js. The project statically exports to `out/`, which preserves compatibility with the existing hosted site.

## Functional requirements

- Preserve the Looking Good Rugged product collection, contact details, and responsive visual design.
- Render the storefront from reusable React components and product data.
- Provide a browser-only shopping guide in `app/agent.js` for safe, immediate bag suggestions.
- Keep the application deployable as static files.

## Security requirements

- Do not place API keys or agent-provider credentials in browser code.
- The shopping guide is intentionally local. A future AI provider must be called through a protected server endpoint, not directly from the browser.

## Quality requirements

- `npm run build` must generate the static site in `out/`.
- Keep the existing image assets available under `public/images/`.
- Commit completed source updates and push them to the connected GitHub repository branch.
