import ArrowTopRight from "@/components/Atomes/Arrow/ArrowTopRight";
import Pill from "@/components/Atomes/Pill/Pill";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, useState } from "react";

type BarEngrenagesProps = {
  label: string;
};
const BarEngrenages: FC<BarEngrenagesProps> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/engrenages"}>
      <motion.div
        className="md:flex md:flex-row items-center border-t-[1px] border-white2 bg-lime-950 text-white2 w-full pr-2 pl-2 lg:pr-0 lg:pl-0 md:h-[80px] h-[110px] hover:text-lime-950"
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
        <h3 className="menca md:pl-[40px] pl-6 pr-4 lg:pr-0 font-bold lg:text-base  text-sm leading-[17.6px] md:w-52 lg:w-[2400px] pt-4 pb-2 text-white2 md:hover:text-lime-950  md:h-[110px]  flex items-center z-40 pt-4 pb-2 md:pt-0 md:pb-0">
          {label}
        </h3>
        <div className="flex flex-row items-center w-screen md:w-fit h-12 ">
          <div className="lg:h-[78px] w-screen md:w-fit md:flex items-center md:flex-row md:gap-4 text-base font-medium leading-4 flex flex-row gap-1 content-center pl-2 ">
            <Pill
              label={"branding"}
              px={6}
              customClass={
                isHovered
                  ? "bg-lime-950 text-white2"
                  : "bg-white2 text-lime-950"
              }
            ></Pill>
            <Pill
              label={"freelance"}
              px={6}
              customClass={
                isHovered
                  ? "bg-lime-950 text-white2"
                  : "bg-white2 text-lime-950"
              }
            ></Pill>
            <Pill
              label={"IA"}
              px={6}
              customClass={
                isHovered
                  ? "bg-lime-950 text-white2"
                  : "bg-white2 text-lime-950"
              }
            ></Pill>
          </div>

          <div className="md:pl-[360px] md:pr-[30px] md:pl-6 md:pr-6 pr-8 pb-10 md:pb-0">
            <ArrowTopRight></ArrowTopRight>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BarEngrenages;
// titre + pill + arrow
