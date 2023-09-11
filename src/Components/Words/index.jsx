import { useState } from "react";

import "./Word.css";

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResult = true;

const Word = ({ word, index }) => {
  const [handleWord, setHandleWord] = useState(null);

  const empezar = (word) => {
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
    }, 3000);
  };

  return (
    <div className="word_c">
      <div className="word">
        <span>{word.word}</span>
        <span>{word.pronunciation}</span>
        <div className="meaning_word">
          <div className="defi">{word.definition}</div>
          <button className="talk" onClick={() => empezar(word.word)}>
            Talk
          </button>
          <div className="index">{index}</div>
        </div>
      </div>
    </div>
  );
};

export default Word;
