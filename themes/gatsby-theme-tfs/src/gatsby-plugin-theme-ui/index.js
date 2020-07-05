import prism from "@theme-ui/prism/presets/night-owl.json";

const theme = {
  initialColorModeName: "light",
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: "#2d3748",
    background: "#eeeeee",
    togglebg: "#1A202C",
    hover: "#d4d4d4",
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
        hover: "#15181f",
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
        ...prism,
        fontSize: 16,
        fontFamily: "body",
        px: 2,
      },
      pre: {
        ...prism,
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        wordWrap: "break-word",
        maxWidth: "100%",
        overflowX: "auto",
        p: 3,
        my: 4,
        borderRadius: `4px`,
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
        lineHeight: 1.7,
      },
      ul: {
        my: 2,
      },
      ol: {
        my: 2,
      },
      li: {
        fontSize: 20,
        fontFamily: "body",
        lineHeight: 1.7,
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
          py: `8px`,
          pr: `4px`,
          pl: 0,
          borderColor: `muted`,
          border: `1px`,
          borderBottomStyle: `solid`,
        },
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
      width: `90%`,
      margin: `0 auto`,
    },
    main: {
      width: [`90%`, `80%`, `800px`],
      margin: `0 auto`,
    },
    footer: {
      width: [`90%`, `80%`, `70%`],
      margin: `auto`,
      bottom: `0`,
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
  forms: {
    label: {
      fontSize: 2,
      fontWeight: "bold",
    },
    input: {
      fontSize: 3,
      borderColor: "gray",
      padding: `10px`,
      mb: `3`,
      "&:focus": {
        borderColor: "highlight",
        boxShadow: (t) => `0 0 0 3px ${t.colors.highlight}`,
        outline: "none",
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 3,
      padding: `10px`,
      color: "white",
      bg: "highlight",
    },
  },
};

export default theme;
