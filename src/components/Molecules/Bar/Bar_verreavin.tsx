import ArrowTopRight from "@/components/Atomes/Arrow/ArrowTopRight";
import Pill from "@/components/Atomes/Pill/Pill";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, useState } from "react";

type BarVerreavinProps = {
  label: string;
  label2: string;
};
const BarVerreavin: FC<BarVerreavinProps> = ({ label, label2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/vertavin"} className="relative md:h-[68px] md:w-[764px]">
      <div className="general text-[40px] md:text-[64px] leading-[68px] font-thin flex justify-center relative">
        Vert à Vin
      </div>
      <div className="menca font-medium	text-sm	leading-4	absolute md:top-0 md:right-[510px] right-[133px]">
        {label} {label2}
      </div>
    </Link>
  );
};

export default BarVerreavin;
