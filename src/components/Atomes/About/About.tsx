"use client";

import React from "react";
import Contact from "../Contact/Contact";

const About = () => {
  return (
    <div className="w-screen lg:flex lg:justify-end lg:pr-6  h-screen lg:relative bg-lime-950">
      <div className="bg-lime-950 text-white2 hidden lg:flex lg:pr-[1200px] lg:pb-32 lg:items-end">
        <Contact />
      </div>

      <div className="bg-lime-950 text-white2 px-6 lg:w-[730px] overflow-x-clip lg:absolute lg:top-[84px]">
        <h1 className="general leading-[83px] font-thin md:text-[56px] text-4xl lg:pb-14 pb-10 flex lg:pt-8 pt-6">
          A propos
        </h1>
        <div className="menca  text-base leading-[22px] space-y-4 bg-lime-950 font-light">
          <p className="w-full ">
            Depuis 5 ans, j'ai pu développer mes compétences dans plusieurs
            domaines : le graphisme, la programmation front-end (HTML/CSS, JS,
            PHP), le motion design et plus récemment la 3D avec C4D. Ce sont des
            compétences que j'aimerais pouvoir utiliser et continuer à
            développer au quotidien dans un poste hybride.
          </p>
          <p className="w-full">
            Comme je l'ai dit, je m'appelle Dweezil. J'ai 24 ans et je travaille
            actuellement au Studio Artefact 3000 à Paris. Je termine mes études
            en septembre 2024 après 5 ans à l'ECV Digital Paris où j'ai fait un
            Master Direction Artistique Numérique.
          </p>
          <p className="w-full">
            Depuis l'âge de 11 ans, j'ai toujours été intéressé par la création
            de sites internet. Je me suis acheté une petite station météo et
            j'ai créé un site Wix dans le but de réaliser un bulletin météo pour
            la ville où j'habitais. J'ai peu à peu abandonné la météo mais mon
            intérêt pour la création de sites web n'a fait que croître.
          </p>
          <p className="w-full">
            Un jour, ma mère a voulu avoir son propre site pour pouvoir exposer
            ses peintures. Grâce au site du zéro, j'ai découvert qu'apprendre à
            coder un site web n'était pas si compliqué que cela : il suffisait
            d'avoir un bloc-notes sur son ordinateur et on pouvait commencer.
            Cela m'a passionné et j'ai continué à apprendre le HTML/CSS pendant
            plusieurs années.
          </p>
          <p className="pb-8 w-full">
            Après le baccalauréat, j'ai d'abord fait une licence en physique et
            chimie, puis en économie et gestion. J'ai ensuite intégré ECV
            Digital, où j'ai découvert le graphisme grâce notamment à deux
            professeurs qui ont su me transmettre leur passion. Aujourd'hui, je
            suis en master de direction artistique numérique.
          </p>
        </div>
      </div>
      <div className="bg-lime-950 text-white2 lg:hidden flex justify-center pb-16 pt-8 ">
        <Contact />
      </div>
    </div>
  );
};

export default About;
