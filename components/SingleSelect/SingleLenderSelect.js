import React, { useContext } from "react";
import Select from "react-select";

const lenderName = [
  { value: "Bank", label: "Bank" },
  { value: "CDFI", label: "CDFI" },
  { value: "Credit Union", label: "Credit Union" },
  { value: "Insurance Company", label: "Insurance Company" },
  { value: "Non-Bank Lender", label: "Non Bank Lender" },
  { value: "Private Equity", label: "Private Equity" },
  { value: "Broker", label: "Broker" }
];

const SingleLenderSelect = props => {
  const { dispatch, state } = props;
  const { typeOfLender } = state;
  const defaultVal = { value: typeOfLender, label: typeOfLender };


  const handleChange = selectedOption => {
    event.preventDefault();
    dispatch({ type: "handleLenderSelector", payload: selectedOption });
  };

  return (
    <Select
      name="Type of Lender"
      options={lenderName}
      className="basic-single-select"
      classNamePrefix="Select Lender"
      isSearchable="true"
      onChange={handleChange}
      defaultValue={defaultVal}
    />
  );
};

export default SingleLenderSelect;
