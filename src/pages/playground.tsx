import Footer from "@/components/Molecules/Footer/Footer";
import Header from "@/components/Molecules/Header/headerHome";
import Lottie from "lottie-react";
import { Meera_Inimai } from "next/font/google";
import Link from "next/link";
import React from "react";
import lottieSound from "@/app/assets/lottieSound.json";

const playground = () => {
  return (
    <main className="bg-beige w-screen h-screen">
      <div>
        <Header />
      </div>

      <h1 className="general font-thin text-[72px] leading-[76px] md:pt-72 pt-4 md:flex md:justify-center ">
        Playground
      </h1>
      <div className="bg-beige w-screen h-fit menca absolute bottom-10 left-10 text-sm flex flex-row font-medium	leading-4">
        <div className="text-greyNew pr-8 space-y-2">
          <div className="">Selected projets</div>
          {/* <p>2020 -- 2024 </p> */}
          <div className="flex flex-inline ">
            <div className="">2020</div>
            <div className=" border flex flex-row"></div>
            <div>2024</div>
          </div>
        </div>
        <div className="text-black space-y-2">
          <p className="">Dweezil Sèche</p>
          <p>Artistic Direction \ UI \ Motion \ Prompt</p>
        </div>
        <Link
          target="_blank"
          href={
            "https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980"
          }
        >
          <div className="w-[18px] h-[13px] text-black absolute right-20 bottom-0">
            <Lottie autoplay loop animationData={lottieSound} renderer="svg" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default playground;
