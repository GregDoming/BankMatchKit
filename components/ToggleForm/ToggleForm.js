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
import SbaSevenALoans from "components/ExpansionPanelViews/SbaSevenALoans.js";
import ConstructionNonSBARealEstate from "components/ExpansionPanelViews/ConstructionNonSBARealEstate.js";
import BusinessLendingNonSBA from "components/ExpansionPanelViews/BusinessLendingNonSBA.js";

const useStyles = makeStyles(toggleFormStyle);

const ToggleForm = (props) => {
  const classes = useStyles();

  const { onToggleChange } = props;

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
        <ExpansionPanelDetails>
          <SbaSevenALoans onToggleChange={onToggleChange} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Construction (Non-SBA Real Estate)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ConstructionNonSBARealEstate onToggleChange={onToggleChange} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Business Lending (Non-SBA)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <BusinessLendingNonSBA onToggleChange={onToggleChange} />
        </ExpansionPanelDetails>
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
        <ExpansionPanelDetails>
          <ConstructionNonSBARealEstate onToggleChange={onToggleChange} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Private Money Lending</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ConstructionNonSBARealEstate onToggleChange={onToggleChange} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    
  );
};

export default ToggleForm;
