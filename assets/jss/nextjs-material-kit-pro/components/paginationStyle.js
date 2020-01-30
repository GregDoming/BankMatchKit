import {
  mainRaised,
  grayColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  whiteColor,
  dangerColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

const paginationStyle = {
  main: {
    ...mainRaised,
    background: grayColor[6],
    position: "relative",
    zIndex: "3",
    marginRight: "8%",
    marginLeft: "8%",
    marginTop: "-40vh"
  },
  pagination: {
    display: "flex",
    paddingLeft: "0",
    listStyle: "none",
    borderRadius: "0.25rem"
  },
  snackbar: {
    color: "red"
  },
  parallax: {
    position: "absolute",
    top: "50px",
    backgroundColor: "red"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    float: "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: grayColor[0]
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: grayColor[2],
      borderColor: grayColor[6]
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  customButton: {
    boxShadow:
      "0 4px 5px 0 rgba(" +
      hexToRgb(dangerColor[2]) +
      ", 0.14), 0 1px 10px 0 rgba(" +
      hexToRgb(dangerColor[2]) +
      ", 0.12), 0 2px 4px -1px rgba(" +
      hexToRgb(dangerColor[2]) +
      ", 0.2)",
    backgroundColor: dangerColor[3],
    "&:hover": {
      backgroundColor: dangerColor[2]
    },
    "&:focus": {
      backgroundColor: dangerColor[3]
    },

  },
  rowContainer: {
    position: "sticky",
    top: 0,
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-end",
    marginRight: ".2%",
    marginLeft: "90%",
    zIndex: 99999999999
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: primaryColor[0],
      borderColor: primaryColor[0],
      color: whiteColor,
      boxShadow:
        "2px 8px 5px 2px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.14), 0 1px 10px 0 rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.12), 0 2px 4px -1px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: infoColor[0],
      borderColor: infoColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 5px 0 rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.14), 0 1px 10px 0 rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.12), 0 2px 4px -1px rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: successColor[0],
      borderColor: successColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 5px 0 rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.14), 0 1px 10px 0 rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.12), 0 2px 4px -1px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: warningColor[0],
      borderColor: warningColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 5px 0 rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.14), 0 1px 10px 0 rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.12), 0 2px 4px -1px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: dangerColor[0],
      borderColor: dangerColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 5px 0 rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.14), 0 1px 10px 0 rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.12), 0 2px 4px -1px rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: grayColor[10],
      cursor: "not-allowed",
      backgroundColor: whiteColor,
      borderColor: grayColor[6]
    }
  }
};

export default paginationStyle;
