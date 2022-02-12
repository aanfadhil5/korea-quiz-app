import React, { useState, useEffect } from "react";

import Modal from "../components/Modal";
import Courses from "../components/Courses";
import SpeakingPractice from "./SpeakingPractice";

function Herohome() {
  return (
    <div className="hero-home flex flex-col flex-wrap items-center justify-center">
      <h1 className="text-3xl font-bold py-10">OUR COURSES</h1>
      <Courses />
    </div>
  );
}

export default Herohome;
