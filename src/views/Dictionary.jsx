import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Dictionary() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
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
    var utterThis = new SpeechSynthesisUtterance(resultText);
    utterThis.lang = "ko-KR";
    utterThis.rate = 0.7;
    window.speechSynthesis.speak(utterThis);
  }
  function playPhraseId() {
    var utterThis = new SpeechSynthesisUtterance(transcript);
    utterThis.lang = "id-ID";
    utterThis.rate = 0.7;
    window.speechSynthesis.speak(utterThis);
  }
  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>

      <div>
        <div className="flex  items-center justify-center ">
          <Form>
            <Form.Field
              control={TextArea}
              className=" p-5 m-3 text-center rounded-md"
              onChange={() => setInputText(transcript)}
              value={transcript}
            />

            <Form.Field
              control={TextArea}
              className=" p-5 m-3 text-center rounded-md"
              placeholder="Your Result Translation.."
              value={resultText}
            />

            <Button color="orange" size="large" onClick={translateText}>
              <Icon name="translate" />
              Translate
            </Button>
            <button className="mx-5" onClick={playPhraseKr}>
              pencet bang
            </button>
            <button onClick={playPhraseId}>pencet bang</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
