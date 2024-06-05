import ArrowTopRight from "@/components/Atomes/Arrow/ArrowTopRight";
import Pill from "@/components/Atomes/Pill/Pill";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";

type BarImage3DProps = {
  label: string;
  isVisible: boolean;
  onToggle: () => void;
};

const BarImage3D: FC<BarImage3DProps> = ({ label, isVisible, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="z-40 cursor-pointer " onClick={onToggle}>
      <motion.div
        className={`md:flex md:flex-row items-center border-t-[1px] border-white2 w-screen pr-2 pl-2 lg:pr-0 lg:pl-0 md:h-[80px] h-[110px] ${
          isVisible ? "bg-white2 text-lime-950" : "bg-lime-950 text-white2"
        }`}
        whileHover={{
          backgroundPosition: "0% 0%",
          transition: { duration: 0.2 },
        }}
        initial={{
          background:
            "linear-gradient(to top, #1a2e05 0%, #1a2e05 50%,  #F8F7F0 50%,  #F8F7F0  100%)",
          backgroundSize: "100% 200%",
          backgroundPosition: "0% 100%",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <h3
          className={`menca md:pl-[40px] pl-6 pr-4 lg:pr-0 font-bold lg:text-base text-sm leading-[17.6px] md:w-screen md:h-[80px] flex items-center z-40 pt-4 pb-2 md:pt-0 md:pb-0 hover:text-lime-950 text-white2 ${
            isHovered ? "text-lime-950" : "text-white2"
          }`}
        >
          {label}
        </h3>
        <div className="flex flex-row items-center w-screen md:w-fit h-12">
          <div className="lg:h-[78px] w-screen md:w-fit md:flex items-center md:flex-row md:gap-4 text-base font-medium leading-4 flex flex-row gap-1 content-center pl-2">
            <Pill
              label={"3D"}
              px={6}
              customClass={
                isHovered
                  ? "bg-lime-950 text-white2"
                  : isVisible
                  ? "bg-white2 text-lime-950"
                  : "bg-white2 text-lime-950"
              }
            ></Pill>
            <Pill
              label={"C4D"}
              px={4}
              customClass={
                isHovered
                  ? "bg-lime-950 text-white2"
                  : isVisible
                  ? "bg-white2 text-lime-950"
                  : "bg-white2 text-lime-950"
              }
            ></Pill>
          </div>

          <div className="lg:pl-[494px] md:pr-[30px] md:pl-6 md:pr-6 pr-8 pb-10 md:pb-0">
            <ArrowTopRight></ArrowTopRight>
          </div>
        </div>
      </motion.div>

      {isVisible && (
        <div className="flex flex-col md:flex-row pt-12 bg-white2 md:relative md:h-[426px] h-screen overflow-y-auto ">
          <motion.div
            className="menca z-30 text-lime-950 pr-60 bg-white2 pl-10 text-base font-medium leading-5 flex flex-col md:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="md:w-[760px] md:h-[209px] h-auto w-[300px] pt-24 md:pt-0 pb-6 md:pb-0 md:mr-48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              malesuada magna, in maximus dui. Ut rutrum pharetra neque lobortis
              maximus. Vivamus eu malesuada velit. Duis fermentum iaculis
              bibendum. Integer vel ipsum metus. Praesent dui libero, tempor ac
              sodales ut, maximus ut massa. Vestibulum iaculis, nisi sit amet
              interdum rhoncus, nisi nulla eleifend elit, sed interdum risus
              odio et felis. In faucibus arcu vel nisl congue, nec aliquam
              lectus porttitor. Morbi in lacus blandit magna fringilla
              venenatis. Sed volutpat ante a massa laoreet, vel sagittis ex
              viverra. Curabitur scelerisque fermentum justo, eget euismod risus
              pellentesque id. Phasellus ut egestas magna, vitae hendrerit
              sapien. Vestibulum aliquam, augue quis tempor aliquet, leo mauris
              aliquet nisi, ac volutpat sem sapien quis est. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="flex md:flex-row md:h-[330px] h-auto flex-col mt-4 md:mt-0">
              <img
                src="/assets/img/3D/3D_1.png"
                alt=""
                className="md:h-[330px] md:w-[330px] h-[300px] w-[300px] mr-4 mb-4 md:mb-0"
              />
              <img
                src="/assets/img/3D/3D_2.png"
                alt=""
                className="md:h-[330px] md:w-[330px] h-[300px] w-[300px] mb-10 md:pb-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BarImage3D;
