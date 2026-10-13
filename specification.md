# Technical Specification

## Application structure

```
app/
  layout.js              Shared document shell and metadata
  page.js                Storefront and product collection
  shopping-assistant.js  Interactive React client component
  agent.js               Safe local recommendation adapter
  globals.css            Responsive site styles
public/images/           Product and hero assets
```

## Build and hosting

`next.config.mjs` enables `output: 'export'`, so `npm run build` writes a self-contained static deployment to `out/`. The hosting manifest points to that directory.

## Shopping-guide behavior

The guide accepts a short use-case question and suggests products by travel, work, accessory, or everyday intent. It does not make network requests, store conversations, or expose credentials.

## Future agent integration

When a live AI assistant is needed, add a server-side API boundary and keep the provider key in the hosting provider’s secret store. Do not expose the key through a `NEXT_PUBLIC_` variable.
