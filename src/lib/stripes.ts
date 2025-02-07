export function svgToBackgroundImage(svgString: string): string {
  const encodedSvg = encodeURIComponent(svgString)
  return `url('data:image/svg+xml;utf8,${encodedSvg}')`
}

type Clip = 'top' | 'middle' | 'bottom'

function getViewBox(clip?: Clip) {
  switch (clip) {
    case 'top':
      return '0 0 150 400'
    case 'middle':
      return '0 100 150 50'
    case 'bottom':
      return '0 410 2379 590'
    default:
      return '0 0 2379 1000'
  }
}

export function renderStripes(clip: 'top' | 'middle' | 'bottom') {
  const viewBox = getViewBox(clip)

  return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
    <path d="M59.205,29.113c-22.211,5.97 -42.087,11.34 -59.205,15.99l0,803.39c0,82.33 66.847,149.18 149.183,149.18l2115.55,0l45.62,-253.63l-2099.29,0c-107.343,0 -151.85,-44.51 -151.85,-151.85l-0,-333.08l0.001,-230Z" style="fill:#006cb3;"/><path d="M145.742,6.003c-20.931,5.55 -40.717,10.82 -59.205,15.77l0,535.88c0,112.98 36.204,149.18 149.183,149.18l2081.32,0l28.02,-155.81l-2047.47,-0c-128.087,-0 -151.85,-23.76 -151.85,-151.84l0,-393.18l0.002,-0Z" style="fill:#e0682c;"/>
</svg>
`
}
