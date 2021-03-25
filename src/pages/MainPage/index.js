import React, { useState } from 'react';
import './style.scss';
import {
  NavLink, BrowserRouter, Switch, Route,
} from 'react-router-dom';
import HomePage from '../MainPageSub/HomePage/index';

const MainPage = () => {
  const [state, setState] = useState(0);
  return (
    <div className="main-page-div">
      <BrowserRouter>
        <div className="main-page-header">
          <NavLink to="/" activeClassName="route-link-active" exact><div className="route-link-div">首页</div></NavLink>
          <NavLink to="singer" activeClassName="route-link-active"><div className="route-link-div">歌手</div></NavLink>
          <NavLink to="album" activeClassName="route-link-active"><div className="route-link-div">新碟</div></NavLink>
          <NavLink to="toplist" activeClassName="route-link-active"><div className="route-link-div">排行榜</div></NavLink>
          <NavLink to="playlist" activeClassName="route-link-active"><div className="route-link-div">分类歌单</div></NavLink>
          <NavLink to="radio" activeClassName="route-link-active"><div className="route-link-div">电台</div></NavLink>
          <NavLink to="mv" activeClassName="route-link-active"><div className="route-link-div">MV</div></NavLink>
          <NavLink to="vitural-album" activeClassName="route-link-active"><div className="route-link-div">数字专辑</div></NavLink>
          <NavLink to="tickets" activeClassName="route-link-active"><div className="route-link-div">票务</div></NavLink>
        </div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          {/* <Route path="/about1" component={Test} />
          <Route path="/about2" component={Test} />
          <Route path="/about3" component={Test} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default MainPage;
