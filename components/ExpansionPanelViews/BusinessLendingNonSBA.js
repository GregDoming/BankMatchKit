import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import LoanAmountBusinessLending from "components/LoanAmountForm/LoanAmountBusinessLending.js";

const useStyles = makeStyles(toggleFormStyle);

const BusinessLendingNonSBA = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArrOne = [
    "Business Credit Card",
    "Business Expansion No RE",
    "Equipment Financing",
    "Business Acquisitions Mergers",
    "Franchise Purchases",
    "Revolving BLOC First Position",
    "Revolving BLOC Second Position"
  ];
  const toggleNameArrTwo = [
    "Accounts Receivable",
    "Cross Collateral",
    "Equipment",
    "Invoice Financing",
    "Irrevocable Trust",
    "Projection Based",
    "Purchase Order Financing",
    "Real Estate",
    "Stock Savings",
    "Stated Income"
  ];
  const toggleArrOne = [
    "businessCreditCard",
    "businessExpansionnoRE",
    "equipmentFinancing",
    "businessAcquisitionsMergers",
    "franchisePurchases",
    "revolvingBLOCFirstPosition",
    "revolvingBLOCSecondPosition"
  ];
  const toggleArrTwo = [
    "accountsReceivable",
    "crossCollateral",
    "equipment",
    "invoiceFinancing",
    "irrevocableTrust",
    "projectionBased",
    "purchaseOrderFinancing",
    "realEstate",
    "stockSavings",
    "statedIncome"
  ];

  const { dispatch, state } = props;

  return (
    <div className={classes.outerContainer}>
      <div className={classes.growFlex}>
        <Card>
          <div className={classes.topRowContainer}>
            <CardBody>
              <CardHeader className={classes.cardHeader}>Business Loan Types</CardHeader>
              <div className={classes.toggleGridItem}>
                {toggleArrOne.map((toggleName, index) => {
                  return (
                    <div key={"BusinessNon" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>{toggleNameArrOne[index]}</label>
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
            </CardBody>
            <CardBody>
              <CardHeader className={classes.cardHeader}>Collateral Types</CardHeader>
              <div>
                {toggleArrTwo.map((toggleName, index) => {
                  return (
                    <div key={"BusinessNon2" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>{toggleNameArrTwo[index]}</label>
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
            </CardBody>
          </div>
        </Card>
      </div>
      <div className={classes.shrinkFlex}>
        <LoanAmountBusinessLending dispatch={dispatch} state={state} />
      </div>
    </div>
  );
};

export default BusinessLendingNonSBA;
