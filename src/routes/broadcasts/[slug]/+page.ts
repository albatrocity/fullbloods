import type { Component } from 'svelte'
import type { PageLoad, EntryGenerator } from './$types'

export const entries: EntryGenerator = () => {
  const broadcasts = import.meta.glob('/src/broadcasts/*.md', { eager: true })
  
  return Object.keys(broadcasts).map((path) => {
    const slug = path.replace('/src/broadcasts/', '').replace('.md', '')
    return { slug }
  })
}

export const load: PageLoad = async ({ params }) => {
  const broadcast: { default: Component } = await import(
    `../../../broadcasts/${params.slug}.md`
  )

  return {
    content: broadcast.default,
  }
}

export const prerender = true
