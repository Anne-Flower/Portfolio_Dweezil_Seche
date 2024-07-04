import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import Contact from "@/components/Atomes/Contact/Contact";
import Labels from "@/components/Atomes/Label/Labels";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelClose from "@/components/Atomes/Label/LabelClose";

type MobileNavMdProps = {
  isOpen: boolean;
  handleToggle: () => void;
  isAbout: boolean;
};

const MenuVariants = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.6,
    },
  },
};

const MobileNavMd: FC<MobileNavMdProps> = ({
  isOpen,
  handleToggle,
  isAbout,
}) => {
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
    }
  }, [isOpen]);
  return (
    <nav className="text-black hidden md:block relative">
      <div className="text-3xl cursor-pointer relative md:h-0">
        <div
          className={`text-black flex flex-row-reverse py-4 pr-4  pt-8 ${
            isOpen ? "hidden" : "block"
          }`}
        ></div>
      </div>
      <div className={`fixed top-0 left-0 right-0 ${isOpen ? "fond" : ""}`}>
        <motion.div
          variants={MenuVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="w-full absolute top-0 left-0 right-0 h-[1200px]"
        >
          <div className="text-4xl right-[32px] top-8 text-2 absolute z-50 cursor-pointer ">
            <LabelClose handleToggle={handleToggle} />
          </div>
          <div>
            <ul className="general flex flex-col justify-center items-center h-full gap-y-8 text-8xl	text-black  cursor-pointer pt-16 pr-4 backdrop-blur-[12px]  font-thin	py-52">
              <li onClick={handleToggle}>
                <Link
                  href={"/"}
                  className={`linkMd relative mr-[178px] ${
                    hasOpened ? "activated" : ""
                  }`}
                >
                  <div>
                    <span className="maskMd w-full absolute ">
                      <div className="link-container ">
                        <span className="link-title1Md titleMobileMd h-2 absolute general text-8xl font-thin  slide-up ">
                          Accueil
                        </span>
                        <span className="link-title2Md titleMobileMd h-2 absolute general text-8xl font-thin  ">
                          Accueil
                        </span>
                      </div>
                    </span>
                  </div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link
                  href="/#anchor-selectedProjects"
                  className="linkMd relative mr-40 "
                >
                  <div>
                    <span className="maskMd w-full absolute ">
                      <div className="link-container ">
                        <span className="link-title1Md titleMobileMd h-2 absolute general text-8xl font-thin  ">
                          Projets
                        </span>
                        <span className="link-title2Md titleMobileMd h-2 absolute general text-8xl font-thin  ">
                          Projets
                        </span>
                      </div>
                    </span>
                  </div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link href="/about" className="linkMd relative mr-[264px] ">
                  <div>
                    <span className="maskMd w-full absolute ">
                      <div className="link-container ">
                        <span className="link-title1Md titleMobileMd h-2 absolute general text-8xl font-thin  ">
                          A propos
                        </span>
                        <span className="link-title2Md titleMobileMd h-2 absolute general text-8xl font-thin  ">
                          A propos
                        </span>
                      </div>
                    </span>
                  </div>
                </Link>
              </li>
              <li onClick={handleToggle}>
                <Link
                  href="https://open.spotify.com/playlist/4emduYAbvCpDdqDaGyFrb2?si=d60b00c9ea484980"
                  className="linkMd relative mr-40 mt-4"
                >
                  <div>
                    <span className="maskMd w-full absolute ">
                      <div className="link-container ">
                        <span className="link-title1Md titleMobileMd h-2 absolute general text-8xl font-thin  ">
                          Playlist
                        </span>
                        <span className="link-title2Md titleMobileMd h-2 absolute general text-8xl font-thin  ">
                          Playlist
                        </span>
                      </div>
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="absolute top-[640px] left-[32px]">
              <Contact />
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNavMd;
