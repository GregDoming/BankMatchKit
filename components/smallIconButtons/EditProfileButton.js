import React from "react";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import Edit from "@material-ui/icons/Edit";

const EditProfileButton = props => {
  const { index, id, handleEditProfileClick } = props;

  return (
    <Tooltip
      id={"SearchTable" + index}
      title="Edit Profile"
      placement="top"
      key={"SearchTable" + index}
    >
      <Button
        onClick={event => handleEditProfileClick(event)}
        id={id}
        simple
        index={index}
        justIcon
        size="sm"
        color="success"
        key={"buttonTop" + index}
      >
        <Edit />
      </Button>
    </Tooltip>
  );
};

export default EditProfileButton;
