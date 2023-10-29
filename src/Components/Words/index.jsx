import { useState } from "react";

import "./Word.css";

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResult = true;

const Word = ({ word, index }) => {
  const [backgrounColor, setBackgroundColor] = useState('red');
  const [color, setColor] = useState('white');
  const [handleColor, setHandleColor] = useState(false);

  const Background = () => {

    setHandleColor(!handleColor);
    if (handleColor) {

      setBackgroundColor('chartreuse');
      setColor('black');
    } else {
      setBackgroundColor('red');
      setColor('white');

    }
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
              onClick={() => Background()}
              style={{ backgroundColor: backgrounColor, color: color }}
              className="index">{index}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Word;
