"use client";

import React, { FC } from "react";
type PillProps = {
  label: string;
  px?: number;
  customClass?: string;
};

const Pill: FC<PillProps> = ({ label, px, customClass = "" }) => {
  return (
    <div
      className={`menca py-4 px-4 h-8 rounded-full  hover:bg-lime-950 hover:text-white text-lime-950 flex items-center justify-center ${`px-${px}`} mr-2 ${customClass}`}
    >
      {label}
    </div>
  );
};

export default Pill;
