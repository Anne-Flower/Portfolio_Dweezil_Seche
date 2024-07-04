import React from "react";
import LabelAbout from "../../Atomes/Label/LabelAbout";
import Contact from "../../Atomes/Contact/Contact";
import LabelPlayground from "../../Atomes/Label/LabelPlayground";
import LabelProjects from "../../Atomes/Label/LabelProjets";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <main className="h-full w-screen text-black invisible md:visible flex justify-center ">
        <div className="text-black general  md:pl-10 font-medium text-xl h-20 cursor-pointer absolute left-0 top-[24px]">
          <Link href={"/"}> Dweez</Link>
        </div>
        <div className="md:flex md:items-center h-fit justify-center space-x-28 pt-[16px]">
          <div className="flex justify-start items-start text-xs">
            {" "}
            <LabelAbout />
          </div>
          <div className="flex justify-center items-center  text-xs text-black">
            <LabelProjects />
          </div>
          <div className="flex items-end text-xs text-black">
            <LabelPlayground />
          </div>
        </div>
        <div className="absolute md:top-[30px] right-10 text-xs text-black pl-1">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Header;
