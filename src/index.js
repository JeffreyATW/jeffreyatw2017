import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';
import objectFitImages from 'object-fit-images';

objectFitImages();

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);
