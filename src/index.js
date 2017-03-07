import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';
import objectFitImages from 'object-fit-images';

objectFitImages();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
