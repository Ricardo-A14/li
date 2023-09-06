import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Introduction from "../Pages/Introduction";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/li" element={<Home />} />
          <Route path="/li/introduction" element={<Introduction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
