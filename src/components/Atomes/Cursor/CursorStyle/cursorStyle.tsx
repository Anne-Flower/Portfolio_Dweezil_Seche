import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { useCustomCursor } from "@/app/context/customCursorContext";
import { imagesH1 } from "@/app/constant/constant";

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imagesH1.length);
  return imagesH1[randomIndex];
};

const CursorStyle: FC = () => {
  const { x, y } = useCustomCursor();
  const [randomImage, setRandomImage] = useState(getRandomImage());
  const [lastChangeTime, setLastChangeTime] = useState<number>(Date.now());

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastChangeTime > 400) {
        setRandomImage(getRandomImage());
        setLastChangeTime(now);
      }
    };

    window.addEventListener("mousemove", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseOver);
    };
  }, [lastChangeTime]);

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        left: x,
        top: y,
        width: `${randomImage.width}px`,
        height: `${randomImage.height}px`,
      }}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <img
        src={randomImage.src}
        alt="random"
        style={{
          width: `${randomImage.width}px`,
          height: `${randomImage.height}px`,
          zIndex: 10,
        }}
      />
    </motion.div>
  );
};

export default CursorStyle;
