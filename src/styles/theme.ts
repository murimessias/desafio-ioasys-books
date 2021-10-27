export default {
  border: {
    radius: {
      md: '0.4rem',
      rounded: '9999px',
    },
  },

  colors: {
    white: '#FFFFFF',
    caramel: '#F5F5EE',
    black: '#333333',
    gray: '#999999',
    accent: '#AB2680',
  },

  font: {
    family:
      "Heebo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    sizes: {
      sm: '1.2rem',
      md: '1.4rem',
      lg: '1.6rem',
      xl: '2.8rem',
    },

    weight: {
      normal: 400,
      bold: 500,
    },
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
  },

  spacings: {
    xs: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4.0rem',
    xl: '4.8rem',
  },
} as const
