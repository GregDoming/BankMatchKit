import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleFormTwo from "components/ToggleForm/ToggleFormTwo";

import viewStyle from "assets/jss/nextjs-material-kit-pro/components/viewStyle.js";

const useStyles = makeStyles(viewStyle);

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { state, dispatch } = props;

  return (
    <div className={classes.root}>
      <h2 className={classes.cardTitle}>PROPERTY TYPES</h2>
      <ToggleFormTwo dispatch={dispatch} state={state} />
    </div>
  );
}
