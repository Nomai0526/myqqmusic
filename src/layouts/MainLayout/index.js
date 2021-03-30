import React, { useState } from 'react';
import './style.scss';
import {
  NavLink, BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

const MainLayout = ({ children }) => {
  const [state, setState] = useState(0);
  return (
    <BrowserRouter>
      <div className="qqmusic-home">
        <Header />
        {children}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
