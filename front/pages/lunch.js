import React, { useCallback, useRef, useEffect, useState } from 'react';

const Lunch = () => {
  const lunchDiv = useRef();
  const [imgArr, setImgArr] = useState([]);

  const getImg = useCallback(() => {
    const tempArr = [];
    fetch(`http://${process.env.NEXT_PUBLIC_BACK_SERVER_ADDR}:${process.env.NEXT_PUBLIC_BACK_SERVER_PORT}/lunch-fetch`)
      .then((r) => r.json())
      .then((r) => {
        if (!r.result_data.items) {
          alert('요청 실패');
          return;
        }
        for (let a of r.result_data.items) {
          if (a.author?.name === '두레비앙-정소예') {
            tempArr.push(<img src={a.photos[0].url}></img>);
          }
        }
        setImgArr(tempArr);
      });
  });

  useEffect(() => {
    getImg();
  });

  return (
    <>
      <div ref={lunchDiv} style={{ textAlign: 'center' }}>
        {imgArr}
      </div>
    </>
  );
};

export default Lunch;
