import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";

const useStyles = makeStyles(toggleFormStyle);

const FinancialCreditIssuesQualifiers = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArrOne = [
    "Bankruptcy",
    "Non-US Citizen/E2",
    "Missed Payments",
    "Foreclosure",
    "Short Sale",
    "Stated Income"
  ];
  const toggleNameArrTwo = ["Tax Liens", "Low FICO", "Low Liquidity", "Judgements", "Gift Funds"];
  const toggleArrOne = [
    "financialCreditIssueBankruptcy",
    "financialCreditIssueNonUSCitizen",
    "financialCreditIssueMissedPayments",
    "financialCreditIssueForeclosure",
    "financialCreditIssueShortSale",
    "financialCreditIssueStatedIncome"

  ];
  const toggleArrTwo = [
    "financialCreditIssueTaxLiens",
    "financialCreditIssueLowFICO",
    "financialCreditIssueLowLiquidity",
    "financialCreditIssueJudgements",
    "financialCreditIssueGiftFunds"

  ];

  const { state, dispatch } = props;

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
                    <div
                      key={"financialCredit" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>{toggleNameArrOne[index]}</label>
                      <ThreeToggleSwitch
                        dispatch={dispatch}
                        state={state}
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
                    <div
                      key={"financialCredit2" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>{toggleNameArrTwo[index]}</label>
                      <ThreeToggleSwitch
                        dispatch={dispatch}
                        state={state}
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
    </div>
  );
};

export default FinancialCreditIssuesQualifiers;
