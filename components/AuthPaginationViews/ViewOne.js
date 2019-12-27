import React from 'react';

import MultiInputForm from 'components/MultiInputForm/MultiInputForm.js';

const ViewOne = props => {
  const { dispatch, state } = props
  return <MultiInputForm dispatch={dispatch} state={state} />
};

export default ViewOne;