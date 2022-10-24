import React, { useEffect, useState } from 'react';
import PcLayout from '../components/PcLayout';

const Board = ({ setTitle }) => {
  const [boardName, setBoardName] = useState('자유게시판');
  useEffect(() => {
    setTitle(() => `제2의 나라:${boardName}`);
  });
  return (
    <>
      <PcLayout>
        {/* <MustRead/> */}
        
      </PcLayout>
    </>
  );
};

export default Board;
