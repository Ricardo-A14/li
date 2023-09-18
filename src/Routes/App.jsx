import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Introduction from "../Pages/Introduction";
import Rules from "../Pages/Rules";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/li" element={<Home />} />
          {/* <Route path="/li/introduccion" element={<Introduction />} /> */}
          <Route path="/li/reglas" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
