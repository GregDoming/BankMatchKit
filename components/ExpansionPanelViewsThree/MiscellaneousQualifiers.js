import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";

const useStyles = makeStyles(toggleFormStyle);

const MiscellaneousQualifiers = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArr = [
    "1031 Exchange",
    "Non-profit",
    "Non-recourse",
    "Factoring",
    "Cannabis Related",
    "Start Up"
  ];
  const toggleNameArrTwo = [
    "Asset Based lending (O.O.)",
    "Residential Bridge",
    "Interest Only (indefinite)",
    "Interest Only into Term",
    "Asset Based lending (Inv.)",
    "Deferred Maintenance"
  ];
  const toggleArrOne = [
    "miscellaneousQualifiersExchange",
    "miscellaneousQualifiersNonProfit",
    "miscellaneousQualifiersNonRecourse",
    "miscellaneousQualifiersFactoring",
    "miscellaneousQualifiersCannabisRelated",
    "miscellaneousQualifiersStartUp"
  ];
  const toggleArrTwo = [
    "multiUnitHotelMotelNoFlag",
    "miscellaneousQualifiersResidentialBridge",
    "miscellaneousQualifiersInterestOnlyIndefinite",
    "miscellaneousQualifiersInterestOnlyIntoTerm",
    "miscellaneousQualifiersAssestBasedLending",
    "miscellaneousQualifiersDeferredMaintenance"
  ];
  const depositNameArr = ["Relationship Pricing", "Required Deposit Relationship"];
  const depositRelationshipArr = [
    "miscellaneousQualifiersRelationshipPricing",
    "miscellaneousQualifiersRequiredDepositRelationship"
  ];
  const lienPositionNameArr = [
    "First Lien Position",
    "Second Lien Position",
    "Subordinate Financing"
  ];
  const lienPositionArr = [
    "miscellaneousQualifiersFirstLienPosition",
    "miscellaneousQualifiersSecondLientPosition",
    "miscellaneousQualifiersSubordinateFinancing"
  ];

  const { state, dispatch } = props;

  return (
    <div className={classes.outerContainer}>
      <div className={classes.growFlex}>
        <Card>
          <CardBody>
            <CardHeader className={classes.cardHeader} >
              Miscellaneous Criteria
            </CardHeader>
            <div className={classes.topRowContainer}>
              <div className={classes.toggleGridItem}>
                {toggleArrOne.map((toggleName, index) => {
                  return (
                    <div
                      key={"miscellaneousQualifiers" + index.toString()}
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
              <div>
                {toggleArrTwo.map((toggleName, index) => {
                  return (
                    <div
                      key={"miscellaneousQualifiers2" + index.toString()}
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
        <div>
          <Card>
            <CardBody>
              <CardHeader className={classes.cardHeader} >
                Deposit Relationship
              </CardHeader>
              {depositRelationshipArr.map((toggleName, index) => {
                return (
                  <div
                    key={"miscellaneousQualifiers3" + index.toString()}
                    className={classes.rowContainer}
                  >
                    <label className={classes.labelStyle}>{depositNameArr[index]}</label>
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
            </CardBody>
          </Card>
        </div>
        <Card>
          <CardBody>
            <CardHeader className={classes.cardHeader} >
              Lien Position
            </CardHeader>
            {lienPositionArr.map((toggleName, index) => {
              return (
                <div key={"OwnerOccupied2" + index.toString()} className={classes.rowContainer}>
                  <label className={classes.labelStyle}>{lienPositionNameArr[index]}</label>
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default MiscellaneousQualifiers;
