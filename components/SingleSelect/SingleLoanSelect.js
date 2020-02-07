import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { listOfLenderTypes } from "lib/listOfLenderTypes";

const SingleLoanSelect = props => {
  const { handleChange, idnumber } = props;

  return (
    <Autocomplete
      id={idnumber.toString()}
      idnumber={idnumber}
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