export default {
  colors: {
    text: "#000",
    background: "#EEEEEE",
    headerbgcolor: "#59595A",
    headerTextColor: '#E5E5E5',
    primary: "#9E0F6E",
    secondary: "#2b2758",
    modes: {
      dark: {
        text: "#fff",
        background: "#686868",
        headerTextColor: '#E5E5E5',
        headerbgcolor: "#2D2D2D",
        primary: "#261B9E",
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
  styles : { 
   root: { 
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
   },
   h1: { 
    fontSize: 40,
    fontFamily: "heading",
    fontWeight: "bold",
    color: "primary",
    my:4
   },
   h2: { 
    fontSize: 26,
    fontFamily: "heading",
    fontWeight: "bold",
    my:3
   }, 
   h3: { 
    fontSize: 22,
    fontFamily: "heading",
    fontWeight: "bold",
    my:3
   }
  }
};
