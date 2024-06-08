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
      <main className="relative">
        <div
          className={`relative text-white flex justify-center font-extralight w-screen flex-col bg-lime-950 min-h-screen overflow-clip ${
            isOpen ? "overflow-hidden " : "overflow-clip "
          } `}
        >
          <div className="bg-lime-950 sticky top-0 z-50 cursor-pointer ">
            <MobileNav
              isOpen={isOpen}
              handleToggle={handleToggle}
              isAbout={true}
            />
          </div>
          <div
            className={`${
              isOpen ? "opacity-10" : "opacity-100"
            } transition-opacity duration-300 `}
          >
            <div className="absolute md:relative top-0 pt-20 md:pt-8">
              <div className="absolute invisible md:visible menca text-white2 font-extralight flex justify-between w-screen">
                <LabelHome />
                <div className=" pr-8 ">
                  {" "}
                  <LabelMenu />
                </div>
              </div>
              <div className="bg-lime-950 w-full h-screen text-white  lg:pt-10">
                <div className=" lg:pt-0">
                  <About />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
