import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import styles from './style.scss';
import http from '../../utils/http';

const SearchBar = () => {
  const [keyword, updateKeyword] = useState('');

  const handleChange = (event) => {
    updateKeyword(event.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <Input
        placeholder="搜索音乐、歌单、MV、用户"
        size="large"
        onChange={handleChange}
      />
      <NavLink to={`/searchpage/${keyword}`}>
        <Button type="search" size="large" icon={<SearchOutlined />}>搜索</Button>
      </NavLink>
    </div>
  );
};

export default SearchBar;
