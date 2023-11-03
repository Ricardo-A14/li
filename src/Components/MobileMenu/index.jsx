
import { NavLink } from "react-router-dom";

import './MobileMenu.css';


const MobileMenu = () => {
    return (
        <aside className="mobile_menu">
            <ul>
                <li>
                    <NavLink to="/li">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/li/reglas/">Reglas</NavLink>
                </li>
                <li>
                    <NavLink to="/li/reglas-ingles/">Reglas ingles</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default MobileMenu;
