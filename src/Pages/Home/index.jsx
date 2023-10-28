import Words from "../../Components/Words";

import { words, auxiliarVerbs, regularVerbs } from "../../mg/english";
import Notes from "../../Components/Notes";

import AppContext from '../../Context';

import "./Home.css";
import { useContext } from "react";

const Home = () => {

  const { notesState } = useContext(AppContext);

  const allWords = [...words, ...auxiliarVerbs, ...regularVerbs];

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

      {notesState ? <Notes /> : null}

    </div>
  );
};

export default Home;
