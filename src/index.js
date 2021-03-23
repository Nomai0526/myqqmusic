import React from 'react';
import { render } from 'react-dom';
import App from './App';
import '@babel/polyfill';
import 'antd/dist/antd.css';

render(
  <App />,
  document.getElementById('app'),
);
