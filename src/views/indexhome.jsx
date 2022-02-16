import React from "react";
import { useState, useEffect } from "react";
import indexBackground from "../assets/images/korea.jpg";
import { supabase } from "../SupabaseClient";

function Indexhome() {
  const [login, setLogin] = useState(false);
  const [session, setSession] = useState(null);
  
  const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (event === "SIGNED_IN") {
        setLogin(true);
      }
      if (event === "SIGNED_OUT") {
        setLogin(false);
      }
    }
  );
  const loginWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);


  return (
    <div className="index-home flex items-center sm:items-start justify-center sm:flex-row ">
      <div className="sm:ml-28 ">
        <h1 className="sm:pt-24 sm:py-2 text-4xl font-semibold text-violet-600 sm:text-transparent brand-index flex-col  sm:w-1/2 home-text-container ">E-Learning Is A Better Way Of Learning</h1>
        <p className="my-4 text-xl font-semibold">안녕하세요 여러분 !</p>
        <div className="">
          <p>
          Ingin mempelajari bahasa korea gratis dengan mudah dimana saja dan
          kapan saja? Dengan gabung bersama kami anda dapat menggunakan fitur:</p>
          <div className="">
          <h1 className="font-bold text-xl text-violet-600">Course</h1> 
            <p>Dengan ini, anda bisa mendapatkan bahan bacaan berupa materi - materi yang disiapkan oleh pemateri. </p>
          <h1 className="font-bold text-xl text-violet-600">Dictionary</h1> 
            <p>Fitur untuk penerjemah dari Bahasa Indonesia ke Korea. Vice versa! </p>
          <h1 className="font-bold text-xl text-violet-600">Speaking Practice</h1> 
            <p>Fitur yang satu ini dapat melatih diri anda dalam tata bahasa pengucapan Hangeul. </p>
          </div>
        
        <p className="my-4">Yuk buruan gabung sekarang! Jadi bisa ngobrol sama Park Ji-Sung!</p>
        </div>

        {!session ? (
        <button 
          onClick={loginWithGoogle}
          className="p-3 rounded-md my-7 text-center bg-gray-700 text-white "
        >
          Join With Us
        </button>):null}
        
      </div>
      <div className="sm:w-1/2 hidden sm:flex items-center justify-center ">
        <img src={indexBackground} alt="" />
      </div>
    </div>
  );
}

export default Indexhome;
