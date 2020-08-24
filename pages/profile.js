/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
import LenderNavigationTabs from "components/NavigationTabs/LenderNavigationTabs.js";

import { isUserAuthenticated, downloadCSV } from "lib/auth";

import profilePageStyle from "assets/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";
import Logo from "assets/img/logo.svg";


const useStyles = makeStyles(profilePageStyle);

const Profile = props => {
  const intialState = props.flatState
  const [username, setUsername] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  //When using the useEffect hook you have to write the helper functions
  //inside of the react hook. Also useEffect CAN NOT be an asynchronous function

  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

  const { roles } = props.auth.user;

  return (
    <div className={classes.body}>
      <Parallax image={require("assets/img/lenderbackground.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
        <LenderNavigationTabs />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
            <h2 className={classes.title}>
              Welcome to the Lender Portal, {props.auth.user.username}
            </h2>
            <img src={Logo} alt="logo"/>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Profile.getInitialProps = isUserAuthenticated;

export default Profile;
