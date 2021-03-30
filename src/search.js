import React from 'react';
import { render } from 'react-dom';
import Search from './pages/SearchPage/index';
import '@babel/polyfill';
import 'antd/dist/antd.css';
// import './scss/iconfont.scss';

render(
  <Search />,
  document.getElementById('search'),
);
