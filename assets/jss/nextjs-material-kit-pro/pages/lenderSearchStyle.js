import {
  primaryColor,
  grayColor,
  cardTitle,
  whiteColor,
  blackColor,
  container,
  title,
  main,
  mainRaised,
  mlAuto,
  description,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

import customCheckboxRadioSwitchStyle from "assets/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js";

const lenderSearchStyle = {
  main,
  mainRaised,
  title,
  mlAuto,
  description,
  container: {
    ...container,
    maxWidth: "970px !important"
  },
  spaceTop: {
    marginTop: "15%"
  },
  headerWrapper: {
    display: "flex",
    flexFlow: "row"
  },
  contactContent: {
    paddingBottom: "40px",
    paddingTop: "40px"
  },
  bigMap: {
    height: "55vh",
    maxHeight: "550px",
    width: "100%",
    display: "block"
  },

  lender: {
    minWidth: "40%",
    display: "inline-block",
    marginRight: "5%"
  },
  lenderColumn: {
    maxWidth: "100%",
    display: "block",
    marginTop: "1%"
  },
  addedSearch: {
    width: "100px",
    marginRight: "5%",
    marginTop: "2%"
  },
  lenderButton: {
    display: "inline-block",
    margin: "0"
  },
  selectTitle: {
    ...cardTitle,
    fontSize: "15px",
    marginLeft: "3%",
    marginRight: "50%"
  },
  highButton: {
    minHeight: "50px"
  },
  info: {
    paddingBottom: "10px",
    paddingTop: 0
  },
  textCenter: {
    textAlign: "center !important"
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
  },
  customContainer: {
    display: "flex",
    flexWrap: "nowrap"
  },
  customGridItem: {
    flex: "1"
  },
  centerContainer: {
    height: "10em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  spacerDiv: {
    height: "0",
    flex: "0 1 200px",
    marginRight: "15%",
    marginLeft: "15%"
  },
  cardCompanySelect: {
    borderRadius: "1px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2);",
    marginBottom: "10px",
    marginLeft: "10%",
    padding: "0",
    width: "90%",
    overFlow: "visible"
  },
  customToggleItem: {
    flex: 2,
    marginRight: "15px",
    marginLeft: "15px"
  },
  customToggleForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    backgroundColor: "#324C67"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(" +
        hexToRgb(primaryColor[4]) +
        ",.56),rgba(" +
        hexToRgb(primaryColor[5]) +
        ",.95))"
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
  cardSignup: {
    borderRadius: "1px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2);",
    marginBottom: "10px",
    padding: "10px 0px",
    width: "90%"
  },
  title: {
    ...title,
    marginLeft: "10%"
  },
  cardTitle: {
    ...cardTitle,
    marginLeft: "5%",
    textDecoration: "none",
    verticalAlign: "top",
    padding: "0",
    margin: "0"
  },
  ...customCheckboxRadioSwitchStyle,
  socials: {
    marginTop: "0",
    position: "absolute",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  textCenter: {
    textAlign: "center"
  },
  inputAdornment: {
    marginRight: "18px",
    position: "relative"
  },
  inputAdornmentIcon: {
    color: grayColor[13]
  },
  form: {
    margin: "0"
  },
  infoArea: {
    padding: "0px 0px 20px !important"
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
    padding: "px 0",
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
  formContainer: {
    spacing: 3
  },
  rowContainer: {
    display: "flex",
    flexFlow: "row"
  },
  rowContainerSelect: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between"
  },
  container: {
    margin: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "75%"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "100%"
    },
    zIndex: "2",
    paddingTop: "6%"
  },
  customForm: {
    justifyContent: "space-between",
    flexWrap: "no-wrap"
  },

  contactContent: {
    paddingBottom: "40px",
    paddingTop: "40px"
  },
  bigMap: {
    height: "55vh",
    maxHeight: "550px",
    width: "100%",
    display: "block"
  },
  info: {
    paddingBottom: "10px",
    paddingTop: 0
  },
  textCenter: {
    textAlign: "center !important"
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

export default lenderSearchStyle;