import { NavLink } from "react-router-dom";

import AppContext from "../../Context";

import "./Header.css";

import { useContext } from "react";

const Header = () => {

  const { ActiveNote, wordCounter } = useContext(AppContext);

  return (
    <div className="header">
      <nav className="nav">
        <div className="nav_left">
          <div className="mobile_menu">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul>
            <li>
              <NavLink to="/li/reglas/">Reglas</NavLink>
            </li>
            <li>
              <NavLink to="/li/reglas-ingles/">Reglas ingles</NavLink>
            </li>
          </ul>
        </div>

        <div className="nav_right">
          <div className="notes" onClick={() => ActiveNote()}>Notas</div>
          <div className="learned_words">
            <p>Palabras: </p>
            <span>{wordCounter.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
