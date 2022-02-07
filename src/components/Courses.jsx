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
          <div className="course w-64 sm:w-96 h-[32rem] mx-7 my-4 items-center flex-col border-2 border-black rounded-md text-center">
            <img className="w-full h-44" src={course_img_1} alt="img" />
            <h1 className="h-20 text-xl px-3 sm:text-3xl text-pink-500">
              {course.name}
            </h1>
            <p className="text-ellipsis overflow-hidden px-3 break-words h-1/3 font-semibold">
              {course.description}
            </p>
            <button className="p-2 w-3/4 border-2 border-black rounded-md font-semibold bg-slate-500 my-2 ">
              Learn more
            </button>
            <div className="learning-time-container w-full flex items-end justify-center text-center">
              <p className="learning-hours font-semibold mx-2">
                {course.hours} Hours{" "}
              </p>
              <p className="learning-days font-semibold mx-2">
                {course.days} Days{" "}
              </p>
              <p className="learning-modules font-semibold mx-2">
                {course.module} Modules{" "}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
