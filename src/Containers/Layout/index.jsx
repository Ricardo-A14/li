import Header from "../../Components/Header";

import { useContext } from "react";

import MobileMenu from '../../Components/MobileMenu';
import Notes from "../../Components/Notes";


import AppContext from "../../Context";

import "./Layout.css";

const Layout = ({ children }) => {

  const { activeMobileMenu, notesState } = useContext(AppContext);


  return (
    <div>
      <div className="layout">
        <Header />
        {activeMobileMenu && <MobileMenu />}
        {children}
        {notesState ? <Notes /> : null}

      </div>
    </div>
  );
};

export default Layout;
