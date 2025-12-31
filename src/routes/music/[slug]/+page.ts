import type { Release, Track, ImageData } from '$lib/types'
import type { Component } from 'svelte'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const release: { metadata: Release; default: Component } = await import(
    `../../../releases/${params.slug}.md`
  )
  const trackPaths: Record<string, { metadata: Track; default: Component }> =
    import.meta.glob(`/src/tracks/*.md`, { eager: true })

  const trackKeys = Object.keys(trackPaths).filter((path) => {
    const file = trackPaths[path]

    return file.metadata.album === release.metadata.title
  })

  const tracks = trackKeys
    .map((key) => ({
      metadata: trackPaths[key].metadata,
      content: trackPaths[key].default,
    }))
    .sort((a, b) => a.metadata.track - b.metadata.track)

  const imageModules: Record<string, ImageData> = import.meta.glob(
    '$lib/assets/releases/*.{jpeg,jpg,webp,png}',
    {
      eager: true,
      query: {
        enhanced: true,
      },
    }
  )

  const imgKey = Object.keys(imageModules).find((key) =>
    key.includes(params.slug)
  )
  const imageData = imgKey ? imageModules[imgKey] : null

  return {
    metadata: release.metadata,
    imageData,
    content: release.default,
    tracks,
  }
}

export const ssr = false
