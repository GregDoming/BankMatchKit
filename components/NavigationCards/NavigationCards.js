import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import LinkCard from "components/Card/LinkCard.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import office2 from "assets/img/examples/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg2 from "assets/img/examples/bg2.jpg";
import city from "assets/img/examples/city.jpg";

import navigationCardsStyle from "assets/jss/nextjs-material-kit-pro/components/navigationCardsStyle.js";

const useStyles = makeStyles(navigationCardsStyle);

const NavigationCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer className={classes.navigationContainer}>
        <GridItem className={classes.linkPointer} xs={12} sm={6} md={6} lg={6}>
          <Link href="/profile">
            <LinkCard
              raised
              background
              className={classes.navigationCard}
              style={{ backgroundImage: "url(" + office2 + ")" }}
            >
              <CardBody background>
                <h3 className={classes.cardTitle}>Lender Portal</h3>
                <h6 className={classes.category}>
                  Manage and Search the Lender Database
                </h6>
                <a href="#pablo"></a>
                <Button round href="#pablo" color="secondary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
              </CardBody>
            </LinkCard>
          </Link>
                {/* <NavCardModals/> */}
        </GridItem>
        <GridItem className={classes.linkPointer} xs={12} sm={6} md={6} lg={6}>
          <Link href="/brokerportal">
            <LinkCard
              raised
              background
              className={classes.navigationCard}
              style={{ backgroundImage: "url(" + blog8 + ")" }}
            >
              <CardBody background>
                <h3 className={classes.cardTitle}>Broker Groups</h3>
                <h6 className={classes.category}>Manage Broker Groups</h6>
                <a href="#pablo"></a>
                <Button round href="#pablo" color="secondary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
              </CardBody>
            </LinkCard>
          </Link>
        </GridItem>
        <GridItem className={classes.linkPointer} xs={12} sm={6} md={6} lg={6}>
          <Link href="/loanportal">
            <LinkCard
              raised
              background
              className={classes.navigationCard}
              style={{ backgroundImage: "url(" + city + ")" }}
            >
              <CardBody background>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Loan Database</h3>
                </a>
                <h6 className={classes.category}>Manage and Shop Deals</h6>
                <Button round href="#pablo" color="secondary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
              </CardBody>
            </LinkCard>
          </Link>
        </GridItem>
        <GridItem className={classes.linkPointer} xs={12} sm={6} md={6} lg={6}>
          <Link href="/toolsportal">
            <LinkCard
              raised
              background
              className={classes.navigationCard}
              style={{ backgroundImage: "url(" + bg2 + ")" }}
            >
              <CardBody background>
                <h3 className={classes.cardTitle}>Analysis Tools</h3>
                <h6 className={classes.category}>Analyze and Compare Aspects of Different Offers</h6>
                <a href="#pablo"></a>
                <Button round href="#pablo" color="secondary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
              </CardBody>
            </LinkCard>
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default NavigationCards;
