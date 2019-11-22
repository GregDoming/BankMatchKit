import React, { useReducer } from "react";
import produce from "immer";
import { useImmerReducer } from "use-immer";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";


import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import LoanAmountFormOwner from "components/LoanAmountForm/LoanAmountFormOwner.js";


const useStyles = makeStyles(toggleFormStyle);

const OwnerOccupied = props => {
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

  const { onToggleChange } = props;

  return (

    <div className={classes.outerContainer}>
    <Card className={classes.growFlex} >
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
                    selected="UNKNOWN"
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
                    selected="UNKNOWN"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
    <LoanAmountFormOwner/>
    </div>
  );
};

export default OwnerOccupied;
