import React, { useState } from 'react';
import './style.scss';

const MainPage = () => {
  const [state, setState] = useState(0);
  return (
    <div className="main-page-div">
      <div className="main-page-head">head</div>
      <div className="main-page-body">body</div>
    </div>
  );
};
export default MainPage;
