import React, { useState, useEffect } from "react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Icon from "react-hero-icon";

function Dictionary() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
  const [isTalkingKr, setIsTalkingKr] = useState(false);
  const [isTalkingId, setIsTalkingId] = useState(false);
  const [isSwapped, setIsSwapped] = useState(true);

  const translateText = () => {
    setResultText(inputText);

    let dataId = {
      q: transcript,
      source: "id",
      target: "ko",
    };

    let dataKr = {
      q: transcript,
      source: "ko",
      target: "id",
    };

    if (isSwapped) {
      axios
        .post(`https://libretranslate.de/translate`, dataId)
        .then((response) => {
          setResultText(response.data.translatedText);
        });
    } else {
      axios
        .post(`https://libretranslate.de/translate`, dataKr)
        .then((response) => {
          setResultText(response.data.translatedText);
        });
    }
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () => {
    if (isSwapped) {
      SpeechRecognition.startListening({ continuous: true, language: "id" });
    } else {
      SpeechRecognition.startListening({ continuous: true, language: "ko" });
    }
  };
  function swapLang() {
    setIsSwapped(!isSwapped);
    console.log(isSwapped);
  }

  function playPhraseKr() {
    setIsTalkingKr(!isTalkingKr);
    console.log(isTalkingKr);
    if (isTalkingKr) {
      var utterThis = new SpeechSynthesisUtterance(resultText);
      if (isSwapped) {
        utterThis.lang = "ko-KR";
      } else {
        utterThis.lang = "id-ID";
      }
      utterThis.rate = 0.7;
      window.speechSynthesis.speak(utterThis);
    } else {
      window.speechSynthesis.cancel();
    }
  }

  function playPhraseId() {
    setIsTalkingId(!isTalkingId);
    if (isTalkingId) {
      var utterThis = new SpeechSynthesisUtterance(transcript);
      if (isSwapped) {
        utterThis.lang = "id-ID";
      } else {
        utterThis.lang = "ko-KR";
      }
      utterThis.rate = 0.7;
      window.speechSynthesis.speak(utterThis);
    } else {
      window.speechSynthesis.cancel();
    }
  }

  return (
    <div>
      <h1 className="text-center sm:text-5xl  my-5">Dictionary</h1>
      <div className="mic-container sm:ml-28 rounded-lg flex flex-col items-start justify-center ">
        <div>
          <p className="mx-2 py-1 my-1  text-center">
            Microphone: {listening ? "on" : "off"}
          </p>
        </div>
        <div>
          <button
            className="mx-2 py-1 bg-gray-400 border-2 hover:scale-125 rounded-md px-2 text-center"
            onClick={startListening}
          >
            Start
          </button>
          <button
            className="mx-2 py-1 border-2 bg-gray-400 hover:scale-125 rounded-md px-2 text-center"
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
          <button
            className="mx-2 py-1 border-2 bg-gray-400 hover:scale-125 rounded-md px-2 text-center"
            onClick={resetTranscript}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center">
        <div className="flex sm:flex-row flex-col w-full px-10 sm:px-24 pb-24 items-center justify-center ">
          <div className="relative my-5 indonesian-container w-full flex text-center items-center justify-center border-2 border-black py-36 sm:py-14 sm:w-1/2 sm:mx-5 sm:h-56 overflow-auto">
            <h3 className="absolute  top-0 left-0">
              {isSwapped ? (
                <h1 className="sm:text-lg text-sm">Indonesia</h1>
              ) : (
                <h1 className="sm:text-lg text-sm">Korean</h1>
              )}
            </h3>
            <p>{transcript}</p>

            <button
              onClick={playPhraseId}
              className="sound-button absolute p-1 sm:p-2 mr-1 bg-[#7b7b7b] rounded-lg bottom-0 right-0"
            >
              <Icon
                className="w-5 h-5 sm:h-7 sm:w-7"
                icon="volume-up"
                type="solid"
              />
            </button>
          </div>
          <button
            className="p-6 border-2 bg-gray-300 hover:bg-gray-400 font-semibold rounded-md"
            onClick={translateText}
          >
            Translate
          </button>

          <div className="relative my-5 korean-container w-full sm:w-1/2 sm:mx-5 flex items-center justify-center border-2 border-black py-36 sm:py-14 sm:h-56 overflow-auto">
            <h3 className="absolute  top-0 left-0">
              {isSwapped ? <h1>Korean</h1> : <h1>Indonesia</h1>}
            </h3>
            <p>{resultText}</p>

            <button
              onClick={playPhraseKr}
              className="sound-button absolute p-1 mr-1  sm:p-2 bg-[#7b7b7b] rounded-lg bottom-0 right-0"
            >
              <Icon
                className="w-5 h-5 sm:h-7 sm:w-7"
                icon="volume-up"
                type="solid"
              />
            </button>
          </div>
        </div>
        <button
          className="sm:ml-28 p-5 mt-[-5rem] mb-10 border-2 bg-gray-300 hover:bg-gray-400 font-semibold rounded-md"
          onClick={swapLang}
        >
          Swap Language
        </button>
      </div>
    </div>
  );
}

export default Dictionary;
