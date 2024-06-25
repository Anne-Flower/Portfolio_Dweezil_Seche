"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BarArgedisProps = {
  label: string;
  label2: string;
};
const BarArgedis: FC<BarArgedisProps> = ({ label, label2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/argedis"} className="relative md:h-[68px] md:w-[764px]">
      <div className="general text-[64px] leading-[68px] font-thin flex justify-center relative">
        Argedis | Régionalisme{" "}
      </div>
      <div className="menca font-medium	text-sm	leading-4	absolute top-0 right-[360px]">
        {label} {label2}
      </div>
    </Link>
  );
};

export default BarArgedis;
