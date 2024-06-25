"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LabelHome = () => {
  return (
    <>
      <Link href={"/"} className="link top-left  relative ">
        <div>
          <span className="mask h-[20px] absolute ">
            <div className="link-container ">
              <span className="link-title1 title h-2 absolute left-0 font-medium text-sm text-black leading-4	menca ease-in-out duration-800">
                HOME
              </span>
              <span className="link-title2 title h-2 absolute left-0 font-medium text-sm text-black leading-4 menca ease-in-out duration-800">
                HOME
              </span>
            </div>
          </span>
        </div>
      </Link>
    </>
  );
};

export default LabelHome;
