import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";

const useStyles = makeStyles(toggleFormStyle);

const SBASevenALoans = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleArrOne = [
    "SBAFiveFourFirstDeedRealEstate",
    "SBAFiveFourFirstDeedRealEquipment",
    "SBAFiveFourRefinanceProgram",
  ];
  const toggleArrTwo = [
    "SBAFiveFourFirstDeedRealEstateBridge",
    "SBAFiveFourFirstDeedEquipmentBridge",
    "SBAFiveFourRefinanceBridge",
  ];
  const loanAmountArr = [
    "SBAFiveFourMinumumLoanAmount",
    "SBAFiveFourMaximumLoanAmount",
    "SBAFiveFourMaxLTVPercent",
    "SBAFiveFourMinDCR"
  ]

  const { onToggleChange, toggleFormState } = props;

  return (
    <div className={classes.outerContainer}>
      <Card className={classes.growFlex}>
        <CardBody>
          <CardHeader className={classes.cardHeader} color="success">
            Purpose
          </CardHeader>
          <div className={classes.topRowContainer}>
            <div className={classes.toggleGridItem}>
              {toggleArrOne.map((toggleName, index) => {
                return (
                  <div key={"SBAFive" + index.toString()} className={classes.rowContainer}>
                    <label className={classes.labelStyle}>
                      {toggleName.replace(/^\w/, c => c.toUpperCase())}
                    </label>
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
                  <div key={"SBAFiveFour" + index.toString()} className={classes.rowContainer}>
                    <label className={classes.labelStyle}>
                      {toggleName.replace(/^\w/, c => c.toUpperCase())}
                    </label>
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
    </div>
  );
};

export default SBAFiveFour;
