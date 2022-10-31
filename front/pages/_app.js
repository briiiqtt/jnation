import React, { useState, useReducer } from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PcLayout from '../components/PcLayout';
import BoardReducer from '../../reducers/board-reducer';

// export const BoardDispatch = React.createContext(null);

// const boardReducer = (state, action) => {
//   switch (action.type) {
//     case 0: {
//     }
//     default:
//       return state;
//   }
// };

const App = ({ Component }) => {
  const [title, setTitle] = useState('제 2의 나라');

  // const [state, dispatch] = useReducer(boardReducer, {});

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      {/* <BoardDispatch.Provider value={dispatch}> */}
      {/* <BoardReducer> */}
      <Component setTitle={setTitle} />
      {/* </BoardReducer> */}
      {/* </BoardDispatch.Provider> */}
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

export default App;
