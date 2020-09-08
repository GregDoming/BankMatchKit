import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import LoanAmountSBASeven from "components/LoanAmountForm/LoanAmountSBASeven.js";
import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";

const useStyles = makeStyles(toggleFormStyle);

const SBASevenALoans = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArrOne = [
    "SBA Express",
    "Export Express WC",
    "International Trade",
    "Seasonal CAP Lines",
    "Owner Occupied Commercial",
    "Debt Refinance"
  ];
  const toggleNameArrTwo = [
    "Contract CAP Lines",
    "Builder's CAP Lines",
    "Working CAP Lines",
    "SBA Micro Loan",
    "Business Acquisition"
  ];
  const toggleArrOne = [
    "sbaExpress",
    "exoprtExpressWC",
    "internationalTrade",
    "seasonalCAPLines",
    "ownerOccupiedCommercial",
    "debtRefinance"
  ];
  const toggleArrTwo = [
    "contractCAPLines",
    "buildersCAPLines",
    "workingCAPLines",
    "sbaMicroLoan",
    "businessAcquisition"
  ];

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
              SBA 7a Loan Types
            </CardHeader>
            <div className={classes.topRowContainer}>
              <div className={classes.toggleGridItem}>
                {toggleArrOne.map((toggleName, index) => {
                  return (
                    <div key={"SBASevenA" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>
                      {toggleNameArrOne[index]}
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
                    <div key={"SBASevenA2" + index.toString()} className={classes.rowContainer}>
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
        <LoanAmountSBASeven dispatch={dispatch} state={state} />
      </div>
    </div>
  );
};

export default SBASevenALoans;
