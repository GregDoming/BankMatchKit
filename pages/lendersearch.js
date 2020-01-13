import React, { useState, useEffect } from "react";
import Router from 'next/router'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import Parallax from "components/Parallax/Parallax.js";
import CardHeader from "components/Card/CardHeader.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import SingleLoanSelect from "components/SingleSelect/SingleLoanSelect.js";
import SearchTable from "components/SearchTable/SearchTable.js";
import lenderSearchStyle from "assets/jss/nextjs-material-kit-pro/pages/lenderSearchStyle.js";
import listOfLenderTypes from "lib/listOfLenderTypes";
import EmailModal from "components/EmailModal/EmailModal.js";

import { getQueryResults, getAllUsersQuery } from "lib/api";
import { adminUser } from "lib/auth";

const useStyles = makeStyles(lenderSearchStyle);

const LenderSearch = () => {
  const classes = useStyles();
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [searchArr, setSearchArr] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const [queryArr, setQueryArr] = useState([]);
  const [checkArr, setCheckArr] = useState([]);
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

  const handleXClick = event => {
    event.preventDefault();

    const arrCopy = [...queryArr];
    arrCopy.splice(event.currentTarget.value, 1);
    setQueryArr(arrCopy);
  };

  const formatCheckArr = arr => {
    const formattedArr = [];

    arr.forEach((ele, index) => {
      formattedArr.push(index);
    });

    return formattedArr;
  };

  const resetSearch = (event, bool) => {
    event.preventDefault();
    setSearchCompleted(false);
  };

  const handleClickAll = async () => {
    const queryResults = await getAllUsersQuery();
    setCheckArr(formatCheckArr(queryResults.data));
    setQueryArr(queryResults.data);
    Router.push("/lendersearch/searchall");
    setSearchCompleted(true);
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
    setCheckArr(formatCheckArr(queryResults.data));
    setQueryArr(queryResults.data);
    setSearchCompleted(true);
  };

  return searchCompleted ? (
    <>
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.rowContainer}>
            <Button
              key="searchButton"
              type="button"
              color="success"
              className={classes.highButton}
              style={{ minHeight: "60px", fontSize: "20px" }}
              onClick={(event, searchCompleted) => resetSearch(event, searchCompleted)}
            >
              <SearchIcon style={{ color: "#FFFFFF" }} />
              Reset Search
            </Button>
            <EmailModal queryArr={queryArr} />
          </div>
          <GridContainer>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardCompanyResult}>
                <SearchTable handleXClick={handleXClick} queryArr={queryArr} checkArr={checkArr} />
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </>
  ) : (
    <>
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small></Parallax>

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <h2 className={classes.title}>Admin Search</h2>
          <GridContainer>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardCompanySelect}>
                <CardHeader color="warning"></CardHeader>
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
                  <Button
                    type="button"
                    color="success"
                    className={classes.highButton}
                    style={{ minHeight: "60px", fontSize: "20px" }}
                    onClick={handleClickAll}
                  >
                    <SearchIcon style={{ color: "#FFFFFF" }} />
                    Search All
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
    </>
  );
};

LenderSearch.getInitialProps = adminUser;

export default LenderSearch;
