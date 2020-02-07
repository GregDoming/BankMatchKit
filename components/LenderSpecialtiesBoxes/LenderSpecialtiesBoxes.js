import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import lenderSpecialtiesBoxesStyle from "assets/jss/nextjs-material-kit-pro/components/lenderSpecialtiesBoxesStyle.js";

const useStyles = makeStyles(lenderSpecialtiesBoxesStyle);

const LenderSpecialtiesBoxes = props => {
  const classes = useStyles();
  const { id, specialty, handleSpecialtiesDelete } = props;

  return (
    <div className={classes.box}>
      <h6 className={classes.cardTitle}>{specialty}</h6>
      <HighlightOffIcon onClick={event => handleSpecialtiesDelete(event, id, specialty)} className={classes.highlight}/>
    </div>
  );
};

export default LenderSpecialtiesBoxes;
