// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./components/Home";
import "./MyStyle.css";
import Navbar from "./components/navbar";

function App() {
  <BrowserRouter>
  <Routes>  

  <Route path="/All" element={<All />} />
  <Route path="/Navbar" element={<Navbar />} />



  </Routes>
    </BrowserRouter>
    }

export default App;
