import React from "react";
import profilePicture from "../assets/images/dinda-pp.JPG";

function Aboutme() {
  return (
    <div className="pb-20">
      <h1 className="text-center text-3xl font-bold my-5">About Me</h1>
      <div className="about-me flex sm:flex-row flex-col items-center w-full">
        <div className="w-full sm:w-1/2 mx-3 text-justify sm:pl-9">
          <h2 className="sm:text-2xl font-bold mb-3">
            Hello,
          </h2>
          <h2 className="sm:ml-4 sm:text-3xl text-lg font-bold">I'm Dinda</h2>
          <h2 className="sm:ml-4 sm:text-3xl text-lg font-bold">
            I am a student who love to learn!
          </h2>
          <h2 className="sm:ml-4 sm:text-3xl text-xl font-bold">
            Especially in technology and programming
          </h2>
          <p className="sm:ml-4 sm:text-xl py-2 text-lg break-words ">
            I’m not really sure how old I was when i started learning
            programming, but i remember when the first time I made “Hello World”
            in HTML, that was pretty cool right? I love learning about another
            language, not only programming language I also love Korean. Even
            though my native language is Indonesian, I can also speak in
            Korean! It certainly made a lots of fun times.
          </p>
        </div>
        <div className="profile-photo w-full sm:w-1/2 flex items-center justify-center">
          <img className="w-96 h-96" src={profilePicture} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
