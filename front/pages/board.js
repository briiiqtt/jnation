import React, { useEffect, useState, useCallback } from 'react';
import PcLayout from '../components/PcLayout';
import BoardBar from '../components/BoardBar';
import Pagin from '../components/Pagin';
import BoardBody from '../components/BoardBody';
import CenterBanner from '../components/CenterBannner';

const Board = ({ setTitle }) => {
  const [boardName, setBoardName] = useState('자유게시판');
  const [postCnt, setPostCnt] = useState(0);
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          new Array(11).fill().map((val, idx) => ({
            key: idx,
            id: 'id' + idx,
            title: '제목' + idx,
            author: '작성자' + idx,
            content: '본문' + idx,
            viewCnt: 125,
            comments: [1, 2, 3],
            imgs: [1],
            createdAt: 'YYYY-MM-DD hh:mm:ss',
          }))
        );
      }, 2000);
    });
    setPosts(data);
  });

  useEffect(() => {
    setTitle(() => `제2의 나라:${boardName}`);
    fetchPosts();
  }, []);
  return (
    <>
      <PcLayout>
        <CenterBanner />
        <div style={{ padding: '20px' }}>
          {/* <MustRead/> */}
          <BoardBar boardName={boardName} postCnt={postCnt} />
          <Pagin postCnt={postCnt} />
          <BoardBody posts={posts} />
          <Pagin postCnt={postCnt} />
        </div>
      </PcLayout>
    </>
  );
};

export default Board;
