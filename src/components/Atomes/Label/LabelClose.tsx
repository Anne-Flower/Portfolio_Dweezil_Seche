"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type LabelCloseProps = {
  handleToggle: () => void;
};

const LabelClose: FC<LabelCloseProps> = ({ handleToggle }) => {
  return (
    <>
      <div className="link top-right relative">
        <div>
          <span className="mask h-[20px] absolute ">
            <div className="link-container  " onClick={handleToggle}>
              <span className="link-title1 title h-2 absolute right-0 font-medium text-sm leading-4	menca">
                ( FERMER )
              </span>
              <span className="link-title2 title h-2 absolute right-0 font-medium text-sm leading-4	menca">
                ( FERMER )
              </span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default LabelClose;
