import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className=" w-full flex flex-col ">
      <div className="menca font-medium	 text-base text-black space-y-2  leading-4	">
        <p>dweezilseche@gmail.com</p>
        <p className="flex justify-end cursor-pointer h-full w-full ">
          <Link
            href="https://www.linkedin.com/in/dweezilseche/"
            target="_blank"
          >
            linkedIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
