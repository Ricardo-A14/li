
import { useContext, useEffect, useState } from "react";
import Words from "../../Components/Words";

import { words, regularVerbs, irregularVerbs, phrasalVerbs, verbToBe, auxiliarVerbs } from "../../mg/english";
import Notes from "../../Components/Notes";

import AppContext from '../../Context';

import "./Home.css";

const Home = () => {

  const { notesState } = useContext(AppContext);

  const allWords = [...words, ...verbToBe, ...auxiliarVerbs, ...regularVerbs, ...irregularVerbs, ...phrasalVerbs];

  const newWords = allWords.map((obj) => ({ ...obj, color: 'red' }));

  return (
    <div className="home">
      <div className="words_container">
        <div className="titles">
          <span>Palabra</span>
          <span className="pronunciation_t">Pronunciación</span>
          <span className="meaning">Significado</span>
        </div>
      </div>

      {newWords.map((element, index) => {
        return <Words word={element} index={index} key={index} />;
      })}

      {notesState ? <Notes /> : null}

    </div>
  );
};

export default Home;
