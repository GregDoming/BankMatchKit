import React, { useContext } from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { flatListOfLenderTypes } from "lib/listOfLenderTypes";

//Takes 5 props to function the handlechagne function must be called handlecahgen when passed
const SingleSpecialtySelect = props => {
  const { idnumber, handleSpecialtiesChange, specialtiesArr, handleSpecialtiesError, resetOutline } = props;
  
  const handleChange = (event, value, current) => {
    if (specialtiesArr.indexOf(value.label) !== -1) {
      handleSpecialtiesError(event)
      resetOutline();

      
      return;
    }
    handleSpecialtiesChange(event, value, current);
  };

  return (
    <>
      <Autocomplete
        //To allow regex to grab first number in the string which corresponds to the index of the component
        id={idnumber.toString()}
        idnumber={idnumber}
        options={flatListOfLenderTypes}
        getOptionLabel={option => option.label}
        style={{ minWidth: 500 }}
        onChange={(event, value) => handleChange(event, value, specialtiesArr)}
        renderInput={params => (
          <TextField autoFocus {...params} label="Add Lender Specialty Type" fullWidth />
        )}
      />
    </>
  );
};

export default SingleSpecialtySelect;
