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

  const { onToggleChange } = props;
  const dispatch = useContext(FormDispatchContext);
  const state = useContext(FormStateContext);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.growFlex}>
        <Card>
          <CardBody>
            <CardHeader className={classes.cardHeader} color="success">
              Purpose
            </CardHeader>
            <div className={classes.topRowContainer}>
              <div className={classes.toggleGridItem}>
                {toggleArrOne.map((toggleName, index) => {
                  return (
                    <div key={"OwnerOccupied" + index.toString()} className={classes.rowContainer}>
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
              <div>
                {toggleArrTwo.map((toggleName, index) => {
                  return (
                    <div key={"OwnerOccupied2" + index.toString()} className={classes.rowContainer}>
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
            </div>
          </CardBody>
        </Card>
      </div>
      <div className={classes.shrinkFlex}>
        <LoanAmountSBASeven />
      </div>
    </div>
  );
};

export default SBASevenALoans;