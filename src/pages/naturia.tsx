import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import { log } from "console";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const Naturia = ({}) => {
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
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col  bg-lime-950 min-h-screen overflow-clip  ${
          isOpen ? "overflow-hidden " : "overflow-clip "
        } `}
      >
        <div className="bg-lime-950 sticky top-0 z-50 ">
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
          <div className="bg-[url('/assets/img/header/header_naturIA.png')] md:w-screen md:h-screen overflow-clip bg-cover w-screen bg-center ">
            <div className="absolute top-10 invisible md:visible menca text-white2 font-extralight">
              <LabelHome />
              <LabelPlaylist />
            </div>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex flex-col items-center text-white2  w-screen md:w-screen">
                <h1 className="general font-thin	text-[90px] md:text-[120px] leading-[178px] md:pt-40 pt-4 ">
                  NaturIA
                </h1>
                <p className="menca lg:w-[670px] w-screen px-4 text-center pt-2 pb-8">
                  Vivamus eu metus enim. Cras feugiat mi id lacus semper
                  tristique. Sed ut faucibus massa. Aenean eu mauris
                  ullamcorper, malesuada nisl id, porta arcu. Pellentesque vitae
                  rutrum sapien. Nunc nec tincidunt nunc. Vestibulum ac eros non
                  velit luctus laoreet id eu urna. Suspendisse tortor ex,
                  aliquam id magna vitae, tincidunt dignissim purus. Praesent
                  interdum tempus orci non varius.
                </p>
                <section className="flex flex-col gap-y-4 items-center pt-12  md:hidden visible">
                  <div className=" flex flex-row ">
                    <Labels label={"( DATE TIME )"} />
                    ...................................................
                    <Labels label={"2024"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    .................................................
                    <Labels label={"NATUR.IA"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} /> .............
                    <Labels label={"PROMPT | MIDJOURNEY"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} /> .........................
                    <Labels label={"STUDIO ARTEFACT 3000"} />
                  </div>
                </section>

                <section className="flex flex-col gap-y-4 items-center pt-12 invisible md:visible h-[80px]">
                  <div className=" flex flex-row ">
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
                    ................................................................................
                    <Labels label={"PROMPT | MIDJOURNEY"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ...........................................................................................
                    <Labels label={"STUDIO ARTEFACT 3000"} />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="md:h-[400px] bg-white2 md:pl-20 px-10 md:min-w-[684px] text-lime-950">
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
            <div className="bg-[url('/assets/img/naturia/broccolis.png')]  w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px] ">
                /imagine https://s.mj.run/xK6USpmfoLY Create a high-resolution,
                realistic photograph, top shot. Use soft, natural lighting. The
                image should feature a top shot close up of broccolis. Use soft,
                natural lighting to enhance the textures and shades of the
                broccolis. The composition should be simple yet intricate, and
                creating a visually appealing and dynamic scene. Real photograph
                made by a professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/bechamel.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/g6GWo-QxeD4 Create a high-resolution,
                realistic photograph, top shot. Use soft, natural lighting. The
                image should feature a top shot close up of bechamel sauce. Use
                soft, natural lighting to enhance the textures and shades of the
                bechamel sauce. The composition should be simple yet intricate,
                and creating a visually appealing and dynamic scene. Real
                photograph made by a professional --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/berries.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                //imagine https://s.mj.run/nkNvbkrLsfU Create a high-resolution,
                realistic photograph, top shot. Use soft, natural lighting. The
                image should feature a close up of a spread of berries. Use
                soft, natural lighting to enhance the textures and shades of the
                berries. The composition should be simple yet intricate, and
                creating a visually appealing and dynamic scene. Real photograph
                made by a professional. --ar 16:9 --v 6.0 --no blueberries
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/brebis.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/X_i7kMfR6eI
                https://s.mj.run/aT5OdGtxL50 Create a high-resolution, realistic
                photograph, top shot. Use soft, natural lighting. The image
                should feature a close up of sheep's milk cheese. Use soft,
                natural lighting to enhance the textures and shades of the
                sheep's milk cheese. The composition should be simple yet
                intricate, and creating a visually appealing and dynamic scene.
                Real photograph made by a professional --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/brownies.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/EYiGQtVDcmU Create a high-resolution,
                realistic photograph. Use soft, natural lighting. The image
                should feature a close up of brownies. Use soft, natural
                lighting to enhance the textures and shades of the rownies. The
                composition should be simple yet intricate, and creating a
                visually appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0 --no blur
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/bubble_gum.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine Create a high-resolution, realistic photograph, top
                shot. Use soft, natural lighting. The image should feature a top
                shot close up of bubble gum. Use soft, natural lighting to
                enhance the textures and shades of the bubble gum. The
                composition should be simple yet intricate, and creating a
                visually appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/caipi.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/TXiCaEM-aD8
                https://s.mj.run/FCZ1LBt8ksw Create a high-resolution, realistic
                photograph. Use soft, natural lighting. The image should feature
                a close up of a caipirinha drink. Use soft, natural lighting to
                enhance the textures and shades of the caipirinha. The
                composition should be simple yet intricate, and creating a
                visually appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/donuts.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/xK6USpmfoLY Create a high-resolution,
                realistic photograph, top shot. Use soft, natural lighting. The
                image should feature a top shot close up of donuts. Use soft,
                natural lighting to enhance the textures and shades of the
                doughnuts. The composition should be simple yet intricate, and
                creating a visually appealing and dynamic scene. Real photograph
                made by a professional --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/cactus.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/IPVjFPDUYY4
                https://s.mj.run/kFt3hkfU5Zc Create a high-resolution, realistic
                photograph, top shot. Use soft, natural lighting. The image
                should feature a close up of cactus. Use soft, natural lighting
                to enhance the textures and shades of the cactus. The
                composition should be simple yet intricate, and creating a
                visually appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/caneles.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/IYdOo-n5O8E Create a high-resolution,
                realistic photograph. Use soft, natural lighting. The image
                should feature a top shot close up of a spread of canelé. Use
                soft, natural lighting to enhance the textures and shades of the
                canelés. The composition should be simple yet intricate, and
                creating a visually appealing and dynamic scene. Real photograph
                made by a professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/cire_abeille.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                //imagine https://s.mj.run/SdKdcatfBYg Create a high-resolution,
                realistic photograph. Use soft, natural lighting. The image
                should feature a close up of beeswax. Use soft, natural lighting
                to enhance the textures and shades of beeswax. The composition
                should be simple yet intricate, and creating a visually
                appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/chamomille.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/gVimgjflYXQ Create a high-resolution,
                realistic photograph, top shot. Use soft, natural lighting. The
                image should feature a top shot close up of chamomile. Use soft,
                natural lighting to enhance the textures and shades of the
                chamomile. The composition should be simple yet intricate, and
                creating a visually appealing and dynamic scene. Real photograph
                made by a professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/piments.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine Create a high-resolution, realistic photograph. Use
                soft, natural lighting, top shot. The image should feature a
                close up of dried chili. Use soft, natural lighting to enhance
                the textures and shades of the dried chili. The composition
                should be simple yet intricate, and creating a visually
                appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0
              </p>
            </div>
            <div className="bg-[url('/assets/img/naturia/ciboulette.png')] w-full md:w-screen h-[400px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center pb-16 relative ">
              <p className="lg:w-[672px] lg:h-[171px] lg:py-8 lg:px-11 absolute md:bottom-3 lg:bottom-8 bottom-6 px-6 w-[300px]">
                /imagine https://s.mj.run/LJBWDeTm4mU Create a high-resolution,
                realistic photograph, top shot. Use soft, natural lighting. The
                image should feature a close up of chives. Use soft, natural
                lighting to enhance the textures and shades of chives. The
                composition should be simple yet intricate, and creating a
                visually appealing and dynamic scene. Real photograph made by a
                professional. --ar 16:9 --v 6.0
              </p>
            </div>
          </div>
          <Link href={"/argedis"}>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className="md:pt-48 pt-20 bg-white2  md:min-w-[684px] "></div>
              <div className=" bg-[url('/assets/img/header/header_argedis.png')] md:min-w-[684px]  md:w-screen h-[600px] md:h-screen md:w-screen bg-cover bg-center relative overflow-clip bg-white2">
                <div className="flex flex-col items-center text-white2">
                  <h1 className="general font-thin 	text-[32px] md:text-[120px] leading-[178px] pt-40 ">
                    Argedis | Regionalisme
                  </h1>
                  <p className="menca md:w-[670px] px-4 text-center pt-2">
                    Vivamus eu metus enim. Cras feugiat mi id lacus semper
                    tristique. Sed ut faucibus massa. Aenean eu mauris
                    ullamcorper, malesuada nisl id, porta arcu. Pellentesque
                    vitae rutrum sapien. Nunc nec tincidunt nunc. Vestibulum ac
                    eros non velit luctus laoreet id eu urna. Suspendisse tortor
                    ex, aliquam id magna vitae, tincidunt digndignissim purus.
                    Praesent interdum tempus orci non varius.
                  </p>
                  <section className="flex flex-col gap-y-4 items-center pt-28 w-screen invisible md:visible">
                    <div className="flex flex-row">
                      <Labels label={"( DATE TIME )"} />
                      ......................................................................................................................
                      <Labels label={"2024"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( CLIENT )"} />{" "}
                      ....................................................................................................................
                      <Labels label={"ARGEDIS"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( TYPE DE PROJET )"} />{" "}
                      ...............................................
                      <Labels
                        label={"DIRECTION ARTISTIQUE | UI | MOTION DESIGN "}
                      />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( AGENCE )"} />{" "}
                      ..........................................................................................
                      <Labels label={"STUDIO ARTEFACT 3000"} />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Naturia;
