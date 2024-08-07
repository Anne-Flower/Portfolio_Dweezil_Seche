import { motion } from "framer-motion";
import React, { FC, useEffect } from "react";

type CursorProps = {
  x: number;
  y: number;
};

const CustomCursor: FC<CursorProps> = ({ x, y }) => {
  return (
    <motion.div
      className=" fixed w-[8px] h-[8px] rounded-full pointer-events-none z-50 text-black bg-black"
      style={{ top: y - 10, left: x - 10 }}
    ></motion.div>
  );
};

export default CustomCursor;
