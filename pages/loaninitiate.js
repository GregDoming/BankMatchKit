import React from "react";
import { useRouter } from "next/router";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import classNames from "classnames";
// @material-ui icons
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
// core components
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import Parallax from "components/Parallax/Parallax.js";
import LoanNavigationTabs from "components/NavigationTabs/LoanNavigationTabs.js";

import loanInitiateStyle from "assets/jss/nextjs-material-kit-pro/components/loanInitiateStyle.js";

const useStyles = makeStyles(loanInitiateStyle);

const loaninitiate = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
      {/* <Parallax image={require("assets/img/lenderbackground.jpg")} filter="dark" small></Parallax> */}
      <div className={classes.main}>
        <LoanNavigationTabs router={router} />
        <h2 className={classes.cardTitle}>PERSONAL INFORMATION</h2>
        <GridContainer className={classes.container}>
            <Card className={classes.cardSignup}>
              <h5 className={classes.cardTitle}>Loan Form</h5>
              <CardBody>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="emailMultiline"
                      label="Multiline"
                      multiline
                      rows="6"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="emailMultiline"
                      label="Multiline"
                      multiline
                      rows="6"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </GridItem>
              </CardBody>
            </Card>
        </GridContainer>
      </div>
    </div>
  );
};

export default loaninitiate;
