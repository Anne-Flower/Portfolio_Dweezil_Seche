import { motion } from "framer-motion";
import React, { FC, useEffect } from "react";

type CursorProps = {
  x: number;
  y: number;
};

const CustomCursor: FC<CursorProps> = ({ x, y }) => {
  return (
    <motion.div
      className=" backdrop-blur-[2px] fixed w-24 h-24 rounded-full ring-1 ring-greyRingCursor pointer-events-none z-50 text-white2 bg-white2 bg-opacity-35 px-4 py-8"
      style={{ top: y - 40, left: x - 40 }}
    >
      <p className="menca font-medium	 leading-[16.8px] text-sm	 flex justify-center items-center">
        Projet{" "}
      </p>
      <p className="menca font-medium	 leading-[16.8px] text-sm	 flex justify-center items-center ">
        {" "}
        suivant
      </p>
    </motion.div>
  );
};

export default CustomCursor;
