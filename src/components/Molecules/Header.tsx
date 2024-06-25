import React from "react";
import LabelAbout from "../Atomes/Label/LabelAbout";
import Contact from "../Atomes/Contact/Contact";
import LabelPlayground from "../Atomes/Label/LabelPlayground";
import LabelProjects from "../Atomes/Label/LabelProjets";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <main className="h-[40px] w-screen">
        <div className="text-black general md:pt-6 md:pl-10 md:flex md:items-start font-medium text-xl	">
          <Link href={"/"}> Dweez</Link>
        </div>
        <div className="md:flex md:items-center h-fit justify-center">
          <div className="absolute md:top-4 left-[550px] text-xs	">
            {" "}
            <LabelAbout />
          </div>
          <div className="absolute md:top-4 left-[750px] text-xs	">
            <LabelProjects />
          </div>
          <div className="absolute md:top-4 left-[950px] text-xs	">
            <LabelPlayground />
          </div>
        </div>
        <div className="absolute md:top-[30px] right-10 text-xs	">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Header;
