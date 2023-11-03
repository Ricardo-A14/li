import Header from "../../Components/Header";

import { useContext } from "react";

import MobileMenu from '../../Components/MobileMenu';

import AppContext from "../../Context";

import "./Layout.css";

const Layout = ({ children }) => {

  const { activeMobileMenu } = useContext(AppContext);


  return (
    <div>
      <div className="layout">
        <Header />
        {activeMobileMenu && <MobileMenu />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
