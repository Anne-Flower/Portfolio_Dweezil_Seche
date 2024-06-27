import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
import BarEngrenages from "@/components/Molecules/Bar/Bar_engrenages";
import BarVerreavin from "@/components/Molecules/Bar/Bar_verreavin";
import BarWE from "@/components/Molecules/Bar/Bar_we";
import Footer from "@/components/Molecules/Footer/Footer";
import HeaderProjects from "@/components/Molecules/Header/HeaderProjets";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const argedis = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsOpen2((prev) => !prev);
  };

  const [visibleCursor, setIsVisibleCursor] = useState(false);
  const [visibleCursorHome, setIsVisibleCursorHome] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const images_regionalisme = [
    {
      src: "/assets/imagesV2/argedis/design system element.png",
    },
    {
      src: "/assets/imagesV2/argedis/map librairy.png",
    },
    {
      src: "/assets/imagesV2/argedis/UX.png",
    },
    {
      src: "/assets/imagesV2/argedis/presentation_argedis.png",
    },
    {
      src: "/assets/imagesV2/argedis/regions.png",
    },
  ];

  return (
    <>
      {visibleCursor && (
        <CustomCursor x={cursorPosition.x} y={cursorPosition.y} />
      )}
      {visibleCursorHome && (
        <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
      )}

      <main
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col fond min-h-screen overflow-clip  ${
          isOpen ? "overflow-hidden " : "overflow-clip "
        } `}
      >
        <div className=" sticky top-0 z-50 ">
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
          <div className="absolute top-[0px] invisible md:visible flex justify-between w-screen ">
            <HeaderProjects />
          </div>
        </div>
        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300 `}
        >
          <div className="bg-beige text-black md:w-screen md:h-[600px] md:min-w-[684px] overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0 ">
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className="flex text-black  w-screen  pl-[233px]">
                <div className="md:w-[358px] flex flex-col ">
                  <h1 className="general font-thin	text-[72px] leading-[76px] md:pt-52 pt-4 md:flex md:justify-end ">
                    Regionalisme
                  </h1>
                  <div className="menca font-medium	 text-sm	leading-4	flex flex-col items-end md:pt-[96px] md:h-[60px] space-y-1.5">
                    <p>2024</p>
                    <p>UI, MOTION</p>
                    <p>STUDIO ARTEFACT 3000</p>
                  </div>
                </div>
                <div className="flex flex-col h-[245px] w-[415px] ml-40 ">
                  <p className="menca md:w-[415px]   md:pt-52 pt-4  font-medium	text-base	leading-5	">
                    Regionalisme is an application designed for use on
                    interactive kiosks at petrol stations all over France. It's
                    a project I carried out during my work-study year at Studio
                    Artefact 3000. The aim of this application is to promote
                    local producers who supply service stations with their
                    regional products, and to encourage customers to buy local
                    products rather than Lays chips.
                  </p>
                  <p className="menca md:w-[415px] pt-4  font-medium	text-base	leading-5	">
                    My role on this project was to adapt existing prints
                    displayed in service stations to a digital format. We worked
                    on nearly a hundred service stations, each with its own
                    color code and specific producers. We then animated all the
                    little illustrations decorating the maps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[900px] bg-beige">
            <img src="/assets/imagesV2/argedis/img_argedis.png" alt="" />
          </div>
          <div id="img_regiolnalisme" className="bg-beige">
            {images_regionalisme.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Regionalisme ${index}`}
                className="w-full h-[727px] px-10 py-5"
              />
            ))}
          </div>
          <div className="bg-beige w-full h-[727px] px-10 pt-5">
            <video autoPlay muted loop height="100%" width="100% ">
              <source
                src="/assets/img/regionalisme/demo.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="pb-[64px] bg-beige text-black pt-[340px]">
            <BarArgedis label={"( UI )"} label2={"( motion )"} />
          </div>
          <div className="pb-[64px] bg-beige text-black">
            <BarDecormate
              label={"( UI )"}
              label2={"( DA )"}
              label3={"( branding )"}
              label4={"( prompt )"}
              label5={" ( midjourney )"}
            />
          </div>
          <div className="pb-[64px] bg-beige text-black">
            <BarEngrenages label={"( DA )"} label2={" ( branding )"} />
          </div>
          <div className="pb-[64px] bg-beige text-black">
            <BarWE label={"( DA )"} />
          </div>
          <div className="pb-[64px] bg-beige text-black">
            <BarVerreavin label={"( DA )"} label2={" ( branding )"} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default argedis;
