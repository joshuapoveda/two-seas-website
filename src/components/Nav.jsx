
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const nav = () => {
  return (
    <div >
    <div className="nav-box">
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
            <span className="text-sm md:text-2xl md:m-7 w-20  text-white md:hover:text-black">
              <Link to="/">About</Link>
            </span>
            <span className="text-sm pl-5 md:p-0 md:text-2xl md:m-7 w-20  text-white md:hover:text-black">
              Shop
            </span>

            <span className="text-sm md:text-2xl md:m-7 w-20 text-white md:hover:text-black">
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