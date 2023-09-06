import Header from "../../Components/Header";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="layout">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
