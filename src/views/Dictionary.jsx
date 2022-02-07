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

  const getLanguageSource = () => {
    axios
      .post(`https://libretranslate.de/detect`, {
        q: inputText,
      })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language);
      });
  };

  const translateText = () => {
    setResultText(inputText);

    getLanguageSource();

    let data = {
      q: transcript,
      source: "id",
      target: "ko",
    };
    axios.post(`https://libretranslate.de/translate`, data).then((response) => {
      setResultText(response.data.translatedText);
    });
  };

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value);
  };

  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      setLanguagesList(response.data);
    });
    translateText();
    getLanguageSource();
  }, [inputText]);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "id" });
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function playPhraseKr() {
    setIsTalkingKr(!isTalkingKr);
    if (isTalkingKr) {
      var utterThis = new SpeechSynthesisUtterance(resultText);
      utterThis.lang = "ko-KR";
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
      utterThis.lang = "id-ID";
      utterThis.rate = 0.7;
      window.speechSynthesis.speak(utterThis);
    } else {
      window.speechSynthesis.cancel();
    }
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center sm:text-5xl my-5">Korean Translator</h1>
        <div className="flex sm:flex-row flex-col w-full px-10 sm:px-24 pb-24 items-center justify-center ">
          <div className="relative my-5 indonesian-container w-full sm:w-1/2 sm:mx-5  flex text-center items-center justify-center border-2 border-black py-14 sm:h-56 overflow-auto">
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
          <div className="relative my-5 korean-container w-full sm:w-1/2 sm:mx-5 flex items-center justify-center border-2 border-black py-14 sm:h-56 overflow-auto">
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
        <button onClick={translateText}>Translate</button>
      </div>
    </div>
  );
}

export default Dictionary;
