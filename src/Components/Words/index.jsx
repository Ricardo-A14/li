
import { useState } from 'react';

import './Word.css';

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResult = false;


const Word = ({ word, index }) => {

    const [handleWord, setHandleWord] = useState(null);


    const empezar = (word) => {

        recognition.start();

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            console.log(text);
        }

        setTimeout(() => {
            recognition.stop();

            setTimeout(() => {
                recognition.abort();

            }, 1000);
        }, 3000);

    }




    return (
        <div className='word_c'>
            <div className="word">
                <span>{word.word}</span>
                <span>{word.pronunciation}</span>
                <div className='meaning_word'>
                    <div className='defi'>{word.definition}</div>
                    <button className='talk' onClick={() => empezar(word.word)}>Talk</button>
                    <div className='index'>{index}</div>
                </div>
            </div>
        </div>
    )
}

export default Word;

