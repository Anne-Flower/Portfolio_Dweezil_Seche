import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { FC } from "react";
import Contact from "@/components/Atomes/Contact/Contact";
import Labels from "@/components/Atomes/Label/Labels";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";

type MenuProps = {
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

const Menu: FC<MenuProps> = ({ isOpen, handleToggle, isAbout }) => {
  return (
    <main className="h-screen w-screen fond">
      <ul className="general flex flex-col justify-end items-end h-full gap-y-2 text-4xl text-white2 font-extralight cursor-pointer pt-24 pr-4">
        <li onClick={handleToggle}>
          <Link href="/">
            <div>Projets</div>
          </Link>
        </li>
        <li onClick={handleToggle}>
          <Link href="/about" className={`${isAbout ? "hidden" : "visible"}`}>
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
    </main>
  );
};

export default Menu;
