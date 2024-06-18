import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className=" w-full flex flex-col ">
      <div className="menca font-light text-base leading-[19px] text-black space-y-2  ">
        <p>dweezilseche@gmail.com</p>
        <p className="">
          <Link
            href={"https://www.linkedin.com/in/dweezilseche/"}
            className="flex justify-end cursor-pointer"
          >
            linkedIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
