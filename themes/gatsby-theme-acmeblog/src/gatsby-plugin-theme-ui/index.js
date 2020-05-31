const theme = {
  initialColorModeName: 'dark',
  colors: {
    text: "#2d3748",
    background: "#EEEEEE",
    togglebg: "#1A202C",
    hover: "#cccccc",
    primary: "black",
    secondary: "#2b2758",
    modes: {
      dark: {
        text: "#cbd5e0",
        background: "#1A202C",
        togglebg:"#EEEEEE",
        hover: "#2D2D2D",
        primary: "White",
        secondary: "#625F9E",
      },
    },
  },
  fonts: {
    body:
      'IBM Plex Sans, Lato, Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",  "Helvetica Neue", sans-serif',
    heading: "IBM Plex Sans, Montserrat",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 900,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      h1: {
        fontSize: 44,
        fontFamily: "heading",
        fontWeight: "bold",
        color: "primary",
        my: 4,
      },
      h2: {
        fontSize: 30,
        fontFamily: "heading",
        fontWeight: "bold",
        color: "primary",
        my: 3,
      },
      h3: {
        fontSize: 26,
        fontFamily: "heading",
        fontWeight: "bold",
        my: 3,
      },
      h4: {
        fontSize: 24,
        fontFamily: "heading",
        fontWeight: "bold",
        my: 3,
      },
      p: {
        fontSize: 18,
        fontFamily: "body",
      },
      a: {
        color: "pink",
      },
      blockquote: {
        borderLeftColor: `primary`,
        borderLeftStyle: `solid`,
        borderLeftWidth: `4px`,
        pl: 4,
        p: {
          fontStyle: `italic`,
        },
      },
      table: {
        width: `100%`,
        my: 4,
        borderCollapse: `separate`,
        borderSpacing: 0,
        [[`th`, `td`]]: {
          textAlign: `left`,
          py: `4px`,
          pr: `4px`,
          pl: 0,
          borderColor: `muted`,
          borderBottomStyle: `solid`,
        },
      },
      th: {
        verticalAlign: `bottom`,
        borderBottomWidth: `2px`,
        color: `heading`,
      },
      td: {
        verticalAlign: `top`,
        borderBottomWidth: `1px`,
      },
    },
  },
};

export default theme;
