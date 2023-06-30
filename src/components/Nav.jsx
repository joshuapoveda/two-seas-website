
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const nav = () => {
  return (
    <div >
    <div className="nav-box ">
      <div className="inner-nav-box">
        <div className="logo-box">
          <img
            className=" m-3 md:m-7 md:w-48 w-24"
            src="images/TWO SEAS WEB LOGO Transparent Bkgrnd.png"
            alt="Image Description"
          />
        </div>
        <div className="nav">
          <nav className="links-box">
            <span className="text-xs pl-2 md:p-0 md:text-xl md:m-7 w-20 sm:pl-0 text-white md:hover:text-blue-950">
              <Link to="/">About</Link>
            </span>
            <span className="text-xs lg:pl-0 pl-5 md:pl-2 md:p-0 md:text-xl md:m-7 w-20  text-white md:hover:text-blue-950">
              Shop
            </span>

            <span className="text-xs pl-2 md:p-0 md:text-xl md:m-7 w-20 text-white md:hover:text-blue-950">
             <Link to="/contact">Contact</Link>
            </span>
            
            {/* <div className="hidden md:flex">
              <FaInstagramSquare
                className=" ml-6 text-black md:hover:text-brandCyan"
                size="60"
              />
            </div> */}
          </nav>
        </div>
      </div>
    </div>
    </div>
  )
}

export default nav