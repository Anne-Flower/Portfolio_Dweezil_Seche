"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LabelPlaylist = () => {
  return (
    <>
      <Link
        href={
          "https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980"
        }
        className="link relative   "
      >
        <div>
          <span className="mask h-[20px] absolute menu-button ">
            <div className="link-container ">
              <span className="link-title1 title h-2 absolute font-medium text-sm leading-4	menca  top-right ">
                ( MA PLAYLIST )
              </span>
              <span className="link-title2 title h-2 absolute  font-medium text-sm leading-4	menca  top-right ">
                ( MA PLAYLIST )
              </span>
            </div>
          </span>
        </div>
      </Link>
    </>
  );
};

export default LabelPlaylist;
