import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
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
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card raised background style={{ backgroundImage: "url(" + office2 + ")" }}>
            <CardBody background>
              <h6 className={classes.category}>Lender Portal</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>Enter Here to create or edit your lender profile</h3>
              </a>
              <p className={classes.category}>
                "Don{"'"}t be scared of the truth because we need to restart the human foundation in
                truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
                back is..."
              </p>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card raised background style={{ backgroundImage: "url(" + blog8 + ")" }}>
            <CardBody background>
              <h6 className={classes.category}>Broker Portal</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>Create or edit your Boker profile</h3>
              </a>
              <p className={classes.category}>
                Don{"'"}t be scared of the truth because we need to restart the human foundation in
                truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
                back is...
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card raised background style={{ backgroundImage: "url(" + cardProject6 + ")" }}>
            <CardBody background>
              <h6 className={classes.category}>MARKETING</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>0 to 100.000 Customers in 6 months</h3>
              </a>
              <p className={classes.category}>
                Don{"'"}t be scared of the truth because we need to restart the human foundation in
                truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
                back is...
              </p>
              <Button round href="#pablo" color="warning">
                <FormatAlignLeft className={classes.icons} /> Read case study
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card raised background style={{ backgroundImage: "url(" + cardProject6 + ")" }}>
            <CardBody background>
              <h6 className={classes.category}>Custom Software</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>Use our custom algorithims to find the company or person that can help you</h3>
              </a>
              <p className={classes.category}>
                Don{"'"}t be scared of the truth because we need to restart the human foundation in
              </p>
              <Button round href="#pablo" color="warning">
                <FormatAlignLeft className={classes.icons} /> Read case study
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default NavigationCards
