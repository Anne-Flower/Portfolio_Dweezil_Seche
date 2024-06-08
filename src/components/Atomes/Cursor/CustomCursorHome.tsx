import React, { FC, useEffect } from "react";

type CursorHomeProps = {
  x: number;
  y: number;
};

const CustomCursorHome: FC<CursorHomeProps> = ({ x, y }) => {
  // useEffect(() => {
  //   const handleMouseOver = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     target.classList.add("blurred");
  //   };

  //   const handleMouseOut = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     target.classList.remove("blurred");
  //   };

  //   window.addEventListener("mouseover", handleMouseOver);
  //   window.addEventListener("mouseout", handleMouseOut);

  //   return () => {
  //     window.removeEventListener("mouseover", handleMouseOver);
  //     window.removeEventListener("mouseout", handleMouseOut);
  //   };
  // }, []);
  return (
    <div
      className="backdrop-blur-[3px] fixed w-24 h-24 rounded-full ring-1 ring-greyRingCursor pointer-events-none z-50 text-white2 bg-white2 bg-opacity-35 
      px-5 py-8"
      style={{ top: y - 40, left: x - 40 }}
      // style={{ transform: `translate(${x - 40}px, ${y - 40}px)` }}
    >
      <p className="menca font-medium	 leading-[16.8px] text-sm	 flex justify-center items-center ">
        Scroll
      </p>
      <p className="menca font-medium	 leading-[16.8px] text-sm	 flex justify-center items-center ">
        down
      </p>
    </div>
  );
};

export default CustomCursorHome;
