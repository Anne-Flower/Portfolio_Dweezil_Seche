import Lottie from "lottie-react";
import React from "react";
import lottieSound from "@/app/assets/lottieSound.json";
import Link from "next/link";

const FooterAbout = () => {
  return (
    <>
      <div className="flex relative">
        <div className="menca text-black px-10 h-full w-screen flex space-x-2 font-medium text-sm	leading-4 pb-10">
          <div>Designed by Dweezil Sèche</div>
          <div>Coded by Anne-Flore Bernard</div>
        </div>
        <Link
          target="_blank"
          href={
            "https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980"
          }
        >
          <div className="w-[18px] h-[13px] text-black absolute right-10  ">
            <Lottie
              autoplay
              loop
              animationData={lottieSound}
              renderer="svg"
              width="100%"
              height="100%"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default FooterAbout;
