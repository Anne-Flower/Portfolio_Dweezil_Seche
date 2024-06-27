import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
import BarEngrenages from "@/components/Molecules/Bar/Bar_engrenages";
import BarNaturia from "@/components/Molecules/Bar/Bar_naturia";
import BarVerreavin from "@/components/Molecules/Bar/Bar_verreavin";
import BarWE from "@/components/Molecules/Bar/Bar_we";
import Footer from "@/components/Molecules/Footer/Footer";
import HeaderProjects from "@/components/Molecules/Header/HeaderProjets";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const decormate = () => {
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

  const images_decormate = [
    {
      src: "/assets/imagesV2/decormate/desktop/logo.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/couleurs.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/typo.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/userflow.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/iconographie.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/wireframes.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/maquettes.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/mockup-decormate_1.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/maquettes.png",
    },
    {
      src: "/assets/imagesV2/decormate/desktop/projet_pfe.png",
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
          <div className="bg-beige text-blacky md:w-screen md:h-[600px] md:min-w-[684px] overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0 ">
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className="flex text-black  w-screen  pl-[256px]">
                <div className="md:w-[358px] flex flex-col ">
                  <h1 className="general font-thin	text-[72px]  leading-[76px] md:pt-52 pt-4 md:flex md:justify-end ">
                    Decormate{" "}
                  </h1>
                  <div className="menca font-medium text-sm leading-4 flex flex-col items-end md:pt-24 md:h-[60px] space-y-1.5">
                    <p>2024</p>
                    <p>UI, DA, BRANDING, PROMPT, MIDJOURNEY</p>
                    <p>ECV DIGITAL</p>
                  </div>
                </div>
                <div className="flex flex-col h-[245px] w-[415px] ml-32 ">
                  <p className="menca md:w-[415px]   md:pt-52 pt-4  font-medium	text-base	leading-5	">
                    Decormate is my end-of-study project, which I carried out
                    during my second year at ECV Digital. It's an augmented
                    reality application designed to simplify interior design and
                    furnishing, for both individuals and professionals.
                  </p>
                  <p className="menca md:w-[415px] pt-4  font-medium	text-base	leading-5	">
                    It works in such a way that, after scanning the room you
                    wish to decorate/furnish, the application suggests a whole
                    selection of furnishings to suit the dimensions of the room
                    and the tastes of the user. To achieve this, I put a lot of
                    work into the ergonomics and the whole customization process
                    of the application. All this work was rendered in the form
                    of a twenty-page dossier, supported by all the research
                    carried out upstream.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[971px] bg-beige ">
            <img
              src="/assets/imagesV2/decormate/desktop/img_decormate.png"
              alt="image decormate"
            />
          </div>
          <div id="img_regiolnalisme" className="bg-beige pt-10">
            {images_decormate.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Regionalisme ${index}`}
                className="w-full h-[727px] px-10 py-5"
              />
            ))}
          </div>

          <div className="pb-[64px] bg-beige text-blacky pt-[340px]">
            <BarEngrenages label={"( DA )"} label2={" ( branding )"} />
          </div>
          <div className="pb-[64px] bg-beige text-blacky">
            <BarWE label={"( DA )"} />
          </div>
          <div className="pb-[64px] bg-beige text-blacky">
            <BarVerreavin label={"( DA )"} label2={" ( branding )"} />
          </div>
        </div>
        <div className="pb-[64px] bg-beige text-blacky">
          <BarNaturia label={"( prompt )"} label2={"( midjourney )"} />
        </div>
        <div className="pb-[64px] bg-beige text-blacky ">
          <BarArgedis label={"( UI )"} label2={"( motion )"} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default decormate;
