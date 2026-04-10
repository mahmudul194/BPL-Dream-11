import React from "react";
import dollarImg from "../../assets/dollar 1.png"
import navLogo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="container mx-auto" >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className=" text-xl">
            <img src={navLogo} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-20">
            <a href="#">Home</a>
            <a href="#">Fixture</a>
            <a href="#">Teams</a>
            <a href="#">Schedules</a>
          <button className="btn flex justify-between items-center gap-2 font-bold text-xl">
            0 coins
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
