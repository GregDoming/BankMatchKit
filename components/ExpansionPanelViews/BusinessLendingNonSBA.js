import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import LoanAmountFormOwner from "components/LoanAmountForm/LoanAmountOwner.js";

const useStyles = makeStyles(toggleFormStyle);

const BusinessLendingNonSBA = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleArrOne = [
    "businessCreditCard",
    "businessExpansionnoRE",
    "equipmentFinancing",
    "businessAcquisitionsMergers",
    "franchisePurchases",
    "revolvingBLOCFirstPosition",
    "revolvingBLOCSecondPosition",
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
    "stockSavings"
  ];

  const { onToggleChange, toggleFormState } = props;

  

  return (
    <Card>
      <CardBody>
        <div className={classes.topRowContainer}>
          <div className={classes.toggleGridItem}>
            {toggleArrOne.map((toggleName, index) => {
              return (
                <div key={"BusinessLending" + index.toString()} className={classes.rowContainer}>
                  <label className={classes.labelStyle}>{toggleName.replace(/^\w/, c => c.toUpperCase())}</label>
                  <ThreeToggleSwitch
                    onToggleChange={onToggleChange}
                    values={valuesArr}
                    id={toggleName}
                    selected={toggleFormState[toggleName]}
                  />
                </div>
              );
            })}
          </div>
          <div>
            {toggleArrTwo.map((toggleName, index) => {
              return (
                <div key={"BusinessLending2" + index.toString()} className={classes.rowContainer}>
                  <label className={classes.labelStyle}>{toggleName.replace(/^\w/, c => c.toUpperCase())}</label>
                  <ThreeToggleSwitch
                    onToggleChange={onToggleChange}
                    values={valuesArr}
                    id={toggleName}
                    selected={toggleFormState[toggleName]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BusinessLendingNonSBA;
