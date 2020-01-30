import React, { useContext } from "react";
import Select from "react-select";

import { FormDispatchContext, FormStateContext } from "pages/authpagination.js";

const lenderName = [
  { value: "lenderNameBank", label: "Bank" },
  { value: "lenderNameCDFI", label: "CDFI" },
  { value: "lenderNameCreditUnion", label: "Credit Union" },
  { value: "lenderNameInsuranceCompany", label: "Insurance Company" },
  { value: "lenderNameNonBankLender", label: "Non Bank Lender" },
  { value: "lenderNamePrivateEquity", label: "Private Equity" }
];

const MultiLenderSelect = props => {
  const { dispatch, state } = props;

  const {
    lenderNameBank,
    lenderNameCDFI,
    lenderNameCreditUnion,
    lenderNameInsuranceCompany,
    lenderNameNonBankLender,
    lenderNamePrivateEquity
  } = state;
  const lenderNameArr = [
    lenderNameBank,
    lenderNameCDFI,
    lenderNameCreditUnion,
    lenderNameInsuranceCompany,
    lenderNameNonBankLender,
    lenderNamePrivateEquity
  ];
  const defaultArr = [];

  lenderNameArr.forEach((lender, index) => {
    if (lender) defaultArr.push(lenderName[index])
  })

  const handleChange = selectedOption => {
    event.preventDefault();
    dispatch({ type: "handleLenderSelect", payload: selectedOption });
  };

  return (
    <Select
      isMulti
      name="Lender Types"
      options={lenderName}
      className="basic-multi-select"
      classNamePrefix="Select Lender"
      onChange={handleChange}
      defaultValue={defaultArr}
    />
  );
};

export default MultiLenderSelect;
