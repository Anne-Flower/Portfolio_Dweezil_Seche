"use client";

import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
type BarNaturiaProps = {
  label: string;
  label2: string;
};

const BarNaturia: FC<BarNaturiaProps> = ({ label, label2 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCursorHome, setIsVisibleCursorHome] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Link href={"/naturia"} className="relative md:h-[68px] md:w-[764px]">
      <div
        className="general text-[40px] md:text-[64px] leading-[68px] font-thin flex justify-center relative"
        id="cursorStyled"
      >
        {visibleCursorHome && (
          <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
        )}
        <div
          className="cursor-none"
          onMouseEnter={() => setIsVisibleCursorHome(true)}
          onMouseLeave={() => setIsVisibleCursorHome(false)}
        >
          Natur.IA
        </div>
        <div className="menca font-medium	text-sm	leading-4	absolute md:top-0 top-16 md:right-[490px]">
          {label} {label2}
        </div>
      </div>
    </Link>
  );
};

export default BarNaturia;
