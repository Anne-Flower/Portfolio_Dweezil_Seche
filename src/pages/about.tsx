import About from "@/components/Atomes/About/About";
import Label from "@/components/Atomes/Label/LabelAbout";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import React, { useState } from "react";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fond relative text-white2 flex justify-center font-extralight w-screen flex-col min-h-screen overflow-x-clip ${
          isOpen ? "overflow-hidden " : "overflow-clip "
        } `}
      >
        <div className="sticky top-0 z-50 ">
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
          <div className=" md:relative top-10 pt-0 h-[1200px] md:h-screen">
            <div className="absolute invisible md:visible menca text-white2 font-extralight flex justify-between w-screen">
              <LabelHome />
              <div className="pr-8">
                <LabelMenu
                  handleToggle2={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
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
