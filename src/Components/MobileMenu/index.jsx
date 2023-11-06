
import { useContext } from "react";

import { NavLink } from "react-router-dom";

import './MobileMenu.css';

import AppContext from "../../Context";


const MobileMenu = () => {

    const { HandlerMobileMenu } = useContext(AppContext);

    return (
        <aside className="mobile_menu">
            <ul>
                <li>
                    <NavLink
                        to="/li"
                        onClick={() => HandlerMobileMenu()}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/li/reglas/"
                        onClick={() => HandlerMobileMenu()}

                    >Reglas</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/li/reglas-ingles/"
                        onClick={() => HandlerMobileMenu()}
                    >Reglas ingles</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default MobileMenu;
