
import { useContext, useEffect, useState } from "react";

import Words from "../../Components/Words";

import { words, regularVerbs, irregularVerbs, phrasalVerbs, verbToBe, auxiliarVerbs } from "../../mg/english";

import AppContext from '../../Context';

import "./Home.css";

const Home = () => {


  const allWords = [...words, ...verbToBe, ...auxiliarVerbs, ...regularVerbs, ...irregularVerbs, ...phrasalVerbs];



  return (
    <div className="home">
      <div className="words_container">
        <div className="titles">
          <span>Palabra</span>
          <span className="pronunciation_t">Pronunciación</span>
          <span className="meaning">Significado</span>
        </div>
      </div>

      {allWords.map((element, index) => {
        return <Words word={element} index={index} key={index} />;
      })}
    </div>
  );
};

export default Home;
