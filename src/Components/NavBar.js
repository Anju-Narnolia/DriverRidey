import { Link, useLocation } from "react-router-dom";
import logo from "../Img/logo.jpg";
import SideBar from "./SideBar";
import { useState } from "react";

function NavBar() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-driverGreen shadow-md shadow-white">
      <div className="flex items-center justify-between p-5 max-w-7xl mx-auto">
        {" "}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="DriverRidey Logo"
              loading="lazy"
              className="lg:w-72 w-32 md:w-64"
            />
          </Link>
        </div>
        <nav className="justify-center hidden md:flex">
          <ul className="flex flex-row items-center space-x-6">
            <li className="font-bold">
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "border-b-4 border-black" : ""
                } "text-white hover:text-gray-200 transition-colors duration-200`}
              >
                Home
              </Link>
            </li>
            <li className=" font-bold ">
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "border-b-4 border-black"
                    : ""
                } " text-white hover:text-gray-700 transition-colors duration-200`}
              >
                About
              </Link>
            </li>
            <li className="   font-bold">
              <Link
                to="/safety"
                className={`${
                  location.pathname === "/safety"
                    ? "border-b-4 border-black"
                    : ""
                } " text-white hover:text-gray-700 transition-colors duration-200`}
              >
                Safety
              </Link>
            </li>
            <li className="   font-bold ">
              <Link
                to="/career"
                className={`${
                  location.pathname === "/career"
                    ? "border-b-4 border-black"
                    : ""
                } " text-white hover:text-gray-700 transition-colors duration-200`}
              >
                Career
              </Link>
            </li>
            <li className="   font-bold ">
              <Link
                to="/faq"
                className={`${
                  location.pathname === "/faq" ? "border-b-4 border-black" : ""
                } " text-white hover:text-gray-700 transition-colors duration-200`}
              >
                FAQ
              </Link>
            </li>
            <li className="   font-bold ">
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact"
                    ? "border-b-4 border-black"
                    : ""
                } " text-white hover:text-gray-700 transition-colors duration-200`}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                className="bg-black block hover:bg-gray-700 text-white  :text-2xl lg:text-lg font-semibold rounded-full px-5 py-2 transition duration-200 "
                onClick={togglePopUp}
              >
                {" "}
                Download App{" "}
              </button>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-white text-sm font-medium px-3 py-5 "
            onClick={togglePopUp}
          >
            Download App
          </button>
          <SideBar />
        </div>
        {isPopUpVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
            <div className="bg-gray-300  rounded-lg shadow-lg p-2">
              {/* <div className="bg-white rounded-xl shadow-xl p-4 m-4 max-w-sm w-full"> */}
              <div className=" ">
                <button
                  className="text-black text-lg font-bold hover:text-gray-800 hover:bg-white hover:rounded-full  w-8 h-8 flex items-center justify-center"
                  onClick={() => setIsPopUpVisible(false)}
                >
                  ✖
                </button>
              </div>
              <div className="text-center flex p-4 flex-col">
                <h2 className="text-xl font-bold "> Download App</h2>
                <a
                  href="https://labs.google.com/search?source=ntp"
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-40 m-2 "
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="PlayStore"
                  />
                </a>
                <a
                  href="https://labs.google.com/search?source=ntp"
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-40 m-2 "
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="PlayStore"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default NavBar;
