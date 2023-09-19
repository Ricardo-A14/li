import Words from "../../Components/Words";

import { words } from "../../mg/english";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="words_container">
        <div className="titles">
          <span>Palabra</span>
          <span className="pronunciation_t">Pronunciación</span>
          <span className="meaning">Significado</span>
        </div>
      </div>

      {words.map((element, index) => {
        return <Words word={element} index={index} key={index} />;
      })}
    </div>
  );
};

export default Home;
