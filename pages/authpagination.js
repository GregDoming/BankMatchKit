import React from "react";
import clsx from "clsx";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Axios from "axios";
import produce from "immer";
import { useImmerReducer } from "use-immer";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Snackbar from "@material-ui/core/Snackbar";
import Icon from "@material-ui/core/Icon";

// import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Transition from "components/Transition/Transition.js";
import ViewOne from "components/AuthPaginationViews/ViewOne.js";
import ViewTwo from "components/AuthPaginationViews/ViewTwo.js";
import ViewThree from "components/AuthPaginationViews/ViewThree.js";
import ViewFour from "components/AuthPaginationViews/ViewFour.js";

import { isUserAuthenticated } from "lib/auth";
import { convertUser } from "lib/userSchema";

import styles from "assets/jss/nextjs-material-kit-pro/components/paginationStyle.js";

const useStyles = makeStyles(styles);

const toggleReducer = (draft, action) => {
  switch (action.type) {
    case "toggle": {
      event.preventDefault();
      draft[event.target.id] = event.target.textContent;
      return;
    }
    case "handleNumberInput": {
      const re = /^[0-9\b]+$/;
      if (event.target.value === "" || re.test(event.target.value)) {
        if (isNaN()) draft[event.target.id] = parseInt(event.target.value) || 0;
      }
      return;
    }
    case "handlePhoneNumberInput": {
      draft[event.target.id] = event.target.value;
      return;
    }
    case "handleFormInput": {
      draft[event.target.id] = event.target.value;
      return;
    }
    case "handleStateSelector": {
      draft["companyState"] = action.payload.value;
      return;
    }
    case "handleLenderSelect": {
      const lenderName = [
        "lenderNameBank",
        "lenderNameCDFI",
        "lenderNameCreditUnion",
        "lenderNameInsuranceCompany",
        "lenderNameNonBankLender",
        "lenderNamePrivateEquity"
      ];
      lenderName.forEach(lender => {
        draft[lender] = false;
      });
      action.payload.forEach(lender => {
        draft[lender.value] = true;
      });
      return;
    }
    case "handleBinaryToggle": {
      draft[event.target.id] = !action.payload;
      action.paylod = !action.payload;
      return;
    }
    default:
      break;
  }
  return;
};

function getSteps() {
  return ["Step 1", "Step 2", "Step 3", "Step 4"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Step 1";
    case 1:
      return "Step 2: ";
    case 2:
      return "Step 3: ";
    case 3:
      return "Step 4: ";
    default:
      return "Unknown step";
  }
}

const AuthPagination = props => {
  const initialState = props.flatState;
  const [state, dispatch] = useImmerReducer(toggleReducer, initialState);
  const [minMaxErrorMessage, setminMaxErrorMessage] = React.useState("");
  const [openError, setOpenError] = React.useState(false);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const theme = useTheme();
  const totalSteps = () => {
    return steps.length;
  };

  const handleInput = (event, val) => {
    dispatch({ type: "handleFormInput" });
  };

  const handleClose = () => setOpenError(false);

  const handleNumberInput = (event, val) => {
    dispatch({ type: "handleNumberInput" });
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

  const handleNext = async () => {
    event.preventDefault();
    if (
      state.privateMoneyInterestRateMax < state.privateMoneyInterestRateMin ||
      state.privateMoneyTermRangeMax < state.privateMoneyTermRangeMin ||
      state.privateMoneyFeesFlatMax < state.privateMoneyFeesFlatMin ||
      state.privateMoneyFeesPointsMax < state.privateMoneyFeesPointsMin ||
      state.privateClosingCostsMax < state.privateClosingCostsMin ||
      state.privateDaysToFundingMax < state.privateDaysToFundingMin
    ) {
      setminMaxErrorMessage("Minimum value must be larger than maximum value");
      setOpenError(true);
      return;
    }

    const objCopy = JSON.parse(JSON.stringify(state));
    const formInfo = convertUser(objCopy);
    await Axios.post("/api/users/updateUserData", { formInfo });
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = async () => {
    event.preventDefault();
    if (
      state.privateMoneyInterestRateMax < state.privateMoneyInterestRateMin ||
      state.privateMoneyTermRangeMax < state.privateMoneyTermRangeMin ||
      state.privateMoneyFeesFlatMax < state.privateMoneyFeesFlatMin ||
      state.privateMoneyFeesPointsMax < state.privateMoneyFeesPointsMin ||
      state.privateClosingCostsMax < state.privateClosingCostsMin ||
      state.privateDaysToFundingMax < state.privateDaysToFundingMin
    ) {
      setminMaxErrorMessage("Minimum value must be larger than maximum value");
      setOpenError(true);
      return;
    }

    const objCopy = JSON.parse(JSON.stringify(state));
    const formInfo = convertUser(objCopy);
    await Axios.post("/api/users/updateUserData", { formInfo });
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
        return <ViewOne dispatch={dispatch} state={state} />;
      case 1:
        return <ViewTwo dispatch={dispatch} state={state} />;
      case 2:
        return <ViewThree dispatch={dispatch} state={state} />;
      case 3:
        return <ViewFour dispatch={dispatch} state={state} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
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
            {/* Error Snackbar */}
            {minMaxErrorMessage && (
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                ContentProps={{
                  classes: {
                    root: classes.snackbar
                  }
                }}
                TransitionComponent={Transition}
                open={openError}
                onClose={handleClose}
                autoHideDuration={6000}
                variant="error"
                message={
                  <span>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {minMaxErrorMessage}
                  </span>
                }
              />
            )}
          </Box>
        </div>
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
};

AuthPagination.getInitialProps = isUserAuthenticated;

export default AuthPagination;

export { AuthPagination, FormDispatchContext, FormStateContext };

// export default AuthPagination;
