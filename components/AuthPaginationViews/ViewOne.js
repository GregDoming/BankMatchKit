import React from 'react';

import MultiInputForm from 'components/MultiInputForm/MultiInputForm.js';

const ViewOne = (props) => {
  const { handleInput, toggleFormState } = props
  return <MultiInputForm handleInput={handleInput} toggleFormState={toggleFormState} />
};

export default ViewOne;