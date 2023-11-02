import { useContext, useEffect, useState } from "react";

import AppContext from "../../Context";

import "./Word.css";

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResult = true;


const Word = ({ word, index }) => {

  const { wordCounter, setWordCounter } = useContext(AppContext);
  const [backgroundColor, setBackgroundColor] = useState('red');

  const newWordsCounter = [];

  useEffect(() => {

    const storedColor = localStorage.getItem(`color-${index}`);

    if (storedColor) {
      setBackgroundColor(storedColor);
    }

    const getCounter = localStorage.getItem('words_counter');

    if (getCounter) {
      setWordCounter(JSON.parse(getCounter));
    }

  }, [index]);

  const HandleBackground = () => {

    let newColor;

    if (backgroundColor === 'red') {

      newColor = 'chartreuse';

      newWordsCounter.push(...wordCounter, index);
      setWordCounter(newWordsCounter);

      localStorage.setItem('words_counter', JSON.stringify(newWordsCounter));
    }
    else if (backgroundColor === 'chartreuse') {

      newColor = 'red';

      const updateCounter = wordCounter.filter((item) => {
        return item !== index;
      });
      setWordCounter(updateCounter);

      localStorage.setItem('words_counter', JSON.stringify(updateCounter));

    }

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
              className="index"
              key={index}
              style={{ backgroundColor: backgroundColor }}
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
