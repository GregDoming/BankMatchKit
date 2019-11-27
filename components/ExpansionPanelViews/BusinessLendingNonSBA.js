import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import LoanAmountBusinessLending from "components/LoanAmountForm/LoanAmountBusinessLending.js";
import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";

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

  const handleFocus = event => {};

  const { onToggleChange } = props;
  const dispatch = useContext(FormDispatchContext);
  const state = useContext(FormStateContext);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.growFlex}>
        <Card>
            <div className={classes.topRowContainer}>
          <CardBody>
            <CardHeader className={classes.cardHeader} color="success">
              Business Loan Types
            </CardHeader>
              <div className={classes.toggleGridItem}>
                {toggleArrOne.map((toggleName, index) => {
                  return (
                    <div
                      key={"BusinessNon" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>
                        {toggleName.replace(/^\w/, c => c.toUpperCase())}
                      </label>
                      <ThreeToggleSwitch
                        onToggleChange={onToggleChange}
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
            <CardHeader className={classes.cardHeader} color="success">
              Collateral Types
            </CardHeader>
              <div>
                {toggleArrTwo.map((toggleName, index) => {
                  return (
                    <div
                      key={"BusinessNon2" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>
                        {toggleName.replace(/^\w/, c => c.toUpperCase())}
                      </label>
                      <ThreeToggleSwitch
                        onToggleChange={onToggleChange}
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
        <LoanAmountBusinessLending />
      </div>
    </div>
  );
};

export default BusinessLendingNonSBA;
