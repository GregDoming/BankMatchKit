import {
  cardTitle,
  primaryColor,
  secondaryColor,
  hexToRgb,
  whiteColor
} from "assets/jss/nextjs-material-kit-pro.js";

const lenderSpecialtiesBoxesStyle = theme => ({
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    width: "70%",
    borderStyle: "solid",
    borderColor: primaryColor[1],
    borderWidth: "1px",
    paddingLeft: "3%",
    paddingRight: "2%",
    marginTop: "2%",
    marginBot: "2%"
  },
  cardTitle: {
    ...cardTitle,
    textDecoration: "none",
    textAlign: "center !important",
    verticalAlign: "top",
    padding: "0",
    margin: "0"
  },
  highlight: {
    color: secondaryColor[1],
    "&:hover": {
      color: secondaryColor[0]
    }
  },
  outline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    width: "70%",
    borderStyle: "dotted",
    borderColor: primaryColor[0],
    borderWidth: "2px",
    paddingLeft: "3%",
    paddingRight: "2%",
    marginTop: "2%",
    marginBot: "2%",
    borderRadius: "25px",
    "&:hover": {
      boxShadow:
        "2px 8px 6px 2px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.14), 0 1px 10px 0 rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.12), 0 2px 4px -1px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.2)",
      backgroundColor: primaryColor[0]
    }
  }
});

export default lenderSpecialtiesBoxesStyle;
