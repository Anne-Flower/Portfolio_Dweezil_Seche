"use client";
import ArrowTopRight from "@/components/Atomes/Arrow/ArrowTopRight";
import Pill from "@/components/Atomes/Pill/Pill";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, useState } from "react";
type BarNaturiaProps = {
  label: string;
};

const BarNaturia: FC<BarNaturiaProps> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);
  // return (
  //   <Link href={"/naturia"} className="fond2">
  //     <motion.div
  //       className={`md:flex md:flex-row items-center border-t-[1px]  border-lime-950 text-white2 w-screen pr-2 pl-2 lg:pr-0 lg:pl-0 md:h-[80px] h-[110px] hover:text-lime-950`}
  //       // style={{
  //       //   opacity: "10px",
  //       //   backgroundImage: "url('/assets/img/grain.png')",
  //       //   backgroundAttachment: "fixed",
  //       //   backgroundSize: "cover",
  //       //   backgroundRepeat: "no-repeat",
  //       // }}
  //       whileHover={{
  //         backgroundPosition: "0% 0%",
  //         transition: { duration: 0.2 },
  //       }}
  //       initial={{
  //         opacity: 1,
  //         backgroundImage:
  //           "url('/assets/img/grain.png'),linear-gradient(to top, #3E553A 0%, #3E553A 50%,  #ffffff  50%,  #ffffff  100%)",
  //         backgroundAttachment: "fixed",
  //         backgroundRepeat: "no-repeat",
  //         backgroundSize: "100% 200% ",
  //         backgroundPosition: "0% 100%",
  //       }}
  //       onHoverStart={() => setIsHovered(true)}
  //       onHoverEnd={() => setIsHovered(false)}
  //     >
  //       <h3 className="menca md:pl-[40px] pl-6 pr-4 lg:pr-0 font-bold lg:text-base text-sm leading-[17.6px] md:w-52 lg:w-[2400px] pt-4 pb-2 text-white2 md:hover:text-lime-950 md:h-[110px] flex items-center z-40  md:pt-0 md:pb-0 ">
  //         {label}
  //       </h3>
  //   return (
  //     <Link href={"/naturia"} className="relative">
  //       <motion.div
  //         className="relative md:flex md:flex-row items-center border-t-[1px] border-lime-950 text-white2 w-screen pr-2 pl-2 lg:pr-0 lg:pl-0 md:h-[80px] h-[110px] hover:text-lime-950 bar-naturia "
  //         whileHover={{
  //           backgroundPosition: "0% 0%",
  //           transition: { duration: 0.2 },
  //         }}
  //         initial={{
  //           opacity: 1,
  //           background:
  //             "linear-gradient(to top, #3E553A 0%, #2B312A 50%,  #ffffff  50%,  #ffffff  100%)",
  //           backgroundSize: "100% 200%",
  //           backgroundPosition: "0% 100%",
  //         }}
  //         onHoverStart={() => setIsHovered(true)}
  //         onHoverEnd={() => setIsHovered(false)}
  //       >
  //         <div className="bar-naturia-content flex flex-row items-center w-screen md:w-fit h-12">
  //           <h3 className="bar-naturia-content  menca md:pl-[40px] pl-6 pr-4 lg:pr-0 font-bold lg:text-base text-sm leading-[17.6px] md:w-52 lg:w-[712px] pt-4 pb-2 text-white2 md:hover:text-lime-950 md:h-[110px] flex items-center md:pt-0 md:pb-0">
  //             {label}
  //           </h3>
  //           <div className="flex flex-row items-center w-screen md:w-fit h-12">
  //             <div className=" lg:h-[78px] w-screen md:w-fit md:flex items-center md:flex-row md:gap-4 text-base font-medium	leading-4 flex flex-row gap-1 content-center pl-2 ">
  //               <Pill
  //                 label={"prompt"}
  //                 px={6}
  //                 customClass={
  //                   isHovered ? "fond text-white2" : "bg-white2 text-lime-950"
  //                 }
  //               />
  //               <Pill
  //                 label={"midjourney"}
  //                 px={6}
  //                 customClass={
  //                   isHovered ? "fond text-white2" : "bg-white2 text-lime-950"
  //                 }
  //               ></Pill>
  //               <Pill
  //                 label={"IA"}
  //                 px={6}
  //                 customClass={
  //                   isHovered ? "fond text-white2" : "bg-white2 text-lime-950"
  //                 }
  //               ></Pill>
  //             </div>

  //             <div className="md:pl-[356px] md:pr-[30px] md:pl-6 md:pr-6 pr-8 pb-10 md:pb-0 ">
  //               <ArrowTopRight></ArrowTopRight>
  //             </div>
  //           </div>
  //         </div>
  //       </motion.div>
  //     </Link>
  //   );
  // };

  // export default BarNaturia;

  return (
    <Link href={"/naturia"} className="relative">
      <motion.div
        className={`border-t-[1px] border-lime-950  md:flex md:flex-row items-center border-t-[1px] border-b-white2 text-white2 w-screen pr-2 pl-2 lg:pr-0 lg:pl-0 md:h-[80px] h-[110px] hover:text-lime-950 fond3fix `}
        whileHover={{
          backgroundPosition: "0% 0%",
          transition: { duration: 0.2 },
          backgroundImage:
            " linear-gradient(to top, #3E553A 0%, #3E553A 50%,  #F8F7F0  50%,  #F8F7F0  100%)",
        }}
        initial={{
          opacity: 1,
          backgroundSize: "100% 200%",
          backgroundPosition: "0% 100%",
        }}
        style={{
          opacity: "10px",
          backgroundImage:
            "url('/assets/img/grain.png'), linear-gradient(to top, #3E553A 0%, #3E553A 50%,  #F8F7F0  50%,  #F8F7F0  100%)",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <h3 className="menca md:pl-[40px] pl-6 pr-4 lg:pr-0 font-bold lg:text-base text-sm leading-[17.6px] md:w-52 lg:w-[712px] pt-4 pb-2 text-white2 md:hover:text-lime-950 md:h-[110px] flex items-center md:pt-0 md:pb-0">
          {label}
        </h3>
        <div className="flex flex-row items-center w-screen md:w-fit h-12">
          <div className=" lg:h-[78px] w-screen md:w-fit md:flex items-center md:flex-row md:gap-4 text-base font-medium	leading-4 flex flex-row gap-1 content-center pl-2">
            <Pill
              label={"prompt"}
              px={6}
              customClass={
                isHovered ? "fond text-white2" : "bg-white2 text-lime-950"
              }
            />
            <Pill
              label={"midjourney"}
              px={6}
              customClass={
                isHovered ? "fond text-white2" : "bg-white2 text-lime-950"
              }
            />
            <Pill
              label={"IA"}
              px={6}
              customClass={
                isHovered ? "fond text-white2" : "bg-white2 text-lime-950"
              }
            />
          </div>
          <div className="md:pl-[356px] md:pr-[30px] md:pl-6 md:pr-6 pr-8 pb-10 md:pb-0">
            <ArrowTopRight />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BarNaturia;
