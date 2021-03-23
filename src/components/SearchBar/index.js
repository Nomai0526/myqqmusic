import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import styles from './style.scss';
import http from '../../utils/http';

const { Search } = Input;

const SearchBar = () => {
  const [recordList, setRecordList] = useState([]);
  const [songList, setSongList] = useState([]);
  const [poageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isCanGet, setIsCanGet] = useState(true);
  const [isRemindDivShow, setIsRemindDivShow] = useState(true);

  const onSearch = async () => {
    const a = await http.get('/search/hot');
    console.log(a);
  };

  return (
    <div className="search-bar-wrapper">
      <Search
        placeholder="搜索音乐、歌单、MV、用户"
        enterButton="搜索"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchBar;
