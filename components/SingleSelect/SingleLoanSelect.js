import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from "react-select";

import listOfLenderTypes from "lib/listOfLenderTypes";

const SingleLoanSelect = props => {
  const { handleChange, idNumber } = props;

  return (
    <Autocomplete
      id={idNumber.toString()}
      idnumber={idNumber}
      options={listOfLenderTypes}
      getOptionLabel={option => option.label}
      style={{ minWidth: 500 }}
      onChange={(event, value) => handleChange(event, value)}
      renderInput={params => (
        <TextField {...params} label="Autocomplete" variant="outlined" fullWidth />
      )}
    />
  );
};

export default SingleLoanSelect;
