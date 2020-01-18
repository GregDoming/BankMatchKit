import React from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from "next/router";
import { getTab } from "lib/auth";

const BrokerNavigationTabs = props => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    switch (router.asPath) {
      case "/profile":
        setValue(0);
        break;
      case "/underConstruction":
        setValue(1);
        break;
      case "/underConstruction":
        setValue(2);
        break;
      case "/underConstruction":
        setValue(2);
        break;
      default:
    }
  });

  return (
    <Paper square>
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        centered
      >
        <Link href="/profile">
          <Tab icon={<HomeIcon />} label="HOME" />
        </Link>
        <Link href="/underConstruction">
          <Tab icon={<EditIcon />} label="EDIT" />
        </Link>
        <Link href="/underConstruction">
          <Tab icon={<SearchIcon />} label="SEARCH" />
        </Link>
        <Link href="/underConstruction">
          <Tab icon={<PersonPinIcon />} label="MAP" />
        </Link>
      </Tabs>
    </Paper>
  );
};

BrokerNavigationTabs.getInitialProps = getTab;

export default BrokerNavigationTabs;
