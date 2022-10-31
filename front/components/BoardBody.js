import { EyeFilled, CommentOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

const BoardBody = ({posts}) => {

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={posts}
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
