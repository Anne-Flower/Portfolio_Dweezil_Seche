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
      {visibleCursorHome && (
        <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
      )}
      <main
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col fond  min-h-screen overflow-clip  ${
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
          style={{
            opacity: "10px",
            backgroundImage: "url('/assets/img/grain.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            animation: "none",
          }}
        >
          <div
            className={`${
              isOpen ? "opacity-10 " : "opacity-100"
            } transition-opacity duration-300 `}
          >
            <div className=" h-[600px] md:h-screen w-screen ">
              <div className="absolute md:top-[32px] invisible md:visible menca text-white2 font-extralight flex justify-between w-screen px-[42px]">
                <LabelAbout />
                <div className=" ">
                  {" "}
                  <LabelPlaylist />
                </div>
              </div>

              <div
                className="cursor-none "
                onMouseEnter={() => setIsVisibleCursorHome(true)}
                onMouseLeave={() => setIsVisibleCursorHome(false)}
              >
                <div className="md:py-[128px] md:pt-[320px] lg:pr-[42px] pt-[290px] w-screen overflow-clip">
                  <div className="lg:flex flex-row justify-end leading-[84.64px] font-thin h-[60px] md:h-full">
                    <div className="masky-container h-[80px] pt-[10px]">
                      <span className="  general text-4xl flex justify-end lg:text-[80px] pr-4 md:pr-4 slide-up h-[60px] pl-16 md:pl-0">
                        Je m’appelle
                      </span>
                      <div className="masky"></div>
                    </div>
                    <div className="masky-container h-[80px] pt-[10px]">
                      <span className="general text-4xl flex justify-end lg:text-[80px] pr-4 md:pr-0 slide-up h-[60px]">
                        Dweezil.
                      </span>
                      <div className="masky"></div>
                    </div>
                  </div>
                  <div className="lg:flex lg:flex-row justify-end leading-[84.64px] font-thin h-[60px] md:h-full">
                    <div className="masky-container h-[100px] ">
                      <span className="general text-4xl flex justify-end lg:text-[80px] lg:pt-8 pr-4 md:pr-4 slide-up h-[120px]">
                        Je suis
                      </span>
                      <div className="masky"></div>
                    </div>

                    <div className="flex flex-col justify-end h-[60px] md:h-full">
                      <div className="masky-container md:h-[100px]  ">
                        <span className="general text-4xl flex justify-end lg:text-[80px] lg:pt-8 pr-4 md:pr-0 slide-up h-[120px]">
                          directeur artistique,
                        </span>
                        <div className="masky"></div>
                      </div>
                      <div className="flex flex-col justify-end md:pb-12 h-[30px] md:h-full">
                        <div className="masky-container  h-[80px] pb-[100px] ">
                          <span className="general text-4xl flex justify-end lg:text-[80px] lg:pt-8 pr-4 md:pr-0 slide-up h-[180px] ">
                            basé à Paris.
                          </span>
                          <div className="masky"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end md:pb-12">
                    <div className="masky-container  h-[80px] pb-[100px] ">
                      <p className="menca font-medium leading-4 text-base opacity-30 flex justify-end  lg:text-lg pt-16 pr-4 md:pr-0 slide-up h-[240px] ">
                        PORTFOLIO 2024 | 100% fait main (au Mexique)...
                      </p>
                      <div className="masky"></div>
                    </div>{" "}
                  </div>
                </div>
                <div className="lg:w-[300px] pb-40 absolute top-[578px] left-[42px] ">
                  <div className="lg:w-[300px] invisible lg:visible lg:pt-12 ">
                    <Contact />
                  </div>
                </div>
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
        </div>
      </main>
    </>
  );
}
