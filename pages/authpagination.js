import React from "react";
import Helmet from "react-helmet";
import Axios from "axios";
import produce from "immer";
import { useImmerReducer } from "use-immer";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import ViewOne from "components/AuthPaginationViews/ViewOne.js";
import ViewTwo from "components/AuthPaginationViews/ViewTwo.js";
import ViewThree from "components/AuthPaginationViews/ViewThree.js";
import { isUserAuthenticated } from "lib/auth";
import { convertUser } from "lib/userSchema";

import styles from "assets/jss/nextjs-material-kit-pro/components/paginationStyle.js";


const useStyles = makeStyles(styles);

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
  const initialState = props.flatState
  console.log(initialState)
  const [state, dispatch] = useImmerReducer(toggleReducer, initialState);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const theme = useTheme();
  const totalSteps = () => {
    return steps.length;
  };

  const onToggleChange = (event, val) => {
    event.preventDefault();
    dispatch({ type: "toggle" });
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

  const submitForm = async formData => {
    event.preventDefault();
    await Axios.post("/api/users/updateUserData", formData);
  };

  const handleNext = async () => {
    event.preventDefault();
    const objCopy = JSON.parse(JSON.stringify(state));
    const formInfo = convertUser(objCopy)
    await Axios.post("/api/users/updateUserData", { formInfo });
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
    newCompleted[activeStep] = "true";
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
        return <ViewTwo onToggleChange={onToggleChange} toggleFormState={state} />;
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
      <Box
        className={classes.bottomStepper}
        style={{ marginTop: "calc(5% + 60px)", bottom: "0", position: "fixed" }}
      >
        <MobileStepper
          variant="dots"
          steps={6}
          position="bottom"
          activeStep={activeStep}
          className={classes.root}
          style={{
            backgroundColor: "transparent",
            width: "60%",
            textAlign: "center",
            margin: "auto"
          }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
              Next
              {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
};

AuthPagination.getInitialProps = isUserAuthenticated;

export default AuthPagination;