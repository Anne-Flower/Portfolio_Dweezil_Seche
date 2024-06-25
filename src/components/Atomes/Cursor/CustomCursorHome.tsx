import { imagesH1 } from "@/app/constant/constant";
import React, { FC, useEffect, useState } from "react";

type CursorHomeProps = {
  x: number;
  y: number;
};

//

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imagesH1.length);
  return imagesH1[randomIndex];
};

const CustomCursorHome: FC<CursorHomeProps> = ({ x, y }) => {
  const [isStyled, setIsStyled] = useState(false);
  const [randomImage, setRandomImage] = useState(getRandomImage());
  const [lastChangeTime, setLastChangeTime] = useState<number>(Date.now());

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as HTMLElement).id === "cursorStyled") {
        setIsStyled(false);
        document.body.style.cursor = "none";
        const now = Date.now();
        if (now - lastChangeTime > 400) {
          setRandomImage(getRandomImage());
          setLastChangeTime(now);
        }
      } else {
        setIsStyled(true);
        document.body.style.cursor = "default";
      }
    };

    window.addEventListener("mousemove", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseOver);
      document.body.style.cursor = "default";
    };
  }, [lastChangeTime]);

  return (
    // <div
    //   className="backdrop-blur-[3px] fixed w-24 h-24 rounded-full ring-[0.5px] ring-greyRingCursor pointer-events-none z-50 text-white2 bg-white2 bg-opacity-[1px]
    //   px-5 py-8"
    //   style={{ top: y - 40, left: x - 40 }}
    // >
    //   <p className="menca font-medium leading-[16.8px] text-sm flex justify-center items-center">
    //     Scroll
    //   </p>
    //   <p className="menca font-medium leading-[16.8px] text-sm flex justify-center items-center">
    //     down
    //   </p>
    // </div>

    //   <div
    //     className={` fixed rounded-full pointer-events-none z-50 transition-transform duration-300 ease-in-out ring-greyRingCursor bg-opacity-[1px] ${
    //       isStyled ? "w-24 h-24" : "bibi"
    //     }`}
    //     style={{
    //       left: `${x - (isStyled ? 12 : 3)}px`,
    //       top: `${y - (isStyled ? 12 : 3)}px`,
    //       backdropFilter: "blur(3px)",
    //       backgroundColor: "",
    //       boxShadow: `0 0 0 0.5px #D9D9D9`,
    //       opacity: "1",
    //       color: "#F8F7F0",
    //       padding: isStyled ? "2rem" : "0",
    //     }}
    //   >

    <>
      {isStyled ? (
        <div
          className="cursor-auto text-black "
          // style={{
          //   left: `${x - 0}px`,
          //   top: `${y - 0}px`,
          //   backdropFilter: "blur(3px)",
          //   backgroundColor: "#",
          //   boxShadow: `0 0 0 0.5px #D9D9D9`,
          //   opacity: "1",
          //   color: "#F8F7F0",
          //   padding: "2rem",
          //   zIndex: "10",
          // }}
        >
          {/* <p className="menca font-medium leading-[16.8px] text-sm flex justify-center items-center">
            Scroll
          </p>
          <p className="menca font-medium leading-[16.8px] text-sm flex justify-center items-center">
            down
          </p> */}
        </div>
      ) : (
        <div
          className="fixed z-10"
          style={{
            left: `${x - randomImage.width / 0}px`,
            top: `${y - randomImage.height / 0}px`,
            transition: "transform 1s ease-in-out",
          }}
        >
          <img
            src={randomImage.src}
            alt="random"
            className="boogieImg"
            style={{
              width: `${randomImage.width}px`,
              height: `${randomImage.height}px`,
              zIndex: 10,
            }}
          />
        </div>
      )}
    </>
  );
};

export default CustomCursorHome;
