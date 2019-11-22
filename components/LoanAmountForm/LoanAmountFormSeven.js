/*eslint-disable*/
import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";

import loanAmountStyle from "assets/jss/nextjs-material-kit-pro/components/loanAmountStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(loanAmountStyle);

const LoanAmountFormSeven = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const classes = useStyles();
  return (
    <>
      <Card className={classes.shrinkFlex}>
        <CardBody>
          <CardHeader className={classes.cardHeader} color="success">
            Loan Amount
          </CardHeader>
          <InputLabel margin={"dense"} >Minimum</InputLabel>
          <CustomInput        
            formControlProps={{
              className: classes.numberStyle,
              margin: "dense"
            }}
            id="secondaryEmailAddress"
            inputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              type: "number",
              label: "With normal TextField"
            }}
          />
          <InputLabel margin={"dense"} >Maximum</InputLabel>
          <CustomInput
            formControlProps={{
              className: classes.numberStyle,
              margin: "dense"
            }}
            id="secondaryEmailAddress"
            type="email"
            inputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              type: "number"
            }}
          />
          <InputLabel margin={"dense"} >Max LTV%</InputLabel>
          <CustomInput
            formControlProps={{
              className: classes.numberStyle,
              margin: "dense"
            }}
            id="secondaryEmailAddress"
            inputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>,
              type: "number"

            }}
          />
          <InputLabel margin={"dense"} >Min DCR</InputLabel>
          <CustomInput
            formControlProps={{
              className: classes.numberStyle,
              margin: "dense"
            }}
            id="secondaryEmailAddress"
            type="email"
            inputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              type: "number"

            }}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default LoanAmountFormSeven;