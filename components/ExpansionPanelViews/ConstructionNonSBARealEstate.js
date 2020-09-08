import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import LoanAmountConstructionNon from "components/LoanAmountForm/LoanAmountConstructionNon.js";

const useStyles = makeStyles(toggleFormStyle);

const ConstructionNonSBARealEstate = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArrOne = [
    "Investment",
    "Renovation",
    "ResidentialLongterm",
    "ResidentialFixandFlip",
    "GroundUpSpecHome",
    "OwnerUser",
    "TractHomes",
    "Apartments",
    "ConstructiontoPermanent",
    "LandDevelopment",
    "Residential",
    "PUD"
  ];
  const toggleNameArrTwo = [
    "Purchase With Lane",
    "Entitlements",
    "Mini-perm",
    "Leased Land",
    "Broken Project",
    "Manufactured Home Single Wide",
    "Manufactured Home Double Wide"
  ];
  const toggleArrOne = [
    "investment",
    "renovation",
    "residentialLongterm",
    "residentialFixandFlip",
    "groundUpSpecHome",
    "ownerUser",
    "tractHomes",
    "apartments",
    "constructiontoPermanent",
    "landDevelopment",
    "residential",
    "PUD"
  ];
  const toggleArrTwo = [
    "purchaseWithLand",
    "entitlements",
    "miniperm",
    "leasedLand",
    "brokenProject",
    "manufacturedHomeSingleWide",
    "manufacturedHomeDoubleWide"
  ];

  const handleFocus = event => {};

  const { dispatch, state } = props;

  return (
    <div className={classes.outerContainer}>
      <div className={classes.growFlex}>
        <Card>
          <div className={classes.topRowContainer}>
            <CardBody>
              <CardHeader className={classes.cardHeader}>Purpose</CardHeader>
              <div className={classes.toggleGridItem}>
                {toggleArrOne.map((toggleName, index) => {
                  return (
                    <div
                      key={"ConstructionNon" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>{toggleNameArrOne[index]}</label>
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
            </CardBody>
            <CardBody>
              <CardHeader className={classes.cardHeader}>Qualifiers</CardHeader>
              <div>
                {toggleArrTwo.map((toggleName, index) => {
                  return (
                    <div
                      key={"ConstructionNon2" + index.toString()}
                      className={classes.rowContainer}
                    >
                      <label className={classes.labelStyle}>{toggleNameArrTwo[index]}</label>
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
            </CardBody>
          </div>
        </Card>
      </div>
      <div className={classes.shrinkFlex}>
        <LoanAmountConstructionNon dispatch={dispatch} state={state} />
      </div>
    </div>
  );
};

export default ConstructionNonSBARealEstate;
