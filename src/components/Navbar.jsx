import React from "react";
import { useState, useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import * as Scroll from "react-scroll";
import Icon from "react-hero-icon";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);

    console.log(isActive);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // const changeIcon = () =>{
  //   if(screen)
  // }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  if (navbar) {
    return (
      <header className="block sm:flex justify-center sm:justify-around sticky duration-500 top-0 z-50 items-center bg-red-700 pb-2 sm:py-5">
        <div className="title text-sm sm:text-3xl">
          <Icon
            className="flex sm:hidden"
            icon="menu"
            type="solid"
            onClick={handleToggle}
          />

          <h1 className="text-white lg:text-5xl sm:font-semibold text-xl">
            EasyToLearning
          </h1>
        </div>
        <div
          className={
            isActive
              ? "nav-items text-xs sm:flex block "
              : "nav-items text-xs sm:flex hidden "
          }
        >
          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Home
          </div>

          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Courses
          </div>

          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Speaking Practice
          </div>

          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            About Me
          </div>
          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Contact Us
          </div>
          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Login
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="block sm:flex justify-center sm:justify-around  duration-1000 top-0 z-50 items-center  pb-2 sm:py-5">
        <div className="title text-sm sm:text-3xl">
          <Icon
            className="flex sm:hidden"
            icon="menu"
            type="solid"
            onClick={handleToggle}
          />
          <h1 className="text-black lg:text-5xl sm:font-semibold text-xl">
            EasyToLearning
          </h1>
        </div>
        <div
          className={
            isActive
              ? "nav-items text-xs sm:flex block "
              : "nav-items text-xs sm:flex hidden "
          }
        >
          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Home
          </div>

          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Courses
          </div>

          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Speaking Practice
          </div>

          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            About Me
          </div>
          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Contact Us
          </div>
          <div className="nav-links text-lg py-3 font-bold mx-2 lg:mx-5 sm:text-xl text-black hover:text-red-600 lg:hover:scale-125  ">
            Login
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
