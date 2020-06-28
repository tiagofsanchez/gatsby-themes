import prism from "@theme-ui/prism/presets/night-owl.json";

const theme = {
  initialColorModeName: "light",
  breakpoints: [
    '40em', '56em', '64em',
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: "#2d3748",
    background: "#eeeeee",
    togglebg: "#1A202C",
    hover: "white",
    primary: "black",
    secondary: "white",
    link: "#d23669",
    linkbg: "#1A202C",
    highlight: "#d23669",
    modes: {
      dark: {
        text: "#cbd5e0",
        background: "#1A202C",
        togglebg: "#eeeeee",
        hover: "black",
        primary: "White",
        secondary: "black",
        link: "#d23669",
        linkbg: "#eeeeee",
        highlight: "#d23669",
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
      code: {
        fontSize: 20,
        fontFamily: "body",
        px: 2
      },
      pre: {
        ...prism,
        fontSize: 16,
        fontFamily: "monospace",
        whiteSpace:"pre-wrap",
        maxWidth: "100%",
        overflowX: "auto",
        p: 3,
        my: 4,
        boxShadow: `1px 2px 10px rgba(0, 0, 0, 0.5)`
      },
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
        lineHeight: 1.7,
        fontWeight: "bold",
        color: "primary",
        my: 3,
      },
      h4: {
        fontSize: 22,
        fontFamily: "heading",
        lineHeight: 1.7,
        fontWeight: "bold",
        color: "primary",
        my: 3,
      },
      p: {
        fontSize: 20,
        fontFamily: "body",
        lineHeight: 1.7
      },
      ul: { 
        my: 2,
      },
      ol: { 
        my:2
      },
      li: { 
        fontSize: 20,
        fontFamily: "body",
        lineHeight:1.7
      },
      a: {
        color: `link`,
        fontWeight: "bold",
        textDecoration: "none",
        borderBottom: "2px dashed",
      },
      blockquote: {
        borderLeftColor: `highlight`,
        borderLeftStyle: `solid`,
        borderLeftWidth: `4px`,
        pl: 3,
        ml: 0,
        p: {
          fontStyle: `italic`,
        },
      },
      table: {
        width: `100%`,
        my: 4,
        overflow: `auto`,
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
      img: {
        maxWidth: "100%",
        height: "auto",
        textAlign: `center`,
        display: `block`,
        margin: `auto`,
      },
    },
    h1: {
      fontSize: 44,
      fontFamily: "heading",
      fontWeight: "bold",
      color: "primary",
      my: 4,
    },
  },
  links: {
    primary: {
      fontSize: 30,
      fontFamily: "heading",
      fontWeight: "bold",
      color: "highlight",
      my: 4,
      borderBottom: "none",
    },
    secondary: {
      borderBottom: "none",
    },
  },
  layout: {
    header: {
      width: `100%`,
    },
    main: {
      width: [`90%`, `80%` , `70%` ],
      margin: `0 auto`,
    },
    footer: {
      width: [`90%`, `80%` , `70%` ],
      margin: `auto`,
      bottom: `0`
    },
  },
  cards: {
    category: {
      bg: `highlight`,
      mx: `10px`,
      display: `inline-block`,
      p: `10px 15px 10px 15px`,
      borderRadius: `4px`,
    },
    tag: {
      p: `5px 15px 5px 15px`,
      borderRadius: `4px`,
      m: 2,
      display: `inline-block`,
      border: `2px solid`,
      borderColor: "highlight",
    },
  },
  badges: {
    number: {
      bg: `highlight`,
      color: `white`,
      p: `6px`,
    },
  },
};

export default theme;
