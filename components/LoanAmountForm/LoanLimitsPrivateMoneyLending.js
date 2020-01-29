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

const useStyles = makeStyles(loanAmountStyle);
const defaultLoanArr = [
  "Minimum Loan Amount",
  "Maximum Loan Amount ",
  "Maximum LTV (%) (Commercial)",
  "Maximum LTV (%) (Residential)",
  "Maximum ARV (%) (Commercial)",
  "Maximum ARV (%) (Residential)",
  "Minimum DCR"
];
const loanArr = [
  "privateMoneyMinumumLoanAmount",
  "privateMoneyMaximumLoanAmount",
  "privateMoneyMaxLTVPercentCommercial",
  "privateMoneyMaxLTVPercentResidential",
  "privateMoneyMaxARVCommercial",
  "privateMoneyMaxARVResidential",
  "privateMoneyMinimumDCR"
];

const LoanLimitsPrivateMoneyLending = props => {
  const { dispatch, state } = props;


  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardHeader className={classes.cardHeaderTwo} >
          Loan Limits
          </CardHeader>
          {loanArr.map((loanName, index) => {
            return (
              <div key={"LimitsPrivateMoneyLoan" + index.toString()}>
                <InputLabel key={"LimitsPrivateMoneyLoan2" + index.toString()} margin={"dense"}>
                  {defaultLoanArr[index]}
                </InputLabel>
                <CustomInput
                  formControlProps={{
                    className: classes.numberStyle,
                    margin: "dense"
                  }}
                  key={"LimitsPrivateMoneyLoanTwo" + index.toString()}
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
              </div>
            );
          })}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default LoanLimitsPrivateMoneyLending;
