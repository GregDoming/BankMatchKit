import React, { useReducer } from "react";
import produce from "immer";
import { useImmerReducer } from "use-immer";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import toggleFormStyle from "assets/jss/nextjs-material-kit-pro/components/toggleFormStyle.js";
import Automotive from "components/ExpansionPanelViewsTwo/Automotive.js";
import MultiUnitLiving from "components/ExpansionPanelViewsTwo/MultiUnitLiving.js";
import Miscellaneous from "components/ExpansionPanelViewsTwo/Miscellaneous.js";
import Retail from "components/ExpansionPanelViewsTwo/Retail.js";
import Healthcare from "components/ExpansionPanelViewsTwo/Healthcare.js";

const useStyles = makeStyles(toggleFormStyle);

const ToggleFormTwo = props => {
  const classes = useStyles();

  const { onToggleChange, toggleFormState } = props;

  const componentArr = [
    <MultiUnitLiving
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <Automotive
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <Healthcare
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <Retail
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <Miscellaneous
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />
  ];

  const expansionPanelArr = [
    "Multi-Unit Living",
    "Automotive",
    "Healthcare",
    "Retail",
    "Miscellaneous",
  ];

  return (
    <div className={classes.container}>
      {componentArr.map((component, index) => {
        return (
          <ExpansionPanel key={"ToggleFormTwo" + expansionPanelArr[index]} TransitionProps={{ unmountOnExit: true }} >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{expansionPanelArr[index]}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{component}</ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default ToggleFormTwo;
