"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LabelMenu = () => {
  return (
    <>
      <Link href={"/about"} className="link top-left  relative">
        <div>
          <span className="mask h-[20px] absolute ">
            <div className="link-container ">
              <span className="link-title1 title h-2 absolute left-8 font-medium text-sm leading-4	menca">
                ( MENU )
              </span>
              <span className="link-title2 title h-2 absolute left-8 font-medium text-sm leading-4	menca">
                ( MENU )
              </span>
            </div>
          </span>
        </div>
      </Link>
    </>
  );
};

export default LabelMenu;
