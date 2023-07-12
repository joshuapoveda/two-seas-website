import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Thankspage from "./components/Thankspage"

function App() {
  return (

    <div className="outer-box">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<Thankspage />} />
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
