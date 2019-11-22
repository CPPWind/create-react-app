import React from 'react';
import '@4winds_cpp/atmosphere/css/global.css';
import './styles/client.css';
import SiteRouter from './pages';
import ReactHelmet from 'react-helmet';

const App = () => (
  // include apollo here
  <SiteRouter>
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>cpp-react-scripts</title>
    </ReactHelmet>
  </SiteRouter>
);

export default App;
