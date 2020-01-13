import { container, title, whiteColor, mainRaised } from "assets/jss/nextjs-material-kit-pro.js";

const navigationPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative"
  },
  textCenter: {
    textAlign: "center"
  },
  title: {
    textDecoration: "none",
    fontWeight: "700",
    marginTop: "-16vh",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    color: whiteColor
  },
  main: {
    ...mainRaised,
    background: whiteColor,
    position: "relative",
    zIndex: "3",
    marginRight: "8%",
    marginLeft: "8%",
    marginTop: "-40vh",
    
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  }
};

export default navigationPageStyle;
