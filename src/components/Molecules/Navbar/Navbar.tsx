import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="">
      <div className=" bg-lime-950 text-white flex flex-row-reverse py-4 pr-2 sm:invisible">
        {/* <FontAwesomeIcon
          icon={faBars}
          className="icon-size-custom cursor-pointer"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
