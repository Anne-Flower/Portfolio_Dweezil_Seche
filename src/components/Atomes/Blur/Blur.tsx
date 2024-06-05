"use client";
import React, { FC } from "react";

type BlurProps = {};

const Blur: FC<BlurProps> = () => {
  return (
    <div className="bounds">
      <div
        className="hidden sm:flex image2 fixed w-[1085px] h-[1085px] rounded-full blur-[100px] opacity-40 mix-blend-overlay"
        // style={{ backgroundColor: "var(--yellow)" }}
      ></div>
      <div
        className="flex sm:hidden image2 fixed w-[385px] h-[385px] rounded-full blur-[40px] opacity-40 mix-blend-overlay"
        // style={{ backgroundColor: "var(--yellowdark)" }}
      ></div>
    </div>
  );
};

export default Blur;
