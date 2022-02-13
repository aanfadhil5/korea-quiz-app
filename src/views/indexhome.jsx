import React from "react";
import indexBackground from "../assets/images/korea.jpg";
import { supabase } from "../SupabaseClient";

function Indexhome() {
  const loginWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  };

  return (
    <div className="index-home flex items-center sm:items-start justify-center sm:flex-row ">
      <div className="mx-3 py-24 text-white sm:text-transparent text-center sm:text-justify brand-index flex-col  sm:w-1/2 home-text-container sm:text-3xl text-lg">
        <h1>E-Learning Is A Better Way Of Learning</h1>
        <p>tulisan korea</p>
        <p>
          Ingin mempelajari bahasa korea gratis dengan mudah dimana saja dan
          kapan saja? bisa banget gabung bersama kami di ETL
        </p>
        <p>Yuk buruan gabung sekarang</p>

        <button
          onClick={loginWithGoogle}
          className="p-3 rounded-md my-3 text-center bg-gray-500 text-white"
        >
          Join With Us
        </button>
      </div>
      <div className="sm:w-1/2 hidden sm:flex items-center justify-center">
        <img src={indexBackground} alt="" />
      </div>
    </div>
  );
}

export default Indexhome;
