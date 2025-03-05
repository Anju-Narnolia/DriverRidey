import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
function SideBar() {

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <div className="relative">
            <p className="text-4xl" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <i className={`${isOpen ? "fa-solid fa-xmark " : "fa-solid fa-bars "} text-white border-4 border-white p-1 cursor-pointer`}></i>
            </p>
            <div className={`fixed top-32  right-0 w-80 bg-driverGreen font-bold text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out shadow-lg shadow-black border-2 border-white`} >
                <nav className="flex flex-col space-y-10 p-4 items-center">
                    <li >
                        <Link to="/" className={`${location.pathname === "/" ? "border-b-4 border-black" : ""
                            } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`} >Home</Link>
                    </li>
                    <li className="m-5">
                        <Link to="/about" className={`${location.pathname === "/about" ? "border-b-4 border-black" : ""
                            } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`} >About </Link>
                    </li>
                    <li >
                        <Link to="/safety" className={`${location.pathname === "/safety" ? "border-b-4 border-black" : ""
                            } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`} >  Safety   </Link>
                    </li>
                    <li >
                        <Link to="/career" className={`${location.pathname === "/career" ? "border-b-4 border-black" : ""
                            } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`} >  Career   </Link>
                    </li>
                    <li >
                        <Link to="/contact" className={`${location.pathname === "/contact" ? "border-b-4 border-black" : ""
                            } "hover:text-driverGreen text-white hover:text-gray-700 transition-colors duration-200 text-3xl`}   > Contact</Link>
                    </li>
                </nav>
            </div>
        </div>

    </>)
}
export default SideBar;