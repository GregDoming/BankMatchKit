import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';

import styles from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const ActiveLink = ({ href, activeClassName, children }) => {
  const router = useRouter();
  const classes = useStyles();

  const child = React.Children.only(children);

  const checkClassName = () => {
    if (router.pathname === href && activeClassName) {
      return classes.navLinkActive; 
    };
    if (child.props.className) return classes.navLink;
    return classes.navLink;
  }
  
  const className = checkClassName();

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired
};
ActiveLink.defaultProps = {
  href: '',
  activeClassName: ''
};

export default ActiveLink;