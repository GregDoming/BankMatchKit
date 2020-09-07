import React from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EditIcon from "@material-ui/icons/Edit";
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from "next/router";

import navigationTabStyle from "assets/jss/nextjs-material-kit-pro/components/navigationTabStyle.js";

const useStyles = makeStyles(navigationTabStyle);

const LoanNavigationTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    switch (router.asPath) {
      case "/profile":
        setValue(0);
        break;
      case "/loaninitiate":
        setValue(1);
        break;
      case "/loanmanage":
        setValue(2);
        break;
      case "/loanarchive":
        setValue(3);
        break;
      default:
        setValue(0)
    }
  });

  return (
    <div className={classes.stickyContainer}>

    <Paper square>
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="secondary"
        aria-label="icon label tabs example"
        centered
      >
        <Link href="/landing-page">
          <Tab icon={<HomeIcon />} label="HOME" />
        </Link>
        <Link href="/loaninitiate">
          <Tab icon={<EditIcon />} label="Initiate Loan" />
        </Link>
        <Link href="/loanmanage">
          <Tab icon={<EditIcon />} label="Manage Loans" />
        </Link>
        <Link href="/loanarchive">
          <Tab icon={<EditIcon />} label="Loan Archive" />
        </Link>
      </Tabs>
    </Paper>
    </div>
  );
};

export default LoanNavigationTabs;
