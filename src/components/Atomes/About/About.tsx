"use client";

import React from "react";
import Contact from "../Contact/Contact";
import FooterAbout from "@/components/Molecules/Footer/FooterAbout";
import FooterAboutMobile from "@/components/Molecules/Footer/FooterAboutMobile";

const About = () => {
  return (
    <div className="w-screen lg:flex lg:pr-6 md:h-[800px] h-[1400px] relative ">
      <div className="text-black px-6 lg:w-[672px] md:h-[440px] overflow-x-clip lg:absolute lg:right-56 lg:pt-10 pt-0 md:flex md:flex-col md:items-start ">
        <h1 className="general leading-[83px] font-thin md:text-[56px] text-4xl lg:pb-14 pb-10 flex lg:pt-8 pt-6">
          About
        </h1>
        <div className="menca text-base leading-[22px] space-y-4 font-light">
          <p className="w-full ">
            My name is Dweezil, like Frank Zappa's son. Unlike his son, however,
            I don't go around the world with my electric guitar covering my
            father's greatest hits, but I am a digital art director, and it's
            pretty much the same. I'm 25 and I've lived in Paris all my life.
            It's in this city that I obtained my diploma in digital art
            direction from ECV Digital (I still play guitar from time to time).
          </p>
          <p className="w-full">
            Today, I'm lucky enough to be doing this job, which I consider a
            passion. Designing has always been my favorite activity. When I was
            very young, I became interested in the Internet and how a website
            worked. This led me to design one, and then several others. Little
            by little, I learned how to design websites and eventually made it
            my profession. The same goes for logos and graphic identities. These
            are two things I quickly acquired a taste for and which turned out
            to be my favorite thing to do.
          </p>
          <p className="w-full pb-10 ">
            When I'm not doing all this, I'm making or listening to music. You
            can listen to my playlist by clicking on the bottom right of the
            screen. You'll find lots of Supertramp, lots of Half Moon Run, lots
            of Pink Floyd, and lots of other bands, old and new. I'm available
            for both agency and freelance work. You can contact me by e-mail or
            via linkedin. See you soon!
          </p>
        </div>
      </div>
      <div className="menca font-medium	text-sm	leading-4	text-black h-[100px]">
        <div className="absolute md:top-[480px] top-[790px] left-6 md:left-10 ">
          Dweezil Sèche
        </div>
        <div className="absolute md:top-[500px] top-[810px] left-6 md:left-10 ">
          Artistic Direction \ UI \ Motion \ Prompt
        </div>
        <div className="">
          <img
            src="/assets/imagesV2/photo_perso.png"
            alt="photo Dweezil Sèche "
            className="w-[331px] h-[331px] absolute top-[850px] md:top-28 left-6 md:left-10"
          />
        </div>
      </div>
      <div className="visible md:hidden h-full ">
        <FooterAboutMobile />
      </div>

      <div className="absolute bottom-20 top-[660px] pb-10 md:pb-0 invisible md:visible">
        {" "}
        <FooterAbout />
      </div>

      {/* <div className=" text-white2 lg:hidden flex justify-center pb-16 pt-8 pl-6 md:pl-0 ">
        <Contact />
      </div> */}
    </div>
  );
};

export default About;
