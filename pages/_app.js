import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PcLayout from '../components/PcLayout';

// const Mobile = ({ children }) => {
//   const [isMobile, setIsMobile] = useState();
//   const mobile = useMediaQuery({
//     query: '(max-width:768px)',
//   });
//   useEffect(() => {
//     if (mobile) setIsMobile(mobile);
//   }, []);
//   return <>{isMobile && children}</>;
// };
// const Pc = ({ children }) => {
//   const [isPc, setIsPc] = useState();
//   const pc = useMediaQuery({
//     query: '(min-width:769px)',
//   });
//   useEffect(() => {
//     if (pc) setIsPc(pc);
//   }, []);
//   return <>{isPc && children}</>;
// };

// const Mobile = ({ children }) => {
//   const [isMobile, setIsMobile] = useState();
//   useEffect(() => {
//     if (window.matchMedia('(min-width: 768px)').matches) {
//       setIsMobile(window.matchMedia('(min-width: 768px)').matches);
//     }
//   }, []);
//   return <>{isMobile && children}</>;
// };
// const Pc = ({ children }) => {
//   const [isPc, setIsPc] = useState();
//   useEffect(() => {
//     if (window.matchMedia('(min-width: 768px)').matches) {
//       setIsPc(window.matchMedia('(min-width: 768px)').matches);
//     }
//   }, []);
//   return <>{isPc && children}</>;
// };

const App = ({ Component }) => {
  const [title, setTitle] = useState('제 2의 나라');
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      <Component setTitle={setTitle} />
      {/* <Mobile children={<Component setTitle={setTitle} />} /> */}
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
            background-color: #E6EAEC;
          }
        `}
      </style>
    </>
  );
};

export default App;
