import Lottie from "lottie-react";
import React from "react";
import lottieSound from "@/app/assets/lottieSound.json";
import Link from "next/link";

const FooterAbout = () => {
  return (
    <>
      <div className="menca text-black px-8 w-screen flex flex-col items-center space-y-2 font-medium text-sm leading-4 bg-beige">
        <div>Designed by Dweezil Sèche</div>
        <div>Coded by Anne-Flore Bernard</div>
      </div>
    </>
  );
};

export default FooterAbout;
