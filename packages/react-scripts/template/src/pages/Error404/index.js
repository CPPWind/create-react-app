import PropTypes from 'prop-types';
import cx from 'classnames';
import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles.module.css';

const Error404Page = ({ className }) => {
  return (
    <Layout className={cx(className, styles.page, styles.error404Page)}>
      <header>
        <h1 className={cx(styles.errorPage)}>WHOOPS! - Error 404</h1>
      </header>
      <section>
        <ul>
          <li>WE COULDN'T</li>
          <li>FIND</li>
          <li>THAT PAGE</li>
        </ul>
      </section>
      <nav className={styles.errorNav}>
        {/*<nav className={cx(styles.errorLink)}>*/}
        <ul className={styles.errorLink}>
          {/*<li>Go to:</li>*/}
          <li>
            <Link to="/">Head back home</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

Error404Page.propTypes = {
  className: PropTypes.string,
};

export default Error404Page;
