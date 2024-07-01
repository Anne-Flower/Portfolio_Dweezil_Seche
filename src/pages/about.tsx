import About from "@/components/Atomes/About/About";
import Header from "@/components/Molecules/Header/headerHome";
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
        className={`relative text-black flex justify-center font-extralight w-screen flex-col min-h-screen overflow-clip bg-beige ${
          isOpen ? "overflow-hidden" : "overflow-clip"
        } `}
      >
        <div className="sticky top-0 z-50 ">
          <MobileNav
            isOpen={isOpen}
            handleToggle={handleToggle}
            isAbout={false}
          />
        </div>
        <div className=" relative top-0 pt-0 h-[1200px] md:h-screen">
          <div className="absolute invisible md:visible menca text-black font-extralight flex justify-between w-screen ">
            <Header />
          </div>
          <div className="w-full h-screen text-white lg:py-10">
            <div className="lg:pt-10 h-screen">
              <About />
            </div>
          </div>
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
        ></div>
      </div>
    </>
  );
};

export default AboutPage;
