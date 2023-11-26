// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./MyStyle.css";
import Navbar from "./components/navbar";
import HomePage from "./components/Home";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/All" element={<HomePage />} />
      <Route path="/Navbar" element={<Navbar />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
