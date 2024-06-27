import React from "react";

import Contact from "../../Atomes/Contact/Contact";

import Link from "next/link";
import LabelAboutBeige from "@/components/Atomes/Label/LabelAboutBeige";
import LabelHomeBeige from "@/components/Atomes/Label/LabelHomeBeige";
import LabelPlaygroundBeige from "@/components/Atomes/Label/LabelPlaygroundBeige";

const HeaderEngrenages = () => {
  return (
    <>
      <main className="h-full w-screen ">
        <div className="text-beige general md:pt-6 md:pl-10 md:flex md:items-start font-medium text-xl	h-20 cursor-pointer	">
          <Link href={"/"}>Dweez</Link>
        </div>
        <div className="md:flex md:items-center h-fit justify-center">
          <div className="absolute md:top-4 left-[550px] text-xs">
            {" "}
            <LabelAboutBeige />
          </div>
          <div className="absolute md:top-4 left-[750px] text-xs">
            <LabelHomeBeige />
          </div>
          <div className="absolute md:top-4 left-[950px] text-xs ">
            <LabelPlaygroundBeige />
          </div>
        </div>
        <div className="absolute md:top-[30px] right-10 text-xs	text-beige ">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default HeaderEngrenages;
