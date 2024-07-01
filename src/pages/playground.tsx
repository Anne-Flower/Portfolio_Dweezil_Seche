import Footer from "@/components/Molecules/Footer/Footer";
import Header from "@/components/Molecules/Header/headerHome";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import lottieSound from "@/app/assets/lottieSound.json";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";

const playground = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const img_playground = [
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
    <div
      className={`relative text-black flex justify-center font-extralight w-screen flex-col min-h-screen overflow-clip bg-beige ${
        isOpen ? "overflow-hidden" : "overflow-clip"
      } `}
    >
      <div className="sticky top-0 z-50 ">
        <MobileNav
          isOpen={isOpen}
          handleToggle={handleToggle}
          isAbout={false}
        />
        <div className="bg-beige md:w-screen md:h-screen h-fit w-[1040px]">
          <div>
            <Header />
          </div>

          <h1 className="general font-thin text-[40px] md:text-[72px] leading-[76px] md:pt-72 pt-4 flex justify-center w-screen pb-6 md:mb-0">
            Playground
          </h1>

          <div className="visible md:hidden w-screen h-[359px] cover fit-content pt-[120px]">
            <img
              src={img_playground[currentIndex].src}
              alt=""
              className=" h-[359px]"
            />
          </div>

          <div className="bg-beige w-screen h-fit menca md:absolute md:bottom-10 md:left-10 text-sm flex flex-row justify-center md:justify-start font-medium leading-4 pt-40 md:pt-0">
            <div className="text-greyNew pr-4 md:pr-8 space-y-2">
              <div className="">Selected projets</div>
              {/* <p>2020 -- 2024 </p> */}
              <div className="flex flex-inline ">
                <div className="">2020</div>
                <div className=" border flex flex-row"></div>
                <div>2024</div>
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
          <div className="visible md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default playground;
