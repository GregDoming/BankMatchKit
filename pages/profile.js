/*eslint-disable*/
import React from "react";
import axios from "axios";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import LenderNavigationTabs from "components/LenderNavigationTabs/LenderNavigationTabs.js";


import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import { isUserAuthenticated, downloadCSV } from "lib/auth";

import profilePageStyle from "assets/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

const Profile = props => {
  const [username, setUsername] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  //When using the useEffect hook you have to write the helper functions
  //inside of the react hook. Also useEffect CAN NOT be an asynchronous function

  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

  const { roles } = props.auth.user;

  const onClickCSV = async event => {
    event.preventDefault();
    setLoading({ loading: true });
    await downloadCSV();
    setLoading({ loading: false });
  };

  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <>
      <Parallax image={require("assets/img/lenderbackground.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
        <LenderNavigationTabs />
        {/* {renderView(activeStep)} */}
      </div>
    </>
  );
};

Profile.getInitialProps = isUserAuthenticated;

export default Profile;
