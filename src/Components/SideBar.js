import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/safety", label: "Safety" },
    { path: "/career", label: "Career" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="sidebar-container">
      <button
        className="fixed top-0 right-0 z-50 bg-driverGreen p-3 rounded-full hover:bg-driverGreen/90 transition-all duration-300"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <i className="fa-solid fa-bars text-white text-2xl"></i>
      </button>
      {isOpen && (
        <div className="fixed  bg-black/50 backdrop-blur-sm z-40" />
      )}
      <div
        className={`fixed top-0 right-0 left-1/2 h-auto w-full md:w-80 bg-driverGreen shadow-xl  shadow-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-1 right-56 text-white p-2  transition-all duration-300 px-1"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <i className="fa-solid fa-xmark  text-2xl"></i>
        </button>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col h-full p-6">
          <div className="flex flex-col space-y-6 mt-16">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-white text-driverGreen"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
