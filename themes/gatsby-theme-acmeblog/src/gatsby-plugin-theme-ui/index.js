import prism from "@theme-ui/prism/presets/night-owl.json";

const theme = {
  initialColorModeName: "light",
  colors: {
    text: "#2d3748",
    background: "#eeeeee",
    togglebg: "#1A202C",
    hover: "gray",
    primary: "black",
    secondary: "#2b2758",
    link: "#d23669",
    linkbg: "#1A202C",
    highlight: "#d23669",
    modes: {
      dark: {
        text: "#cbd5e0",
        background: "#1A202C",
        togglebg: "#cccccc",
        hover: "#2D2D2D",
        primary: "White",
        secondary: "#625F9E",
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
      inlineCode: {
        ...prism,
        fontSize: 1,
        p: 1,
      },
      pre: {
        ...prism,
        fontSize: 1,
        p: 3,
        my: 4,
        overflowX: "auto",
        width: ["100vw", null, "100%", null, null],
        position: ["relative", null, "static", null, null],
        left: ["calc(-50vw + 50%)", null, "auto", null, null],
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
        my: 3,
      },
      h4: {
        fontSize: 24,
        fontFamily: "heading",
        fontWeight: "bold",
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
      marginTop: "10px",
    },
    main: {
      mx: "60px",
      marginTop: "60px",
    },
    footer: {
      mx: `40px`,
      marginBottom: "20px",
    },
  },
  cards: {
    category: {
      bg: `highlight`,
      mx: `10px`,
      p: `10px 15px 10px 15px`,
      borderRadius: `4px`,
    },
    tag: {
      p: `5px 15px 5px 15px`,
      borderRadius: `4px`,
      m: 2,
      width: "auto",
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
