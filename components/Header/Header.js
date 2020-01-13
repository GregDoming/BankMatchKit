import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
// core components
import styles from "assets/jss/nextjs-material-kit-pro/components/headerStyle.js";

const useStyles = makeStyles(styles);

const Header = props => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    window.addEventListener("scroll", () => headerScrollChange());
    return function cleanup() {
      window.removeEventListener("scroll", () => headerScrollChange());
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerScrollChange = () => {
    if (window.pageYOffset > 100) {
      setIsScrolled(true);
    }

    if (window.pageYOffset < 100) {
      setIsScrolled(false);
    }
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, links, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.minHeight]: "100px",
    [classes.boxShadow]:
      "15px 20px 20px rgba(0, 0, 0, 0.25), inset 15px 13px 10px rgba(0, 0, 0, 0.22)"
  });
  return isScrolled ? (
    <>
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <Button className={classes.title}>
            <Link href="/presentation">
              <a>{brand}</a>
            </Link>
          </Button>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Toolbar>
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}

            classes={{
              paper: classes.drawerPaper
            }}
            onClose={handleDrawerToggle}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              className={classes.closeButtonDrawer}
            >
              <Close />
            </IconButton>
            <div className={classes.appResponsiveColumn}>{links}</div>
          </Drawer>
      </AppBar>
    </>
  ) : (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          <Link href="/presentation">
            <a>{brand}</a>
          </Link>
        </Button>
        <Hidden smDown implementation="css" className={classes.hidden}>
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          color="blue"
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default Header;
