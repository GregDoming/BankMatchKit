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
import FinancialCreditIssuesQualifiers from "components/ExpansionPanelViewsThree/FinancialCreditIssuesQualifiers.js";
import MiscellaneousQualifiers from "components/ExpansionPanelViewsThree/MiscellaneousQualifiers.js";

const useStyles = makeStyles(toggleFormStyle);

const ToggleFormThree = props => {
  const classes = useStyles();

  const { state, dispatch } = props;

  const componentArr = [
    <FinancialCreditIssuesQualifiers dispatch={dispatch} state={state} />,
    <MiscellaneousQualifiers dispatch={dispatch} state={state} />
  ];

  const expansionPanelArr = ["Financial and/or Credit Issues", "Miscellaneous"];

  return (
    <div className={classes.container}>
      {componentArr.map((component, index) => {
        return (
          <ExpansionPanel
            className={classes.expansionPanel}
            key={"ToggleFormTwo" + expansionPanelArr[index]}
            TransitionProps={{ unmountOnExit: true }}
          >
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

export default ToggleFormThree;
