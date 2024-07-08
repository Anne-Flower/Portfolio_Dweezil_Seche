import { motion } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useCustomCursor } from "@/app/context/customCursorContext";

const CursorStyle: FC = () => {
  const { cursorPosition, cursorStyle } = useCustomCursor();
  const { x, y } = cursorPosition;
  const { image, width, height } = cursorStyle;

  if (!image) {
    return null;
  }

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        left: x - width / 2,
        top: y - height / 2,
        width: `${width}px`,
        height: `${height}px`,
      }}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <img
        src={image}
        alt="cursor"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          zIndex: 10,
        }}
      />
    </motion.div>
  );
};

export default CursorStyle;
