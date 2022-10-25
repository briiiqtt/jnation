import { EyeFilled, CommentOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

const BoardBody = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const tempArr = new Array(11).fill().map((node, idx) => ({
      key: idx,
      id: 'id' + idx,
      title: '제목' + idx,
      author: '작성자' + idx,
      content: '본문' + idx,
      viewCnt: 125,
      comments: [1, 2, 3],
      imgs: [1],
      createdAt: 'YYYY-MM-DD hh:mm:ss',
    }));
    console.log(tempArr);
    setList(tempArr);
  },[]);

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={
            item.comments.length > 0
              ? [
                  // <a key="list-loadmore-edit">edit</a>,
                  // <a key="list-loadmore-more">more</a>,
                  <span>
                    <EyeFilled />
                    &nbsp;
                    {item.viewCnt}
                  </span>,
                  <span>
                    <CommentOutlined />
                    &nbsp;
                    {item.comments.length}
                  </span>,
                ]
              : [
                  <span>
                    <EyeFilled />
                    &nbsp;
                    {item.viewCnt}
                  </span>,
                ]
          }
        >
          <Skeleton avatar title={true} loading={false} active>
            <List.Item.Meta
              avatar={
                item.imgs.length > 0 && (
                  <Avatar src={''} shape="square" size={'large'} />
                )
              }
              title={<div>{item.title}</div>}
              description={<div>{item.author}&emsp;|&emsp;{item.createdAt}</div>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default BoardBody;
