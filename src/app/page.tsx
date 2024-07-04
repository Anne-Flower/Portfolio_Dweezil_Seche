"use client";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";

import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarEngrenages from "@/components/Molecules/Bar/Bar_engrenages";
import BarNaturia from "@/components/Molecules/Bar/Bar_naturia";
import BarVerreavin from "@/components/Molecules/Bar/Bar_verreavin";
import BarWE from "@/components/Molecules/Bar/Bar_we";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import { useEffect, useState } from "react";
import Link from "next/link";

import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
import Footer from "@/components/Molecules/Footer/Footer";
import Lottie from "lottie-react";
import lottieSound from "@/app/assets/lottieSound.json";
import Header from "@/components/Molecules/Header/headerHome";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(interval);
    // destroy
  }, []);

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

  const img = [
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img1.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img2.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img3.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img4.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img5.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img6.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img7.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img8.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img9.png",
    },
    {
      src: "/assets/imagesV2/img_caroussel/caroussel/img10.png",
    },
  ];

  return (
    <>
      <main
        className={`relative text-black flex justify-center font-extralight w-screen flex-col bg-beige min-h-screen overflow-clip ${
          isOpen ? "overflow-hidden " : "overflow-clip "
        } `}
      >
        <div className="hidden md:visible menca text-black font-extralight w-screen md:flex md:flew-row items-center h-full">
          <Header />
        </div>
        <div className=" sticky top-0 z-50 md:hidden">
          <MobileNav
            isOpen={isOpen}
            handleToggle={handleToggle}
            isAbout={false}
          />
        </div>
        <div className=" sticky top-0 z-50 ">
          <MobileNavMd
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
          <div className=" h-[500px] md:h-screen w-screen ">
            <div className="w-screen h-[168px] px-[24px] md:pt-20 pt-24 visible md:hidden">
              <div className="general font-thin	text-[36px] leading-10">
                Hi ! I am a french{" "}
              </div>
              <div className="general font-thin	text-[36px] leading-10">
                artistic director based
              </div>
              <div className="general font-thin	text-[36px] leading-10">
                in Paris.
              </div>
              <div className="general font-thin	text-[36px] leading-10 ">
                I am available to work.
              </div>
            </div>
            <div className="visible md:hidden w-screen h-[359px] cover fit-content pt-[120px]">
              <img
                src={img[currentIndex].src}
                alt=""
                className=" h-[359px] object-cover"
              />
            </div>
            <div className=" pt-[299px] md:pt-0 w-screen overflow-clip md:h-screen relative">
              <div className="md:flex flex-col self-center items-center absolute top-[200px] left-[432px] hidden md:visible">
                {visibleCursorHome && (
                  <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
                )}
                <div
                  className=""
                  onMouseEnter={() => setIsVisibleCursorHome(true)}
                  onMouseLeave={() => setIsVisibleCursorHome(false)}
                >
                  <div id="cursorStyled" className="h-full w-full">
                    <div className=" lg:flex flex-row justify-center leading-[76px] font-thin h-[40px] md:h-full ">
                      <div className="masky-container h-[80px] pt-[26px]">
                        <span
                          className=" general text-4xl flex justify-center lg:text-[72px] pr-4 md:pr-0 slide-up h-[40px] pl-16 md:pl-0 ease-in-out duration-1000 text-on-top"
                          id="cursorStyled"
                        >
                          Hi ! I am a french artistic
                        </span>
                        <div className="masky"></div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center h-[30px] md:h-full ">
                      <div className="masky-container md:h-[100px] pt-[6px] ">
                        <span
                          className="general text-4xl flex justify-center lg:text-[72px] lg:pt-6 pr-4 md:pr-0 slide-up h-[80px] ease-in-out duration-1000 text-on-top"
                          id="cursorStyled"
                        >
                          director based in Paris.
                        </span>
                        <div className="masky"></div>
                      </div>
                      <div className="flex flex-col justify-end md:pb-12 h-[30px] md:h-full">
                        <div className="masky-container h-[80px] pb-[100px] pt-[4px] ">
                          <span
                            id="cursorStyled"
                            className="general text-4xl flex justify-center lg:text-[72px] lg:pt-3 pr-4 md:pr-0 slide-up h-[120px] ease-in-out duration-1000 "
                          >
                            I am available to work.{" "}
                          </span>
                          <div className="masky"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-beige w-screen h-fit menca absolute bottom-28 md:bottom-20 left-4 md:left-10 text-sm flex flex-row font-medium leading-4">
                <div className="text-greyNew pr-8 space-y-2">
                  <div className="">Selected projets</div>
                  <div className="flex flex-inline ">
                    <div className="pr-2">2020</div>
                    <div className=" border-b h-[10px] w-4 "></div>
                    <div className="pl-2">2024</div>
                  </div>
                </div>
                <div className="text-black space-y-2">
                  <p className="">Dweezil Sèche</p>
                  <p>Artistic Direction \ UI \ Motion \ Prompt</p>
                </div>
                <Link
                  target="_blank"
                  href={
                    "https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980"
                  }
                >
                  <div className="w-[18px] h-[13px] text-black absolute right-20 bottom-0 invisible md:visible">
                    <Lottie
                      autoplay
                      loop
                      animationData={lottieSound}
                      renderer="svg"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-40 md:pt-0">
            <div
              className="md:pb-[64px] pb-10 md:pt-[64px] pt-[130px]"
              id="anchor-selectedProjects"
            >
              <BarNaturia label={"( prompt )"} label2={"( midjourney )"} />
            </div>
            <div className="md:pb-[64px] pb-10">
              <BarArgedis label={"( UI )"} label2={"( motion )"} />
            </div>
            <div className="md:pb-[64px] pb-10">
              <BarDecormate
                label={"( UI )"}
                label2={"( DA )"}
                label3={"( branding )"}
                label4={"( prompt )"}
                label5={" ( midjourney )"}
              />
            </div>
            <div className="md:pb-[64px] pb-10">
              <BarEngrenages label={"( DA )"} label2={" ( branding )"} />
            </div>
            <div className="md:pb-[64px] pb-10">
              <BarWE label={"( DA )"} />
            </div>
            <div className="md:pb-[64px] pb-10">
              <BarVerreavin label={"( DA )"} label2={" ( branding )"} />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
