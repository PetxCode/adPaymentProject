"use client";
import React, { useEffect, useState } from "react";

const Sider = () => {
  const [count, setCount] = useState<number>(1);
  const adData = [
    { id: 1, col: "bg-red-500" },
    { id: 2, col: "bg-green-500" },
    { id: 3, col: "bg-pink-500" },
    { id: 4, col: "bg-yellow-500" },
    { id: 5, col: "bg-slate-500" },
  ];

  useEffect(() => {
    let timer: any = 0;

    // timer = setInterval(() => {
    //   setCount((el) => el + 1);
    // }, 1000);

    timer = setTimeout(() => {
      setCount((el) => el + 1);
    }, 10000);

    return () => {
      clearTimeout(timer);
      //   clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="m-2 border rounded-md w-[300px] h-[97vh] flex flex-col p-2">
      <div>Building</div>
      <div className="flex-1" />
      {count}
      <div className="w-full h-[150px] border rounded-md overflow-hidden shadow-inner transition-all duration-300">
        <div className={`${adData[count % adData.length].col} h-full w-full`} />
      </div>
    </div>
  );
};

export default Sider;
