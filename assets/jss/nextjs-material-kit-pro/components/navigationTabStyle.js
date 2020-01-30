import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  blackColor,
  whiteColor,
  secondaryColor,
  grayColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";
import { setNormalizedScrollLeft } from "normalize-scroll-left";

const navigationTabsStyle = theme => ({
  root: {
    backgroundColor: grayColor[0],
  },
  buttonStyle: {
    color: primaryColor[1],
    "&:hover": {
      color: secondaryColor[0]
    }
  },
  lighten: {
    opacity: ".5",
    marginLeft: "20px"
  },
  stickyContainer: {
    position: "sticky",
    top: 0,
    zIndex: 9999999
  }
});

export default navigationTabsStyle;