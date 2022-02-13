import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { supabase } from "../SupabaseClient";

function SpeakingPractice() {
  const [randomPhrases, setRandomPhrases] = useState("");
  const [isSpeechTrue, setIsSpeechTrue] = useState(false);
  const [session, setSession] = useState(null);

  const phrases = [
    "Gelas",
    "Macan",
    "Piring",
    "Teko",
    "Selamat pagi",
    "Selamat malam",
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false, language: "id" });

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

    utterThis.lang = "id-ID";
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
        <h1 className="text-center">login</h1>
      ) : (
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Speaking Practice</h1>
          <p className="pb-7">Press the button then say the phrase given</p>
          <div className="practice-container flex items-center justify-center flex-col">
            <p className="text-3xl border-2 w-full text-center border-slate-800 py-10">
              {randomPhrases}
            </p>
            <div className="button-container py-14">
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
                <p className="py-10 w-full  text-center bg-green-500">
                  {transcript}
                </p>
              ) : (
                <p className="py-10 w-full  text-center bg-red-500">
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
