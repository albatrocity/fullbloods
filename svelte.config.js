import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      smartypants: true,
      remarkPlugins: [remarkBreaks, remarkGfm],
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      'styled-system': './styled-system/*',
    },
  },

  extensions: ['.svelte', '.svx', '.md'],
}

export default config
