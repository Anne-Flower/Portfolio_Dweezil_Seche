import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { FC } from "react";
import Contact from "@/components/Atomes/Contact/Contact";
import Labels from "@/components/Atomes/Label/Labels";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";

type MobileNavMdProps = {
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

const MobileNavMd: FC<MobileNavMdProps> = ({
  isOpen,
  handleToggle,
  isAbout,
}) => {
  return (
    <nav className="text-white2 hidden relative">
      <div className="text-3xl cursor-pointer relative md:h-0">
        <div
          className={`text-white2 flex flex-row-reverse py-4 pr-4 pt-6 hidden md:visible ${
            isOpen ? "hidden" : "show"
          }`}
        >
          <LabelMenu></LabelMenu>
        </div>
      </div>
      <div className={`fixed top-0 left-0 right-0 ${isOpen ? "fond" : ""}`}>
        <motion.div
          variants={MenuVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="shadow-2xl w-full absolute top-0 max-w-sm h-screen"
        >
          <div
            onClick={handleToggle}
            className="text-4xl left-4 top-2 text-2 absolute"
          >
            <Labels label={"Fermer"}></Labels>
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

export default MobileNavMd;
