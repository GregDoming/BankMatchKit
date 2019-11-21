import React from "react";
import Helmet from "react-helmet";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import ViewOne from "components/AuthPaginationViews/ViewOne.js";
import ViewTwo from "components/AuthPaginationViews/ViewTwo.js";
import ViewThree from "components/AuthPaginationViews/ViewThree.js";
import { isUserAuthenticated } from "lib/auth";

import styles from "assets/jss/nextjs-material-kit-pro/components/paginationStyle.js";
import Axios from "axios";
import produce from "immer";
import { useImmerReducer } from "use-immer";

const useStyles = makeStyles(styles);
const intialState = {
  purchase: "Unknown",
  refinance: "Unknown",
  cashOutRefinance: "Unknown",
  renovationImprovement: "Unknown",
  bridge: "Unknown",
  revolvingBusinessLOC1stPosition: "Unknown",
  revolvingBusinessLOC2stPosition: "Unknown",
  investmentPurchase: "Unknown",
  investmentRefinance: "Unknown",
  investmentCashOutRefinance: "Unknown",
  investmentRenovationImprovement: "Unknown",
  investmentBridge: "Unknown",
  investmentRevolvingBusinessLOC1stPosition: "Unknown",
  investmentRevolvingBusinessLOC2stPosition: "Unknown",
  sbaExpress: "Unknown",
  exoprtExpressWc: "Unknown",
  internationalTrade: "Unknown",
  seasonalCAPLines: "Unknown",
  ownerOccupiedCommercial: "Unknown",
  debtRefinance: "Unknown",
  contractCAPLines: "Unknown",
  buildersCAPLines: "Unknown",
  workingCAPLines: "Unknown",
  sbaMicroLoan: "Unknown",
  businessAcquisition: "Unknown",
  investment: "Unknown",
  renovation: "Unknown",
  residentialLongterm: "Unknown",
  residentialFixandFlip: "Unknown",
  groundUpSpecHome: "Unknown",
  ownerUser: "Unknown",
  tractHomes: "Unknown",
  apartments: "Unknown",
  constructiontoPermanent: "Unknown",
  landDevelopment: "Unknown",
  residential: "Unknown",
  PUD: "Unknown",
  purchaseWithLand: "Unknown",
  entitlements: "Unknown",
  miniperm: "Unknown",
  leasedLand: "Unknown",
  brokenProject: "Unknown",
  manufacturedHomeSingleWide: "Unknown",
  manufacturedHomeDoubleWide: "Unknown",
  businessCreditCard: "Unknown",
  businessExpansionnoRE: "Unknown",
  equipmentFinancing: "Unknown",
  businessAcquisitionsMergers: "Unknown",
  franchisePurchases: "Unknown",
  revolvingBLOCFirstPosition: "Unknown",
  revolvingBLOCSecondPosition: "Unknown",
  accountsReceivable: "Unknown",
  crossCollateral: "Unknown",
  equipment: "Unknown",
  invoiceFinancing: "Unknown",
  irrevocableTrust: "Unknown",
  projectionBased: "Unknown",
  purchaseOrderFinancing: "Unknown",
  realEstate: "Unknown",
  stockSavings: "Unknown"
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
    revolvingBusinessLOC2stPosition,
    sbaExpress,
    exoprtExpressWc,
    internationalTrade,
    ownerOccupiedCommercial,
    debtRefinance,
    contractCAPLines,
    buildersCAPLines,
    workingCAPLines,
    sbaMicroLoan,
    businessAcquisition,
    investment,
    renovation,
    residentialLongterm,
    residentialFixandFlip,
    groundUpSpecHome,
    ownerUser,
    tractHomes,
    apartments,
    constructiontoPermanent,
    landDevelopment,
    residential,
    PUD,
    purchaseWithLand,
    entitlements,
    miniperm,
    leasedLand,
    brokenProject,
    manufacturedHomeSingleWide,
    manufacturedHomeDoubleWide,
    businessCreditCard,
    businessExpansionnoRE,
    equipmentFinancing,
    businessAcquisitionsMergers,
    franchisePurchases,
    revolvingBLOCFirstPosition,
    revolvingBLOCSecondPosition,
    accountsReceivable,
    crossCollateral,
    equipment,
    invoiceFinancing,
    irrevocableTrust,
    projectionBased,
    purchaseOrderFinancing,
    realEstate,
    stockSavings
  } = state;

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

  const submitForm = async (formData) => {
    event.preventDefault()
    await Axios.post("/api/users/updateUserData", formData);
  };

  const handleNext = async () => {
    const formInfo = state
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
        return <ViewTwo onToggleChange={onToggleChange} />;
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
            backgroundColor: "rgba(204, 210, 25, 0.55)",
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

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import styles from "assets/jss/nextjs-material-kit-pro/components/paginationStyle.js";
// import ViewOne from "components/AuthPaginationViews/ViewOne.js";
// import ViewTwo from "components/AuthPaginationViews/ViewTwo.js";
// import ViewThree from "components/AuthPaginationViews/ViewThree.js";
// import { isUserAuthenticated } from "lib/auth";
// import paginationStyle from '../assets/jss/nextjs-material-kit-pro/components/paginationStyle.js';

// const useStyles = makeStyles(paginationStyle)

// const AuthPagination = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(prevActiveStep => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(prevActiveStep => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep(prevActiveStep => prevActiveStep + 1);
//     setSkipped(prevSkipped => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <MobileStepper
//       variant="dots"
//       steps={6}
//       position="bottom"
//       activeStep={activeStep}
//       className={classes.root}
//       nextButton={
//         <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
//           Next
//           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//         </Button>
//       }
//       backButton={
//         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//           Back
//         </Button>
//       }
//     />
//   );
// }

// AuthPagination.getInitialProps = isUserAuthenticated;

// export default AuthPagination;
