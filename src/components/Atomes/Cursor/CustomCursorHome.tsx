import React, { FC } from "react";

type CursorHomeProps = {
  x: number;
  y: number;
};

const CustomCursorHome: FC<CursorHomeProps> = ({ x, y }) => {
  return (
    <div
      className="fixed w-24 h-24 rounded-full ring-1 ring-white2 pointer-events-none z-50 text-white2 bg-white2 bg-opacity-35 
      px-5 py-8"
      style={{ top: y - 40, left: x - 40 }}
    >
      <p className="text-base font-bold leading-4 menca   pl-[2px]">SCROLL</p>
      <p className="text-base font-bold leading-4 menca  pl-[6px]">DOWN</p>
    </div>
  );
};

export default CustomCursorHome;
