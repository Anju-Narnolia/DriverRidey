import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
function SideBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handelLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative">
        <p
          className="text-4xl"
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          <i
            className={`${
              isOpen ? "fa-solid fa-xmark " : "fa-solid fa-bars "
            } text-white border-4 border-white p-1 cursor-pointer`}
          ></i>
        </p>
        <div
          className={`fixed top-0 right-0 w-full bg-driverGreen font-bold text-white transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out shadow-lg shadow-black border-2 border-white`}
        >
          <nav className="flex flex-col space-y-10 p-4 items-center">
            <p
              className="text-4xl"
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            >
              <i
                className={`${
                  isOpen ? "fa-solid fa-xmark " : "fa-solid fa-bars "
                } text-white border-4 border-white p-1 cursor-pointer`}
              ></i>
            </p>
            <li>
              <Link
                to="/" 
                onClick={handelLinkClick}
                className={`${
                  location.pathname === "/" ? "border-b-4 border-black" : ""
                } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`}
              >
                Home
              </Link>
            </li>
            <li className="m-5">
              <Link
                to="/about"
                onClick={handelLinkClick}
                className={`${
                  location.pathname === "/about"
                    ? "border-b-4 border-black"
                    : ""
                } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`}
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="/safety"
                onClick={handelLinkClick}
                className={`${
                  location.pathname === "/safety"
                    ? "border-b-4 border-black"
                    : ""
                } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`}
              >
                Safety
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                onClick={handelLinkClick}
                className={`${
                  location.pathname === "/career"
                    ? "border-b-4 border-black"
                    : ""
                } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={handelLinkClick}
                className={`${
                  location.pathname === "/faq"
                    ? "border-b-4 border-black"
                    : ""
                } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handelLinkClick}
                className={`${
                  location.pathname === "/contact"
                    ? "border-b-4 border-black"
                    : ""
                } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                className="bg-black block hover:bg-gray-700 text-white  :text-2xl lg:text-lg font-semibold rounded-full px-5 py-2 transition duration-200 "
                // onClick={togglePopUp}
              >
                {" "}
                Download App{" "}
              </button>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}
export default SideBar;
