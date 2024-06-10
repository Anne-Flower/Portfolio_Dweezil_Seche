import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const argedis = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
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
        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300 `}
        >
          <div className="bg-[url('/assets/img/header/header_argedis.png')] md:w-screen md:h-screen md:min-w-[684px] overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0 ">
            <div className="absolute top-[32px] invisible md:visible menca text-white2 font-extralight flex justify-between w-screen md:px-[42px]">
              <LabelHome />
              <div className=" ">
                {" "}
                <LabelMenu />
              </div>
            </div>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className="flex flex-col items-center text-white2  w-screen md:w-screen">
                <h1 className="general font-thin	text-[40px] md:text-[120px] leading-[178px] md:pt-40 pt-4 ">
                  Argedis | Regionalisme
                </h1>
                <p className="menca lg:w-[670px] w-screen px-4 text-center pt-2  h-[172px] ">
                  Vivamus eu metus enim. Cras feugiat mi id lacus semper
                  tristique. Sed ut faucibus massa. Aenean eu mauris
                  ullamcorper, malesuada nisl id, porta arcu. Pellentesque vitae
                  rutrum sapien. Nunc nec tincidunt nunc. Vestibulum ac eros non
                  velit luctus laoreet id eu urna. Suspendisse tortor ex,
                  aliquam id magna vitae, tincidunt dignissim purus. Praesent
                  interdum tempus orci non varius.
                </p>
                <section className="flex flex-col gap-y-0.2 items-center pt-12 md:pb-20 invisible md:visible h-[60px]">
                  <div className=" flex flex-row ">
                    <Labels label={"( DATE TIME )"} />
                    ......................................................................................................................
                    <Labels label={"2024"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    .....................................................................................................................
                    <Labels label={"ARGEDIS"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    .......................................................
                    <Labels
                      label={"DIRECTION ARTISTIQUE | UI | MOTION DESIGN "}
                    />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ..............................................................................................
                    <Labels label={"STUDIO ARTEFACT 3000"} />
                  </div>
                </section>

                <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20">
                  <div className=" flex flex-row">
                    <Labels label={"( DATE TIME )"} />
                    ......................................................................
                    <Labels label={"2024"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    .....................................................................
                    <Labels label={"ARGEDIS"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />
                    .......
                    <Labels
                      label={"DIRECTION ARTISTIQUE | UI | MOTION DESIGN "}
                    />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ..............................................
                    <Labels label={"STUDIO ARTEFACT 3000"} />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="md:h-[400px] bg-white2 md:pl-20 px-10 md:min-w-[684px] text-lime-950 pt-[600px] md:pt-0">
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
          <div className="md:space-y-20 bg-auto bg-center min-w-[684px] bg-white2 overflow-clip space-y-8">
            <motion.div
              className="bg-[url('/assets/img/regionalisme/combinaison_de_couleurs.png')] w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="bg-[url('/assets/img/regionalisme/presentation_argedis.png')] w-screen md:h-[400px] h-[200px]  md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.video
              autoPlay
              loop
              muted
              className=" z-10 w-full w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16pb-48 bg-white2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <source
                src="/assets/img/regionalisme/demo.mp4"
                type="video/mp4"
              />
            </motion.video>
          </div>
          <Link href={"/vertavin"}>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className="md:pt-48 pt-20 bg-white2 min-w-[684px] "></div>

              <motion.div
                className="bg-[url('/assets/img/header/header_vav.png')] md:min-w-[684px] w-screen h-[510px] md:h-[610px] md:w-screen bg-cover bg-center relative overflow-clip bg-white2"
                initial={{ opacity: 2 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 1.3 }}
              >
                <motion.div
                  className="flex flex-col items-center text-white2"
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col items-center text-white2">
                    <h1 className="general font-thin	text-[56px] md:text-[120px] leading-[178px] pt-24 md:pt-32">
                      Vert à Vin
                    </h1>

                    <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20 text-white">
                      <div className=" flex flex-row">
                        <Labels label={"( DATE TIME )"} />
                        ......................................................
                        <Labels label={"2023"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( CLIENT )"} />{" "}
                        ................................................
                        <Labels label={"VERRE A VIN"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( TYPE DE PROJET )"} />{" "}
                        .....................................
                        <Labels label={"BRANDING"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( AGENCE )"} />{" "}
                        ...............................................
                        <Labels label={"FREELANCE"} />
                      </div>
                    </section>

                    <section className="flex flex-col gap-y-0.2 items-center pt-28 md:pt-12 w-screen invisible md:visible">
                      <div className=" flex flex-row">
                        <Labels label={"( DATE TIME )"} />
                        ........................................................................................................................
                        <Labels label={"2023"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( CLIENT )"} />{" "}
                        ..................................................................................................................
                        <Labels label={"VERRE A VIN"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( TYPE DE PROJET )"} />{" "}
                        .......................................................................................................
                        <Labels label={"BRANDING"} />
                      </div>
                      <div className="flex flex-row">
                        <Labels label={"( AGENCE )"} />{" "}
                        .................................................................................................................
                        <Labels label={"FREELANCE"} />
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

export default argedis;
