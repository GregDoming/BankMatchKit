import React, { useState, useEffect } from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import SingleLoanSelect from "components/SingleSelect/SingleLoanSelect.js";
import SearchTable from "components/SearchTable/SearchTable.js";
import lenderSearchStyle from "assets/jss/nextjs-material-kit-pro/pages/lenderSearchStyle.js";
import listOfLenderTypes from "lib/listOfLenderTypes";

import { getQueryResults } from "lib/api";

const useStyles = makeStyles(lenderSearchStyle);

const LenderSearch = () => {
  const classes = useStyles();
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [searchArr, setSearchArr] = useState([]);
  const [foundUsers, setFoundUsers] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const [queryFieldsObj, setqueryFieldsObj] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: ""
  });
  const [lenderTypesList, setLenderTypesList] = useState(listOfLenderTypes);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setSearchArr(searchArr => [
      ...searchArr,
      <li key={"topSearchList" + searchArr.length} className={classes.lenderColumn}>
        <div key={"searchListTwo" + searchArr.length} className={classes.lender}>
          <SingleLoanSelect
            idNumber={searchArr.length + 1}
            isDisabled={isDisabled}
            handleChange={handleChange}
            lenderTypesList={lenderTypesList}
            key={"singleLoanSelect" + searchArr.length}
            id="queryValues"
          />
        </div>
      </li>
    ]);

    setIdNumber(idNumber + 1);
  };

  const handleClose = event => {
    event.preventDefault();
    
    const newArr = [...searchArr];
    newArr.pop();
    setSearchArr(newArr);
  };

  const handleChange = (event, value) => {
    const keyNumber = event.target.id.replace(/(^\d+)(.+$)/i, "$1");
    queryFieldsObj[keyNumber] = value.value;
  };

  const handleSearch = async () => {
    const queryFieldsArr = [];

    for (let key in queryFieldsObj) {
      if (queryFieldsObj.hasOwnProperty(key)) {
        if (queryFieldsObj[key] && queryFieldsArr.indexOf(queryFieldsObj[key]) === -1) {
          const tempObj = {};
          tempObj[queryFieldsObj[key]] = "YES";
          queryFieldsArr.push(tempObj);
        }
      }
    }
    const queryResults = await getQueryResults(queryFieldsArr);
    console.log(queryResults.data);
    formatFoundUsers(queryResults.data)
    setFoundUsers(formatFoundUsers(queryResults.data));
    setSearchCompleted(true);
  };

  const formatFoundUsers = users => {
    const finalArr = [];
    users.forEach((user, index) => {
      for (let key in user) {
        if (user.hasOwnProperty(key)) {
          finalArr.push(
              <b key={`${key} + ${index} + ${user[key]}`}>{user[key]}</b>
          );
        }
      }
      finalArr.push(<br key={"br" + index}></br>)
    });
    console.log(finalArr);
    return finalArr;
  };

  // useEffect(() => {
  //   console.log(foundUsers), [foundUsers]
  // })
  // useEffect(() => console.log(typeof foundUsers[0]));

  return searchCompleted ? (
    <>
    <SearchTable/>
    <div className={classes.spaceTop}>{foundUsers.map(ele => {return ele})}</div>
    </>
  ) : (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <h2 className={classes.title}>Admin Search</h2>
        <GridContainer>
          <GridItem xs={12} sm={10} md={10}>
            <Card className={classes.cardCompanySelect}>
              <h4 className={classes.cardTitle}>Search Fields</h4>
              <div className={classes.headerWrapper}>
                <h5 className={classes.selectTitle}>Loan Type</h5>
                <Button
                  type="button"
                  color="success"
                  className={classes.highButton}
                  style={{ minHeight: "60px", fontSize: "20px" }}
                  onClick={handleSearch}
                >
                  <SearchIcon style={{ color: "#FFFFFF" }} />
                  Search
                </Button>
              </div>
              <ul>
                <li key={"lenderListThree"} className={classes.lender}>
                  <SingleLoanSelect
                    idNumber={0}
                    isDisabled={isDisabled}
                    lenderTypesList={lenderTypesList}
                    key="singleLoanSelect"
                    id="queryValues"
                    handleChange={handleChange}
                  />
                </li>
                <li key={"lenderListFour"} className={classes.lenderButton}>
                  <Button justIcon round color="info" onClick={event => handleClick(event)}>
                    <AddIcon style={{ color: "#FFFFFF" }} />
                  </Button>
                  <Button
                    key={"lenderListSix"}
                    justIcon
                    round
                    color="info"
                    onClick={event => handleClose(event)}
                  >
                    <CloseIcon style={{ color: "#FFFFFF" }} />
                  </Button>
                </li>
                {searchArr}
              </ul>
              <div className={classes.spacerDiv} />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default LenderSearch;
