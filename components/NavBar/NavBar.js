import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
// core components
import Header from "components/Header/Header.js";
import Icon from "@material-ui/core/Icon";

// import Button from "components/CustomButtons/Button.js";
import Button from "@material-ui/core/Button";
import Apps from "@material-ui/icons/Apps";
import Layers from "@material-ui/icons/Layers";
import LineStyle from "@material-ui/icons/LineStyle";

import LoggedInLinks from "components/NavLinks/LoggedInLinks.js";
import LoggedOutLinks from "components/NavLinks/LoggedOutLinks.js";

import navbarsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";


const useStyles = makeStyles(navbarsStyle);

const Navbar = props => {
  const checkUser = props => {
    const { pageProps } = props;
    if (pageProps.auth) {
      return pageProps.auth.user;
    }
    return {};
  };

  const classes = useStyles();
  const user = checkUser(props);

  return (
    <Header
      brand="Bank Match"
      fixed
      z-index="1"
      color="transparent"
      links={
        user._id ? (
          <LoggedInLinks dropdownHoverColor="info"/>
        ) : (
          <LoggedOutLinks dropdownHoverColor="info"/>
        )
      }
    />
  );
};

export default Navbar;
