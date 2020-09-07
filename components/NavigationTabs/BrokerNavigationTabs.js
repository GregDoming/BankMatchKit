import React from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EditIcon from "@material-ui/icons/Edit";
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from "next/router";

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
        setValue(3);
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
        aria-label="icon label tabs example"
        centered
      >
        <Link href="/landing-page">
          <Tab icon={<HomeIcon />} label="HOME" />
        </Link>
        <Link href="/brokercreateprofile">
          <Tab icon={<EditIcon />} label="Create Broker Profile" />
        </Link>
        <Link href="/brokermanagegroups">
          <Tab icon={<EditIcon />} label="Manage Broker Groups" />
        </Link>
      </Tabs>
    </Paper>
  );
};

export default BrokerNavigationTabs;
