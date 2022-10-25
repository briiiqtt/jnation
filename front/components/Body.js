import React from 'react';

const Body = ({ children }) => {
  return (
    <>
      {noPadding ? children : <div style={{ padding: '20px' }}>{children}</div>}
    </>
  );
};

export default Body;
