import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";
import Lottie from "lottie-react";
import lottieSound from "@/app/assets/lottieSound.json";
import ContactMobileNav from "@/components/Atomes/Contact/ContactMobileNav";

type MobileNavEngrenagesProps = {
  isOpen: boolean;
  handleToggle: () => void;
  isAbout: boolean;
};

const MenuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -2.05, 0.9],
    },
  },
};

const MobileNavEngrenages: FC<MobileNavEngrenagesProps> = ({
  isOpen,
  handleToggle,
  isAbout,
}) => {
  return (
    <nav className=" xl:hidden relative bg-transparent ">
      <div className="text-3xl cursor-pointer relative md:h-0 flex h-10 items-center ">
        <div
          className={`flex flex-row-reverse py-4 pr-4 pt-6  justify-between ${
            isOpen ? "hidden" : "show "
          }`}
        >
          <img
            src="/assets/imagesV2/icones/burger.svg"
            className="icon-size-custom cursor-pointer h-[50px] w-[50px] absolute top-5 text-beige"
            onClick={handleToggle}
            alt="menu à ouvrir"
          />
          <div className="text-beige general md:pt-6 pl-6 flex items-start font-medium text-xl h-0 md:h-20 pr-[270px] md:pr-0">
            <Link href={"/"}>Dweez</Link>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 left-0 right-0 ${isOpen ? "" : ""}`}>
        <motion.div
          variants={MenuVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className=" w-full absolute top-0 right-0 max-w-sm h-screen bg-beige"
        >
          <div
            onClick={handleToggle}
            className="text-4xl top-0 text-2 absolute flex flex-row-reverse justify-between w-screen px-6"
          >
            <img src="/assets/imagesV2/icones/croix.svg" alt="cross, close" />
            <div className="text-blacky general md:pt-6 flex items-start font-light text-2xl leading-5 h-20 pt-8">
              <Link href={"/"}>Dweez</Link>
            </div>
          </div>
          <div>
            <ul className="menca flex flex-col items-start h-full gap-y-[20px] text-2xl text-blacky font-medium leading-6 cursor-pointer pt-48 pl-6 ">
              <li onClick={handleToggle}>
                <Link href="/">
                  <div>HOME</div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link href="/#anchor-selectedProjects">
                  <div>PROJECTS</div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link
                  href="/about"
                  className={`${isAbout ? "hidden" : "visible"}`}
                >
                  <div>ABOUT</div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link href="/playground">
                  <div>PLAYGROUND</div>
                </Link>
              </li>
            </ul>
            {/* <div className="pl-6 md:pl-0">
              <Contact />
            </div> */}

            <div id="footer_mobileNav" className="h-full w-screen">
              <div className="pl-6 pt-12">
                <ContactMobileNav />
              </div>
              <div className="pt-28 flex justify-center">
                {" "}
                <Link
                  target="_blank"
                  href={
                    "https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980"
                  }
                >
                  <div className="w-[18px] h-[13px]">
                    <Lottie
                      autoplay
                      loop
                      animationData={lottieSound}
                      renderer="svg"
                    />
                  </div>
                </Link>
              </div>
              <div className="menca text-blacky px-6 h-fit w-screen flex flex-col items-center font-medium text-sm leading-4 pb-8 visible md:hidden pt-10">
                <div>Designed by Dweezil Sèche</div>
                <div>Coded by Anne-Flore Bernard</div>
              </div>

              <div className="menca text-blacky px-10 h-fit w-screen flex justify-between font-medium text-sm leading-4 pb-10 hidden md:visible">
                <div>Designed by Dweezil Sèche</div>
                <div>Coded by Anne-Flore Bernard</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNavEngrenages;
