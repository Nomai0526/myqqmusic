import React, { useState } from 'react';
import './style.scss';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import { Menu } from 'antd';
import SearchBar from '../SearchBar/index';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MainLayout = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="header">
      <div className="header-inner-first">
        <div className="header-logo" />
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="header-nav">
          <Menu.Item key="mail">
            音乐馆
          </Menu.Item>
          <Menu.Item key="app">
            我的音乐
          </Menu.Item>
        </Menu>
        <SearchBar />
      </div>
      <div className="header-inner-second">
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
    </div>
  );
};
export default MainLayout;