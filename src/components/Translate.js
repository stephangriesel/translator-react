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
    axios
      .post(`https://libretranslate.com/detect`, {
        q: inputText,
        api_key: "3857b65a-f5e0-42a9-a135-5dcb491681c4",
        source: "",
      })
      .then(response => {
        setDetectLanguageKey(response.data[0].language);
      });
  };
  const translateText = () => {
    setResultText(inputText);

    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
      api_key: "3857b65a-f5e0-42a9-a135-5dcb491681c4",
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
      api_key: "3857b65a-f5e0-42a9-a135-5dcb491681c4",
    };

    axios.get("https://libretranslate.com/languages", data).then(response => {
      setLanguagesList(response.data);
    });

    getLanguageSource();
  }, [inputText]);
  return (
    <div className="h-screen flex flex-col justify-center w-full items-center">
      <h2>Translator</h2>
      <div className="flex flex-col">
        <textarea
          className="p-4 m-2 bg-neutral-400 h-40"
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
          className="p-4 m-2 bg-neutral-400 h-40"
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
