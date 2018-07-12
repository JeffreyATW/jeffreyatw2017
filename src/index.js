import React from 'react';
import ReactDOM from 'react-dom';
import objectFitImages from 'object-fit-images';

import App from './components/App/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

objectFitImages();

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
