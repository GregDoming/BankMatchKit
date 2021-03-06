/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import NavigationCards from "components/NavigationCards/NavigationCards.js";
import { adminUser } from "lib/auth";

import navigationPageStyle from "assets/jss/nextjs-material-kit-pro/pages/navigationPageStyle.js";

const useStyles = makeStyles(navigationPageStyle);

const LoggedInSplash = () => {
  const classes = useStyles();
  return (
    <>
      <Parallax image={require("assets/img/bluetool.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
            <h2 className={classes.title}>Where would you like to go?</h2>
          </GridItem>
        </GridContainer>
        <NavigationCards />
      </div>
    </>
  );
};

LoggedInSplash.getInitialProps = adminUser;

export default LoggedInSplash;
