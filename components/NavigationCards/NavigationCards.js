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
import cardProject6 from "assets/img/examples/card-project6.jpg";

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
                  Enter Here to create or edit your lender profile
                </h6>
                <a href="#pablo"></a>
                <Button round href="#pablo" color="secondary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
              </CardBody>
            </LinkCard>
          </Link>
        </GridItem>
        <GridItem className={classes.linkPointer} xs={12} sm={6} md={6} lg={6}>
          <Link href="/underConstruction">
            <LinkCard
              raised
              background
              className={classes.navigationCard}
              style={{ backgroundImage: "url(" + blog8 + ")" }}
            >
              <CardBody background>
                <h3 className={classes.cardTitle}>Broker Portal</h3>
                <h6 className={classes.category}>
                  Create or edit your Broker profile
                </h6>
                <a href="#pablo"></a>
                <Button round href="#pablo" color="secondary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
              </CardBody>
            </LinkCard>
          </Link>
        </GridItem>
        <GridItem className={classes.linkPointer} xs={12} sm={6} md={6} lg={6}>
          <Link href="/lendersearch">
            <LinkCard
              raised
              background
              className={classes.navigationCard}
              style={{ backgroundImage: "url(" + cardProject6 + ")" }}
            >
              <CardBody background>
                <h6 className={classes.category}>Admin</h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Admin Area</h3>
                </a>
                <Button round href="#pablo" color="primary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </CardBody>
            </LinkCard>
          </Link>
        </GridItem>
        <GridItem className={classes.linkPointer} xs={12} sm={6} md={6} lg={6}>
          <Link href="/underConstruction">
            <LinkCard
              raised
              background
              className={classes.navigationCard}
              style={{ backgroundImage: "url(" + cardProject6 + ")" }}
            >
              <CardBody background>
                <h6 className={classes.category}>Custom Software</h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Software Unique to Our Platform
                  </h3>
                </a>
                <Button round href="#pablo" color="primary">
                  <FormatAlignLeft className={classes.icons} /> More info
                </Button>
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
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
