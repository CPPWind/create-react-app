import React from 'react';
import './styles/client.css';
import SiteRouter from 'pages';
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
