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

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(loanAmountStyle);
const defaultLoanArr = ["Minimum", "Maximum", "Max LTV %", "MinDCR"];
const loanArr = [
  "SBASevenMinumumLoanAmount",
  "SBASevenMaximumLoanAmount",
  "SBASevenMaxLTVPercent",
  "SBASevenMinDCR"
];

const LoanAmountSBASeven = () => {
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
            Loan Amount
          </CardHeader>
          {loanArr.map((loanName, index) => {
            return (
              <div key={"SBASevenLoan" + index.toString()}>
                <InputLabel key={"SBASevenLoan2" + index.toString()} margin={"dense"}>
                  {defaultLoanArr[index]}
                </InputLabel>
                <CustomInput
                  formControlProps={{
                    className: classes.numberStyle,
                    margin: "dense"
                  }}
                  key={"SBASevenLoanTwo" + index.toString()}
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

export default LoanAmountSBASeven;
