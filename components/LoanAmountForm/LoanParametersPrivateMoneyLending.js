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
const defaultLoanArr = ["Interest Rate Range (%)", "Term Range (Years)", "Fees (Flat, $)", "Fees (Points, %)", "Closing Costs ($)", "Days to Funding"];
const maxLoanArr = [
  "Minimum Loan Amount",
  "Maximum Loan Amount ",
  "Maximum LTV (%) (Commercial)",
  "Maximum LTV (%) (Residential)",
  "Maximum ARV (%) (Commercial)",
  "Maximum ARV (%) (Residential)",
  "Minimum DCR"
];
const minLoanArr = [
  "privateMoneyMinumumLoanAmount",
  "privateMoneyMaximumLoanAmount",
  "privateMoneyMaxLTVPercentCommercial",
  "privateMoneyMaxLTVPercentResidential",
  "privateMoneyMaxARVCommercial",
  "privateMoneyMaxARVResidential",
  "privateMoneyMinimumDCR"
];

const LoanParametersPrivateMoneyLending = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const dispatch = useContext(FormDispatchContext);
  const state = useContext(FormStateContext);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardHeader className={classes.cardHeaderTwo} color="success">
          Loan Parameters
          </CardHeader>
          {maxLoanArr.map((loanName, index) => {
            return (
              <div key={"ParametersPrivateMoneyLoan" + index.toString()}>
                <InputLabel key={"ParametersPrivateMoneyLoan2" + index.toString()} margin={"dense"}>
                  {defaultLoanArr[index]}
                </InputLabel>
                <CustomInput
                  formControlProps={{
                    className: classes.numberStyle,
                    margin: "dense"
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
              </div>
            );
          })}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default LoanParametersPrivateMoneyLending;
