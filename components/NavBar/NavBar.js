import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import ActiveLink from "components/ActiveLink/ActiveLink.js"

import navbarsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(navbarsStyle);

const Navbar = () => {
  const classes = useStyles();
  return (
    <Header
      brand="NextJS Material Kit PRO"
      fixed
      changeColorOnScroll={{
        height: 300,
        color: "info"
      }}
      color="transparent"
      links={
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <Button
            ref="/signin"
            className={classes.navLink}
            color="transparent"
          >
          Profile
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            color="transparent"
          >
            <ActiveLink color={"red"} activeClassName="active" href="/signin">
              <a className={classes.inActiveLink}>Sign in</a>
            </ActiveLink>
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            color="transparent"
          >
            <ActiveLink color={"red"} activeClassName="active" href="/signup">
              <a className={classes.inActiveLink}>Sign up</a>
            </ActiveLink>
          </Button>
        </ListItem>
      </List>
      }
    />
  );
};

export default Navbar;
