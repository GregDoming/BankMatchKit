/*eslint-disable*/
import React from "react";
import useForm from "react-hook-form";
import clsx from "clsx";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Snackbar from "@material-ui/core/Snackbar";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Transition from "components/Transition/Transition";

import { signinUser, checkString, isUserAuthenticated } from "../lib/auth";

import loginPageStyle from "assets/jss/nextjs-material-kit-pro/pages/loginPageStyle.js";

import image from "assets/img/bg7.jpg";
import Router from "next/router";

const useStyles = makeStyles(loginPageStyle);

const Signin = (props) => {
  const [checked, setChecked] = React.useState([1]);
  const [openError, setOpenError] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  
  React.useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }
  });
  //For use with React-Hook-Form
  const { register, handleSubmit } = useForm();
  const onSubmit = async user => {
    event.preventDefault();
    setisLoading(true);
    setErrorMessage("");

    try {
      await signinUser(user);
      await Router.push("/profile");

      setErrorMessage("");
      setOpenSuccess(true);
      setisLoading(false);
    } catch (err) {
      const error = (err.response && err.response.data) || err.message;

      showError(error);
    }
  };

  const handleClose = () => setOpenError(false);

  const showError = err => {
    const error = (err.response && err.response.data) || err.message || err;
    const stringError = checkString(error);
    setErrorMessage(stringError);
    setOpenError(true);
    setisLoading(false);
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
            <GridItem xs={12} sm={8} md={4}>
              <Card>
                <CardHeader color="primary" signup className={classes.cardHeader}>
                  <h4 className={classes.cardTitle}>Login</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.iconButtons}
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.iconButtons}
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.iconButtons}
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus-g" />
                    </Button>
                  </div>
                </CardHeader>
                <p className={classes.description + " " + classes.textCenter}>Or Be Classical</p>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.form}
                >
                  <CardBody signup>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start" className={classes.inputAdornment}>
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Email...",
                        name: "email",
                        inputRef: register({ required: "is required field" })
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>lock_utline</Icon>
                          </InputAdornment>
                        ),
                        placeholder: "Password...",
                        name: "password",
                        inputRef: register({ required: "is required field" })
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple color="primary" size="lg" type="submit">
                      Get started
                    </Button>
                  </div>
                </form>
              </Card>
              {/* Error Snackbar */}
              {errorMessage && (
                <Snackbar
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
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
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=njsmkp-login"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/landing-page?ref=njsmkp-login"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/?ref=njsmkp-login"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=njsmkp-login"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.creative-tim.com?ref=njsmkp-login" target="_blank">
                  Creative Tim
                </a>{" "}
                for a better web
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Signin;
