import { imagesH1 } from "@/app/constant/constant";
import React, { FC, useEffect, useState } from "react";
import { createContext, useContext } from "react";

type CursorHomeProps = {
  x: number;
  y: number;
};

const CustomCursorHomeContext = createContext(false);

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
    <>
      {isStyled ? (
        <div className="cursor-auto text-black "></div>
      ) : (
        <div
          className="fixed z-10"
          style={{
            left: `${x - randomImage.width / 100}px`,
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
