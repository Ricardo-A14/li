import Words from "../../Components/Words";

import { words } from "../../mg/english";

const Home = () => {

  return (
    <div>
      <div className="words_container">
        <div className="titles">
          <span>Palabra</span>
          <span>Pronunciación</span>
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
