import React from "react";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import Close from "@material-ui/icons/Close";


const DeleteButton = props => {
  const { index, id, handleXClick } = props;

  return (
    <Tooltip
      id={"DeleteButton" + index}
      title="Remove From List"
      placement="top"
      key={"DeleteButton" + index}
    >
      <Button
        onClick={event => handleXClick(event)}
        id={id}
        simple
        index={index}
        justIcon
        size="sm"
        color="danger"
        key={"DeleteTop" + index}
      >
        <Close />
      </Button>
    </Tooltip>
  );
};

export default DeleteButton;
