import React, { useState, useEffect } from "react";

import Courses from "../components/Courses";

function Herohome() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <h1>OUR COURSES</h1>
      <Courses />
    </div>
  );
}

export default Herohome;
