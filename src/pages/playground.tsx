import Footer from "@/components/Molecules/Footer/Footer";
import Header from "@/components/Molecules/Header/headerHome";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import lottieSound from "@/app/assets/lottieSound.json";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import CustomCursorPlayground from "@/components/Atomes/Cursor/CustomCursorPlayground";

const Playground = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPlayground = [
    {
      src: "/assets/imagesV2/hover_playground/3D_1.png",
      width: 100,
      height: 100,
    },
    {
      src: "/assets/imagesV2/hover_playground/3D_2.png",
      width: 100,
      height: 100,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img_playground.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(interval);
    // destroy
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsOpen2((prev) => !prev);
  };

  const [visibleCursorPlayground, setIsVisibleCursorPlayground] =
    useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const img_playground = [
    {
      src: "/assets/imagesV2/hover_playground/3D_1.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/3D_2.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/artefact_voeux.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/bluedot.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/chemaly1.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/chemaly2.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/dessinwesh.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/madj_1.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/meal.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/monogram1.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/monogram2.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/monogram3.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/tournesol1.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/tournesol3.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/zigzag1.png",
    },
    {
      src: "/assets/imagesV2/hover_playground/zigzag2.png",
    },
  ];

  return (
    <div
      className={`relative text-black flex justify-center font-extralight w-full flex-col min-h-screen overflow-clip bg-beige ${
        isOpen ? "overflow-hidden" : "overflow-clip"
      } `}
    >
      <div className="sticky top-0 z-50 ">
        <MobileNav
          isOpen={isOpen}
          handleToggle={handleToggle}
          isAbout={false}
        />
        <div className="bg-beige md:w-screen md:h-screen h-fit w-[1040px] ">
          <div>
            <Header />
          </div>
          <div className=" sticky top-0 z-50 ">
      
          {visibleCursorPlayground && (
            <CustomCursorPlayground x={cursorPosition.x} y={cursorPosition.y} />
          )}
          <div
            className=""
            onMouseEnter={() => setIsVisibleCursorPlayground(true)}
            onMouseLeave={() => setIsVisibleCursorPlayground(false)}
          >
            <h1
              className="general font-thin text-[40px] md:text-[72px] leading-[76px] md:pt-72 pt-4 flex justify-center w-screen pb-6 md:mb-0 "
              id="cursorStyled"
            >
              Playground
            </h1>

            <div className="visible md:hidden w-screen h-[359px] w-screen pt-[10px] object-cover flex justify-center">
              <img
                src={img_playground[currentIndex].src}
                alt=""
                className="h-[359px] w-screen flex object-cover"
              />
            </div>

          </div>
            <div className="bg-beige w-screen h-fit menca md:absolute md:top-[690px] md:left-10 text-sm flex flex-row justify-center md:justify-start font-medium leading-4 pt-20 md:pt-0">
              <div className="text-greyNew pr-4 md:pr-8 space-y-2">
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
                <div className="w-[18px] h-[13px] text-black absolute right-20 bottom-0 md:visible invisible ">
                  <Lottie
                    autoplay
                    loop
                    animationData={lottieSound}
                    renderer="svg"
                  />
                </div>
              </Link>
            </div>
          <div className="visible md:hidden pt-10 md:pt-0">
            <Footer />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Playground;
