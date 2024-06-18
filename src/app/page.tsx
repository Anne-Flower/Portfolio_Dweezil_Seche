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
            <div className="invisible md:visible menca text-white2 font-extralight w-screen md:flex md:flew-row md:">
              <Header />
            </div>

            <div className=" pt-[290px] md:pt-0 w-screen overflow-clip text-on-top md:h-screen ">
              <div className="md:flex flex-col self-center items-center absolute top-[210px] left-[452px]">
                {visibleCursorHome && (
                  <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
                )}
                <div
                  className="cursor-none"
                  onMouseEnter={() => setIsVisibleCursorHome(true)}
                  onMouseLeave={() => setIsVisibleCursorHome(false)}
                >
                  <div className=" lg:flex flex-row justify-center leading-[84.64px] font-thin h-[60px] md:h-full">
                    <div className="masky-container h-[80px] pt-[10px]">
                      <span
                        id="cursorStyled"
                        className=" general text-4xl flex justify-center lg:text-[72px] pr-4 md:pr-0 slide-up h-[60px] pl-16 md:pl-0 text-on-top "
                      >
                        Hi ! I am a french artistic
                      </span>
                      <div className="masky"></div>
                    </div>
                  </div>
                  {/* <div className="lg:flex lg:flex-row justify-end leading-[84.64px] font-thin h-[60px] md:h-full"> */}
                  {/* <div className="masky-container h-[100px] ">
                      <span
                        id="cursorStyled"
                        className="general text-4xl flex justify-end lg:text-[80px] lg:pt-8 pr-4 md:pr-4 slide-up h-[120px] text-on-top "
                      >
                        
                      </span>
                      <div className="masky"></div>
                    </div> */}

                  <div className="flex flex-col justify-center h-[60px] md:h-full">
                    <div className="masky-container md:h-[100px]  ">
                      <span
                        className="general text-4xl flex justify-center lg:text-[72px] lg:pt-8 pr-4 md:pr-0 slide-up h-[120px] text-on-top "
                        id="cursorStyled"
                      >
                        director based in Paris.
                      </span>
                      <div className="masky"></div>
                    </div>
                    <div className="flex flex-col justify-end md:pb-12 h-[30px] md:h-full">
                      <div className="masky-container  h-[80px] pb-[100px] ">
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
                {/* </div> */}
              </div>
              {/* <div className="lg:w-fit pb-40 absolute top-[0px] right-[40px] ">
                <div className="lg:w-fit invisible lg:visible  ">
                <Contact />
                </div>
              </div> */}
            </div>
          </div>
          <div
            id="anchor-selectedProjects"
            className="bg-white2 w-screen text-lime-950 "
          >
            <div className="menca flex flex-row justify-between pr-6 md:pr-8 h-[95px] w-screen bg-white2 font-bold items-center flex-row text-lime-950 md:pl-[24px] md:pr-[40px]  ">
              <h3 className="pl-4">SELECTED PROJECTS</h3>
              <Link href={"/bonus"}>
                <div className="menca px-6 py-4 w-24 h-8 rounded-full bg-white2 text-lime-950 flex items-center flex-end justify-center ring-1 ring-lime-950 hover:bg-lime-950 hover:text-white2 hover:ring-white2 leading-4 ">
                  BONUS
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <BarNaturia label={"Natur.IA"} />
            <BarArgedis label={"Argedis | Regionalis"} />
            <BarEngrenages label="Engrenages" />
            <BarVerreavin label={"Vert à Vin"} />
            <BarWE label={"WE.SH IV"} />
          </div>
        </div>
        <p
          className="menca flex justify-center fond3fix md:pt-[250px] pb-4 md:pb-8 pt-16 w-screen "
          style={{
            opacity: "10px",
            backgroundImage: "url('/assets/img/grain.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          @Copyright | dweezilseche.fr
        </p>
      </main>
    </>
  );
}
