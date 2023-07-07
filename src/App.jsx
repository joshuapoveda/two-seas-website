import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
function App() {
  return (
    // <div className="border-2 border-uciBlue">
    //   <div className="border-2 border-uciWhite">
    //     <div className="border-2 border-uciBlack">
    //       <div className="border-2 border-uciYellow">
    //         <div className="border-2 border-uciGreen">
    //           <div className="border-2 border-uciRed">
    <div className="outer-box">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
