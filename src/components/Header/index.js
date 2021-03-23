import React, { useState } from 'react';
import './style.scss';
import SearchBar from '../SearchBar/index';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MainLayout = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="header">
      <div className="header-inner">
        <span className="header-logo">QQ音乐</span>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="header-nav">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            音乐馆
          </Menu.Item>
          <Menu.Item key="app"  icon={<AppstoreOutlined />}>
            我的音乐
          </Menu.Item>
        </Menu>
        <SearchBar />
      </div>
    </div>
  );
};
export default MainLayout;