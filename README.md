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

Deployment is done via Netlify using the SvelteKit adapter. The only page that's SSR is the shows page.
