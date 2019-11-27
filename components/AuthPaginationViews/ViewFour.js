import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleFormThree from "components/ToggleForm/ToggleFormThree";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { onToggleChange } = props;

  return (
    <div className={classes.root}>
      <ToggleFormThree
        onToggleChange={onToggleChange}
      />
    </div>
  );
}