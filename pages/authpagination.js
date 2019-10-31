import React from "react";
import Helmet from "react-helmet";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ViewOne from "components/AuthPaginationViews/ViewOne.js";
import ViewTwo from "components/AuthPaginationViews/ViewTwo.js";
import ViewThree from "components/AuthPaginationViews/ViewThree.js";
import { isUserAuthenticated } from "lib/auth";

import styles from "assets/jss/nextjs-material-kit-pro/components/paginationStyle.js";

const useStyles = makeStyles(styles);

function getSteps() {
  return ["Step 1", "Step 2", "Step 3"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Step 1";
    case 1:
      return "Step 2: ";
    case 2:
      return "Step 3: ";
    default:
      return "Unknown step";
  }
}

const AuthPagination = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const renderView = activeStep => {
    switch (activeStep) {
      case 0:
        return <ViewOne />;
      case 1:
        return <ViewTwo />;
      case 2:
        return <ViewThree />;
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <style>{"body { background-color: #96aadf; }"}</style>
      </Helmet>
      {renderView(activeStep)}
      <Box className={classes.bottomStepper}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)} completed={completed[index]}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
                {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))} */}
              </div>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

AuthPagination.getInitialProps = isUserAuthenticated;

export default AuthPagination;
