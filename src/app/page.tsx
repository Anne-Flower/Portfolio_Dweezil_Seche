"use client";
import Contact from "@/components/Atomes/Contact/Contact";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelAbout from "@/components/Atomes/Label/LabelAbout";
import Label from "@/components/Atomes/Label/LabelAbout";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import BarBlueDot from "@/components/Molecules/Bar/Bar_signe_astro";
import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarEngrenages from "@/components/Molecules/Bar/Bar_engrenages";
import BarNaturia from "@/components/Molecules/Bar/Bar_naturia";
import BarVerreavin from "@/components/Molecules/Bar/Bar_verreavin";
import BarWE from "@/components/Molecules/Bar/Bar_we";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import { useEffect, useState } from "react";
import Link from "next/link";
import LabelPlayground from "@/components/Atomes/Label/LabelPlayground";
import LabelProjects from "@/components/Atomes/Label/LabelProjets";
import Header from "@/components/Molecules/Header";
import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
// import { Player } from "lottie-react";
// import lottieSound from "/assets/lottieSound.json";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
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
      <main
        className={`relative text-black flex justify-center font-extralight w-screen flex-col bg-beige min-h-screen overflow-clip ${
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
            isOpen ? "opacity-10 " : "opacity-100"
          } transition-opacity duration-300 `}
        >
          <div className=" h-[600px] md:h-screen w-screen ">
            <div className="invisible md:visible menca text-white2 font-extralight w-screen md:flex md:flew-row items-center h-[40px]">
              <Header />
            </div>

            <div className=" pt-[290px] md:pt-0 w-screen overflow-clip text-on-top md:h-screen">
              <div className="md:flex flex-col self-center items-center absolute top-[220px] left-[432px]">
                {visibleCursorHome && (
                  <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
                )}
                <div
                  className=""
                  onMouseEnter={() => setIsVisibleCursorHome(true)}
                  onMouseLeave={() => setIsVisibleCursorHome(false)}
                >
                  <div className=" lg:flex flex-row justify-center leading-[76px] font-thin h-[60px] md:h-full">
                    <div className="masky-container h-[80px] pt-[20px]">
                      <span
                        id="cursorStyled"
                        className=" general text-4xl flex justify-center lg:text-[72px] pr-4 md:pr-0 slide-up h-[60px] pl-16 md:pl-0 text-on-top "
                      >
                        Hi ! I am a french artistic
                      </span>
                      <div className="masky"></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center h-[60px] md:h-full">
                    <div className="masky-container md:h-[100px]  ">
                      <span
                        className="general text-4xl flex justify-center lg:text-[72px] lg:pt-10 pr-4 md:pr-0 slide-up h-[120px] text-on-top "
                        id="cursorStyled"
                      >
                        director based in Paris.
                      </span>
                      <div className="masky"></div>
                    </div>
                    <div className="flex flex-col justify-end md:pb-12 h-[30px] md:h-full">
                      <div className="masky-container h-[80px] pb-[100px] ">
                        <span
                          id="cursorStyled"
                          className="general text-4xl flex justify-center lg:text-[72px] lg:pt-8 pr-4 md:pr-0 slide-up h-[180px] "
                        >
                          I am available to work.{" "}
                        </span>
                        <div className="masky"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="anchor-selectedProjects"
                className="bg-beige w-screen h-fit menca absolute bottom-20 left-10 text-sm flex flex-row font-medium	leading-4"
              >
                <div className="text-greyNew pr-8 space-y-2">
                  <div className="">Selected projets</div>
                  {/* <p>2020 -- 2024 </p> */}
                  <div className="flex flex-inline">
                    <div className="">2020</div>
                    <div className=" border flex flex-row"></div>
                    <div>2024</div>
                  </div>
                </div>
                <div className="text-black space-y-2">
                  <p className="">Dweezil Sèche</p>
                  <p>Artistic Direction \ UI \ Motion \ Prompt</p>
                </div>
                {/* <div className="w-24 h-24 text-black ">
                  <Player
                    autoplay
                    loop
                    src={lottieSound}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div id="bar_projects" className="	">
            <div className="pb-[64px] pt-[64px]">
              <BarNaturia label={"( prompt )"} label2={"( midjourney )"} />
            </div>
            <div className="pb-[64px]">
              <BarArgedis label={"( UI )"} label2={"( motion )"} />
            </div>
            <div className="pb-[64px]">
              <BarDecormate
                label={"( UI )"}
                label2={"( DA )"}
                label3={"( branding )"}
                label4={"( prompt )"}
                label5={" ( midjourney )"}
              />
            </div>
            <div className="pb-[64px]">
              <BarEngrenages label={"( DA )"} label2={" ( branding )"} />
            </div>
            <div className="pb-[64px]">
              <BarWE label={"( DA )"} />
            </div>
            <div className="pb-[64px]">
              <BarVerreavin label={"( DA )"} label2={" ( branding )"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
