import { BellFilled, EditFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Popover } from 'antd';
import React, { useMemo, useState, useCallback } from 'react';

const HeaderButtons = () => {
  const iconStyle = useMemo(() => ({
    fontSize: '1.5rem',
    color: '#ffffff',
    padding: '5px',
    margin: '10px',
    cursor: 'pointer',
  }));
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const notLoggedIn = (
    <div
      style={{
        backgroundColor: '#2d2121',
        border: '1px solid white',
        padding: '2px 18px',
        color: 'white',
      }}
    >
      로그인
    </div>
  );
  const writeBtnClicked = useCallback((e) => {
    // console.log(`${__dirname}Post`)
    location.href = `${__dirname}post`;
  });
  const bellBtnClicked = useCallback((e) => {
    console.log(e);
  });
  const profileBtnClicked = useCallback((e) => {
    console.log(e);
  });

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };
  const handleHoverChange = (open) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open) => {
    setHovered(false);
    setClicked(open);
  };

  const [alarms, setAlarms] = useState([
    { key: 0, title: 'alarm title', type: 0, content: 'aramr content' },
    { key: 1, title: 'alarm title', type: 0, content: 'aramr content' },
  ]);

  const notificationContent = useMemo(() => (
    <div style={{ width: '400px', height: '250px' }}>
      {alarms.length === 0 ? (
        <div
          style={{
            height: '225px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          새로운
        </div>
      ) : (
        alarms.map((alarm) => (
          <div key={alarm.key}>
            <div>{alarm.title}</div>
            <div>{alarm.content}</div>
          </div>
        ))
      )}

      <div
        style={{
          height: '25px',
          borderTop: '1px solid #eeeeee',
          textAlign: 'center',
        }}
      >
        내 소식 바로가기
      </div>
    </div>
  ));

  const loggedIn = (
    <div>
      <span style={iconStyle} onClick={writeBtnClicked}>
        <EditFilled />
      </span>
      <Popover
        placement="bottomRight"
        title={'알림'}
        content={notificationContent}
        trigger="hover"
        open={hovered}
        onOpenChange={handleHoverChange}
      >
        <Popover
          placement="bottomRight"
          title={'알림'}
          content={notificationContent}
          trigger="click"
          open={clicked}
          onOpenChange={handleClickChange}
        >
          <span style={iconStyle} onClick={bellBtnClicked}>
            <BellFilled />
          </span>
        </Popover>
      </Popover>
      <span style={iconStyle} onClick={profileBtnClicked}>
        <Avatar style={{ bottom: '3px' }} size={27} icon={<UserOutlined />} />
      </span>
    </div>
  );

  return <>{isLoggedIn ? loggedIn : notLoggedIn}</>;
};

export default HeaderButtons;
