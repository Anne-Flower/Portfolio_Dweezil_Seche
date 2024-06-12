import ArrowTopRight from "@/components/Atomes/Arrow/ArrowTopRight";
import Pill from "@/components/Atomes/Pill/Pill";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BarWEProps = {
  label: string;
};

const BarWE: FC<BarWEProps> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/we"}>
      <motion.div
        className={`md:flex md:flex-row items-center border-t-[1px] border-b-[1px] border-white2 text-white2 w-screen pr-2 pl-2 lg:pr-0 lg:pl-0 md:h-[80px] h-[110px] hover:text-lime-950 fond3fix `}
        style={{
          opacity: "10px",
          backgroundImage: "url('/assets/img/grain.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        whileHover={{
          background:
            "linear-gradient(to top, #F8F7F0 0%, #F8F7F0 50%, #2B312A 50%, #2B312A 100%)",
          backgroundSize: "100% 200%",
          backgroundPosition: "0% 100%",
          transition: { duration: 0.5 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <h3 className="menca md:pl-[40px] pl-6 pr-4 lg:pr-0 font-bold lg:text-base text-sm leading-[17.6px] md:w-52 lg:w-[2400px] pt-4 pb-2 text-white2 md:hover:text-lime-950  md:h-[110px]  flex items-center z-40 pt-4 pb-2 md:pt-0 md:pb-0">
          {label}
        </h3>
        <div className="flex flex-row items-center w-screen md:w-fit h-12">
          <div className=" lg:h-[78px] w-screen md:w-fit md:flex items-center md:flex-row md:gap-4 text-base font-medium	leading-4 flex flex-row gap-1 content-center pl-2">
            <Pill
              label={"logo"}
              px={6}
              customClass={
                isHovered ? "fond2 text-white2" : "bg-white2 text-lime-950"
              }
            ></Pill>
            <Pill
              label={"branding"}
              px={4}
              customClass={
                isHovered ? "fond2 text-white2" : "bg-white2 text-lime-950"
              }
            ></Pill>
            <Pill
              label={"freelance"}
              px={4}
              customClass={
                isHovered ? "fond2 text-white2" : "bg-white2 text-lime-950"
              }
            ></Pill>
          </div>

          <div className="md:pl-[374px] md:pr-[30px] md:pl-6 md:pr-6 pr-8 pb-10 md:pb-0">
            <ArrowTopRight></ArrowTopRight>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BarWE;
