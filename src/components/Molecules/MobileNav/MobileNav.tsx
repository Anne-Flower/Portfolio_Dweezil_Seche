import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { FC } from "react";
import Contact from "@/components/Atomes/Contact/Contact";
import Lottie from "lottie-react";
import lottieSound from "@/app/assets/lottieSound.json";

type MobileNavProps = {
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

const MobileNav: FC<MobileNavProps> = ({ isOpen, handleToggle, isAbout }) => {
  return (
    <nav className=" xl:hidden relative bg-transparent ">
      <div className="text-3xl cursor-pointer relative md:h-0 ">
        <div
          className={`flex flex-row-reverse py-4 pr-4 pt-6 md:invisible justify-between ${
            isOpen ? "hidden" : "show "
          }`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="icon-size-custom cursor-pointer h-[50px] w-[50px]"
            onClick={handleToggle}
          />
          <div className="text-blacky general md:pt-6 pl-6 flex items-start font-medium text-xl h-20">
            <Link href={"/"}>Dweez</Link>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 left-0 right-0 ${isOpen ? "" : ""}`}>
        <motion.div
          variants={MenuVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="shadow-2xl w-full absolute top-0 right-0 max-w-sm h-screen bg-beige"
        >
          <div
            onClick={handleToggle}
            className="text-4xl top-6 text-2 absolute flex flex-row-reverse justify-between w-screen px-6"
          >
            <FontAwesomeIcon icon={faXmark} className="icon-size-custom" />
            <div className="text-blacky general md:pt-6 flex items-start font-light text-2xl leading-5 h-20 ">
              <Link href={"/"}>Dweez</Link>
            </div>
          </div>
          <div>
            <ul className="menca flex flex-col items-start h-full gap-y-[20px] text-2xl text-blacky font-medium leading-6 cursor-pointer pt-56 pl-6 ">
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

            <div id="footer_mobileNav" className="h-full w-screen ">
              <Link
                target="_blank"
                href={
                  "https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980"
                }
              >
                <div className="w-[18px] h-[13px] text-blacky ">
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
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNav;
