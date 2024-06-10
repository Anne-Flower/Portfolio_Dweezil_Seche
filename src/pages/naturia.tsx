import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { log } from "console";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const Naturia = ({}) => {
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

  const Variants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <>
      {visibleCursor && (
        <CustomCursor x={cursorPosition.x} y={cursorPosition.y} />
      )}
      {visibleCursorHome && (
        <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
      )}

      <main
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col fond2 min-h-screen overflow-clip  ${
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
          <div className="bg-[url('/assets/img/header/header_naturIA.png')] md:w-screen  overflow-clip bg-cover w-screen h-screen bg-center absolute md:relative top-0 pt-20 md:pt-0">
            <div className="absolute top-10 invisible md:visible menca text-white2 font-extralight flex justify-between w-screen">
              <LabelHome />
              <div className=" pr-8">
                {" "}
                <LabelMenu
                  handleToggle2={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </div>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex flex-col items-center text-white  w-screen md:w-screen">
                <h1 className="general font-thin	text-[90px] md:text-[120px] leading-[178px] md:pt-40 pt-4 ">
                  NaturIA
                </h1>
                <p className="menca lg:w-[670px] w-screen px-4 text-center pt-2 pb-8 ">
                  Vivamus eu metus enim. Cras feugiat mi id lacus semper
                  tristique. Sed ut faucibus massa. Aenean eu mauris
                  ullamcorper, malesuada nisl id, porta arcu. Pellentesque vitae
                  rutrum sapien. Nunc nec tincidunt nunc. Vestibulum ac eros non
                  velit luctus laoreet id eu urna. Suspendisse tortor ex,
                  aliquam id magna vitae, tincidunt dignissim purus. Praesent
                  interdum tempus orci non varius.
                </p>
                <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20">
                  <div className=" flex flex-row ">
                    <Labels label={"( DATE TIME )"} />
                    .........................................................
                    <Labels label={"2024"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    .......................................................
                    <Labels label={"NATUR.IA"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    .......................
                    <Labels label={"PROMPT | MIDJOURNEY"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    .................................
                    <Labels label={"STUDIO ARTEFACT 3000"} />
                  </div>
                </section>

                <section className="flex flex-col gap-y-0.2 items-center pt-28 md:pt-12 w-screen invisible md:visible">
                  <div className=" flex flex-row ">
                    <Labels label={"( DATE TIME )"} />
                    .......................................................................................................................
                    <Labels label={"2024"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    .....................................................................................................................
                    <Labels label={"NATUR.IA"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    .....................................................................................
                    <Labels label={"PROMPT | MIDJOURNEY"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ...............................................................................................
                    <Labels label={"STUDIO ARTEFACT 3000"} />
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
          <div className="md:space-y-20 bg-auto bg-center min-w-[684px] bg-white2 overflow-clip text-white2 ">
            <motion.div
              className="bg-[url('/assets/img/naturia/broccolis.png')]  w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/xK6USpmfoLY"
                >
                  https://s.mj.run/xK6USpmfoLY
                </a>
                &nbsp; Create a high-resolution, realistic photograph, top shot.
                Use soft, natural lighting. The image should feature a top shot
                close up of broccolis. Use soft, natural lighting to enhance the
                textures and shades of the broccolis. The composition should be
                simple yet intricate, and creating a visually appealing and
                dynamic scene. Real photograph made by a professional. --ar 16:9
                --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/bechamel.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine &nbsp;
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/g6GWo-QxeD4"
                >
                  https://s.mj.run/g6GWo-QxeD4
                </a>{" "}
                &nbsp; Create a high-resolution, realistic photograph, top shot.
                Use soft, natural lighting. The image should feature a top shot
                close up of bechamel sauce. Use soft, natural lighting to
                enhance the textures and shades of the bechamel sauce. The
                composition should be simple yet intricate, and creating a
                visually appealing and dynamic scene. Real photograph made by a
                professional --ar 16:9 --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/berries.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href=" https://s.mj.run/nkNvbkrLsfU"
                >
                  {" "}
                  https://s.mj.run/nkNvbkrLsfU
                </a>{" "}
                &nbsp; Create a high-resolution, realistic photograph, top shot.
                Use soft, natural lighting. The image should feature a close up
                of a spread of berries. Use soft, natural lighting to enhance
                the textures and shades of the berries. The composition should
                be simple yet intricate, and creating a visually appealing and
                dynamic scene. Real photograph made by a professional. --ar 16:9
                --v 6.0 --no blueberries
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/brebis.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href=" https://s.mj.run/X_i7kMfR6eI"
                >
                  {" "}
                  https://s.mj.run/X_i7kMfR6eI
                </a>{" "}
                &nbsp; https://s.mj.run/aT5OdGtxL50 Create a high-resolution,
                realistic photograph, top shot. Use soft, natural lighting. The
                image should feature a close up of sheep's milk cheese. Use
                soft, natural lighting to enhance the textures and shades of the
                sheep's milk cheese. The composition should be simple yet
                intricate, and creating a visually appealing and dynamic scene.
                Real photograph made by a professional --ar 16:9 --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/brownies.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/EYiGQtVDcmU"
                >
                  https://s.mj.run/EYiGQtVDcmU
                </a>{" "}
                &nbsp; Create a high-resolution, realistic photograph. Use soft,
                natural lighting. The image should feature a close up of
                brownies. Use soft, natural lighting to enhance the textures and
                shades of the rownies. The composition should be simple yet
                intricate, and creating a visually appealing and dynamic scene.
                Real photograph made by a professional. --ar 16:9 --v 6.0 --no
                blur
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/bubble_gum.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                Create a high-resolution, realistic photograph, top shot. Use
                soft, natural lighting. The image should feature a top shot
                close up of bubble gum. Use soft, natural lighting to enhance
                the textures and shades of the bubble gum. The composition
                should be simple yet intricate, and creating a visually
                appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/caipi.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/FCZ1LBt8ksw"
                >
                  https://s.mj.run/FCZ1LBt8ksw
                </a>{" "}
                &nbsp; Create a high-resolution, realistic photograph. Use soft,
                natural lighting. The image should feature a close up of a
                caipirinha drink. Use soft, natural lighting to enhance the
                textures and shades of the caipirinha. The composition should be
                simple yet intricate, and creating a visually appealing and
                dynamic scene. Real photograph made by a professional. --ar 16:9
                --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/donuts.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/xK6USpmfoLY "
                >
                  https://s.mj.run/xK6USpmfoLY
                </a>{" "}
                &nbsp; Create a high-resolution, realistic photograph, top shot.
                Use soft, natural lighting. The image should feature a top shot
                close up of donuts. Use soft, natural lighting to enhance the
                textures and shades of the doughnuts. The composition should be
                simple yet intricate, and creating a visually appealing and
                dynamic scene. Real photograph made by a professional --ar 16:9
                --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/cactus.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine
                </span>{" "}
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/IPVjFPDUYY4 "
                >
                  https://s.mj.run/IPVjFPDUYY4
                </a>{" "}
                &nbsp;
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/kFt3hkfU5Zc "
                >
                  https://s.mj.run/kFt3hkfU5Zc
                </a>{" "}
                &nbsp; Create a high-resolution, realistic photograph, top shot.
                Use soft, natural lighting. The image should feature a close up
                of cactus. Use soft, natural lighting to enhance the textures
                and shades of the cactus. The composition should be simple yet
                intricate, and creating a visually appealing and dynamic scene.
                Real photograph made by a professional. --ar 16:9 --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/caneles.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-4 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine &nbsp;
                </span>
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/IYdOo-n5O8E"
                >
                  https://s.mj.run/IYdOo-n5O8E
                </a>
                &nbsp; Create a high-resolution, realistic photograph. Use soft,
                natural lighting. The image should feature a top shot close up
                of a spread of canelé. Use soft, natural lighting to enhance the
                textures and shades of the canelés. The composition should be
                simple yet intricate, and creating a visually appealing and
                dynamic scene. Real photograph made by a professional. --ar 16:9
                --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/cire_abeille.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine &nbsp;
                </span>
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/SdKdcatfBYg"
                >
                  https://s.mj.run/SdKdcatfBYg
                </a>{" "}
                &nbsp; Create a high-resolution, realistic photograph. Use soft,
                natural lighting. The image should feature a close up of
                beeswax. Use soft, natural lighting to enhance the textures and
                shades of beeswax. The composition should be simple yet
                intricate, and creating a visually appealing and dynamic scene.
                Real photograph made by a professional. --ar 16:9 --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/chamomille.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine &nbsp;
                </span>
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/gVimgjflYXQ"
                >
                  https://s.mj.run/gVimgjflYXQ
                </a>
                &nbsp; Create a high-resolution, realistic photograph, top shot.
                Use soft, natural lighting. The image should feature a top shot
                close up of chamomile. Use soft, natural lighting to enhance the
                textures and shades of the chamomile. The composition should be
                simple yet intricate, and creating a visually appealing and
                dynamic scene. Real photograph made by a professional. --ar 16:9
                --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/piments.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine &nbsp;
                </span>{" "}
                &nbsp; Create a high-resolution, realistic photograph. Use soft,
                natural lighting, top shot. The image should feature a close up
                of dried chili. Use soft, natural lighting to enhance the
                textures and shades of the dried chili. The composition should
                be simple yet intricate, and creating a visually appealing and
                dynamic scene. Real photograph made by a professional. --ar 16:9
                --v 6.0
              </p>
            </motion.div>
            <motion.div
              className="bg-[url('/assets/img/naturia/ciboulette.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                <span className="general text-white font-semibold text-base leading-5">
                  /imagine &nbsp;
                </span>
                <a
                  className="text-greyLink font-medium text-base leading-5"
                  href="https://s.mj.run/LJBWDeTm4mU"
                >
                  https://s.mj.run/LJBWDeTm4mU
                </a>
                &nbsp; Create a high-resolution, realistic photograph, top shot.
                Use soft, natural lighting. The image should feature a close up
                of chives. Use soft, natural lighting to enhance the textures
                and shades of chives. The composition should be simple yet
                intricate, and creating a visually appealing and dynamic scene.
                Real photograph made by a professional. --ar 16:9 --v 6.0
              </p>
            </motion.div>
          </div>
          <Link href={"/argedis"}>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className=" bg-white2  md:min-w-[684px] z-60 h-[200px]"></div>
              <motion.div
                className=" bg-[url('/assets/img/header/header_argedis.png')] md:min-w-[684px] md:w-screen h-[510px] md:h-[610px] md:w-screen bg-cover bg-center relative overflow-clip bg-white2 "
                initial={{ opacity: 2 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 1.3 }}
              >
                <motion.div
                  className="flex flex-col items-center text-white2"
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="general font-thin	text-[36px] md:text-[120px] leading-[178px] md:pt-40 pt-32">
                    Argedis | Regionalisme
                  </h1>

                  <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20 text-white">
                    <div className="flex flex-row">
                      <Labels label={"( DATE TIME )"} />
                      ..................................................................
                      <Labels label={"2024"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( CLIENT )"} />
                      .................................................................
                      <Labels label={"ARGEDIS"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( TYPE DE PROJET )"} />
                      ...
                      <Labels
                        label={"DIRECTION ARTISTIQUE | UI | MOTION DESIGN "}
                      />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( AGENCE )"} />{" "}
                      ..........................................
                      <Labels label={"STUDIO ARTEFACT 3000"} />
                    </div>
                  </section>

                  <section className="flex flex-col gap-y-0.2 items-center pt-28 md:pt-12 w-screen invisible md:visible">
                    <div className="flex flex-row">
                      <Labels label={"( DATE TIME )"} />
                      ......................................................................................................................
                      <Labels label={"2024"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( CLIENT )"} />
                      .....................................................................................................................
                      <Labels label={"ARGEDIS"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( TYPE DE PROJET )"} />
                      .......................................................
                      <Labels
                        label={"DIRECTION ARTISTIQUE | UI | MOTION DESIGN "}
                      />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( AGENCE )"} />{" "}
                      ..............................................................................................
                      <Labels label={"STUDIO ARTEFACT 3000"} />
                    </div>
                  </section>
                </motion.div>
              </motion.div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Naturia;
