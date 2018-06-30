import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App/App.js';

export default (data) => {
  const app = ReactDOMServer.renderToString(<App />);
  
  const assets = Object.keys(data.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/) && !value.match(/\/bundle\.[^\.]+\.js$/));

  return data.template({ app, css, js, ...data});
};
