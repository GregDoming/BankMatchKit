import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleForm from "components/ToggleForm/ToggleForm";

import viewStyle from "assets/jss/nextjs-material-kit-pro/components/viewStyle.js";

const useStyles = makeStyles(viewStyle);

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { state, dispatch } = props;

  return (
    <div className={classes.root}>
      <h2 className={classes.cardTitle}>MAJOR LOAN TYPES</h2>
      <ToggleForm dispatch={dispatch} state={state} />
    </div>
  );
}
