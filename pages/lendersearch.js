import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

import GetAppIcon from "@material-ui/icons/GetApp";

import SingleLoanSelect from "components/SingleSelect/SingleLoanSelect.js";
import SearchTable from "components/SearchTable/SearchTable.js";
import listOfLenderTypes from "lib/listOfLenderTypes";
import EmailModal from "components/EmailModal/EmailModal.js";
import LenderNavigationTabs from "components/NavigationTabs/LenderNavigationTabs.js";
import ConditionalLoadIcon from "components/ConditionalLoadIcon/ConditionalLoadIcon.js";

import { getQueryResults, getAllUsersQuery, sendEmailArr } from "lib/api";
import { adminUser, downloadCSV } from "lib/auth";

import lenderSearchStyle from "assets/jss/nextjs-material-kit-pro/pages/lenderSearchStyle.js";
const useStyles = makeStyles(lenderSearchStyle);

const LenderSearch = props => {
  const classes = useStyles();
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchArr, setSearchArr] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const [queryArr, setQueryArr] = useState([]);
  const [checkArr, setCheckArr] = useState([]);
  const [checked, setChecked] = useState([]);
  const [emailArr, setEmailArr] = useState([]);
  const [formattedEmailArr, setFormattedEmailArr] = useState([]);
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

  const router = useRouter();

  useEffect(() => {
    if (router.query.complete === "yes") {
      setSearchCompleted(true);
    } else {
      setSearchCompleted(false);
    }
  });

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

  const tempCheckToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    const tempArr = [];

    emailArr.forEach((ele, index) => {
      if (checked.indexOf(index) !== -1) tempArr.push(ele);
    });

    setFormattedEmailArr(tempArr);
  };

  const sendEmail = (event, arr, checkArr) => {
    const sendArr = [];

    arr.forEach((ele, index) => {
      if (checkArr.indexOf(index) !== -1) sendArr.push(ele);
    });

    sendEmailArr(sendArr);
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

  const formatEmailArr = arr => {
    const formattedEmail = [];

    arr.forEach(ele => {
      formattedEmail.push(ele[1].email);
    });
    return formattedEmail;
  };

  const formatCheckArr = arr => {
    const formattedArr = [];

    arr.forEach((ele, index) => {
      formattedArr.push(index);
    });

    return formattedArr;
  };

  const resetSearch = () => {
    router.push("/lendersearch");
  };

  const modalClick = event => {
    // event.preventDefault();
    console.log("clicked");
  };

  const handleClickAll = async () => {
    setIsLoading(true);
    const queryResults = await getAllUsersQuery();
    setCheckArr(formatCheckArr(queryResults.data));
    setQueryArr(queryResults.data);
    setEmailArr(formatEmailArr(queryResults.data));
    setIsLoading(false);
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

    setIsLoading(true);
    const queryResults = await getQueryResults(queryFieldsArr);
    setCheckArr(formatCheckArr(queryResults.data));
    setQueryArr(queryResults.data);
    setEmailArr(formatEmailArr(queryResults.data));
    setIsLoading(false);
  };

  return searchCompleted ? (
    <>
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
        <LenderNavigationTabs router={router} />

        <div className={classes.container}>
          <div className={classes.rowContainer}>
            <Button
              key="searchButton"
              type="button"
              color="primary"
              className={classes.highButton}
              onClick={(event, searchCompleted) => resetSearch(event, searchCompleted)}
            >
              <SearchIcon />
              Reset Search
            </Button>
            {/* <Button
              key="emailButton"
              type="button"
              color="success"
              className={classes.highButton}
              onClick={event => sendEmail(event)}
            >
              <SearchIcon />
              Send Email
            </Button> */}
            <EmailModal
              formattedEmailArr={formattedEmailArr}
              checked={checked}
              sendEmail={sendEmail}
              emailArr={emailArr}
            />
          </div>
          <GridContainer>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardCompanyResult}>
                <SearchTable
                  checked={checked}
                  tempCheckToggle={tempCheckToggle}
                  handleXClick={handleXClick}
                  queryArr={queryArr}
                  checkArr={checkArr}
                />
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.centerContainer}>
          <ConditionalLoadIcon className={classes.loading} isLoading={isLoading} size={90} />
        </div>
      </div>
    </>
  ) : (
    <>
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
        <LenderNavigationTabs router={router} />
        <div className={classes.container}>
          <h2 className={classes.title}>Admin Search</h2>
          <GridContainer>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardCompanySelect}>
                <CardHeader color="warning"></CardHeader>
                <h4 className={classes.cardTitle}>Search Fields</h4>
                <div className={classes.headerWrapper}>
                  <h5 className={classes.selectTitle}>Loan Type</h5>
                  <Link href={`/lendersearch?complete=yes`} as={"/lendersearch/search"}>
                  <Button
                    type="button"
                    color="primary"
                    className={classes.highButton}
                    onClick={handleSearch}
                  >
                    <SearchIcon style={{ color: "#FFFFFF" }} />
                    Search
                  </Button>
                  </Link>
                  <Link href={`/lendersearch?complete=yes`} as={"/lendersearch/searchall"}>
                    <Button
                      type="button"
                      color="primary"
                      className={classes.highButton}
                      onClick={handleClickAll}
                    >
                      <SearchIcon style={{ color: "#FFFFFF" }} />
                      Search All
                    </Button>
                  </Link>
                  <Button
                    type="button"
                    color="primary"
                    className={classes.highButton}
                    onClick={handleClickAll}
                  >
                    <GetAppIcon style={{ color: "#FFFFFF" }} />
                    Download CSV
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

export default React.memo(LenderSearch);
