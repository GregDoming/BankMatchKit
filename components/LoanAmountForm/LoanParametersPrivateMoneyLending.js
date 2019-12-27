/*eslint-disable*/
import React, { useContext } from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";

import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";

import loanAmountStyle from "assets/jss/nextjs-material-kit-pro/components/loanAmountStyle.js";
import ThreeToggleSwitch from "components/ThreeToggleSwitch/ThreeToggleSwitch.js";


const useStyles = makeStyles(loanAmountStyle);

const valuesArr = ["YES", "UNKNOWN", "NO"];
const customLoanArr = [
  "Fixed Rate Amortized",
  "Adjustable Rate Amortized",
  "Interest Only"
];
const toggleLoanArr = [
  "privateMoneyFixedRateAmortized",
  "privateMoneyAdjustableRateAmortized",
  "privateMoneyinterestOnly"
];
const defaultLoanArr = [
  "Interest Rate Range (%)",
  "Term Range (Years)",
  "Fees (Flat, $)",
  "Fees (Points, %)",
  "Closing Costs ($)",
  "Days to Funding"
];
const maxLoanArr = [
  "privateMoneyInterestRateMax",
  "privateMoneyTermRangeMax",
  "privateMoneyFeesFlatMax",
  "privateMoneyFeesPointsMax",
  "privateClosingCostsMax",
  "privateDaysToFundingMax"
];
const minLoanArr = [
  "privateMoneyInterestRateMin",
  "privateMoneyTermRangeMin",
  "privateMoneyFeesFlatMin",
  "privateMoneyFeesPointsMin",
  "privateClosingCostsMin",
  "privateDaysToFundingMin"
];

const LoanParametersPrivateMoneyLending = props => {
  const { dispatch, state } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardHeader className={classes.cardHeaderTwo} color="success">
            Loan Parameters
          </CardHeader>
          {toggleLoanArr.map((toggleName, index) => {
                  return (
                    <div key={"LoanParam2" + index.toString()} className={classes.rowContainer}>
                      <label className={classes.labelStyle}>
                        {customLoanArr[index]}
                      </label>
                      <ThreeToggleSwitch
                        dispatch={dispatch}
                        values={valuesArr}
                        id={toggleName}
                        selected={state[toggleName]}
                      />
                    </div>
                  );
                })}
          {minLoanArr.map((loanName, index) => {
            return (
              <div key={"ParametersPrivateMoneyLoan" + index.toString()}>
                <InputLabel key={"ParametersPrivateMoneyLoan2" + index.toString()} margin={"dense"}>
                  {defaultLoanArr[index]}
                </InputLabel>
                <CustomInput
                  formControlProps={{
                    className: classes.borderNumberStyle,
                    margin: "dense",
                    variant: "outlined"
                  }}
                  key={"ParametersPrivateMoneyLoanTwo" + index.toString()}
                  inputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    type: "text",
                    label: "With normal TextField",
                    value: state[loanName],
                    onChange: () => dispatch({ type: "handleNumberInput", payload: loanName }),
                    id: loanName
                  }}
                  autoFocus
                />
                <CustomInput
                  formControlProps={{
                    className: classes.numberStyle,
                    margin: "dense"
                  }}
                  key={"ParametersPrivateMoneyLoanMinTwo" + index.toString()}
                  inputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    type: "text",
                    label: "With normal TextField",
                    value: state[maxLoanArr[index]],
                    onChange: () =>
                      dispatch({ type: "handleNumberInput", payload: maxLoanArr[index] }),
                    id: maxLoanArr[index]
                  }}
                  autoFocus
                />
              </div>
            );
          })}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default LoanParametersPrivateMoneyLending;
