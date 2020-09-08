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
  const toggleNameArrOne = [
    "Church/Religious",
    "Industrial/Warehouse",
    "miscellaneousOffice",
    "Entertainment",
    "Maritime/Marina",
    "Raw Land",
    "Farm/Agriculture",
  ];
  const toggleNameArrTwo = [
    "Single Family Residential",
    "2-4 Unit",
    "Special Use",
    "Urban Infill",
    "Foreign-Property/Non US-Property",
    "Mixed Use",
    "Storage",
    "Leasehold Property"
  ];
  const toggleNameArrThree = [

    
  ];
  const toggleArrOne = [
    "miscellaneousChurchReligion",
    "miscellaneousIndustrialWarehouse",
    "miscellaneousOffice",
    "miscellaneousEntertainment",
    "miscellaneousMaritimeMarina",
    "miscellaneousSingleFamilyResidential",
    "miscellaneousTwoFourUnit",
  ];
  const toggleArrTwo = [
    "miscellaneousRawLand",
    "miscellaneousFarmAgriculture",
    "miscellaneousMixedUse",
    "miscellaneousStorage",
    "miscellaneousLeaseholdProperty",
    "miscellaneousSpecialUse",
    "miscellaneousUrbanInfill",
    "miscellaneousForeignPropertyNonUSProperty"
  ];
  const toggleArrThree = [


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
                      <label className={classes.labelStyle}>{toggleNameArrOne[index]}</label>
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
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Miscellaneous;
