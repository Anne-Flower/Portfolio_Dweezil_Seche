import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
import BarNaturia from "@/components/Molecules/Bar/Bar_naturia";
import BarVerreavin from "@/components/Molecules/Bar/Bar_verreavin";
import BarWE from "@/components/Molecules/Bar/Bar_we";
import FooterBlack from "@/components/Molecules/Footer/FooterBlack";
import FooterBlackMobile from "@/components/Molecules/Footer/FooterBlackMobile";
import HeaderEngrenages from "@/components/Molecules/Header/headerEngrenages";
import MobileNavEngrenages from "@/components/Molecules/MobileNav/MobileNavEngreanges";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const engrenage = () => {
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

  const images_engrenages = [
    {
      src: "/assets/imagesV2/engrenages/logo_construction.png",
    },
    {
      src: "/assets/imagesV2/engrenages/logo.png",
    },
    {
      src: "/assets/imagesV2/engrenages/favicon.png",
    },
    {
      src: "/assets/imagesV2/engrenages/couleurs.png",
    },
    {
      src: "/assets/imagesV2/engrenages/font.png",
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
        className={`relative text-beige flex justify-center font-extralight w-screen flex-col bg-black min-h-screen overflow-clip  ${
          isOpen ? "overflow-hidden " : "overflow-clip"
        } `}
      >
        <div className=" sticky top-0 z-50 t">
          <MobileNavEngrenages
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
          <div className="absolute top-[0px] invisible md:visible flex justify-between w-screen text-beige">
            <HeaderEngrenages />
          </div>
        </div>
        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300 `}
        >
          <div className="bg-black text-beige md:w-screen md:h-[500px] md:min-w-[684px] overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0 ">
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex text-beige w-screen md:pl-[256px] flex-col md:flex-row h-[494px] md:h-full px-5">
                <div className="md:w-[358px] flex flex-col ">
                  <h1 className="general font-thin text-[40px] md:text-[72px] leading-[76px] md:pt-52 pt-10 flex md:justify-end justify-start">
                    Engrenages{" "}
                  </h1>
                  <div className="menca font-medium	text-sm	leading-4	flex flex-col items-start md:items-end pt-8 md:pt-20 md:h-[60px] space-y-1.5">
                    <p>2023</p>
                    <p>BRANDING</p>
                    <p>JULIEN MASLARD</p>
                  </div>
                </div>
                <div className="flex flex-col h-[245px] w-[345px] md:w-[415px] md:ml-32 pt-16 md:pt-0">
                  <p className="menca md:w-[415px]   md:pt-52 pt-4  font-medium	text-base	leading-5	">
                    Engrenages is a Sales podcast of around 1 hour per episode,
                    written and presented by Julien Maslard. With a different
                    guest in each episode, this freelance Sales explores topics
                    of great importance to the world of sales and business in
                    general. It also provides a better understanding of how a
                    company works.
                  </p>
                  <p className="menca md:w-[415px] pt-4  font-medium	text-base	leading-5	">
                    Julien decided to launch this project in 2023, so he called
                    on me to create the visual identity for his new podcast. I
                    produced a logo and a graphic charter, then provided him
                    with a set of editable templates on figma so that he could
                    change the titles of the visuals for each episode of his
                    podcasts.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex visible md:invisible mb-6 pt-20">
              <motion.div
                className=" h-[259px] md:h-[971px]  bg-black "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img
                  src="/assets/imagesV2/engrenages/mockup1_engrenages.png"
                  alt=""
                  className="h-[259px] md:h-[971px] bg-beige w-screen"
                />
              </motion.div>
            </div>
          </div>

          <div className=" h-[259px] md:h-[971px] bg-black ">
            <img
              src="/assets/imagesV2/engrenages/mockup1_engrenages.png"
              alt="image engrenages"
            />
          </div>
          <div id="img_engrenages" className="bg-black pt-64 md:pt-0">
            {images_engrenages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Engrenages ${index}`}
                className="w-full h-[194px] md:h-[727px] px-5 md:px-10 py-5"
              />
            ))}
          </div>
          <div className=" h-full w-screen bg-black flex flex-col md:flex-row justify-between space-y-5 px-5 md:px-10 pt-5">
            <img
              src="/assets/imagesV2/engrenages/mockup_bc.png"
              alt="image engrenages papier"
              className="bg-black h-[394px] md:h-[755px] w-[345px] md:w-[660px] "
            />
            <img
              src="/assets/imagesV2/engrenages/mockup_tasse.png"
              alt="image engrenages tasse"
              className=" bg-black h-[394px] md:h-[755px] w-[345px] md:w-[660px] "
            />
          </div>

          <div className="pb-[64px] bg-black text-beige pt-[100px] md:pt-[240px]">
            <BarWE label={"( DA )"} />
          </div>
          <div className="pb-[64px] bg-black text-beige">
            <BarVerreavin label={"( DA )"} label2={" ( branding )"} />
          </div>
        </div>
        <div className="pb-[64px] bg-black text-beige">
          <BarNaturia label={"( prompt )"} label2={"( midjourney )"} />
        </div>
        <div className="pb-[64px] bg-black text-beige ">
          <BarArgedis label={"( UI )"} label2={"( motion )"} />
        </div>
        <div className="pb-[64px] bg-black text-beige pb-20 md:pb-60">
          <BarDecormate
            label={"( UI )"}
            label2={"( DA )"}
            label3={"( branding )"}
            label4={"( prompt )"}
            label5={"( midjourney )"}
          />
        </div>
        <div className="text-beige visible md:hidden">
          <FooterBlackMobile />
        </div>
        <div className=" text-beige ">
          <FooterBlack />
        </div>
      </main>
    </>
  );
};

export default engrenage;
