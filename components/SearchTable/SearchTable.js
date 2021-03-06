import React from "react";
import Router from "next/router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// material-ui icons
import Check from "@material-ui/icons/Check";
// core components
import Table from "components/Table/Table.js";
import DeleteButton from "components/smallIconButtons/DeleteButton.js";
import EditProfileButton from "components/smallIconButtons/EditProfileButton.js";
import EmailButton from "components/smallIconButtons/EmailButton.js";

import { parseIsoDate } from "lib/helper.js";

import style from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

const SearchTable = props => {
  const {
    queryArr,
    handleXClick,
    tempCheckToggle,
    checked,
    handleEmailClick,
    subjectText,
    bodyText
  } = props;

  const handleEditProfileClick = async event => {
    event.preventDefault();
    try {
      const id = event.currentTarget.id;
      Router.push({
        pathname: "/adminpagination",
        query: { id: id }
      });
    } catch (err) {
      console.log(err);
    }
  };
  // Takes all the users from the search and organizes them
  const formatQueryArr = arr => {
    const formattedArr = [];
    const tempArrTwo = [];

    arr.forEach((user, index) => {
      const userProfile = user[0];
      const email = user[1].email;
      const id = user[1].id;
      const lastSolicitationDate = user[1].lastSolicitationDate;
      const tempArr = [];
      const simpleButtons = [
        <>
          <EditProfileButton
            key={"EditProfileButton" + index}
            index={index}
            id={id}
            handleEditProfileClick={handleEditProfileClick}
          />
          <DeleteButton
            key={"DeleteProfileButton" + index}
            index={index}
            id={id}
            handleXClick={handleXClick}
          />
          <EmailButton
            key={"EmailButton" + index}
            index={index}
            id={id}
            handleEmailClick={handleEmailClick}
            emailStr={email}
            subjectText={subjectText}
            bodyText={bodyText}
          />
        </>
      ];

      tempArr.push(
        <Checkbox
          key={"checkbox" + index}
          checked={checked.indexOf(index) !== -1}
          tabIndex={-1}
          onClick={() => tempCheckToggle(index)}
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
        userProfile.nameOfCompany,
        userProfile.phoneNumber,
        userProfile.city,
        lastSolicitationDate,
        simpleButtons
      );

      formattedArr.push(tempArr);
    });

    tempArrTwo.push({
      total: true,
      colspan: "5",
      amount: (
        <span key={"span"}>
          <b key="bbbbb">{arr.length}</b>
        </span>
      )
    });
    // IMPORTANT!!! if you change the order or the amount of columns in the table you need to change this sort.
    const sortedArr = formattedArr.sort((a, b) => {
      return Date.parse(a[7]) - Date.parse(b[7]);
    }).reverse();

    

    return sortedArr;
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
        "Last Solicition",
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

export default React.memo(SearchTable);
