import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';



const ActiveLink = ({ href, activeClassName, children }) => {
  const router = useRouter();
  const classes = useStyles();


  const child = React.Children.only(children);


  let className = child.props.className || '';
  if (router.pathname === href && activeClassName) {
    className = classes.activeLink
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

const useStyles = makeStyles(theme => ({
  activeLink: {
    textDecoration: 'none',
    margine: 0,
    padding: 0,
    fontWeight: "bold",
    color: "#C62828"
  }
}));

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