import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { supabase } from "../SupabaseClient";
import { transliterate as slugify } from 'transliteration';

function SpeakingPractice() {

  const [randomPhrases, setRandomPhrases] = useState("");
  const [isSpeechTrue, setIsSpeechTrue] = useState(false);
  const [session, setSession] = useState(null);

  

const phrases2 = [
  {
  'id':1,
  'korean':'안녕하세요',
  'indonesian': 'Halo'
  },
  {
    'id':2,
    'korean':'반갑습니다',
    'indonesian': 'Senang Bertemu Denganmu'
  },
  {
    'id':3,
    'korean':'감사합니다',
    'indonesian': 'Terima Kasih'
  },
  {
    'id':4,
    'korean':'밥 먹었어요',
    'indonesian': 'Apa kamu sudah makan'
  },
  {
    'id':5,
    'korean':'잠시만요',
    'indonesian': 'Tunggu dulu'
  },
  {
    'id':6,
    'korean':'죄송합니다',
    'indonesian': 'Mohon Maaf'
  },
  {
    'id':7,
    'korean':'얼마예요',
    'indonesian': 'Berapa harganya'
  },
  {
    'id':8,
    'korean':'많이 드세요',
    'indonesian': 'Silahkan makan yang banyak'
  },
  {
    'id':9,
    'korean':'잘 먹겠습니다',
    'indonesian': 'Saya akan makan dengan baik'
  },
  {
    'id':10,
    'korean':'한국',
    'indonesian': 'Korea Selatan'
  },

  {
    'id':11,
    'korean':'호주',
    'indonesian': 'Jepang'
  },
  {
    'id':12,
    'korean':'영국',
    'indonesian': 'Inggris'
  },
  {
    'id':13,
    'korean':'안녕히 가세요',
    'indonesian': 'Selamat Jalan'
  },
  {
    'id':14,
    'korean':'최시원',
    'indonesian': 'Choi Siwon'
  },
  {
    'id':15,
    'korean':'안녕히 계세요',
    'indonesian': 'Selamat Tinggal'
  },
]

 

  const {
    transcript,
    resetTranscript,
  } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false, language: "ko" });

    console.log(isSpeechTrue);
  };

  const showPhrases = () => {
    setRandomPhrases(phrases2[Math.floor(Math.random() * phrases2.length)]);
    resetTranscript();
  };
  const correction = () => {
    if (transcript.toLowerCase() === randomPhrases.korean.toLowerCase()) {
      setIsSpeechTrue(true);
    } else {
      setIsSpeechTrue(false);
    }
  };

  function playPhrase() {
    var utterThis = new SpeechSynthesisUtterance(randomPhrases.korean);

    utterThis.lang = "ko-KO";
    // "ko-KR";
    utterThis.rate = 0.7;
    window.speechSynthesis.speak(utterThis);
  }
  useEffect(() => {
    correction();
  }, [transcript]);
  useEffect(() => {
    showPhrases();
  }, []);

  
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      {!session ? (
        <h1 className="text-center">Mohon Login agar mendapatkan akses</h1>
      ) : (
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold my-5">Speaking Practice</h1>
          <p className="pb-7">Press the button then say the phrase given</p>
          <div className="practice-container flex items-center justify-center flex-col">
            <div className="border-2 w-full border-slate-800 py-6">
            <p className="text-3xl text-center ">
              {randomPhrases.korean}
            </p>
            <p className="text-base text-slate-500 text-center">
              {slugify(randomPhrases.korean)}
            </p>
            <p className="text-center text-slate-800 underline underline-offset-4 decoration-2 decoration-redred pt-6">
              {randomPhrases.indonesian}
            </p>
            </div>
            <div className="button-container pt-6 pb-8">
              <button
                className="p-3 rounded-md border-2 bg-gray-300"
                onClick={startListening}
              >
                {" "}
                Start Talking{" "}
              </button>
              <button
                className="p-3 rounded-md border-2 bg-gray-300"
                onClick={showPhrases}
              >
                Start New Test
              </button>
              <button
                className="p-3 rounded-md border-2 bg-gray-300"
                onClick={playPhrase}
              >
                Let's Hear It
              </button>
            </div>
            <p className="py-5">Result : </p>
            <div className="result flex flex-col items-center justify-center">
              {isSpeechTrue ? (
                <p className="py-5 w-full text-center bg-contain bg-green-500">
                  {transcript}
                </p>
              ) : (
                <p className="py-5 w-full text-center bg-contain bg-red-500 ">
                  {transcript}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SpeakingPractice;
