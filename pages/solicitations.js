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

import { sendEmailObj } from "lib/api";
import { adminGetUsers } from "lib/auth";

import lenderSearchStyle from "assets/jss/nextjs-material-kit-pro/pages/lenderSearchStyle.js";
const useStyles = makeStyles(lenderSearchStyle);

const Solicitations = React.memo(props => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [queryArr, setQueryArr] = useState(props.queryResults.data);
  const [checkArr, setCheckArr] = useState([]);
  const [checked, setChecked] = useState([]);
  const [emailArr, setEmailArr] = useState(props.emailArr);
  const [formattedEmailArr, setFormattedEmailArr] = useState([]);
  const [subjectText, setSubjectText] = React.useState("We will set this dynamically");
  const [bodyText, setBodyText] = React.useState("We will set this dynamically");

  const router = useRouter();

  useEffect(() => {
    const tempArr = [];

    emailArr.forEach((ele, index) => {
      if (checked.indexOf(index) !== -1) tempArr.push(ele);
    });

    setFormattedEmailArr(tempArr);
  }, [checked]);

  const onSubjectTextChange = event => {
    event.preventDefault();
    setSubjectText(event.target.value);
  };

  const onBodyTextChange = event => {
    event.preventDefault();
    setBodyText(event.currentTarget.value);
  };

  const formatCheckArr = arr => {
    const formattedArr = [];

    arr.forEach((ele, index) => {
      formattedArr.push(index);
    });

    return formattedArr;
  };

  const formatEmailArr = arr => {
    const formattedEmail = [];

    arr.forEach(ele => {
      formattedEmail.push(ele[1].email);
    });
    return formattedEmail;
  };

  const handleClickAll = async () => {
    
    setIsLoading(true);
    const queryResults = await getAllUsersQuery();
    setCheckArr(formatCheckArr(queryResults.data));
    setQueryArr(queryResults.data);
    setEmailArr(formatEmailArr(queryResults.data));
    setIsLoading(false);
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
    const sendObj = {};

    arr.forEach((ele, index) => {
      if (checkArr.indexOf(index) !== -1) contacts.push(ele);
    });

    try {
      await sendEmailObj(sendObj, subjectText, bodyText);
    } catch (err) {
      console.log(err);
    }

    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
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
  );
});

Solicitations.getInitialProps = adminGetUsers;

export default Solicitations;
