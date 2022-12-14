import React, { useState, useEffect } from "react";
import TranslateIcon from "./icons/TranslateIcon";
import axios from "axios";

const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedLanguageKey, setSelectedLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [detectLanguageKey, setDetectLanguageKey] = useState("");

  const getLanguageSource = () => {
    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
      api_key: process.env.REACT_APP_API_KEY,
    };
    axios.post(`https://libretranslate.com/detect`, data).then(response =>  {
      setDetectLanguageKey(response.data[0].language);
    })
  };
  const translateText = () => {
    setResultText(inputText);

    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
      api_key: process.env.REACT_APP_API_KEY,
    };
    axios.post(`https://libretranslate.com/translate`, data).then(response => {
      setResultText(response.data.translatedText);
    });
  };

  const languageKey = selectedLanguage => {
    setSelectedLanguageKey(selectedLanguage.target.value);
  };

  useEffect(() => {
    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
      api_key: process.env.REACT_APP_API_KEY,
    };

    axios.get("http://localhost:8888/languages", data).then(response => {
      setLanguagesList(response.data);
    });

    getLanguageSource();
  }, [inputText]);
  return (
    <div className="h-screen flex flex-col justify-center w-full items-center">
      <div className="flex flex-col p-8 rounded-lg shadow-black bg-gray-100">
        <textarea
          className="p-4 m-2 bg-neutral-400 h-40 rounded-lg"
          onChange={e => setInputText(e.target.value)}
        />
        <select className="m-2 p-2" onChange={languageKey}>
          <option>Select language</option>
          {languagesList.map(language => {
            return (
              <option key={language.code} readOnly value={language.code}>
                {language.name}
              </option>
            );
          })}
        </select>
        <textarea
          className="p-4 m-2 bg-neutral-400 h-40 rounded-lg"
          readOnly
          value={resultText}
        />
        <button className="m-2 p-2 flex justify-center" onClick={translateText}>
          <TranslateIcon />
        </button>
      </div>
    </div>
  );
};

export default Translate;
