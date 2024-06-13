import React, { FC, useEffect } from "react";

type CursorHomeProps = {
  x: number;
  y: number;
};

const CustomCursorHome: FC<CursorHomeProps> = ({ x, y }) => {
  return (
    <div
      className="backdrop-blur-[3px] fixed w-24 h-24 rounded-full ring-[0.5px] ring-greyRingCursor pointer-events-none z-50 text-white2 bg-white2 bg-opacity-[1px] 
      px-5 py-8"
      style={{ top: y - 40, left: x - 40 }}
    >
      <p className="menca font-medium leading-[16.8px] text-sm flex justify-center items-center">
        Scroll
      </p>
      <p className="menca font-medium leading-[16.8px] text-sm flex justify-center items-center">
        down
      </p>
    </div>
  );
};

export default CustomCursorHome;
