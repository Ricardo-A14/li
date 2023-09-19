import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Introduction from "../Pages/Introduction";
import Rules from "../Pages/Rules";
import Layout from "../Containers/Layout";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/li" element={<Home />} />
            <Route path="/li/introduccion" element={<Introduction />} />
            <Route path="/li/reglas" element={<Rules />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
