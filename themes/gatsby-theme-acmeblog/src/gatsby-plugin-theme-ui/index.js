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
        link: "tomato",
        linkbg: "#eeeeee",
        highlight: "tomato",
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
        ...prism,
        fontSize: 1,
        p: 1,
      },
      pre: {
        ...prism,
        overflow: 'auto',
        fontSize: 1,
        p: 3,
        my: 4,
        
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
        fontWeight: "bold",
        color: "primary",
        my: 3,
      },
      h4: {
        fontSize: 24,
        fontFamily: "heading",
        fontWeight: "bold",
        color: "primary",
        my: 3,
      },
      p: {
        fontSize: 20,
        fontFamily: "body",
      },
      a: {
        color: `link`,
        fontWeight: "bold",
        textDecoration: "none",
        borderBottom: "2px dashed",
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
      fontSize: 44,
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
      mx: "40px",
      width: `90%`,
      margin:  `auto`,
      marginTop: "10px",
    },
    main: {
      mx: "60px",
      width: [`90%`, null , `70%` ],
      // flex: `1 1 auto`,
      margin: `auto`,
      marginTop: "60px",
    },
    footer: {
      mx: `60px`,
      width: [`90%`, null , `70%` ],
      margin: `auto`,
      marginBottom: "20px",
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
