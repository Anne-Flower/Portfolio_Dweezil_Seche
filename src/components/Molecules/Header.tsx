import React from "react";
import LabelAbout from "../Atomes/Label/LabelAbout";
import Contact from "../Atomes/Contact/Contact";
import LabelPlayground from "../Atomes/Label/LabelPlayground";
import LabelProjects from "../Atomes/Label/LabelProjets";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="text-black general md:pt-10 md:pl-10 md:flex justify-center md:items-center">
        <Link href={"/"}> Dweez</Link>
      </div>
      <div className="">
        <div className="absolute md:top-[40px] left-[550px] ">
          {" "}
          <LabelAbout />
        </div>
        <div className="absolute md:top-[40px] left-[750px] ">
          <LabelProjects />
        </div>
        <div className="absolute md:top-[40px] left-[950px] ">
          <LabelPlayground />
        </div>
      </div>
      <div className="absolute md:top-[54px] right-10 ">
        <Contact />
      </div>
    </>
  );
};

export default Header;
