import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import Snackbar from "@material-ui/core/Snackbar";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import SearchIcon from "@material-ui/icons/Search";
import Parallax from "components/Parallax/Parallax.js";
import CardHeader from "components/Card/CardHeader.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import SingleLoanSelect from "components/SingleSelect/SingleLoanSelect.js";
import SearchTable from "components/SearchTable/SearchTable.js";
import { listOfLenderTypes } from "lib/listOfLenderTypes";
import EmailModal from "components/EmailModal/EmailModal.js";
import LenderNavigationTabs from "components/NavigationTabs/LenderNavigationTabs.js";
import ConditionalLoadIcon from "components/ConditionalLoadIcon/ConditionalLoadIcon.js";

import { getQueryResults, getAllUsersQuery, sendEmailObj, setSolicitationDate } from "lib/api";
import { adminUser } from "lib/auth";

import lenderSearchStyle from "assets/jss/nextjs-material-kit-pro/pages/lenderSearchStyle.js";
const useStyles = makeStyles(lenderSearchStyle);

const LenderSearch = React.memo(props => {
  const classes = useStyles();
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [searchArr, setSearchArr] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const [queryArr, setQueryArr] = useState([]);
  const [checkArr, setCheckArr] = useState([]);
  const [checked, setChecked] = useState([]);
  const [emailArr, setEmailArr] = useState([]);
  const [formattedEmailArr, setFormattedEmailArr] = useState([]);
  const [subjectText, setSubjectText] = React.useState("We will set this dynamically");
  const [bodyText, setBodyText] = React.useState("We will set this dynamically");
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

  useEffect(() => {
    const tempArr = [];

    emailArr.forEach((ele, index) => {
      if (checked.indexOf(index) !== -1) tempArr.push(ele);
    });

    setFormattedEmailArr(tempArr);
  }, [checked])

  const onSubjectTextChange = event => {
    event.preventDefault();
    setSubjectText(event.target.value);
  };

  const onBodyTextChange = event => {
    event.preventDefault();
    setBodyText(event.currentTarget.value);
  };

  const handleClick = event => {
    event.preventDefault();
    setSearchArr(searchArr => [
      ...searchArr,
      <li key={"topSearchList" + searchArr.length} className={classes.lenderColumn}>
        <div key={"searchListTwo" + searchArr.length} className={classes.lender}>
          <SingleLoanSelect
            idnumber={searchArr.length + 1}
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
  // For the small icon component that shows up in seachTable
  const handleXClick = event => {
    event.preventDefault();
    const arrCopy = [...queryArr];

    arrCopy.splice(event.currentTarget.value, 1);
    setQueryArr(arrCopy);
  };
  //For sending a single Email
  const sendSingleEmail = (event, arr) => {
    event.preventDefault();
    const sendArr = [];

    sendArr.push(arr[event.currentTarget.value]);

    sendEmailObj(sendArr, subjectText, bodyText);

    setOpen(true);
  };

  const sendEmail = async (event, arr, checkArr) => {
    const contactsArr = [];
    const sendObj = {};

    arr.forEach((ele, index) => {
      if (checkArr.indexOf(index) !== -1) contacts.push(ele);
    });

    try {
      await sendEmailObj(sendObj, subjectText, bodyText);
    } catch (err) {
      console.log(err);
    }


    setSolicitationDate(arr);

    setOpen(true);
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

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return searchCompleted ? (
    <>
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small></Parallax>
      <div className={classes.main}>
        <Snackbar open={open} autoHideDuration={1800} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="success">
            EMAIL SENT SUCCESSFULLY!
          </Alert>
        </Snackbar>
        <LenderNavigationTabs router={router} />
        <div className={classes.container}>
          <div className={classes.rowContainer}>
            <Button
              key="searchButton"
              type="button"
              className={classes.highButtonShort}
              onClick={(event, searchCompleted) => resetSearch(event, searchCompleted)}
            >
              <SearchIcon />
              Reset Search
            </Button>
            <EmailModal
              formattedEmailArr={formattedEmailArr}
              sendEmail={sendEmail}
              emailArr={formattedEmailArr}
              subjectText={subjectText}
              bodyText={bodyText}
              checked={checked}
              onSubjectTextChange={onSubjectTextChange}
              onBodyTextChange={onBodyTextChange}
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
                  sendSingleEmail={sendSingleEmail}
                  emailArr={emailArr}
                  subjectText={subjectText}
                  bodyText={bodyText}
                  onSubjectTextChange={onSubjectTextChange}
                  onBodyTextChange={onBodyTextChange}
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
        <div className={classes.container} style={{ backgroundColor: "gray[2]" }}>
          <h2 className={classes.title}>Admin Search</h2>
          <GridContainer>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardCompanySelect}>
                <CardHeader color="rose"></CardHeader>
                <h4 className={classes.cardTitle}>Search Fields</h4>
                <div className={classes.headerWrapper}>
                  <h5 className={classes.selectTitle}>Loan Type</h5>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={8}>
                      <Link href={`/lendersearch?complete=yes`} as={"/lendersearch/search"}>
                        <Button
                          type="button"
                          color="primary"
                          className={classes.highButton}
                          onClick={handleSearch}
                          size="lg"
                        >
                          <SearchIcon style={{ color: "#FFFFFF" }} />
                          Search
                        </Button>
                      </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8}>
                      <Link href={`/lendersearch?complete=yes`} as={"/lendersearch/searchall"}>
                        <Button
                          type="button"
                          color="primary"
                          className={classes.highButton}
                          onClick={handleClickAll}
                          size="lg"
                        >
                          <SearchIcon style={{ color: "#FFFFFF" }} />
                          Search All
                        </Button>
                      </Link>
                    </GridItem>
                  </GridContainer>
                </div>
                <ul>
                  <li key={"lenderListThree"} className={classes.lender}>
                    <SingleLoanSelect
                      idnumber={0}
                      isDisabled={isDisabled}
                      lenderTypesList={lenderTypesList}
                      key="singleLoanSelect"
                      id="queryValues"
                      handleChange={handleChange}
                    />
                  </li>
                  <li key={"lenderListFour"} className={classes.lenderButton}>
                    <Button
                      className={classes.addButton}
                      justIcon
                      round
                      color="primary"
                      style={{ color: "#FFFFFF" }}
                      onClick={event => handleClick(event)}
                    >
                      <AddIcon />
                    </Button>
                    <Button
                      key={"lenderListSix"}
                      justIcon
                      round
                      color="secondary"
                      onClick={event => handleClose(event)}
                    >
                      <CloseIcon />
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
});

LenderSearch.getInitialProps = adminUser;

export default LenderSearch;
