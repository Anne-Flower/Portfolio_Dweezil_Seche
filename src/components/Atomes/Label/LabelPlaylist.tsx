"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LabelPlaylist = () => {
  const [isHovered, setIsHovered] = useState(false);

  const labelPlaylistVariants = {
    initial: { opacity: 1, rotateX: 0 },
    hover: { opacity: 1, rotateX: 360, transition: { duration: 0.8 } },
  };

  const handleHoverStart = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  return (
    <div className="relative w-screen perspective-1000">
      <div className="absolute top-0 md:right-6 right-2 z-10 w-[140px] h-[60px] ">
        <motion.div
          className="menca text-white2 absolute top-0 md:left-6 left-2 cursor-pointer"
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          variants={labelPlaylistVariants}
          onHoverStart={handleHoverStart}
          style={{ transformOrigin: "center" }}
        >
          <Link href="https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980">
            ( PLAYLIST )
          </Link>
        </motion.div>
        <div className="absolute top-[20px] md:right-6 right-2 z-10 w-[140px] h-16h-[30px]"></div>
      </div>
    </div>
  );
};

export default LabelPlaylist;
