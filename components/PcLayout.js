import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Banner from './Banner';
import Sidebar from './Sidebar';
import Header from './Header';
import Body from './Body';
import { Col, Row } from 'antd';

const PcLayout = ({ children }) => {
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
        <Row>
          <Col span={3}>
            <LeftBanner />
          </Col>
          <Col span={18}>
            <Row>
              <Col span={6}>
                <Sidebar />
              </Col>
              <Col span={18}>
                <Body children={children} />
              </Col>
            </Row>
          </Col>
          <Col span={3}>
            <RightBanner />
          </Col>
        </Row>
      </>
    )
  );
};

const LeftBanner = () => {
  return (
    <>
      <div
        style={{
          width: '13%',
          position: 'fixed',
          right: '100%',
          height: '100%',
          top: '1',
          left: '1',
          right: '1',
          overflow: 'hidden',
          backgroundImage: `url("https://sgimage.netmarble.com/images/netmarble/enn/20220728/bhst1658997251182.jpg")`,
        }}
      ></div>
    </>
  );
};
const RightBanner = () => {
  return (
    <>
      <div
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
      ></div>
    </>
  );
};

export default PcLayout;
