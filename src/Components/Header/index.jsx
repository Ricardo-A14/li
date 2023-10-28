import { NavLink } from "react-router-dom";

import AppContext from "../../Context";


import "./Header.css";
import { useContext } from "react";

const Header = () => {

  const { ActiveNote } = useContext(AppContext);

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
          </ul>
        </div>
        <div className="nav_right">
          <div onClick={() => ActiveNote()}>Notas</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
