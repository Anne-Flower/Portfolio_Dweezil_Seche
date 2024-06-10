import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import BarImage3D from "@/components/Molecules/Bar/Bar_image_3D";
import BarSigneAstro from "@/components/Molecules/Bar/Bar_signe_astro";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import React, { useState } from "react";

const Bonus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAstroOpen, setIsAstroOpen] = useState(false);
  const [isImage3DOpen, setIsImage3DOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAstroToggle = () => {
    setIsAstroOpen((prev) => !prev);
    setIsImage3DOpen(false);
  };

  const handleImage3DToggle = () => {
    setIsImage3DOpen((prev) => !prev);
    setIsAstroOpen(false);
  };
  return (
    <main
      className={`relative text-white2 flex justify-center font-extralight w-screen flex-col fond min-h-screen overflow-clip  ${
        isOpen ? "overflow-hidden " : "overflow-clip "
      } `}
    >
      <div className="sticky top-0 z-50 bg-transparent ">
        <MobileNav
          isOpen={isOpen}
          handleToggle={handleToggle}
          isAbout={false}
        />
      </div>
      <div
        className={`${
          isOpen ? "opacity-10" : "opacity-100"
        } transition-opacity duration-300 `}
      >
        <div className="h-screen w-screen ">
          <div className="absolute top-10 invisible md:visible menca text-white2 font-extralight flex justify-between w-screen">
            <LabelHome />
            <div className=" pr-8">
              {" "}
              <LabelPlaylist />
            </div>
          </div>
          <div className="fond h-screen w-screen flex flex-col items-center">
            <h1 className="general font-thin text-[56px] leading-[83px] text-white2 pt-48">
              Bonus
            </h1>
            <p className=" leading-[83px] menca font-thin text-white2">
              Petits projets pour le fun
            </p>
            <div className="h-screen w-screen ">
              <div className="absolute bottom-0 ">
                <BarSigneAstro
                  label={"Signe Astrologique"}
                  isVisible={isAstroOpen}
                  onToggle={handleAstroToggle}
                />
                <BarImage3D
                  label={"Image 3D"}
                  isVisible={isImage3DOpen}
                  onToggle={handleImage3DToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bonus;
