"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LabelPlaygroundBeige = () => {
  const [isHovered, setIsHovered] = useState(false);

  const labelPlaygroundVariants = {
    initial: { opacity: 1, rotateX: 0 },
    hover: { opacity: 1, rotateX: 360, transition: { duration: 0.8 } },
  };

  const handleHoverStart = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };
  const [isBlack, setIsBlack] = useState(false);
  const handleColor = () => {
    setIsBlack(!isBlack);
  };

  return (
    <>
      <Link href={"/playground"} className="link top-left relative">
        <div>
          <span className="mask h-[20px] absolute ">
            <div className="link-container ">
              <span
                className={`link-title1 title h-2 absolute left-0 font-medium text-xs leading-4  menca ease-in-out duration-800 ${
                  isBlack ? "text-black" : "text-beige"
                }`}
              >
                PLAYGROUND
              </span>
              <span
                className={`link-title2 title h-2 absolute left-0 font-medium text-xs leading-4 menca ease-in-out duration-800 ${
                  isBlack ? "text-black" : "text-beige"
                }`}
              >
                PLAYGROUND
              </span>
            </div>
          </span>
        </div>
      </Link>
    </>
  );
};

export default LabelPlaygroundBeige;
