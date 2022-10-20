import React, { useState, useEffect } from 'react';
import TranslateIcon from './icons/TranslateIcon';
import axios from 'axios';

const Translate = () => {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [languagesList, setLanguagesList] = useState([])

    const translateText = () => {
        setResultText(inputText);
    }

    const languageKey = (selectedLanguage) => {
        console.log(selectedLanguage.target.value)
    }

    useEffect(() => {
        axios.get('https://libretranslate.com/languages')
            .then((response) => {
                setLanguagesList(response.data);
            })

    }, [])
    return (
        <div className='h-screen flex flex-col justify-center w-full items-center'>
            <h2>Translator</h2>
            <div className='flex flex-col'>
                <textarea
                    className='p-4 m-2 bg-neutral-400 h-40'
                    onChange={(e) => setInputText(e.target.value)}
                />
                <select className='m-2 p-2' onChange={languageKey}>
                    {languagesList.map((language) => {
                        return (
                            <option value={language.code}>{language.name}</option>
                        )
                    })}
                </select>
                <textarea
                    className='p-4 m-2 bg-neutral-400 h-40'
                    value={resultText}
                />
                <button
                    className='m-2 p-2 flex justify-center'
                    onClick={translateText}
                >
                    <TranslateIcon />
                </button>
            </div>
        </div>

    )
}

export default Translate