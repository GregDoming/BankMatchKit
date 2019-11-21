import React, { useReducer } from "react";
import produce from "immer";
import { useImmerReducer } from "use-immer";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Slider from "@material-ui/core/Slider";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";

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

  const { onToggleChange, handleSubmit } = props;

  return (
    <Card>
      <form >
      <CardBody>
        <div className={classes.topRowContainer}>
          <div className={classes.toggleGridItem}>
            {toggleArrOne.map((toggleName, index) => {
              return (
                <div key={index} className={classes.rowContainer}>
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
                <div key={index} className={classes.rowContainer}>
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

      </form>
    </Card>
  );
};

export default OwnerOccupied;
