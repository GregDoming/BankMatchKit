import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MultiInputForm from "components/MultiInputForm/MultiInputForm.js";

import viewStyle from "assets/jss/nextjs-material-kit-pro/components/viewStyle.js";

const useStyles = makeStyles(viewStyle);

const ViewOne = props => {
  const classes = useStyles();

  const { dispatch, state } = props;
  return (
    <>
      <h2 className={classes.cardTitle}>PERSONAL INFORMATION</h2>
      <MultiInputForm dispatch={dispatch} state={state} />
    </>
  );
};

export default ViewOne;
