import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import conditionalLoadIconStyle from "assets/jss/nextjs-material-kit-pro/components/conditionalLoadIconStyle.js";
const useStyles = makeStyles(conditionalLoadIconStyle);

const ConditionalLoadIcon = props => {
  const classes = useStyles();
  const { isLoading } = props;

  return isLoading ? (
    <div className={classes.rowContainer}>
      <h3>Loading</h3>
      <CircularProgress size={100} />
    </div>
  ) : (
    <div></div>
  );
};

export default ConditionalLoadIcon;
