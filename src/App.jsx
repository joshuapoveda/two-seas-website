import "./App.css";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";

function App() {
  return (
    <div className="outer-box">
      <div className="nav-box">
        <div className="inner-nav-box">
          <div className="logo-box">
            <img
              className="border-4 border-yellow-900 m-3 md:m-7 md:w-48 w-24"
              src="images/TWO SEAS WEB LOGO Transparent Bkgrnd.png"
              alt="Image Description"
            />
          </div>
          <div className="nav">
            <nav className="links-box">
              <span className="text-sm md:text-2xl md:m-7 w-20  text-white md:hover:text-black">
                About
              </span>
              <span className="text-sm pl-5 md:p-0 md:text-2xl md:m-7 w-20  text-white md:hover:text-black">
                Shop
              </span>
              <span className="text-sm md:text-2xl md:m-7 w-20 text-white md:hover:text-black">
                Contact
              </span>
              <div className="hidden md:flex">
                <FaInstagramSquare
                  className=" ml-6 text-black md:hover:text-brandCyan"
                  size="60"
                />
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-grow border-4 border-yellow-500">
        <div className="flex flex-col flex-grow border-4 border-green-300">
          <div className="flex h-72 md:h-2/3 border-8 border-black">
            <h2 className="text-xl p-5 tracking-wider">
              Your shop for everything in between
            </h2>
          </div>
          <div className="flex justify-end md:hidden">
            <img
              className=" border-4 border-red-600 h-auto w-3/4 md:w-96"
              src="images/Two Seas Mascot Logo 1.png"
              alt="Image Description"
            />
          </div>

          <div className="hidden md:flex flex-grow border-4 border-cyan-800">
            <div className="flex border-4 border-purple-600 flex-grow">
              <div className="sm:flex border-4 hidden border-teal-300 sm:w-96 md:w-1/2">
                <p>HELLO</p>
              </div>
              <div className="flex border-4 border-orange-400 flex-grow justify-end">
                <img
                  className="border-4 border-blue-600 h-auto sm:h-96 w-auto md:w-96"
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
