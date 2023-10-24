import Words from "../../Components/Words";

import { words, auxiliarVerbs, regularVerbs } from "../../mg/english";
import Notes from "../../Components/Notes";

import "./Home.css";

const Home = () => {
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

      {<Notes />}
    </div>
  );
};

export default Home;
