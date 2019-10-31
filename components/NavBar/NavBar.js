import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
// import Button from "components/CustomButtons/Button.js";
import Button from "@material-ui/core/Button";
import ActiveLink from "components/ActiveLink/ActiveLink.js";

import navbarsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";
import { signoutUser, isUserAuthenticated } from "lib/auth";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

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
      changeColorOnScroll={{
        height: 100,
        color: "secondary"
      }}
      links={
        user._id ? (
          <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button className={classes.navLink} variant="outlined" style={{ fontSize: '18px', fontWeight: "100", padding:"24px"}}>
                <Link href="/profile">
                  <a style={{ color: "rgba(233, 241, 228, 1)"}} className={classes.inActiveLink}>Profile</a>
                </Link>
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button className={classes.navLink} variant="outlined" style={{ fontSize: '18px', fontWeight: "100", padding:"24px"}}>
                <Link href="/authpagination">
                  <a style={{ color: "rgba(233, 241, 228, 1)"}} className={classes.inActiveLink}>Edit Profile</a>
                </Link>
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                variant="outlined"
                className={classes.navLink}
                onClick={signoutUser}
                style={{ fontSize: '18px', fontWeight: "100", padding:"24px"}}
              >
                <a style={{ color: "rgba(233, 241, 228, 1)"}} className={classes.inActiveLink}>Sign Out</a>
              </Button>
            </ListItem>
          </List>
        ) : (
          <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button  variant="outlined" style={{ fontSize: '18px', fontWeight: "100", padding:"24px"}} >
                <Link href="/signin">
                  <a style={{ color: "rgba(233, 241, 228, 1)"}}>Sign in</a>
                </Link>
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button variant="outlined" style={{ fontSize: '18px', fontWeight: "100", height: "100%", padding:"24px"}}>
                <Link href="/signup">
                  <a style={{ color: "rgba(233, 241, 228, 1)"}}>Sign up</a>
                </Link>
              </Button>
            </ListItem>
          </List>
        )
      }
    />
  );
};

Navbar.getInitialProps = isUserAuthenticated;

export default Navbar;
