import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import { FormStateContext } from "pages/authpagination.js";

const useStyles = makeStyles(toggleFormStyle);

const MultiUnitLiving = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArr = [
    "Assisted Living",
    "Condo / Town Home",
    "Fraternity/Sorority",
    "Hotel/Motel (Flag)"
  ];
  const toggleNameArrTwo = [
    "Hotel/Motel (Non-Flag)",
    "Mobile Home Park",
    "Multifamily (5 of more)",
    "Student Housing"
  ];
  const toggleArrOne = [
    "multiUnitAssisstedLiving",
    "multiUnitCondoTownHome",
    "multiUnitFraternitySorority",
    "multiUnitHotelMotelFlag"
  ];
  const toggleArrTwo = [
    "multiUnitHotelMotelNoFlag",
    "multiUnitMobileHomePark",
    "multiUnitMultiFamily",
    "multiUnitStudentHousing"
  ];

  const { onToggleChange } = props;
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
                    <div key={"multiUnitOccupied" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>{toggleNameArr[index]}</label>
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
                    <div key={"multiUnitOccupied2" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>{toggleNameArrTwo[index]}</label>
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
    </div>
  );
};

export default MultiUnitLiving;