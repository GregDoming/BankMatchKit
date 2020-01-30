/*eslint-disable*/
import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import constructionPageStyles from "assets/jss/nextjs-material-kit-pro/pages/constructionPageStyles.js";

import image from "assets/img/construction.jpg";

const useStyles = makeStyles(constructionPageStyles);

const ErrorPage = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>Page Under Construction</h1>
              <h3 className={classes.subTitle}>Please Excuse our mess</h3>
              <Link href="landing-page">
              <Button color="danger" size="lg">
                Return Home
              </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ErrorPage;