import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { FC } from "react";
import Contact from "@/components/Atomes/Contact/Contact";

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
    <nav className="text-white2 xl:hidden relative">
      <div className="text-3xl cursor-pointer relative lg:h-0">
        <div
          className={`text-white2 flex flex-row-reverse py-4 pr-4 pt-6 lg:invisible ${
            isOpen ? "hidden" : "show"
          }`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="icon-size-custom cursor-pointer text-white2 h-[50px] w-[50px]"
            onClick={handleToggle}
          />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 ${isOpen ? "bg-lime-950" : ""}`}
      >
        <motion.div
          variants={MenuVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="shadow-2xl w-full absolute top-0 right-0 max-w-sm h-screen"
        >
          <div
            onClick={handleToggle}
            className="text-4xl right-4 top-2 text-2 absolute"
          >
            <FontAwesomeIcon icon={faXmark} className="icon-size-custom" />
          </div>
          <div>
            <ul className="general flex flex-col justify-end items-end h-full gap-y-2 text-4xl text-white2 font-extralight cursor-pointer pt-24 pr-4">
              <li onClick={handleToggle}>
                <Link href="/">
                  <div>Projets</div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link
                  href="/about"
                  className={`${isAbout ? "hidden" : "visible"}`}
                >
                  <div>A propos</div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link href="/playlist">
                  <div>Ma playlist</div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link href="/" className={`${isAbout ? "visible" : "hidden"}`}>
                  <div>Acceuil</div>
                </Link>
              </li>
            </ul>
            <div className="pt-72">
              <Contact />
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNav;
