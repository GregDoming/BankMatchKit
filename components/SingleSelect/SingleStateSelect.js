import React, { useContext } from "react";
import Select from "react-select";

import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";

const listOfStates = [
  { value: "AK - Alaska", label: "AK - Alaska" },
  { value: "AL - Alabama", label: "AL - Alabama" },
  { value: "AZ - Arizona", label: "AZ - Arizona" },
  { value: "CA - California", label: "CA - California" },
  { value: "CO - Colorado", label: "CO - Colorado" },
  { value: "CT - Connecticut", label: "CT - Connecticut" },
  { value: "DE - Delaware", label: "DE - Delaware" },
  { value: "FL - Florida", label: "FL - Florida" },
  { value: "GA - Georgia", label: "GA - Georgia" },
  { value: "HI - Hawaii", label: "HI - Hawaii" },
  { value: "IA - Iowa", label: "IA - Iowa" },
  { value: "ID - Idaho", label: "ID - Idaho" },
  { value: "IL - Illinois", label: "IL - Illinois" },
  { value: "IN - Indiana", label: "IN - Indiana" },
  { value: "KS - Kansas", label: "KS - Kansas" },
  { value: "KY - Kentucky", label: "KY - Kentucky" },
  { value: "LA - Louisiana", label: "LA - Louisiana" },
  { value: "MA - Massachusetts", label: "MA - Massachusetts" },
  { value: "MD - Maryland", label: "MD - Maryland" },
  { value: "ME - Maine", label: "ME - Maine" },
  { value: "MI - Michigan", label: "MI - Michigan" },
  { value: "MN - Minnesota", label: "MN - Minnesota" },
  { value: "MO - Missouri", label: "MO - Missouri" },
  { value: "MS - Mississippi", label: "MS - Mississippi" },
  { value: "MT - Montana", label: "MT - Montana" },
  { value: "NC - North Carolina", label: "NC - North Carolina" },
  { value: "ND - North Dakota", label: "ND - North Dakota" },
  { value: "NE - Nebraska", label: "NE - Nebraska" },
  { value: "NE - Nebraska", label: "NH - New Hampshire" },
  { value: "NJ - New Jersey", label: "NJ - New Jersey" },
  { value: "NM - New Mexico", label: "NM - New Mexico" },
  { value: "NV - Nevada", label: "NV - Nevada" },
  { value: "NY - New York", label: "NY - New York" },
  { value: "OH - Ohio", label: "OH - Ohio" },
  { value: "OK - Oklahoma", label: "OK - Oklahoma" },
  { value: "OR - Oregon", label: "OR - Oregon" },
  { value: "PA - Pennsylvania", label: "PA - Pennsylvania" },
  { value: "PR - Puerto Rico", label: "PR - Puerto Rico" },
  { value: "RI - Rhode Island", label: "RI - Rhode Island" },
  { value: "SC - South Carolina", label: "SC - South Carolina" },
  { value: "SD - South Dakota", label: "SD - South Dakota" },
  { value: "TN - Tennessee", label: "TN - Tennessee" },
  { value: "TX - Texas", label: "TX - Texas" },
  { value: "UT - Utah", label: "UT - Utah" },
  { value: "VA - Virginia", label: "VA - Virginia" },
  { value: "VT - Vermont", label: "VT - Vermont" },
  { value: "WA - Washington", label: "WA - Washington" },
  { value: "WI - Wisconsin", label: "WI - Wisconsin" },
  { value: "WV - West Virginia", label: "WV - West Virginia" },
  { value: "WY - Wyoming", label: "WY - Wyoming" }
];

const SingleStateSelect = () => {
  const dispatch = useContext(FormDispatchContext);
  const state = useContext(FormStateContext);

  const defaultVal = { value: state.companyState, label: state.companyState };

  const handleChange = selectedOption => {
    event.preventDefault();
    dispatch({ type: "handleStateSelector", payload: selectedOption });
  };

  return (
    <Select
      name="Company State"
      options={listOfStates}
      className="basic-single-select"
      classNamePrefix="Select State"
      isSearchable="true"
      onChange={handleChange}
      defaultValue={defaultVal}
    />
  );
};

export default SingleStateSelect;
