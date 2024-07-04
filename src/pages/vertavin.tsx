import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
import BarEngrenages from "@/components/Molecules/Bar/Bar_engrenages";
import BarNaturia from "@/components/Molecules/Bar/Bar_naturia";
import BarWE from "@/components/Molecules/Bar/Bar_we";
import Footer from "@/components/Molecules/Footer/Footer";
import HeaderProjects from "@/components/Molecules/Header/HeaderProjets";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Verreavin = () => {
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

  const images_vertavin = [
    {
      src: "/assets/imagesV2/vert_a_vin/propales_logos.png",
    },
    {
      src: "/assets/imagesV2/vert_a_vin/tablier.png",
    },
    {
      src: "/assets/imagesV2/vert_a_vin/hangar.png",
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
        className={`relative flex justify-center font-extralight w-screen flex-col fond min-h-screen overflow-clip ${
          isOpen ? "overflow-hidden " : "overflow-clip"
        } `}
      >
        <div className=" sticky top-0 z-50 backdrop-blur-sm h-[64px] md:h-0">
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
          <div className="bg-beige md:w-screen md:h-[620px] md:min-w-[684px] overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0">
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex text-black w-screen md:pl-[160px] flex-col md:flex-row h-[494px] md:h-full px-5">
                <div className="md:w-[358px] flex flex-col ">
                  <h1 className="general font-thin text-[40px] md:text-[72px] leading-[76px] md:pt-52 pt-20 flex md:justify-end justify-start">
                    Vert à Vin
                  </h1>
                  <div className="menca font-medium	text-sm	leading-4	flex flex-col items-start md:items-end pt-8 md:pt-20 md:h-[60px] space-y-1.5">
                    <p>2023</p>
                    <p>DA, BRANDING</p>
                    <p>HUGO LOUBY</p>
                  </div>
                </div>
                <div className="flex flex-col h-[245px] w-[345px] md:w-[415px] md:ml-52 pt-16 md:pt-0">
                  <p className="menca md:w-[415px] md:pt-52 pt-4 font-medium text-base leading-5">
                    Natur.IA is a project I worked on during my work-study year
                    at Studio Artefact 3000. The studio had developed a
                    dashboard for this client, enabling them to create
                    fragrances from over 900 different aromas. So we had to find
                    a solution to illustrate them. To do this, we decided to use
                    artificial intelligence. We first chose an artistic
                    direction for the visuals. This enabled me to create a
                    prompt which I then used in Midjourney. The prompt was
                    created so that I could change only the word that
                    corresponded to the aroma I wanted to represent. When the AI
                    didn&apos;t understand what I wanted to have, I gave it a
                    reference image at the beginning of the prompt.It taught me
                    a lot about how to use AI, and how to create precise
                    prompts.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex visible md:invisible mb-6 pt-40">
              <motion.div
                className="h-[245px] md:h-[900px] w-screen bg-beige "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img
                  src="/assets/imagesV2/vert_a_vin/img_vavin.png"
                  alt="image wesh"
                  className="w-screen "
                />
              </motion.div>
            </div>
          </div>
          <div className="md:visible invisible bg-beige">
            <motion.div
              className="h-[900px] w-screen bg-beige "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <img
                src="/assets/imagesV2/vert_a_vin/img_vavin.png"
                alt="image wesh"
                className="w-screen "
              />
            </motion.div>
          </div>
          <img
            src="/assets/imagesV2/vert_a_vin/planche.png"
            alt=""
            className="h-[173px] md:h-[680px] bg-beige px-5 md:px-10 w-full md:pt-36 pt-12 "
          />
          <div id="img_wesh" className="bg-beige pt-4">
            {images_vertavin.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Wesh ${index}`}
                className="w-full h-[216px] md:h-[850px] px-5 md:px-10 mt-8
                
                
                md:py-6"
              />
            ))}
          </div>
        </div>
        <div className="pb-[64px] bg-beige text-black pt-[110px] md:pt-[260px]">
          <BarNaturia label={"( prompt )"} label2={"( midjourney )"} />
        </div>
        <div className="pb-[64px] bg-beige text-black">
          <BarArgedis label={"( UI )"} label2={"( motion )"} />
        </div>
        <div className="pb-[64px] bg-beige text-black">
          <BarDecormate
            label={"( UI )"}
            label2={"( DA )"}
            label3={"( branding )"}
            label4={"( prompt )"}
            label5={"( midjourney )"}
          />
        </div>
        <div className="pb-[64px] bg-beige text-black">
          <BarEngrenages label={"( DA )"} label2={" ( branding )"} />
        </div>
        <div className="pb-[64px] bg-beige text-black pb-20 md:pb-60">
          <BarWE label={"( DA )"} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Verreavin;
