import LabelHome from "@/components/Atomes/Label/LabelHome";
import LabelPlaylist from "@/components/Atomes/Label/LabelPlaylist";
import Labels from "@/components/Atomes/Label/Labels";
import React from "react";

const bluedot = () => {
  return (
    <main className="bg-[url('/assets/img/header/header_naturIA.png')] w-screen h-screen bg-cover	relative">
      <div className="absolute top-10 menca text-white font-extralight">
        <LabelHome />
        <LabelPlaylist />
      </div>
      <div className="flex flex-col items-center text-white">
        <h1 className="general font-thin	text-[120px] leading-[178px] pt-40 ">
          NaturIA
        </h1>
        <p className="menca w-[670px] px-4 text-center pt-2">
          Vivamus eu metus enim. Cras feugiat mi id lacus semper tristique. Sed
          ut faucibus massa. Aenean eu mauris ullamcorper, malesuada nisl id,
          porta arcu. Pellentesque vitae rutrum sapien. Nunc nec tincidunt nunc.
          Vestibulum ac eros non velit luctus laoreet id eu urna. Suspendisse
          tortor ex, aliquam id magna vitae, tincidunt dignissim purus. Praesent
          interdum tempus orci non varius.
        </p>
        <section className="flex flex-col gap-y-4 items-center pt-28">
          <div className=" flex flex-row">
            <Labels label={"( DATE TIME )"} />
            ......................................................................................................................
            <Labels label={"2024"} />
          </div>
          <div className="flex flex-row">
            <Labels label={"( CLIENT )"} />{" "}
            ....................................................................................................................
            <Labels label={"NATUR.IA"} />
          </div>
          <div className="flex flex-row">
            <Labels label={"( TYPE DE PROJET )"} />{" "}
            ..................................................................................
            <Labels label={"PROMPT | MIDJOURNEY"} />
          </div>
          <div className="flex flex-row">
            <Labels label={"( AGENCE )"} />{" "}
            ............................................................................................
            <Labels label={"STUDIO ARTEFACT 3000"} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default bluedot;
