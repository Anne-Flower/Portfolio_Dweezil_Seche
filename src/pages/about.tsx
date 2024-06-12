import About from "@/components/Atomes/About/About";
import Label from "@/components/Atomes/Label/LabelAbout";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import React, { useState } from "react";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsOpen2((prev) => !prev);
  };

  return (
    <>
      <div
        style={{
          opacity: "10px",
          backgroundImage: "url('/assets/img/grain.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          animation: "none",
        }}
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col min-h-screen overflow-clip fond3fix ${
          isOpen ? "overflow-hidden   " : "overflow-clip "
        } `}
      >
        <div className="sticky top-0 z-50 ">
          <MobileNav
            isOpen={isOpen}
            handleToggle={handleToggle}
            isAbout={false}
          />
        </div>
        <div className="sticky top-0 z-50 ">
          <MobileNavMd
            isOpen={isOpen2}
            handleToggle={handleToggle2}
            isAbout={false}
          />
        </div>
        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300 `}
        >
          <div className=" md:relative top-[32px] pt-0 h-[1200px] md:h-screen ">
            <div className="absolute invisible md:visible menca text-white2 font-extralight flex justify-between w-screen md:px-[42px]">
              <LabelHome />
              <div className="cursor-pointer">
                <LabelMenu handleToggle={handleToggle2} />
              </div>
            </div>
            <div className="w-full h-screen text-white lg:pt-10">
              <div className="lg:pt-0">
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
