"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LabelHome = () => {
  const [isHovered, setIsHovered] = useState(false);

  const labelHomeVariants = {
    initial: { opacity: 1, rotateX: 0 },
    hover: {
      opacity: 1,
      rotateX: 360,
      transition: { duration: 0.8 },
    },
  };

  const handleHoverStart = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };
  return (
    <div className="relative w-screen perspective-1000">
      <div className="absolute top-0 md:left-6 left-2 z-10 w-[140px]  h-[60px] ">
        <motion.div
          className="menca text-white2 absolute top-0 md:left-6 left-2 cursor-pointer"
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          variants={labelHomeVariants}
          onHoverStart={handleHoverStart}
          style={{ transformOrigin: "center" }}
        >
          <Link href="/">( ACCUEIL )</Link>
        </motion.div>
        <div className="absolute top-[20px] md:left-6 left-2 z-10 w-[140px] h-16  h-[30px]"></div>
      </div>
    </div>
  );
};

export default LabelHome;
