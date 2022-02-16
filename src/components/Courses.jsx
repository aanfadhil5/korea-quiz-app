import React, { useState, useEffect } from "react";
import img_1 from '../assets/images/korea3.jpg'

import pdf1 from "../assets/pdf/CHAPTER1.pdf";
import pdf2 from "../assets/pdf/CHAPTER2.pdf";
import pdf3 from "../assets/pdf/CHAPTER3.pdf";
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
      name: "CHAPTER 1. Topic 1-4. 안녕하세요?저는 폴이에요.",
      banner: img_1,
      description1: "예요/이에요 adalah.",
      description2: "Kata tanya 뭐 apa dan 어느 yang mana.",
      description3: "Penanda topik 은/는.",
      description4: "Negara dan Kewarganegaraan",
      src: pdf1,
    },
    {
      name: "CHAPTER 2. Topic 1-4. 아니요, 회사원이에요.",
      banner: img_1,
      description1: "네/아니요 Ya/Tidak.",
      description2: "Meninggalkan subjek kalimat.",
      description3: "Bertanya sesuatu.",
      description4: "Bahasa-bahasa",
      src: pdf2,
    },
    {
      name: "CHAPTER 3. Topic 1-4. 이게 뭐예요?",
      banner: img_1,
      description1: "이/그/저 Ini/itu/itu.",
      description2: "Kata tanya 무슨 apa dan 누구 siapa.",
      description3: "Penanda subjek 이/가",
      description4: "Kepemilikan",
      src: pdf3,
    },
  ];

  return (
    <div>
      {!session ? (
        <Redirect exact to="/course" />
      ) : (
        <div className="sm:flex flex-wrap justify-center items-center ">
          {courses.map((course) => {
            return (
              <div className="course w-64 sm:w-96 h-[38rem] mx-7 my-4 items-center flex-col border border-slate-400 rounded-md p-2">
                <img className="w-full h-55" src={course.banner} alt="img" />
                <h1 className="h-30 text-xl px-4 sm:text-2xl text-pink-500 font-semibold">
                  {course.name}
                </h1>
                <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3  text-ellipsis ml-5 mt-3 overflow-hidden break-words">
                  <li>{course.description1}</li>
                  <li>{course.description2}</li>
                  <li>{course.description3}</li>
                  <li>{course.description4}</li>
                </ul>
                <a href={course.src} target="_blank">
                  <button className="p-2 ml-5 w-4/3 rounded-md font-semibold bg-slate-400 my-14">
                    Learn more
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Courses;
