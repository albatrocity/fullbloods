import type { Component } from 'svelte'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const broadcast: { default: Component } = await import(
    `../../../broadcasts/${params.slug}.md`
  )

  return {
    content: broadcast.default,
  }
}

export const prerender = true
