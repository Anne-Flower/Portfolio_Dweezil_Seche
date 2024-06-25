import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import Header from "@/components/Molecules/Header";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { log } from "console";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const Naturia = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsOpen2((prev) => !prev);
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

  const Variants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const images_naturia = [
    {
      src: "/assets/imagesV2/naturia/charbon.png",
    },
    {
      src: "/assets/imagesV2/naturia/brownies.png",
    },
    {
      src: "/assets/imagesV2/naturia/chocolat.png",
    },
    {
      src: "/assets/imagesV2/naturia/levure.png",
    },
    {
      src: "/assets/imagesV2/naturia/mousse.png",
    },
    {
      src: "/assets/imagesV2/naturia/bois.png",
    },
    {
      src: "/assets/imagesV2/naturia/chene.png",
    },
    {
      src: "/assets/imagesV2/naturia/litchi.png",
    },
    {
      src: "/assets/imagesV2/naturia/coquille.png",
    },
    {
      src: "/assets/imagesV2/naturia/eau.png",
    },
    {
      src: "/assets/imagesV2/naturia/chardon.png",
    },
    {
      src: "/assets/imagesV2/naturia/mousse.png",
    },
    {
      src: "/assets/imagesV2/naturia/citronelle.png",
    },
    {
      src: "/assets/imagesV2/naturia/lavande.png",
    },
    {
      src: "/assets/imagesV2/naturia/coton.png",
    },
    {
      src: "/assets/imagesV2/naturia/marron.png",
    },
    {
      src: "/assets/imagesV2/naturia/chips.png",
    },
    {
      src: "/assets/imagesV2/naturia/coriandre.png",
    },
    {
      src: "/assets/imagesV2/naturia/olive.png",
    },
    {
      src: "/assets/imagesV2/naturia/sanglier.png",
    },
    {
      src: "/assets/imagesV2/naturia/grenade.png",
    },
    {
      src: "/assets/imagesV2/naturia/coing.png",
    },
    {
      src: "/assets/imagesV2/naturia/chocolat_chaud.png",
    },
    {
      src: "/assets/imagesV2/naturia/kashmir.png",
    },
    {
      src: "/assets/imagesV2/naturia/gouda.png",
    },
    {
      src: "/assets/imagesV2/naturia/chocolat_b.png",
    },
    {
      src: "/assets/imagesV2/naturia/levure2.png",
    },
    {
      src: "/assets/imagesV2/naturia/cornichon.png",
    },
    {
      src: "/assets/imagesV2/naturia/feuille.png",
    },
    {
      src: "/assets/imagesV2/naturia/poisson.png",
    },
    {
      src: "/assets/imagesV2/naturia/graine.png",
    },
    {
      src: "/assets/imagesV2/naturia/conifere.png",
    },
    {
      src: "/assets/imagesV2/naturia/poisson2.png",
    },
    {
      src: "/assets/imagesV2/naturia/ragout.png",
    },
    {
      src: "/assets/imagesV2/naturia/artichaut.png",
    },
    {
      src: "/assets/imagesV2/naturia/asperges.png",
    },
    {
      src: "/assets/imagesV2/naturia/bois2.png",
    },
    {
      src: "/assets/imagesV2/naturia/bacon.png",
    },
    {
      src: "/assets/imagesV2/naturia/eau2.png",
    },
    {
      src: "/assets/imagesV2/naturia/fleur.png",
    },
    {
      src: "/assets/imagesV2/naturia/kaki.png",
    },
    {
      src: "/assets/imagesV2/naturia/gorgonzola.png",
    },
    {
      src: "/assets/imagesV2/naturia/citrus.png",
    },
    {
      src: "/assets/imagesV2/naturia/melon.png",
    },
    {
      src: "/assets/imagesV2/naturia/bubble_gum.png",
    },
    {
      src: "/assets/imagesV2/naturia/petit_pois.png",
    },
    {
      src: "/assets/imagesV2/naturia/savon.png",
    },
    {
      src: "/assets/imagesV2/naturia/abricot.png",
    },
    {
      src: "/assets/imagesV2/naturia/absinthe.png",
    },
    {
      src: "/assets/imagesV2/naturia/myrthilles.png",
    },
    {
      src: "/assets/imagesV2/naturia/agneau.png",
    },
    {
      src: "/assets/imagesV2/naturia/pissenlit.png",
    },
    {
      src: "/assets/imagesV2/naturia/alcool.png",
    },
    {
      src: "/assets/imagesV2/naturia/orange.png",
    },
    {
      src: "/assets/imagesV2/naturia/orange2.png",
    },
    {
      src: "/assets/imagesV2/naturia/pierre.png",
    },
    {
      src: "/assets/imagesV2/naturia/feu.png",
    },
    {
      src: "/assets/imagesV2/naturia/escargot.png",
    },
    {
      src: "/assets/imagesV2/naturia/fleur2.png",
    },
    {
      src: "/assets/imagesV2/naturia/moutarde.png",
    },
    {
      src: "/assets/imagesV2/naturia/lait_caille.png",
    },
    {
      src: "/assets/imagesV2/naturia/algues.png",
    },
    {
      src: "/assets/imagesV2/naturia/menthe.png",
    },
    {
      src: "/assets/imagesV2/naturia/piment.png",
    },
    {
      src: "/assets/imagesV2/naturia/fleur3.png",
    },
    {
      src: "/assets/imagesV2/naturia/cailloux.png",
    },
    {
      src: "/assets/imagesV2/naturia/graines2.png",
    },

    {
      src: "/assets/imagesV2/naturia/baies.png",
    },
    {
      src: "/assets/imagesV2/naturia/fleurs4.png",
    },
    {
      src: "/assets/imagesV2/naturia/brownies.png",
    },
    {
      src: "/assets/imagesV2/naturia/betterave.png",
    },
    {
      src: "/assets/imagesV2/naturia/roquefort.png",
    },
    {
      src: "/assets/imagesV2/naturia/racine.png",
    },
    {
      src: "/assets/imagesV2/naturia/salade.png",
    },
    {
      src: "/assets/imagesV2/naturia/fleurs5.png",
    },
  ];

  return (
    <>
      {visibleCursor && (
        <CustomCursor x={cursorPosition.x} y={cursorPosition.y} />
      )}
      {visibleCursorHome && (
        <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
      )}

      <main
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col fond2 min-h-screen overflow-clip  ${
          isOpen ? "overflow-hidden " : "overflow-clip "
        } `}
      >
        <div className="sticky top-0 z-50  ">
          <MobileNav
            isOpen={isOpen}
            handleToggle={handleToggle}
            isAbout={false}
          />
        </div>
        <div className="sticky top-0 z-50 ">
          <MobileNavMd
            isOpen={isOpen2}
            handleToggle={handleToggle2}
            isAbout={false}
          />
        </div>

        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300`}
        >
          <div className="bg-beige text-black  overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0 ">
            <div className="absolute top-[0px] invisible md:visible flex justify-between w-screen ">
              <Header />
            </div>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex text-black  w-screen justify-center ">
                <div className="md:w-[218px] flex flex-col ">
                  <h1 className="general font-thin	text-[72px]  leading-[76px] md:pt-52 pt-4 ">
                    NaturIA
                  </h1>
                  <div className="menca font-medium	 text-sm	leading-4	flex flex-col items-end pt-28">
                    <p>2024</p>
                    <p>prompt, midjourney</p>
                    <p>studio artefact 3000</p>
                  </div>
                </div>
                <p className="menca md:w-[415px] md:h-[240px]  md:pt-52 pt-4  font-medium	text-base	leading-5	ml-40">
                  Natur.IA is a project I worked on during my work-study year at
                  Studio Artefact 3000. The studio had developed a dashboard for
                  this client, enabling them to create fragrances from over 900
                  different aromas. So we had to find a solution to illustrate
                  them. To do this, we decided to use artificial intelligence.
                  We first chose an artistic direction for the visuals. This
                  enabled me to create a prompt which I then used in Midjourney.
                  The prompt was created so that I could change only the word
                  that corresponded to the aroma I wanted to represent. When the
                  AI didn't understand what I wanted to have, I gave it a
                  reference image at the beginning of the prompt. It taught me a
                  lot about how to use AI, and how to create precise prompts.
                </p>
              </div>
            </div>
          </div>
          <div
            id="img_naturia"
            className="bg-beige px-[40px] grid grid-cols-5 gap-4 pt-40"
          >
            {images_naturia.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Naturia ${index}`}
                className="w-[263px] h-[80px] "
              />
            ))}
          </div>
          <div className="general font-thin	text-[40px] leading-[60px] text-black bg-beige flex justify-end pr-10 pt-10">
            and 800 more...
          </div>
        </div>
      </main>
    </>
  );
};

export default Naturia;
