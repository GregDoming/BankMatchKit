import {
  container,
  title,
  grayColor,
  secondaryColor
} from "assets/jss/nextjs-material-kit-pro.js";
import headerLinksStyle from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const navbarsStyle = theme => ({
  container,
  ...headerLinksStyle(theme),
  section: {
    padding: "70px 0",
    paddingBottom: "0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0",
      zIndex: "unset"
    }
  },
  navigation: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    [theme.breakpoints.down("md")]: {
      color: grayColor[0],
      marginLeft: "20px !important"
    },
    margin: "0 !important",
    paddingTop: "7px",
    paddingBottom: "7px"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    padding: "0px",
    borderRadius: "50%",
    marginLeft: "5px"
  },
  navButton: {
    position: "relative",
    // background: "transparent",
    color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        // background: "transparent"
      },
    textColor: "white",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& $icons": {
      marginRight: "3px"
    }
  },
  navLink: {
    color: "white",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: secondaryColor,
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px"
    }
  },
  buttonLink: {
    backgroundColor: "transparent",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    color: "white",
    "&:hover,&:focus": {
      color: "blue",
      backgroundColor: "transparent",
    },
  },
  customButton: {
    color: "white",
    "&:hover,&:focus": {
      color: secondaryColor,
      backgroundColor: "transparent",
    },
  },
  navLinkActive: {
    color: "white",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit"
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px"
    }
  },
  customStyle: {
    backgroundColor: "black"
  }
});

export default navbarsStyle;
