import React, { useEffect } from 'react';
import CenterBanner from '../components/CenterBannner';
import PcLayout from '../components/PcLayout';

const Main = ({ setTitle }) => {
  useEffect(() => {
    setTitle(() => '제 2의 나라: index');
  }, []);
  return (
    <>
      <PcLayout>
        <CenterBanner />
        {/* <img
          src="https://sgimage.netmarble.com/images/netmarble/enn/20220728/gaco1658997238633.png"
          style={{ width: '100%' }}
        ></img> */}
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gyjupzXhHbA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gyjupzXhHbA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gyjupzXhHbA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </PcLayout>
    </>
  );
};

export default Main;
