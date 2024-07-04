import React from "react";
import LabelAbout from "../../Atomes/Label/LabelAbout";
import Contact from "../../Atomes/Contact/Contact";
import LabelPlayground from "../../Atomes/Label/LabelPlayground";
import Link from "next/link";
import LabelHome from "@/components/Atomes/Label/LabelHome";

const HeaderProjects = () => {
  return (
    <>
      <main className="h-full w-screen ">
        <div className="text-black general  md:pl-10 font-medium text-xl h-20 cursor-pointer absolute left-0 top-[24px]">
          <Link href={"/"}>Dweez</Link>
        </div>
        <div className="md:flex md:items-center h-fit justify-center space-x-28 pt-[16px]">
          <div className="flex justify-start items-start text-xs">
            {" "}
            <LabelAbout />
          </div>
          <div className="flex justify-center items-center  text-xs text-black">
            <LabelHome />
          </div>
          <div className="flex items-end text-xs text-black">
            <LabelPlayground />
          </div>
        </div>
        <div className="absolute md:top-[30px] right-10 text-xs	text-black ">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default HeaderProjects;
