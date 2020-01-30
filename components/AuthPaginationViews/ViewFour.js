import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleFormThree from "components/ToggleForm/ToggleFormThree";

import viewStyle from "assets/jss/nextjs-material-kit-pro/components/viewStyle.js";

const useStyles = makeStyles(viewStyle);

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { state, dispatch } = props;

  return (
    <div className={classes.root}>
      <h2 className={classes.cardTitle}>OTHER CRTIERIA</h2>
      <ToggleFormThree dispatch={dispatch} state={state} />
    </div>
  );
}
