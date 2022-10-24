import React, { useEffect } from 'react';
import PcLayout from '../components/PcLayout';

const Post = ({ setTitle }) => {
  useEffect(() => {
    setTitle(() => '제 2의 나라: 글쓰기');
  }, []);
  return (
    <>
      <PcLayout>
    
      </PcLayout>
    </>
  );
};

export default Post;
