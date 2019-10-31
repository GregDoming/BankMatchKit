import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';

import styles from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  const classes = useStyles();

  const child = React.Children.only(children);

  const isActiveRoute = () => {
    if (router.pathname === href) return true
    return false
  }
  
  const isActive = isActiveRoute();

  return (
    <div>
      {isActive ? (
        <Link href={href} >{React.cloneElement(child)}</Link>
      ) : (
        <Link href={href} >{React.cloneElement(child)}</Link>
      )}
    </div>
  );
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