import React, { useState } from 'react';
import './style.scss';
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
    </div>
  );
};
export default MainLayout;