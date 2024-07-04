import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import BarArgedis from "@/components/Molecules/Bar/Bar_argedis";
import BarDecormate from "@/components/Molecules/Bar/Bar_decormate";
import BarEngrenages from "@/components/Molecules/Bar/Bar_engrenages";
import BarNaturia from "@/components/Molecules/Bar/Bar_naturia";
import BarVerreavin from "@/components/Molecules/Bar/Bar_verreavin";
import Footer from "@/components/Molecules/Footer/Footer";
import HeaderProjects from "@/components/Molecules/Header/HeaderProjets";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import MobileNavMd from "@/components/Molecules/MobileNav/MobileNavMd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const We = () => {
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

  const images_we = [
    {
      src: "/assets/imagesV2/wesh/cover_wesh.png",
    },
    {
      src: "/assets/imagesV2/wesh/charte.png",
    },
    {
      src: "/assets/imagesV2/wesh/icono.png",
    },
    {
      src: "/assets/imagesV2/wesh/icono.png",
    },
    {
      src: "/assets/imagesV2/wesh/RS_wesh.png",
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
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col min-h-screen overflow-clip  ${
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
          } transition-opacity duration-300 `}
        >
          <div className="bg-beige md:w-screen md:h-[620px] md:min-w-[684px] overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0">
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex text-black w-screen md:pl-[160px] flex-col md:flex-row h-[494px] md:h-full px-5">
                <div className="md:w-[358px] flex flex-col ">
                  <h1 className="general font-thin text-[40px] md:text-[72px] leading-[76px] md:pt-52 pt-20 flex md:justify-end justify-start">
                    WE.SH. IV
                  </h1>
                  <div className="menca font-medium	text-sm	leading-4	flex flex-col items-start md:items-end pt-8 md:pt-20 md:h-[60px] space-y-1.5">
                    <p>2023</p>
                    <p>DA</p>
                    <p>WE ARE SHINY</p>
                  </div>
                </div>
                <div className="flex flex-col h-[245px] w-[345px] md:w-[415px] md:ml-52 pt-16 md:pt-0">
                  <p className="menca md:w-[415px] md:pt-52 pt-4 font-medium text-base leading-5">
                    WE.SH. for &quot;Weekend Shiny&quot; is a small festival
                    organized by friends over a weekend, every year for the past
                    4 years. Like every year, the organization is very well
                    done, and several people are involved, including the
                    communications team to which I belong, along with two other
                    equally talented people: Justine Faustino and Mathilde
                    Florance.
                  </p>
                  <p className="menca md:w-[415px] font-medium	text-base	leading-5	">
                    That year, We chose a very colorful artistic direction with
                    lots of little illustrations. Among other things, we were
                    inspired by the famous Pete The Monkey festival. Once
                    we&apos;d drawn up the graphic charter, we were able to use
                    it in a variety of ways, such as on bracelets, visuals for
                    social networks, the timetable, DJ announcements, etc...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex visible md:invisible mb-6 pt-40">
              <motion.div
                className=" md:h-[1065px] bg-beige "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img
                  src="/assets/imagesV2/wesh/charte_hover_homy.png"
                  alt="image wesh"
                />
              </motion.div>
            </div>
          </div>

          <div className="md:visible invisible bg-beige">
            <motion.div
              className=" md:h-[1065px] bg-beige "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <img
                src="/assets/imagesV2/wesh/charte_hover_homy.png"
                alt="image wesh"
              />
            </motion.div>
          </div>

          <div id="img_wesh" className="bg-beige md:pt-10 pt-[710px]">
            {images_we.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Wesh ${index}`}
                className="w-full h-[194px] md:h-[727px] px-6 md:px-10 py-4 md:py-6"
              />
            ))}
          </div>

          <div className="pb-[64px] bg-beige text-black pt-[110px] md:pt-[260px]">
            <BarVerreavin label={"( DA )"} label2={" ( branding )"} />
          </div>
        </div>
        <div className="pb-[64px] bg-beige text-blacky">
          <BarNaturia label={"( prompt )"} label2={"( midjourney )"} />
        </div>
        <div className="pb-[64px] bg-beige text-blacky">
          <BarArgedis label={"( UI )"} label2={"( motion )"} />
        </div>
        <div className="pb-[64px] bg-beige text-blacky">
          <BarDecormate
            label={"( UI )"}
            label2={"( DA )"}
            label3={"( branding )"}
            label4={"( prompt )"}
            label5={"( midjourney )"}
          />
        </div>
        <div className="pb-[64px] bg-beige text-blacky pb-56">
          <BarEngrenages label={"( DA )"} label2={" ( branding )"} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default We;
