import React, { useState, useEffect } from "react";
import img_1 from "../assets/images/korea3.jpg";
import img_2 from "../assets/images/korea4.jpg";
import img_3 from "../assets/images/korea6.jpg";
import img_4 from "../assets/images/korea7.jpg";
import { supabase } from "../SupabaseClient";
import { Redirect } from "react-router";

function Courses() {
  const [isCourseHidden, setIsCourseHidden] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [session, setSession] = useState(null);
  const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (event === "SIGNED_IN") {
        setIsCourseHidden(false);
      }
      if (event === "SIGNED_OUT") {
        setIsCourseHidden(true);
      }
    }
  );

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  const courses = [
    {
      name: "Pengenalan Hangul",
      banner: img_1,
      description:
        "mempelajari mengenai sejarah singkat hangeul. etimologi huruf vokal dan kosnionan membentuk suku kata dan uruan penlsfwoqeungowqengoengohreuk suku kata dan uruan penlsfwoqeungowqengoengohre",
      hours: "12",
      module: "5",
      days: "2",
    },
    {
      name: "Karakteristik huruf vokal dan konsonan",
      banner: img_2,
      description:
        "satu suara poer suku kata pertiuwengowengowegnwoegn woefzscnaeolfgnqoefneqwgwbhw",
      hours: "5",
      module: "2",
      days: "1",
    },
    {
      name: "Karakteristik Bahasa Korea",
      banner: img_3,
      description:
        "satu suara poer suku kata pertiuwengowengowegnwoegn woefzscnaeolfgnqoefneqwgwbhw",
      hours: "52",
      module: "5",
      days: "6",
    },
    {
      name: "Karakteristik Bahasa Korea",
      banner: img_4,
      description:
        "satu suara poer suku kata pertiuwengowengowegnwoegn woefzscnaeolfgnqoefneqwgwbhw",
      hours: "52",
      module: "5",
      days: "6",
    },
    {
      name: "Karakteristik Bahasa Korea",
      banner: img_1,
      description:
        "satu suara poer suku kata pertiuwengowengowegnwoegn woefzscnaeolfgnqoefneqwgwbhw",
      hours: "52",
      module: "5",
      days: "6",
    },
  ];

  return (
    <div>
      {!session ? (
        <Redirect exact to="/about" />
      ) : (
        <div className="sm:flex flex-wrap justify-center items-center ">
          {courses.map((course) => {
            return (
              <div className="course w-64 sm:w-96 h-[32rem] mx-7 my-4 items-center flex-col border-2 border-black rounded-md text-center">
                <img className="w-full h-44" src={course.banner} alt="img" />
                <h1 className="h-20 text-xl px-3 sm:text-3xl text-pink-500">
                  {course.name}
                </h1>
                <p className="text-ellipsis overflow-hidden px-3 break-words h-1/3 font-semibold">
                  {course.description}
                </p>
                <button className="p-2 w-3/4 border-2 border-black rounded-md font-semibold bg-slate-500 my-2">
                  Learn more
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Courses;
