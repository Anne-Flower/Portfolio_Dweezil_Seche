import ArrowTopRight from "@/components/Atomes/Arrow/ArrowTopRight";
import Pill from "@/components/Atomes/Pill/Pill";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BarWEProps = {
  label: string;
};

const BarWE: FC<BarWEProps> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/we"} className="relative md:h-[68px] md:w-[764px]">
      <div className="general text-[64px] leading-[68px] font-thin flex justify-center relative">
        WE
      </div>
      <div className="menca font-medium	text-sm	leading-4 absolute top-0 right-[640px]">
        {label}
      </div>
    </Link>
  );
};

export default BarWE;
