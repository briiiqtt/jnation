import React, { useEffect, useState, useMemo } from 'react';
import PcLayout from '../components/PcLayout';
import BoardBar from '../components/BoardBar';
import Pagin from '../components/Pagin';
import BoardBody from '../components/BoardBody';
import CenterBanner from '../components/CenterBannner';

const Board = ({ setTitle }) => {
  const [boardName, setBoardName] = useState('자유게시판');

  const [posts, setPosts] = useState([]);
  const [postCnt, setPostCnt] = useState(() => {
    return (function getPostCnt() {
      return 155;
    })();
  });

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < 80; i++) {
      tempArr.push({
        key: i,
        postId: 'id' + i,
        title: '제목' + i,
        content: '본문' + i,
      });
    }
    setPosts(tempArr);
  });
  useEffect(() => {
    setTitle(() => `제2의 나라:${boardName}`);
  });
  return (
    <>
      <PcLayout>
        <CenterBanner />
        <div style={{ padding: '20px' }}>
          {/* <MustRead/> */}
          <BoardBar boardName={boardName} postCnt={postCnt}/>
          <Pagin postCnt={postCnt} />
          <BoardBody />
          <Pagin postCnt={postCnt} />
        </div>
      </PcLayout>
    </>
  );
};

export default Board;
