export function svgToBackgroundImage(svgString: string): string {
  const encodedSvg = encodeURIComponent(svgString)
  return `url('data:image/svg+xml;utf8,${encodedSvg}')`
}

type Clip = 'top' | 'middle' | 'bottom'

function getViewBox(clip?: Clip) {
  switch (clip) {
    case 'top':
      return '0 0 150 300'
    case 'middle':
      return '0 100 150 50'
    case 'bottom':
      return '0 100 2379 769'
    default:
      return '0 100 2379 769'
  }
}

export function renderStripes(clip: 'top' | 'middle' | 'bottom') {
  const viewBox = getViewBox(clip)

  return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
    <path fill="none" d="M-20.254-1568.59h2379.77V769.17H-20.254z"/>
    <path d="M59.205 23.113C36.994 29.083 17.118 34.453 0 39.103v573.39c0 82.33 66.847 149.18 149.183 149.18h2115.545l45.62-253.63H211.054c-107.343 0-151.85-44.51-151.85-151.85V23.113z" fill="#006cb3"/>
    <path d="M145.742.003c-20.931 5.55-40.717 10.82-59.205 15.77v305.88c0 112.98 36.204 149.18 149.183 149.18h2081.318l28.02-155.81H297.59c-128.087 0-151.85-23.76-151.85-151.84V.003z" fill="#e0682c"/>
</svg>
`
}
