import cx from 'classnames';
import Layout from 'components/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const HomePage = ({ className }) => {
  return (
    <Layout className={cx(className, styles.page)} home={true}>
      <section className={styles.container}>
        <h1>Homepage - src/pages/Home/index.js </h1>
      </section>
    </Layout>
  );
};

HomePage.propTypes = {
  className: PropTypes.string,
};

export default HomePage;
