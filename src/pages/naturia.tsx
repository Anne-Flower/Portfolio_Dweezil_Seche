import { useCustomCursor } from "@/app/context/customCursorContext";
import CursorStyle from "@/components/Atomes/Cursor/CursorStyle/cursorStyle";
import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
import BarEngrenages from "@/components/Molecules/Bar/Bar_engrenages";
import BarVerreavin from "@/components/Molecules/Bar/Bar_verreavin";
import BarWE from "@/components/Molecules/Bar/Bar_we";
import Footer from "@/components/Molecules/Footer/Footer";
import HeaderProjects from "@/components/Molecules/Header/HeaderProjets";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { Variants, motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

type naturiaProps = {};

const Naturia: React.FC<naturiaProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const { setCursorStyle } = useCustomCursor();
  const [visibleCursor, setVisibleCursor] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsOpen2((prev) => !prev);
  };

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     setCursorPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setVisibleCursor(true);
    };

    const handleMouseLeave = () => {
      setVisibleCursor(false);
    };

    const targetElement = document.getElementById("naturia");
    if (targetElement) {
      targetElement.addEventListener("mouseenter", handleMouseEnter);
      targetElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (targetElement) {
        targetElement.removeEventListener("mouseenter", handleMouseEnter);
        targetElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const Variants: Variants = {
    offscreen: {
      y: 0,
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
      {visibleCursor && <CursorStyle />}

      <main
        className={`relative flex justify-center font-extralight w-screen flex-col min-h-screen overflow-clip  ${
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
          <div className="absolute top-[0px] invisible md:visible flex justify-between w-screen ">
            <HeaderProjects />
          </div>
        </div>

        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300`}
        >
          <div className=" bg-beige text-black overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0 h-full">
            <div
              className="cursor-none"
              onMouseEnter={() => setVisibleCursor(true)}
              onMouseLeave={() => setVisibleCursor(false)}
            >
              <div className="flex text-black w-screen md:pl-[160px] flex-col md:flex-row h-[494px] md:h-full px-5">
                <div className="md:w-[358px] flex flex-col ">
                  <h1 className="general font-thin text-[40px] md:text-[72px] leading-[76px] md:pt-52 pt-20 flex md:justify-end justify-start ">
                    Natur.IA
                  </h1>
                  <div className="menca font-medium	text-sm	leading-4	flex flex-col items-start md:items-end pt-8 md:pt-20 md:h-[60px] space-y-1.5 pb-10 md:pb-0">
                    <p>2024</p>
                    <p>PROMPT, MIDJOURNEY</p>
                    <p>STUDIO ARTEFACT 3000</p>
                  </div>
                </div>
                <p className="menca md:w-[415px] md:h-[240px] md:pt-52 pt-4  md:ml-52 font-medium	text-base	leading-5 cursor-none	">
                  Natur.IA is a project I worked on during my work-study year at
                  Studio Artefact 3000. The studio had developed a dashboard for
                  this client, enabling them to create fragrances from over 900
                  different aromas. So we had to find a solution to illustrate
                  them. To do this, we decided to use artificial intelligence.
                  We first chose an artistic direction for the visuals. This
                  enabled me to create a prompt which I then used in Midjourney.
                  The prompt was created so that I could change only the word
                  that corresponded to the aroma I wanted to represent. When the
                  AI didn&apos; t understand what I wanted to have, I gave it a
                  reference image at the beginning of the prompt. It taught me a
                  lot about how to use AI, and how to create precise prompts.
                </p>
              </div>

              <div
                id="img_naturia"
                className="bg-beige px-2 md:px-[40px] grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-4 md:pt-60 pt-[220px]"
              >
                {images_naturia.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={`Naturia ${index}`}
                    className=" h-[34] md:h-[80px] w-[111px] md:w-[263px]"
                  />
                ))}
              </div>
              <div className="general font-thin	text-[20px] flex justify-end pr-4 leading-[60px] text-black bg-beige md:hidden visible h-12 w-screen">
                and 800 more...
              </div>
            </div>
            <div className="general font-thin	text-[40px] leading-[60px] text-black bg-beige flex justify-end md:pr-10 pt-10 pb-[1700px] md:pb-0 h- md:h-full invisible">
              and 800 more...
            </div>
            <div className="pb-[64px] bg-beige text-black pt-[110px] md:pt-[260px]">
              <BarArgedis label={"( UI )"} label2={"( motion )"} />
            </div>
            <div className="pb-[64px] bg-beige text-black">
              <BarDecormate
                label={"( UI )"}
                label2={"( DA )"}
                label3={"( branding )"}
                label4={"( prompt )"}
                label5={" ( midjourney )"}
              />
            </div>
            <div className="pb-[64px] bg-beige text-black">
              <BarEngrenages label={"( DA )"} label2={" ( branding )"} />
            </div>
            <div className="pb-[64px] bg-beige text-black">
              <BarWE label={"( DA )"} />
            </div>
            <div className="bg-beige text-black pb-20 md:pb-60">
              <BarVerreavin label={"( DA )"} label2={" ( branding )"} />
            </div>{" "}
            <div className="visible w-screen text-black relative bottom-0">
              <Footer />
            </div>
          </div>
          <div className="hidden md:visible">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Naturia;
