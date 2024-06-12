import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { motion } from "framer-motion";
import Link from "next/link";
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
          isOpen ? "overflow-hidden " : "overflow-clip"
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
        </div>
        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300 `}
        >
          <div className="bg-[url('/assets/img/header/header_engrenages.png')] md:w-screen  overflow-clip bg-cover w-screen h-screen bg-center absolute md:relative top-0 pt-20 md:pt-0">
            <div className="absolute top-[32px] invisible md:visible menca text-white2 font-extralight flex justify-between w-screen px-[42px]">
              <LabelHome />
              <div className=" cursor-pointer ">
                {" "}
                <LabelMenu handleToggle={handleToggle2} />{" "}
              </div>
            </div>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex flex-col items-center text-white2 w-fit md:w-screen w-screen">
                <h1 className="general font-thin	text-[30px] md:text-[120px] leading-[178px] md:pt-40 pt-4 ">
                  Engrenages
                </h1>
                <p className="menca lg:w-[670px] w-screen px-4 text-center pt-2 pb-8">
                  WE.SH est un petit festival organisé chaque année depuis 4 ans
                  par un petit groupe d'amis et de volontaires : We Are Shinny.
                  Chaque année, ce petit festival prend de l'ampleur et
                  l'organisation est sérieuse. Cette année, j'ai eu la chance de
                  pouvoir travailler sur la communication visuelle avec une
                  équipe de personnes extrêmement talentueuses.
                </p>
                <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20">
                  <div className=" flex flex-row">
                    <Labels label={"( DATE TIME )"} />
                    ..................................................................
                    <Labels label={"2024"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    ......................................................
                    <Labels label={"JULIEN MASLARD"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    ..................................................
                    <Labels label={"BRANDING"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ...........................................................
                    <Labels label={"FREELANCE"} />
                  </div>
                </section>
                <section className="flex flex-col gap-y-0.2 items-center pt-28 md:pt-12 w-screen invisible md:visible">
                  <div className=" flex flex-row">
                    <Labels label={"( DATE TIME )"} />
                    .......................................................................................................................
                    <Labels label={"2024"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    ...........................................................................................................
                    <Labels label={"JULIEN MASLARD"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    .......................................................................................................
                    <Labels label={"BRANDING"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ................................................................................................................
                    <Labels label={"FREELANCE"} />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="md:h-[400px] bg-white2 md:pl-20 px-10 md:min-w-[684px] text-lime-950  pt-[600px] md:pt-0">
            <div className="md:h-[209px] md:w-[672px] py-16 bg-white2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              malesuada magna, in maximus dui. Ut rutrum pharetra neque lobortis
              maximus. Vivamus eu malesuada velit. Duis fermentum iaculis
              bibendum. Integer vel ipsum metus. Praesent dui libero, tempor ac
              sodales ut, maximus ut massa. Vestibulum iaculis, nisi sit amet
              interdum rhoncus, nisi nulla eleifend elit, sed interdum risus
              odio et felis. In faucibus arcu vel nisl congue, nec aliquam
              lectus porttitor. Morbi in lacus blandit magna fringilla
              venenatis. Sed volutpat ante a massa laoreet, vel sagittis ex
              viverra. Curabitur scelerisque fermentum justo, eget euismod risus
              pellentesque id. Phasellus ut egestas magna, vitae hendrerit
              sapien. Vestibulum aliquam, augue quis tempor aliquet, leo mauris
              aliquet nisi, ac volutpat sem sapien quis est. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
          </section>
          <div className="md:space-y-20 bg-auto bg-center min-w-[684px] bg-white2 overflow-clip ">
            <motion.div
              className="bg-[url('/assets/img/engrenages/2.png')] w-full w-screen h-[280px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="bg-[url('/assets/img/engrenages/3.png')] w-full w-screen h-[280px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="bg-[url('/assets/img/engrenages/4.png')] w-full w-screen h-[280px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="bg-[url('/assets/img/engrenages/8.png')] w-full w-screen h-[280px] md:h-screen bg-contain md:bg-cover bg-no-repeat	bg-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="bg-[url('/assets/img/engrenages/9.png')] w-full w-screen h-[280px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>
          </div>

          <Link href={"/naturia"}>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className="md:pt-48 pt-20 bg-white2"></div>

              <motion.div
                className="bg-[url('/assets/img/header/header_naturIA.png')] md:min-w-[684px] md:w-screen h-[510px] md:h-[600px] bg-cover bg-center relative overflow-clip w-screen"
                initial={{ filter: "blur(0px)", scale: 1 }}
                whileInView={{ filter: "blur(2px)" }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.25, filter: "blur(2px)" }}
              >
                {" "}
                <motion.div
                  className="div flex flex-col items-center "
                  initial={{
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  whileHover={{ scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col items-center text-white2  ">
                    <h1 className="general font-thin	text-[56px] md:text-[120px] leading-[178px] pt-24 md:pt-32">
                      NaturIA
                    </h1>

                    <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20 text-white">
                      <div className=" flex flex-row">
                        <Labels label={"( DATE TIME )"} />
                        .........................................
                        <Labels label={"2024"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( CLIENT )"} />{" "}
                        .......................................
                        <Labels label={"NATUR.IA"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( TYPE DE PROJET )"} /> .......
                        <Labels label={"PROMPT | MIDJOURNEY"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( AGENCE )"} /> .................
                        <Labels label={"STUDIO ARTEFACT 3000"} />
                      </div>
                    </section>

                    <section className="flex flex-col gap-y-0.2 items-center pt-28 md:pt-12 w-screen invisible md:visible">
                      <div className=" flex flex-row">
                        <Labels label={"( DATE TIME )"} />
                        ......................................................................................................................
                        <Labels label={"2024"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( CLIENT )"} />{" "}
                        ....................................................................................................................
                        <Labels label={"NATUR.IA"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( TYPE DE PROJET )"} />{" "}
                        .....................................................................................
                        <Labels label={"PROMPT | MIDJOURNEY"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( AGENCE )"} />{" "}
                        ..............................................................................................
                        <Labels label={"STUDIO ARTEFACT 3000"} />
                      </div>
                    </section>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default engrenage;
