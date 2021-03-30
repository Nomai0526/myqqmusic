import React, { useEffect, useState } from 'react';
import './style.scss';
import {
  Button, Radio, Divider, Table, Space,
} from 'antd';
import {
  PlayCircleOutlined, PlusSquareOutlined, DownloadOutlined, MenuOutlined,
} from '@ant-design/icons';
import http from '../../utils/http';

const getResult = async (keyword) => {
  const list = await http.get('/search', { params: { key: keyword } });
  return list;
};

const columns = [
  {
    title: '歌曲',
    dataIndex: 'song',
  },
  {
    title: '歌手',
    dataIndex: 'singer',
  },
  {
    title: '专辑',
    dataIndex: 'albumName',
  },
  {
    title: '时长',
    dataIndex: 'interval',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button icon={<PlayCircleOutlined />}>播放</Button>
      </Space>
    ),
  },
];

const SearchPage = ({ match }) => {
  const key = match.params.key;
  const [data, updateData] = useState([]);

  useEffect(() => {
    const temp = [];

    getResult(key).then(
      (result) => {
        result.data.list.forEach((item, index) => {
          temp.push({
            key: index,
            song: item.songname,
            singer: item.singer[0].name,
            albumName: item.albumname,
            interval: `${Math.floor(item.interval / 60)}:${item.interval % 60}`,
          });
        });
        updateData(temp);
      },
    );
  }, []);

  // console.log(data);

  return (
    <div className="search-page-div">
      <Space className="search-page-buttons">
        <Button icon={<PlayCircleOutlined />}>播放全部</Button>
        <Button icon={<PlusSquareOutlined />}>添加到</Button>
        <Button icon={<DownloadOutlined />}>下载</Button>
        <Button icon={<MenuOutlined />}>批量操作</Button>
      </Space>
      <div className="search-page-results">
        <div>
          <Table
            columns={columns}
            dataSource={data}
            size="middle"
            pagination={{ hideOnSinglePage: true }}
          />
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
