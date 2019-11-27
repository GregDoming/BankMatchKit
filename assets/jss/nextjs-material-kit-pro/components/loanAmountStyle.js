import {
  container,
  description,
  cardTitle,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

const loanAmountStyle = theme => ({
  description,
  cardTitle: {
    ...cardTitle,
    color: whiteColor + "  !important"
  },
  container: {
    ...container,
    zIndex: "4",
    display: "flex",
    flexFlow: "column"
  },
  cardContainer: {
    display: "flex",
    flexFlow: "column",
  },
  shrinkFlex: {
    flex: 2,
  },
  numberStyle: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
      margin: 0,
      padding: 0
    }
  },
  borderNumberStyle: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
      margin: 0,
      padding: 0,
      border: "1px black"
    }
  },
  underline: {
    '&:after': {
      transition: 'none',
    },
  },
  pageHeader: {
    color: whiteColor,
    border: "0",
    height: "100%",
    margin: "0",
    display: "flex!important",
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center"
  },
  
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: grayColor[13]
  },
  textCenter: {
    textAlign: "center"
  },
  iconButtons: {
    marginRight: "3px !important",
    marginLeft: "3px !important"
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
    display: "block",
    "&,& *,& *:hover,& *:focus": {
      color: whiteColor + "  !important"
    }
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: whiteColor + "  !important"
    }
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  footer: {
    position: "absolute",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: whiteColor,
    zIndex: "2"
  }
});

export default loanAmountStyle;
