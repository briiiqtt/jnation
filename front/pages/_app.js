import React, { useState, useReducer } from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PcLayout from '../components/PcLayout';

import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  const [title, setTitle] = useState('제 2의 나라');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      <Component setTitle={setTitle} />
      {/* <PcLayout children={<Component setTitle={setTitle} />} /> */}
      <style jsx global>
        {`
          .sidebar::-webkit-scrollbar {
            display: none;
            width: 0 !important;
          }

          .menu-inner {
            width: 100%;
            padding: 10px 0px 10px 20px;
            margin: 0px;
          }
          .menu-inner:hover {
            background-color: #eeeeee;
          }
          .ant-collapse-header:hover {
            background-color: #eeeeee;
          }
          .ant-popover-title {
            background-color: #e6eaec;
          }
        `}
      </style>
    </>
  );
};

export default wrapper.withRedux(App);
