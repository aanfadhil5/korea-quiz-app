import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { supabase } from "../SupabaseClient";
import { transliterate as slugify } from 'transliteration';
import axios from "axios";

function SpeakingPractice() {

  const [randomPhrases, setRandomPhrases] = useState("");
  const [isSpeechTrue, setIsSpeechTrue] = useState(false);
  const [session, setSession] = useState(null);
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  

  const phrases = [
    "안녕하세요",
    "반갑습니다",
    "감사합니다",
    "밥 먹었어요",
    "잠시만요",
    "죄송합니다",
    "얼마예요",
    "많이 드세요",
    "잘 먹겠습니다",
    "한국",
    "호주",
    "영국",
    "안녕히 가세요","의사예요",
    '최시원'
    // "bebek","motor"
  ];


  const translateText = () =>{
    setResultText(inputText);
    let dataKr = {
      q: randomPhrases,
      source: "ko",
      target: "id",
    };


    axios
        .post(`https://libretranslate.de/translate`, dataKr)
        .then((response) => {
          console.log(response.data.translatedText);
        });
  }
  
  const {
    transcript,
    resetTranscript,
  } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false, language: "ko" });

    console.log(isSpeechTrue);
  };

  const showPhrases = () => {
    setRandomPhrases(phrases[Math.floor(Math.random() * phrases.length)]);
    resetTranscript();
  };
  const correction = () => {
    if (transcript.toLowerCase() === randomPhrases.toLowerCase()) {
      setIsSpeechTrue(true);
    } else {
      setIsSpeechTrue(false);
    }
  };

  function playPhrase() {
    var utterThis = new SpeechSynthesisUtterance(randomPhrases);

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
            <div className="border-2 w-full border-slate-800 py-10">
            <p className="text-3xl text-center ">
              {randomPhrases}
            </p>
            <p className="text-base text-slate-500 text-center">
              {slugify(randomPhrases)}
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
