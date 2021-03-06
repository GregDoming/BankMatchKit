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

import universalFooterStyle from "assets/jss/nextjs-material-kit-pro/components/universalFooterStyle.js";

const useStyles = makeStyles(universalFooterStyle);

const UniversalFooter = () => {
  const classes = useStyles();
  return (
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a target="_blank" className={classes.block}>
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a target="_blank" className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a className={classes.block}>Blog</a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a target="_blank" className={classes.block}>
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} />{" "}
              by <a target="_blank">Creative Tim</a> for a better web.
            </div>
          </div>
        }
      />
  );
};

export default UniversalFooter;
