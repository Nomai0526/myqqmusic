import React, { useState } from 'react';
import './style.scss';
import Header from '../../components/Header/index';

const MainLayout = ({ children }) => {
  const [state, setState] = useState(0);
  return (
    <div className="qqmusic-home">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
