import { useEffect, useState } from "react";

import "./Word.css";

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResult = true;

const Word = ({ word, index }) => {

  const [backgroundColor, setBackgroundColor] = useState('red');

  useEffect(() => {
    const storedColor = localStorage.getItem(`color-${index}`);
    if (storedColor) {
      setBackgroundColor(storedColor);
    }
  }, [index]);

  const HandleBackground = () => {
    const newColor = backgroundColor === 'red' ? 'chartreuse' : 'red';
    setBackgroundColor(newColor);
    localStorage.setItem(`color-${index}`, newColor);
  }

  const Talk = (word) => {
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

  const Listen = (word) => {
    const transformWord = new SpeechSynthesisUtterance(word);
    transformWord.rate = 0.7;
    transformWord.lang = "en-US";
    speechSynthesis.speak(transformWord);
  };

  return (
    <div className="word_c">
      <div className="word">
        <span className="word_item">{word.word}</span>
        <div className="pronunciation_container">
          <span className="pronunciation">{word.pronunciation}</span>
          <button className="listen" onClick={() => Listen(word.word)}>
            Listen
          </button>
        </div>
        <div className="meaning_word">
          <div className="defi">{word.definition}</div>
          <div className="talk_container">
            <button className="talk" onClick={() => Talk(word.word)}>
              Talk
            </button>
            <div
              key={index}
              style={{ backgroundColor: backgroundColor }}
              className="index"
              onClick={() => HandleBackground()}
            >{index}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Word;
