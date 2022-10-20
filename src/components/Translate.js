import React, { useState, useEffect } from 'react';
import TranslateIcon from './icons/TranslateIcon';

const Translate = () => {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('')

    const translateText = () => {
        setResultText(inputText);
    }
    return (
        <div className='h-screen flex flex-col justify-center w-full items-center'>
            <h2>Translator</h2>
            <div className='flex flex-col'>
                <textarea
                    className='p-4 m-2 bg-neutral-400'
                    onChange={(e) => setInputText(e.target.value)}
                />
                <select className='m-2 p-2' name="cars" id="cars" form="carform">
                    <option value="za">Afrikaans</option>
                    <option value="gb">English</option>
                    <option value="nl">Dutch</option>
                    <option value="ger">German</option>
                    <option value="fr">French</option>
                    <option value="it">Italian</option>
                    <option value="es">Spanish</option>
                </select>
                <textarea 
                className='p-4 m-2 bg-neutral-400' 
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