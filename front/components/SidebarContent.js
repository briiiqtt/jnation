import React, { useState, useCallback } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const SidebarContent = () => {
  const [menus, setMenus] = useState([
    {
      key: 0,
      name: '새 소식',
      innerMenu: [
        { name: '공지사항', page: 'Xi21' },
        { name: '업데이트', page: 'vNCi3' },
        { name: '이슈확인 / 조치사항', page: 'NCKL2i' },
        { name: '개발자노트', page: 'MCO8' },
        { name: 'GM노트', page: '_cj9D' },
      ],
    },
    {
      key: 1,
      name: '추천 가이드',
      innerMenu: [
        { name: '게임 가이드', page: 'MCi23' },
        { name: '공략 & TIP', page: 'V0vk2' },
      ],
    },
    {
      key: 2,
      name: '제2의 나라 공식 방송',
      innerMenu: [
        { name: '공식방송 <제2TV쇼> 안내', page: 'JI2d' },
        { name: '방송 참여 이벤트 안내', page: 'JI2d' },
        { name: '<제2TV쇼> 다시보기', page: 'JI2d' },
      ],
    },
    {
      key: 3,
      name: '이벤트',
      innerMenu: [
        { name: '이벤트 안내', page: 'JI2d' },
        { name: '이벤트 당첨자 안내', page: 'JI2d' },
      ],
    },
    {
      key: 4,
      name: '커뮤니티',
      innerMenu: [
        { name: '자유게시판', page: 'free' },
        { name: '질문 & 답변', page: 'qna' },
        { name: '친구 찾기 & 킹덤 홍보', page: 'hall' },
        { name: '스크린샷 & 팬아트', page: 'arts' },
      ],
    },
  ]);

  const menuClicked = useCallback((page) => {
    location.href = `board?boardId=${page}`;
  });

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ padding: '10px' }} className="ant-collapse-header">
          전체 글
        </div>
        <Collapse
          defaultActiveKey={menus.map((category) => category.key)}
          bordered={false}
          //  onChange={onChange}
          className="menu-category"
          expandIconPosition="end"
        >
          {menus.map((category) => (
            <Panel
              header={category.name}
              key={category.key}
              className="menu-panel"
            >
              {category.innerMenu.map((inner, i) => (
                <p
                  key={i}
                  className="menu-inner"
                  onClick={() => menuClicked(inner.page)}
                >
                  {inner.name}
                </p>
              ))}
            </Panel>
          ))}
        </Collapse>
      </div>
    </>
  );
};

export default SidebarContent;
