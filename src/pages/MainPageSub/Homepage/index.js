import React, { useState } from 'react';
import './style.scss';
import { Card } from 'antd';

const { Meta } = Card;

const MusicCard = ({ img, title, description }) => {
  console.log(124);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" className="card-cover" />}
      className="music-card"
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <img alt="" src="../../../static/images/playicon.png" className="play-icon" />
    </Card>
  );
};

const MyComponent = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <div className="home-page-content">
        <div className="home-page-title">歌 曲 推 荐</div>
        <div className="home-page-body">
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </div>
    </div>
  );
};
export default MyComponent;
