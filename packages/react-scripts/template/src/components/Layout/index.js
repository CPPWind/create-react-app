import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import styles from './styles.module.css';

const Layout = props => {
  const [isOn, setToggle] = useState(false);
  let { className, children } = props;
  return (
    <Fragment>
      <header>
        <h1>cpp-react-scripts</h1>
      </header>
      <main className={cx(className)}>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
