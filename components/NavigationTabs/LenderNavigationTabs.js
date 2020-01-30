import React from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "components/CustomButtons/Button.js";
import PersonIcon from "@material-ui/icons/Person";

import PersonPinIcon from "@material-ui/icons/PersonPin";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useRouter } from "next/router";

import navigationTabStyle from "assets/jss/nextjs-material-kit-pro/components/navigationTabStyle.js";

import { downloadCSV } from "lib/auth";

const useStyles = makeStyles(navigationTabStyle);

const LenderNavigationTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    switch (router.asPath) {
      case "/profile":
        setValue(1);
        break;
      case "/authpagination":
        setValue(2);
        break;
      case "/lendersearch":
        setValue(3);
        break;
      case "/adminPagination":
        setValue(3);
        break;
      default:
    }
  });

  return (
    <div className={classes.stickyContainer}>
      <Paper square>
        <Tabs
          className={classes.root}
          value={value}
          variant="fullWidth"
          indicatorColor="secondary"
          aria-label="icon label tabs example"
          centered
        >
          <Link href="/landing-page">
            <Tab icon={<HomeIcon />} label="HOME" />
          </Link>
          <Link href="/profile">
            <Tab icon={<PersonIcon />} label="PROFILE" />
          </Link>
          <Link href="/authpagination">
            <Tab icon={<EditIcon />} label="EDIT PROFILE" />
          </Link>
          <Link href="/lendersearch">
            <Tab icon={<SearchIcon />} label="SEARCH LENDER DATABASE" />
          </Link>
          <Link href="/underConstruction">
            <Tab icon={<PersonPinIcon />} label="MAP" />
          </Link>
          <div className={classes.lighten}>
            <Tab icon={<GetAppIcon />} label="DOWNLOAD CSV" />
          </div>
        </Tabs>
          {/* <div>
            <Button onClick={() => downloadCSV()} className={classes.buttonStyle}>
              <Tab icon={<GetAppIcon />} label="DOWNLOAD CSV" />
            </Button>
          </div> */}
      </Paper>
    </div>
  );
};

export default LenderNavigationTabs;
