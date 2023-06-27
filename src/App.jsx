import "./App.css";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col flex-grow md:flex-row border-4 border-sky-500 h-screen">
      <div className="flex md:w-3/12 border-4 border-red-600 bg-brandBlue justify-center">
        <div className=" border-4 w-full border-black justify-around">
          <div className="flex border-4 border-green-700 justify-center items-center">
          <img
            className="border-4 border-yellow-900 m-7 md:w-48 w-24"
            src="images/TWO SEAS WEB LOGO Transparent Bkgrnd.png"
            alt="Image Description"
          />
          </div>
          <div className="nav  md:pt-7 border-4 border-brandCyan justify-center content-center">
            <nav className="flex flex-row md:flex-col text-lg md:text-3xl justify-evenly">
              <span className="text-sm m-7 w-20  text-white md:hover:text-black">About</span>
              <span className="text-sm m-7 w-20  text-white md:hover:text-black">Shop</span>
              <span className="text-sm m-7 w-20 text-white md:hover:text-black">Contact</span>
              <div className="hidden md:flex">
                < FaInstagramSquare className=" ml-6 text-black md:hover:text-brandCyan" size="60" />
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-grow border-4 border-yellow-500">
        <div className="flex flex-col flex-grow border-4 border-green-300">
          <div className="flex h-1/3 border-4 border-black">BANNER</div>

          <div className="flex flex-grow border-4 border-cyan-800">
            <div className="flex border-4 border-purple-600 flex-grow">
              <div className="flex border-4 border-teal-300 w-2/5">
                <p>HELLO</p>
              </div>
              <div className="flex border-4 border-orange-400 flex-grow justify-end">
                <img
                  className="border-4 border-red-600 h-auto w-64 md:w-96"
                  src="images/Two Seas Mascot Logo 1.png"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
