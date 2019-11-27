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
import SBASevenALoans from "components/ExpansionPanelViews/SBASevenALoans.js";
import ConstructionNonSBARealEstate from "components/ExpansionPanelViews/ConstructionNonSBARealEstate.js";
import BusinessLendingNonSBA from "components/ExpansionPanelViews/BusinessLendingNonSBA.js";
import NonCommercialResidentialLending from "components/ExpansionPanelViews/NonCommercialResidentialLending.js";
import SBAFiveFour from "components/ExpansionPanelViews/SBAFiveFour";

const useStyles = makeStyles(toggleFormStyle);

const ToggleForm = props => {
  const classes = useStyles();

  const { onToggleChange, toggleFormState, handleInput, handleNumberInput } = props;

  const componentArr = [
    <OwnerOccupied
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <InvestmentNon
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <SBASevenALoans
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <SBAFiveFour
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <ConstructionNonSBARealEstate
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <BusinessLendingNonSBA
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />,
    <NonCommercialResidentialLending
      onToggleChange={onToggleChange}
      toggleFormState={toggleFormState}
    />
  ];

  const expansionPanelArr = [
    "Owner Occupied",
    "Investment (Non-SBA Real Estate)",
    "SBA 7a Loans",
    "SBA 504 Loans",
    "Construction (Non-SBA Real Estate)",
    "Business Lending (Non-SBA)",
    "Non-Commercial Residential Lending (Real Estate)"
  ];

  return (
    <div className={classes.container}>
      {componentArr.map((component, index) => {
        return (
          <ExpansionPanel key={expansionPanelArr[index]} TransitionProps={{ unmountOnExit: true }} >
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

export default ToggleForm;
