"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LabelAbout = () => {
  const [isHovered, setIsHovered] = useState(false);

  const labelAboutVariants = {
    initial: { opacity: 1, rotateX: 0 },
    hover: { opacity: 1, rotateX: 360, transition: { duration: 0.8 } },
  };

  const handleHoverStart = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  return (
    <>
      <Link href={"/about"} className="link top-left relative">
        <div>
          <span className="mask h-[20px] absolute ">
            <div className="link-container ">
              <span className="link-title1 title h-2 absolute left-0 font-medium text-sm leading-4 text-black menca">
                ABOUT{" "}
              </span>
              <span className="link-title2 title h-2 absolute left-0 font-medium text-sm leading-4 text-black menca">
                ABOUT{" "}
              </span>
            </div>
          </span>
        </div>
      </Link>
    </>
  );
};

export default LabelAbout;
