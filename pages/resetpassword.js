/*eslint-disable*/
import React, { useState } from "react";
import useForm from "react-hook-form";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Transition from "components/Transition/Transition.js";
import { signupUser, checkString, isUserAuthenticated } from "lib/auth.js";

import Router from "next/router";

import image from "assets/img/bg7.jpg";
import passwordPageStyle from "../assets/jss/nextjs-material-kit-pro/pages/passwordPageStyle";

const useStyles = makeStyles(passwordPageStyle);

const ResetPassword = ({ ...props }) => {
  const [checked, setChecked] = React.useState([1]);
  const [openError, setOpenError] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async user => {
    event.preventDefault();
    setisLoading(true);
    setErrorMessage("");

    try {
      await signupUser(user);
      await Router.push("/signin");

      setErrorMessage("");
      setOpenSuccess(true);
      setisLoading(false);
    } catch (err) {
      const error = (err.response && err.response.data) || err.message;

      showError(error);
    }
  };

  const handleClose = () => setOpenError(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const showError = err => {
    const error = (err.response && err.response.data) || err.message || err;
    const stringError = checkString(error);
    setErrorMessage(stringError);
    setOpenError(true);
    setisLoading(false);
  };

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Password Reset</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          name="password"
                          inputRef={register({ required: "is required field" })}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                            type: showPassword ? "text" : "password",

                            placeholder: "New Password...",
                            name: "password",
                            inputRef: register({ required: "is required field" })
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          name="password"
                          inputRef={register({ required: "is required field" })}
                          inputProps={{
                            type: showPassword ? "text" : "password",
                            placeholder: "Confirm New Password...",
                            name: "confirmPassword",
                            inputRef: register({ required: "is required field" })
                          }}
                        />

                        <div className={classes.textCenter}>
                          <Button round color="primary" type="submit">
                            Get started
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                  {/* Error Snackbar */}
                  {errorMessage && (
                    <Snackbar
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "middle"
                      }}
                      TransitionComponent={Transition}
                      open={openError}
                      onClose={handleClose}
                      autoHideDuration={6000}
                      message={
                        <span>
                          <Icon className={clsx(classes.icon, classes.iconVariant)} />
                          {errorMessage}
                        </span>
                      }
                    />
                  )}
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
