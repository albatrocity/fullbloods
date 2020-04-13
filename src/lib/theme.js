const theme = {
  global: {
    colors: {
      brand: '#3e8eb3',
      white: '#fff',
    },
    font: {
      family: 'Nunito',
    },
    breakpoints: {
      small: {
        value: 834,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '6px',
          medium: '12px',
          large: '24px',
          xlarge: '48px',
        },
        size: {
          xxsmall: '24px',
          xsmall: '48px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          full: '100%',
        },
      },
      medium: { value: 1536 },
      large: {},
    },
  },
  heading: {
    extend: `max-width: none`,
  },
}

export default theme
