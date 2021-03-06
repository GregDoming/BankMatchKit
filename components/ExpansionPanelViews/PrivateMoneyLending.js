import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import LoanAmountOwner from "components/LoanAmountForm/LoanAmountOwner.js";
import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";
import LoanLimitsPrivateMoneyLending from "../LoanAmountForm/LoanLimitsPrivateMoneyLending";
import LoanParametersPrivateMoneyLending from "../LoanAmountForm/LoanParametersPrivateMoneyLending";

const useStyles = makeStyles(toggleFormStyle);

const PrivateMoneyLending = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleArrOne = [
    "purchase",
    "refinance",
    "cashOutRefinance",
    "renovationImprovement",
    "bridge"
  ];
  const toggleArrTwo = ["revolvingBusinessLOC1stPosition", "revolvingBusinessLOC2stPosition"];

  const { dispatch, state } = props;

  return (
    <div className={classes.outerContainer}>
      <div className={classes.customFlex}>
        <LoanLimitsPrivateMoneyLending dispatch={dispatch} state={state} />
      </div>
      <div className={classes.customFlex}>
        <LoanParametersPrivateMoneyLending dispatch={dispatch} state={state} />
      </div>
    </div>
  );
};

export default PrivateMoneyLending;
