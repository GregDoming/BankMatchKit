import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from "react-select";

import listOfLenderTypes from "lib/listOfLenderTypes";

const SingleLoanSelect = props => {
  const { handleChange, idNumber } = props;
  // console.log(idNumber)

  return (
    <Autocomplete
      id={idNumber.toString()}
      idnumber={idNumber}
      options={listOfLenderTypes}
      getOptionLabel={option => option.label}
      style={{ minWidth: 500 }}
      onChange={(event, value) => handleChange(event, value)}
      renderInput={params => (
        <TextField {...params} label="Combo box" variant="outlined" fullWidth />
      )}
    />
  );
};

//   return (
//     <Select
//       autosize="false"
//       name="Company State"
//       options={listOfLenderTypes}
//       className="basic-single-select"
//       classNamePrefix="Select State"
//       isSearchable="true"
//       id="singleLoanSelect"
//       key="singleLoanSelect"
//       onChange={handleChange}
//       isDisabled={isDisabled}
//     />
//   );
// };

export default SingleLoanSelect;
