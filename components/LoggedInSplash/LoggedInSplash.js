/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.js";
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
    <div>
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>What would you like to do?</h2>
            </GridItem>
          </GridContainer>
          <NavigationCards />
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} />{" "}
              by{" "}
              <a target="_blank">
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
};

LoggedInSplash.getInitialProps = adminUser;

export default LoggedInSplash;
