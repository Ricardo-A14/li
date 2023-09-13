import { useState } from "react";

import "./Word.css";

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResult = true;

const Word = ({ word, index }) => {
  const [handleWord, setHandleWord] = useState(null);

  const Empezar = (word) => {
    recognition.start();

    let newWord = word.toLowerCase();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;

      if (newWord === text) {
        alert(`Bien, la palabra es: ${text}`);
      } else {
        alert(`Mal, dijiste algo como: ${text}`);
      }
    };

    setTimeout(() => {
      recognition.stop();

      setTimeout(() => {
        recognition.abort();
      }, 500);
    }, 4000);
  };

  const Escuchar = (word) => {

    const transformWord = new SpeechSynthesisUtterance(word);
    transformWord.rate = 0.7;
    transformWord.lang = 'en-US';
    speechSynthesis.speak(transformWord);
  }

  return (
    <div className="word_c">
      <div className="word">
        <span className="word_item">{word.word}</span>
        <div className="pronunciation_container">
          <span className="pronunciation">{word.pronunciation}</span>
          <button className="listen" onClick={() => Escuchar(word.word)}>Listen</button>
        </div>
        <div className="meaning_word">
          <div className="defi">{word.definition}</div>
          <button className="talk" onClick={() => Empezar(word.word)}>
            Talk
          </button>
          <div className="index">{index}</div>
        </div>
      </div>
    </div>
  );
};

export default Word;
