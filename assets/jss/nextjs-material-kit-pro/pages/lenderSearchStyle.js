import {
  primaryColor,
  grayColor,
  secondaryColor,
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
  main: {
    ...mainRaised,
    background: grayColor[6],
    position: "relative",
    zIndex: "3",
    marginRight: "8%",
    marginLeft: "8%",
    marginTop: "-40vh"
  },
  loading: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  body: {
    backgroundColor: "#d0e6f6"
  },
  addButton: {
    color: primaryColor[1]
  },
  customRaised: {
    ...mainRaised,
    marginTop: "105px",
    marginBottom: "0px"
  },
  spaceTop: {
    marginTop: "15%"
  },
  rowContainer: {
    display: "flex",
    flexFlow: "row"
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
  rowContainer: {
    top: 80,
    display: "flex",
    flexFlow: "row",
    position: "sticky",
    zIndex: 999,
    marginLeft: "4%"
  },
  highButton: {
    boxShadow:
    "2px 8px 6px 2px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.14), 0 1px 10px 0 rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.12), 0 2px 4px -1px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.2)",
    alignSelf: "stretch",
    width: "100%"
  },
  highButtonShort: {
    boxShadow:
    "2px 8px 6px 2px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.14), 0 1px 10px 0 rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.12), 0 2px 4px -1px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.2)",
    alignSelf: "stretch",
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
    width: "100%",
    overFlow: "visible"
  },
  cardCompanyResult: {
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
    width: "100%",
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
    color: primaryColor,
    textDecoration: "none",
    fontWeight: "700",
    marginLeft: "5%",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
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
