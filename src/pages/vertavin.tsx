import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const verreavin = () => {
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
          <div className="bg-[url('/assets/img/header/header_vav.png')] md:w-screen md:h-screen md:min-w-[684px] overflow-clip bg-cover w-screen bg-center">
            <div className="absolute top-10 menca text-white2 font-extralight invisible md:visible">
              <LabelHome />
              <LabelPlaylist />
            </div>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex flex-col items-center text-white2  w-screen md:w-screen">
                <h1 className="general font-thin	md:text-[90px] 	text-[40px] md:text-[120px] leading-[178px] md:pt-40 pt-4">
                  Vert à Vin
                </h1>
                <p className="menca lg:w-[670px] w-screen px-4 text-center pt-2 ">
                  Vivamus eu metus enim. Cras feugiat mi id lacus semper
                  tristique. Sed ut faucibus massa. Aenean eu mauris
                  ullamcorper, malesuada nisl id, porta arcu. Pellentesque vitae
                  rutrum sapien. Nunc nec tincidunt nunc. Vestibulum ac eros non
                  velit luctus laoreet id eu urna. Suspendisse tortor ex,
                  aliquam id magna vitae, tincidunt dignissim purus. Praesent
                  interdum tempus orci non varius.
                </p>
                <section className="flex flex-col gap-y-4 items-center pt-16 md:pt-24 invisible md:visible h-[60px]">
                  <div className=" flex flex-row">
                    <Labels label={"( DATE TIME )"} />
                    ......................................................................................................................
                    <Labels label={"2023"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    ...............................................................................................................
                    <Labels label={"VERRE A VIN"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    ...................................................................................................
                    <Labels label={"BRANDING"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ..............................................................................................................
                    <Labels label={"FREELANCE"} />
                  </div>
                </section>

                <section className="flex flex-col gap-y-4 items-center  md:hidden visible text-[13px]">
                  <div className=" flex flex-row">
                    <Labels label={"( DATE TIME )"} />
                    ...................................................................
                    <Labels label={"2023"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    .............................................................
                    <Labels label={"VERRE A VIN"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    .................................................
                    <Labels label={"BRANDING"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ...........................................................
                    <Labels label={"FREELANCE"} />
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
          <div className="md:space-y-20 bg-auto bg-center min-w-[684px] bg-white2 overflow-clip space-y-8">
            <div className="bg-[url('/assets/img/vertAvin/planche.png')] w-full md:w-screen w-screen md:h-[400px] h-[210px] bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"></div>
            <div className="bg-[url('/assets/img/vertAvin/propales_logos.png')] md:w-screen w-screen md:h-[400px] h-[210px] bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"></div>
            <div className="bg-[url('/assets/img/vertAvin/tablier.png')] w-full md:w-screen  w-screen md:h-[400px] h-[210px]  bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16 "></div>
            <div className="bg-[url('/assets/img/vertAvin/hangar.png')] w-full md:w-screen  w-screen md:h-[400px] h-[210px] bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16 "></div>
          </div>
          <Link href={"/we"}>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursor(true)}
              onMouseLeave={() => setIsVisibleCursor(false)}
            >
              <div className="md:pt-48 pt-20 bg-white2"></div>
              <div className="bg-[url('/assets/img/header/header_wesh.png')] md:min-w-[684px]  w-screen h-[600px] md:h-screen md:w-screen bg-cover bg-center relative overflow-clip bg-white2">
                <div className="flex flex-col items-center text-white2  ">
                  <h1 className="general font-thin	text-[32px] md:text-[120px] leading-[178px] pt-40 ">
                    WE.SH.IV
                  </h1>
                  <p className="menca lg:w-[670px] px-4 text-center pt-2">
                    WE.SH est un petit festival organisé chaque année depuis 4
                    ans par un petit groupe d'amis et de volontaires : We Are
                    Shinny. Chaque année, ce petit festival prend de l'ampleur
                    et l'organisation est sérieuse. Cette année, j'ai eu la
                    chance de pouvoir travailler sur la communication visuelle
                    avec une équipe de personnes extrêmement talentueuses.
                  </p>
                  <section className="flex flex-col gap-y-4 items-center pt-28 w-screen invisible md:visible">
                    <div className=" flex flex-row">
                      <Labels label={"( DATE TIME )"} />
                      ......................................................................................................................
                      <Labels label={"2023"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( CLIENT )"} />{" "}
                      ................................................................................................................
                      <Labels label={"VERRE A VIN"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( TYPE DE PROJET )"} />{" "}
                      .....................................................................................................
                      <Labels label={"BRANDING"} />
                    </div>
                    <div className="flex flex-row">
                      <Labels label={"( AGENCE )"} />{" "}
                      ...............................................................................................................
                      <Labels label={"FREELANCE"} />
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

export default verreavin;
