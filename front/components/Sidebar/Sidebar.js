import React, { useMemo } from 'react';
import SidebarTitle from './SidebarTitle';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          // position: 'fixed',
          // top: '1',
          // left: '1',
          // right: '1',
          // zIndex: '1',
          width: '268px',
          // height: `calc(100vh - 50px)`,
          // overflowY: 'scroll',
          // msOverflowStyle: 'none',
        }}
        className="sidebar"
      >
        <SidebarTitle />
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;
