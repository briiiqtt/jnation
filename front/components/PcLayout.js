import React, { useState, useEffect, useReducer } from 'react';
import { useMediaQuery } from 'react-responsive';

import Banner from './Banner';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Body from './Body';
import { Col, Row } from 'antd';

const PcLayout = ({ children, noPadding }) => {
  const [isPc, setIsPc] = useState();
  const pc = useMediaQuery({
    query: '(min-width:769px)',
  });
  useEffect(() => {
    if (pc) setIsPc(pc);
  }, []);
  return (
    isPc && (
      <>
        <Header />
        {/* <LeftBanner /> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: `calc(100vh - 50px)`,
            overflowY: 'scroll',
            msOverflowStyle: 'none',
          }}
        >
          <Sidebar />
          <Body>{children}</Body>
        </div>
        {/* <RightBanner /> */}
      </>
    )
  );
};

const LeftBanner = () => {
  return (
    <>
      {/* <div
        style={{
          // right: '500px',
          // width: '13%',
          position: 'fixed',
          // right: '100%',
          // height: '100%',
          // top: '1',
          // left: '1',
          // right: '1',
          // overflow: 'hidden',
          backgroundImage: `url("https://sgimage.netmarble.com/images/netmarble/enn/20220728/bhst1658997251182.jpg")`,
        }}
      ></div> */}
    </>
  );
};
const RightBanner = () => {
  return (
    <>
      {/* <div
        style={{
          width: '13%',
          position: 'fixed',
          right: '100%',
          height: '100%',
          top: '1',
          left: '1',
          right: '1',
          overflow: 'hidden',
          backgroundImage: `url("https://sgimage.netmarble.com/images/netmarble/enn/20220728/qjsp1658997256535.jpg")`,
        }}
      ></div> */}
      <img src="https://sgimage.netmarble.com/images/netmarble/enn/20220728/qjsp1658997256535.jpg"></img>
    </>
  );
};

export default PcLayout;
