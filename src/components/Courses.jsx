import React, { useState, useEffect } from "react";
import { getCourses } from "../helpers/Supabase";
import course_img_1 from "../assets/images/korea7.jpg";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <div className="sm:flex flex-wrap justify-center items-center ">
      {courses.map((course) => {
        return (
          <div className="course w-64 sm:w-96 h-[30rem] mx-7 my-4 items-center flex-col border-2 border-black rounded-md text-center">
            <img className="w-full h-44" src={course_img_1} alt="img" />
            <h1 className="h-20 text-xl px-3 sm:text-3xl text-pink-500">
              {course.name}
            </h1>
            <p className="whitespace-pre-wrap break-all h-1/3 bg-[#535443]">
              {course.description}
            </p>
            <button>Learn more</button>
            <div className="learning-time-container w-full flex items-end justify-center text-center">
              <p className="learning-hours">{course.hours} Hours </p>
              <p className="learning-days">{course.days} Days </p>
              <p className="learning-modules">{course.module} Modules </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
