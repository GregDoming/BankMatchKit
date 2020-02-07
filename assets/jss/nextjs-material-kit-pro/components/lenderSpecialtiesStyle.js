import {
  container,
  description,
  cardTitle,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

const lenderSpecialtiesStyle = theme => ({
  container: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  columnContainer: {
    display: "flex",
    width: "100%",
    height: "20%",
    flexFlow: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
    
  },
  box: {
    flexGrow: 1,
  }
});

export default lenderSpecialtiesStyle;
