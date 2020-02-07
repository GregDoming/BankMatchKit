import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import SingleSpecialtySelect from "components/SingleSelect/SingleSpecialtySelect.js";

import lenderSpecialtiesBoxesStyle from "assets/jss/nextjs-material-kit-pro/components/lenderSpecialtiesBoxesStyle.js";

const useStyles = makeStyles(lenderSpecialtiesBoxesStyle);

const LenderSpecialtiesOutline = props => {
  const classes = useStyles();
  const { dispatch, idNumber, handleSpecialtiesChange, currentSpeciality, specialtiesArr, handleSpecialtiesError } = props;
  const [isClicked, setIsClicked] = React.useState(false);

  const mouseDownHandler = event => {
    event.preventDefault();
    setIsClicked(true);
  };

  const resetOutline = () => {
    setIsClicked(false)
  };

  return isClicked ? (
    <SingleSpecialtySelect
      specialtiesArr={specialtiesArr}
      currentSpeciality={currentSpeciality}
      idNumber={idNumber}
      handleSpecialtiesChange={handleSpecialtiesChange}
      handleSpecialtiesError={handleSpecialtiesError}
      key={"singleLoanSelectOutline"}
      id="queryValues"
      addAutoFocus={true}
      dispatch={dispatch}
      resetOutline={resetOutline}
    />
  ) : (
    <div onMouseDown={event => mouseDownHandler(event)} className={classes.outline}>
      <h6 className={classes.cardTitle}>Add Specialty (up to 10)</h6>
      <AddCircleOutlineIcon className={classes.highlight} />
    </div>
  );
};

export default LenderSpecialtiesOutline;
