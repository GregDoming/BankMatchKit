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
    backgroundColor: grayColor[0]
  },
  buttonStyle: {
    color: primaryColor[1],
    "&:hover": {
      color: secondaryColor[0]
    }
  }
});

export default navigationTabsStyle;