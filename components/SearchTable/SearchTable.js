import React from "react";
import Router from "next/router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// material-ui icons
import Check from "@material-ui/icons/Check";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

import { adminGetUserById } from "lib/api";
import { convertState } from 'lib/auth';


import style from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

const SearchTable = props => {
  const { queryArr, checkArr } = props;
  const [checked, setChecked] = React.useState(checkArr);
  const [userIdArr, setUserIdArr] = React.useState([]);

  const handleEditProfileClick = async event => {
    event.preventDefault();
    try {
      const id = event.currentTarget.id
      Router.push({
        pathname: "/adminpagination",
        query: { id: id }
      })
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const formatQueryArr = arr => {
    const formattedArr = [];
    const tempArrTwo = [];

    arr.forEach((user, index) => {
      const userProfile = user[0];
      const email = user[1].email;
      const id = user[1].id;
      const tempArr = [];
      const simpleButtons = [
        // { color: "info", icon: Person, value: "Unknow Use"  },
        { color: "success", icon: Edit, value: "Edit Profile" },
        { color: "danger", icon: Close, value: "Close Row" }
      ].map((prop, key) => {
        return (
          <Tooltip
            id={"tooltip-top" + prop.key}
            title={prop.value}
            placement="top"
            key={"tooltipTop" + key}
          >
            <Button
              onClick={event => handleEditProfileClick(event)}
              id={id}
              simple
              justIcon
              size="sm"
              color={prop.color}
              key={"buttonTop" + key}
            >
              <prop.icon />
            </Button>
          </Tooltip>
        );
      });

      tempArr.push(
        <Checkbox
          checked={checked.indexOf(index) !== -1}
          tabIndex={-1}
          onClick={() => handleToggle(index)}
          checkedIcon={<Check className={classes.checkedIcon} />}
          icon={<Check className={classes.uncheckedIcon} />}
          classes={{
            checked: classes.checked,
            root: classes.checkRoot
          }}
        />,
        userProfile.firstName,
        userProfile.lastName,
        email,
        userProfile.companyName,
        userProfile.phoneNumber,
        userProfile.city,
        simpleButtons
      );

      formattedArr.push(tempArr);
    });

    tempArrTwo.push({
      total: true,
      colspan: "5",
      amount: (
        <span>
          <b>{arr.length}</b>
        </span>
      )
    });

    return formattedArr;
  };

  const classes = useStyles();
  return (
    <Table
      striped
      tableHead={[
        "",
        "First Name",
        "Last Name",
        "Email",
        "Company Name",
        "Phone Number",
        "City",
        ""
      ]}
      tableData={formatQueryArr(queryArr)}
      customCellClasses={[
        classes.textCenter,
        classes.padding0,
        classes.textRight,
        classes.textRight
      ]}
      customHeadCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
    />
  );
};

export default SearchTable;
