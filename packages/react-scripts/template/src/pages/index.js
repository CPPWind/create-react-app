import { Route, Router, Switch } from 'react-router-dom';
import Error404Page from 'pages/Error404';
import HomePage from 'pages/Home';
import PropTypes from 'prop-types';
import React from 'react';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

/* new imports above here - see templates/jg/pages */

const SiteRouter = props => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={['/', '/home']} component={HomePage} />

        {/* page routes above here - see _templates/pages/new */}
        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
};

SiteRouter.propTypes = {
  className: PropTypes.string,
};

export default SiteRouter;
