import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";

const useStyles = makeStyles(toggleFormStyle);

const SbaSevenALoans = props => {
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

  const { onToggleChange } = props;

  

  return (
    <Card>
      <CardBody>
        <div className={classes.topRowContainer}>
          <div className={classes.toggleGridItem}>
            {toggleArrOne.map((toggleName, index) => {
              return (
                <div key={"SBASeven" + index.toString()} className={classes.rowContainer}>
                  <label className={classes.labelStyle}>{toggleName.replace(/^\w/, c => c.toUpperCase())}</label>
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
                <div key={"SBASeven2" + index.toString()} className={classes.rowContainer}>
                  <label className={classes.labelStyle}>{toggleName.replace(/^\w/, c => c.toUpperCase())}</label>
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
  );
};

export default SbaSevenALoans;
