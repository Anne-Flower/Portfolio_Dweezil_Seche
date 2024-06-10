"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type LabelMenuProps = {
  handleToggle2: () => void;
};

const LabelMenu: FC<LabelMenuProps> = ({ handleToggle2 }) => {
  return (
    <>
      <div className="link top-left  relative">
        <div>
          <span className="mask h-[20px] absolute ">
            <div className="link-container " onClick={handleToggle2}>
              <span className="link-title1 title h-2 absolute left-8 font-medium text-sm leading-4	menca">
                ( MENU )
              </span>
              <span className="link-title2 title h-2 absolute left-8 font-medium text-sm leading-4	menca">
                ( MENU )
              </span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default LabelMenu;
