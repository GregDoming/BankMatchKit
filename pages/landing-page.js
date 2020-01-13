import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import LoggedInSplash from "components/LoggedInSplash/LoggedInSplash.js";
import LoggedOutSplash from "components/LoggedOutSplash/LoggedOutSplash.js";

import landingPageStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";

import { landingPageAuth } from "../lib/auth";

const useStyles = makeStyles(landingPageStyle);

const LandingPage = props => {
  return props.auth ? <LoggedInSplash /> : <LoggedOutSplash />;
};
LandingPage.getInitialProps = landingPageAuth;

export default LandingPage;
