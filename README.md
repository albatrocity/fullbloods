## Developing

Create a `.env` file with `PUBLIC_CAL_URI` set to the ical URL for the shows calendar.

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Deployment

Deployment is done via Netlify using the SvelteKit adapter. The shows page is prerendered at build time (calendar data is fetched from `PUBLIC_CAL_URI` during `npm run build`).

A scheduled Netlify function (`netlify/functions/scheduled-deploy.ts`) POSTs to `BUILD_HOOK_URL` once daily so show listings stay up to date without per-request server rendering.
