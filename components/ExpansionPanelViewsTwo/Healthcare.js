import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";
import { FormStateContext } from "pages/authpagination.js";

const useStyles = makeStyles(toggleFormStyle);

const HealthCare = props => {
  const classes = useStyles();

  const valuesArr = ["YES", "UNKNOWN", "NO"];
  const toggleNameArrOne = ["Doctor's Office", "Hospital"];
  const toggleArrOne = ["healthcareDoctorsOffice", "healthcareHospital"];
  const { dispatch, state } = props;

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
                    <div key={"Healthcare" + index.toString()} className={classes.rowContainer}>
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
              <div>
                <div key={"Healthcare2"} className={classes.rowContainer}>
                  <label className={classes.labelStyle}>Medical Lab</label>
                  <ThreeToggleSwitch
                    dispatch={dispatch}
                    state={state}
                    values={valuesArr}
                    id={"healthcareMedicalLab"}
                    selected={state["healthcareMedicalLab"]}
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default HealthCare;
