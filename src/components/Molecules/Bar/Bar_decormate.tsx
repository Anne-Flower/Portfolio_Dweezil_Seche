"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BarDecormateProps = {
  label: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
};
const BarDecormate: FC<BarDecormateProps> = ({
  label,
  label2,
  label3,
  label4,
  label5,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/argedis"} className="relative md:h-[68px] md:w-[764px]">
      <div className="general text-[64px] leading-[68px] font-thin flex justify-center relative">
        Decormate
      </div>
      <div className="menca font-medium	text-sm	leading-4 absolute top-0 right-[310px]">
        {label} {label2} {label3} {label4} {label5}
      </div>
    </Link>
  );
};

export default BarDecormate;
