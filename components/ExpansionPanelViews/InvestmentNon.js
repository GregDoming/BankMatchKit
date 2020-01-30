import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import LoanAmountInvestmentNon from "components/LoanAmountForm/LoanAmountInvestmentNon.js";
import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";

const useStyles = makeStyles(toggleFormStyle);

const InvestmentNon = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArr = [
    "Purchase",
    "Refinance",
    "Cashout Refinance",
    "Renovation Improvement",
    "Bridge"
  ]
  const toggleNameArrTwo = [
    "Revolving Business LOC First Position",
    "Revolving Business LOC Second Position"
  ];
  const toggleArrOne = [
    "investmentPurchase",
    "investmentRefinance",
    "investmentCashOutRefinance",
    "investmentRenovationImprovement",
    "investmentBridge"
  ];
  const toggleArrTwo = ["investmentRevolvingBusinessLOC1stPosition", "investmentRevolvingBusinessLOC2stPosition"];

  const handleFocus = event => {};

  const { dispatch, state } = props;

  // const dispatch = useContext(FormDispatchContext);
  // const state = useContext(FormStateContext);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.growFlex}>
        <Card>
          <CardBody>
            <CardHeader className={classes.cardHeader} >
              Purpose
            </CardHeader>
            <div className={classes.topRowContainer}>
              <div className={classes.toggleGridItem}>
                {toggleArrOne.map((toggleName, index) => {
                  return (
                    <div key={"InvestmentNon" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>
                      {toggleNameArr[index]}
                      </label>
                      <ThreeToggleSwitch
                        dispatch={dispatch}
                        values={valuesArr}
                        id={toggleName}
                        selected={state[toggleName]}
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                {toggleArrTwo.map((toggleName, index) => {
                  return (
                    <div key={"InvestmentNon2" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>
                      {toggleNameArrTwo[index]}
                      </label>
                      <ThreeToggleSwitch
                        dispatch={dispatch}
                        values={valuesArr}
                        id={toggleName}
                        selected={state[toggleName]}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className={classes.shrinkFlex}>
        <LoanAmountInvestmentNon dispatch={dispatch} state={state}/>
      </div>
    </div>
  );
};

export default InvestmentNon;
