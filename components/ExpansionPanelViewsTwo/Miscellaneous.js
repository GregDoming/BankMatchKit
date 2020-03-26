import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import { FormStateContext } from "pages/authpagination.js";

const useStyles = makeStyles(toggleFormStyle);

const Miscellaneous = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArr = [
    "Church/Religious",
    "Industrial/Warehouse",
    "miscellaneousOffice",
    "Entertainment",
    "Maritime/Marina"
  ];
  const toggleNameArrTwo = [
    "Single Family Residential",
    "2-4 Unit",
    "Special Use",
    "Urban Infill",
    "Foreign-Property/Non US-Property"
  ];
  const toggleNameArrThree = [
    "Raw Land",
    "Farm/Agriculture",
    "Mixed Use",
    "Storage",
    "Leasehold Property"
  ];
  const toggleArrOne = [
    "miscellaneousChurchReligion",
    "miscellaneousIndustrialWarehouse",
    "miscellaneousOffice",
    "miscellaneousEntertainment",
    "miscellaneousMaritimeMarina"
  ];
  const toggleArrTwo = [
    "miscellaneousRawLand",
    "miscellaneousFarmAgriculture",
    "miscellaneousMixedUse",
    "miscellaneousStorage",
    "miscellaneousLeaseholdProperty"
  ];
  const toggleArrThree = [
    "miscellaneousSingleFamilyResidential",
    "miscellaneousTwoFourUnit",
    "miscellaneousSpecialUse",
    "miscellaneousUrbanInfill",
    "miscellaneousForeignPropertyNonUSProperty"
  ]

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
                      key={"miscellaneousOccupied" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>{toggleNameArr[index]}</label>
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
              <div className={classes.toggleGridItem}>
                {toggleArrTwo.map((toggleName, index) => {
                  return (
                    <div
                      key={"miscellaneousOccupied2" + index.toString()}
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
              <div className={classes.toggleGridItem}>
                {toggleArrThree.map((toggleName, index) => {
                  return (
                    <div
                      key={"miscellaneousOccupied3" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>{toggleNameArrThree[index]}</label>
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

export default Miscellaneous;
