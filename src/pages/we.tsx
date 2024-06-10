import CustomCursor from "@/components/Atomes/Cursor/CustomCursor";
import CustomCursorHome from "@/components/Atomes/Cursor/CustomCursorHome";
import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelMenu from "@/components/Atomes/Label/LabelMenu";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import MobileNav from "@/components/Molecules/MobileNav/MobileNav";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const we = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
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

  return (
    <>
      {visibleCursor && (
        <CustomCursor x={cursorPosition.x} y={cursorPosition.y} />
      )}
      {visibleCursorHome && (
        <CustomCursorHome x={cursorPosition.x} y={cursorPosition.y} />
      )}

      <div
        className={`relative text-white2 flex justify-center font-extralight w-screen flex-col fond min-h-screen overflow-clip  ${
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
        <div
          className={`${
            isOpen ? "opacity-10" : "opacity-100"
          } transition-opacity duration-300 `}
        >
          <div className="bg-[url('/assets/img/header/header_wesh.png')] md:w-screen md:h-screen md:min-w-[684px] overflow-clip bg-cover w-screen bg-center absolute md:relative top-0 pt-20 md:pt-0">
            <div className="absolute top-[32px] invisible md:visible menca text-white2 font-extralight flex justify-between w-screen px-[42px]">
              <LabelHome />
              <div className="">
                {" "}
                <LabelMenu />
              </div>
            </div>
            <div
              className="cursor-none"
              onMouseEnter={() => setIsVisibleCursorHome(true)}
              onMouseLeave={() => setIsVisibleCursorHome(false)}
            >
              <div className="flex flex-col items-center text-white2 w-screen md:w-screen">
                <h1 className="general font-thin	text-[90px] md:text-[120px] leading-[178px] md:pt-40 pt-8 ">
                  WE.SH.IV
                </h1>
                <p className="menca lg:w-[670px] w-screen px-4 text-center pt-2 pb-8">
                  WE.SH est un petit festival organisé chaque année depuis 4 ans
                  par un petit groupe d'amis et de volontaires : We Are Shinny.
                  Chaque année, ce petit festival prend de l'ampleur et
                  l'organisation est sérieuse. Cette année, j'ai eu la chance de
                  pouvoir travailler sur la communication visuelle avec une
                  équipe de personnes extrêmement talentueuses.
                </p>
                <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20 ">
                  <div className=" flex flex-row">
                    <Labels label={"( DATE TIME )"} />
                    ..........................................................
                    <Labels label={"2023"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    ....................................................
                    <Labels label={"VERRE A VIN"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    ..........................................
                    <Labels label={"BRANDING"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    ...................................................
                    <Labels label={"FREELANCE"} />
                  </div>
                </section>

                <section className="flex flex-col gap-y-O.2 items-center pt-12 invisible md:visible h-[80px]">
                  <div className=" flex flex-row">
                    <Labels label={"( DATE TIME )"} />
                    ....................................................................................................................
                    <Labels label={"2023"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( CLIENT )"} />{" "}
                    ..............................................................................................................
                    <Labels label={"VERRE A VIN"} />
                  </div>
                  <div className="flex flex-row">
                    <Labels label={"( TYPE DE PROJET )"} />{" "}
                    ...................................................................................................
                    <Labels label={"BRANDING"} />
                  </div>
                  <div className="flex flex-row pb-8 md:pb-0">
                    <Labels label={"( AGENCE )"} />{" "}
                    .............................................................................................................
                    <Labels label={"FREELANCE"} />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="md:h-[400px] bg-white2 md:pl-20 px-10 md:min-w-[684px] text-lime-950  pt-[700px] md:pt-0">
            <div className="md:h-[209px] md:w-[672px] py-16 bg-white2 ">
              L'organisation est composée de plusieurs équipes, dont l'« équipe
              de communication visuelle », dont je faisais partie. J'étais
              accompagnée de deux autres personnes : Mathilde et Justine.
              Justine est une graphiste qui a beaucoup d'expérience aux
              Beaux-Arts et c'est elle qui dirigeait l'équipe. Mathilde est
              illustratrice, et c'est grâce à elle que nous avons pu réaliser
              tous ces superbes dessins qui ont enrichi notre direction
              artistique. Nous nous réunissions toutes les trois environ une
              fois par mois pour organiser notre travail. Lors de nos premières
              réunions, nous avons tout de suite organisé le temps dont nous
              allions disposer et réparti les tâches sur les mois à venir. Nous
              nous sommes ensuite rapidement mis d'accord sur la direction
              artistique à suivre, ce qui nous a permis d'élaborer une petite
              charte graphique, le thème de cette année étant « les cultes ».
              Cette charte comprend tous les dessins de Mathilde, la texture à
              ajouter en haut de chaque visuel publié, les polices de caractères
              à utiliser et enfin deux palettes de couleurs à choisir.
            </div>
          </section>

          <div>
            <div className="md:space-y-20 bg-auto bg-center min-w-[684px] bg-white2 overflow-clip text-white2 space-y-4 ">
              <motion.div
                className="bg-[url('/assets/img/wesh/cover.png')] w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              ></motion.div>
              <motion.div
                className="bg-[url('/assets/img/wesh/charte.png')] w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              ></motion.div>
              <motion.div
                className="bg-[url('/assets/img/wesh/font.png')] w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              ></motion.div>
              <motion.div
                className="bg-[url('/assets/img/wesh/icono.png')] w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              ></motion.div>
              <motion.div className="bg-white2"></motion.div>
              <motion.section className="md:h-[400px] bg-white2 md:pl-20 px-10 md:min-w-[684px] text-lime-950">
                <p className="md:h-[209px] md:w-[672px] py-16 bg-white2 w-[300px] md:min-w-[684px]">
                  Une fois la charte graphique élaborée, il m'a été demandé de
                  créer les gabarits pour les présentations des DJ. L'idée était
                  d'avoir des visuels avec les dessins de l'événement. Nous nous
                  sommes d'abord mis d'accord sur un premier visuel (voir
                  premier visuel), mais plusieurs artistes n'ont pas souhaité
                  que nous utilisions leur image de cette manière, préférant
                  quelque chose de sobre. Nous avons donc opté pour une version
                  beaucoup plus sobre que la première, tout en essayant de
                  conserver au maximum la direction artistique.
                </p>
              </motion.section>
            </div>
            <div className="md:space-y-20 bg-auto bg-center min-w-[684px] bg-white2 overflow-clip text-white2 space-y-4">
              <motion.div
                className="bg-[url('/assets/img/wesh/dj-propal-1.png')] w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              ></motion.div>
              <motion.div
                className="bg-[url('/assets/img/wesh/dj-propal-2.png')] w-screen md:h-[400px] h-[200px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              ></motion.div>
            </div>
            <div className="bg-white2">
              <section className="md:h-[400px] bg-white2 md:pl-20 px-10 md:min-w-[684px] text-lime-950">
                <div className="md:h-[209px] md:w-[672px] py-16 bg-white2 ">
                  {" "}
                  On m'a également demandé d'élaborer le plan d'arrivée des
                  festivaliers sur le domaine. J'ai voulu faire un plan assez
                  enfantin, très simple. J'ai également voulu travailler sur un
                  dessin isométrique car je pensais qu'il donnait une meilleure
                  perception de l'espace. Je me suis inspiré d'un dessinateur
                  sur Twitter @Pablo. Pour les couleurs, j'ai simplement repris
                  celles de la charte graphique. L'idée était vraiment d'avoir
                  quelque chose d'enfantin et de le plus clair possible. J'ai
                  commencé par dessiner sur différents styles de bâtiments
                  jusqu'à ce que je trouve celui qui me convenait le mieux. Une
                  fois que j'ai eu confiance en mon dessin, j'ai commencé à
                  dessiner un plan du site à l'aide de google maps. J'ai ensuite
                  scanné mon dessin et je l'ai vectorisé. J'ai ensuite dû
                  colorier tous les éléments à l'aide de Photoshop et sans
                  bloc-notes.
                </div>
              </section>
            </div>
            <div className="md:space-y-20 bg-auto bg-center min-w-[684px] bg-white2 overflow-clip px-6 md:px-0">
              <motion.div
                className="bg-[url('/assets/img/wesh/dessin_plan.png')] w-[330px] md:h-[500px] h-[300px] md:w-screen bg-contain md:bg-cover bg-no-repeat bg-center md:pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              ></motion.div>
            </div>
            <Link href={"/engrenages"}>
              <div
                className="cursor-none "
                onMouseEnter={() => setIsVisibleCursor(true)}
                onMouseLeave={() => setIsVisibleCursor(false)}
              >
                <div className="md:pt-48 pt-20 bg-white2  min-w-[684px] "></div>

                <motion.div
                  className="bg-[url('/assets/img/header/header_engrenages.png')] md:min-w-[684px] w-screen h-[510px] md:h-[610px] md:w-screen bg-cover bg-center relative overflow-clip bg-white2 "
                  initial={{ opacity: 2 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{ duration: 1.3 }}
                >
                  <motion.div
                    className="flex flex-col items-center text-white2"
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex flex-col items-center text-white2">
                      <h1 className="general font-thin	text-[56px] md:text-[120px] leading-[178px] pt-24 md:pt-32">
                        Engrenages
                      </h1>

                      <section className="flex flex-col gap-y-0.2 items-center md:hidden visible text-[13px] mb-20 text-white">
                        <div className=" flex flex-row">
                          <Labels label={"( DATE TIME )"} />
                          .................................................
                          <Labels label={"2023"} />
                        </div>
                        <div className="flex flex-row">
                          <Labels label={"( CLIENT )"} />{" "}
                          .....................................
                          <Labels label={"JULIEN MASLARD"} />
                        </div>
                        <div className="flex flex-row">
                          <Labels label={"( TYPE DE PROJET )"} />{" "}
                          .................................
                          <Labels label={"BRANDING"} />
                        </div>
                        <div className="flex flex-row">
                          <Labels label={"( AGENCE )"} />{" "}
                          ...........................................
                          <Labels label={"FREELANCE"} />
                        </div>
                      </section>

                      <section className="flex flex-col gap-y-0.2 items-center pt-28 md:pt-12 w-screen invisible md:visible">
                        <div className=" flex flex-row">
                          <Labels label={"( DATE TIME )"} />
                          .......................................................................................................................
                          <Labels label={"2023"} />
                        </div>
                        <div className="flex flex-row">
                          <Labels label={"( CLIENT )"} />{" "}
                          ..........................................................................................................
                          <Labels label={"JULIEN MASLARD"} />
                        </div>
                        <div className="flex flex-row">
                          <Labels label={"( TYPE DE PROJET )"} />{" "}
                          ......................................................................................................
                          <Labels label={"BRANDING"} />
                        </div>
                        <div className="flex flex-row">
                          <Labels label={"( AGENCE )"} />{" "}
                          ................................................................................................................
                          <Labels label={"FREELANCE"} />
                        </div>
                      </section>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default we;
