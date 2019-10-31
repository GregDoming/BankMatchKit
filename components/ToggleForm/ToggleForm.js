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
import OwnerOccupied from "components/ExpansionPanelViews/OwnerOccupied.js";
import InvestmentNon from "components/ExpansionPanelViews/InvestmentNon.js";

const useStyles = makeStyles(toggleFormStyle);
const intialState = {
  purchase: "NA",
  refinance: "NA",
  cashOutRefinance: "NA",
  renovationImprovement: "NA",
  bridge: "NA",
  revolvingBusinessLOC1stPosition: "NA",
  revolvingBusinessLOC2stPosition: "NA",
  investmentPurchase: "NA",
  investmentRefinance: "NA",
  investmentCashOutRefinance: "NA",
  investmentRenovationImprovement: "NA",
  investmentBridge: "NA",
  investmentRevolvingBusinessLOC1stPosition: "NA",
  investmentRevolvingBusinessLOC2stPosition: "NA"
};

const toggleReducer = (draft, action) => {
  switch (action.type) {
    case "toggle": {
      draft[event.target.id] = event.target.textContent;
      return;
    }
    default:
      break;
  }
  return state;
};

const ToggleForm = () => {
  const classes = useStyles();

  const onToggleChange = (event, val) => {
    event.preventDefault();
    dispatch({ type: "toggle" });
  };

  const [state, dispatch] = useImmerReducer(toggleReducer, intialState);
  const {
    investmentPurchase,
    investmentRefinance,
    investmentCashOutRefinance,
    investmentRenovationImprovement,
    investmentBridge,
    investmentRevolvingBusinessLOC1stPosition,
    investmentRevolvingBusinessLOC2stPosition,
    purchase,
    refinance,
    cashOutRefinance,
    renovationImprovement,
    bridge,
    revolvingBusinessLOC1stPosition,
    revolvingBusinessLOC2stPosition
  } = state;

  //Need to apply styling to toggle form to account for mobile.

  return (
    <div className={classes.container}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Owner Occupied (Non-SBA Real Estate)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <OwnerOccupied onToggleChange={onToggleChange} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Investment (Non-SBA Real Estate)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <InvestmentNon onToggleChange={onToggleChange} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>SBA 7a Loans</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Construction (Non-SBA Real Estate)</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Business Lending (Non-SBA)</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Non-Commercial Residential Lending (Real Estate)
          </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Private Money Lending</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>SBA 7a Loans</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
};

export default ToggleForm;
