import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="outer-box">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
