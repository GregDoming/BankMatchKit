/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "@material-ui/core/Button";

import { signoutUser } from "lib/auth";

import navbarsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(navbarsStyle);

const LoggedInLinks = props => {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor="dark"
          buttonText="Navigation"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/authpagination">
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} /> Lender Portal
              </a>
            </Link>,
            <Link href="/brokerportal">
              <a className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                Broker Portal
              </a>
            </Link>,
            <Link href="/loanportal">
              <a className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                Loan Portal
              </a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.buttonLink} onClick={signoutUser}>
          <a className={classes.customButton}>
            Sign Out
          </a>
        </Button>
      </ListItem>
    </List>
  );
};

LoggedInLinks.defaultProps = {
  hoverColor: "dark"
};

LoggedInLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "secondary"
  ])
};

export default LoggedInLinks;
