import { Link } from "react-router-dom";
import GoogleStore from "../Img/play_store.svg";
import AppStore from "../Img/app_store.svg";
import logo from "../Img/logo-removebg-.png";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear();
  const [msg, setMsg] = useState("");
  const location = useLocation();
  const formRef = useRef(null);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function msgChange(event) {
    event.preventDefault();
    const email = formRef.current.email.value;
    if (!validateEmail(email)) {
      setMsg("Please enter a valid email address.");
      return;
    }

    setMsg(
      "Thank you for your application! We’ll review it and get back to you soon."
    );
    formRef.current.reset();
  }
  useEffect(() => {
    setMsg("");
  }, [location.pathname]);
  return (
    <>
      <div className="bg-black text-white md:p-5">
        <div className="flex lg:flex-row flex-col lg:gap-5 items-center justify-center p-3">
          <img className="w-60" src={logo} alt="logo" />
          <div>
            <p className="text-gray-300 text-lg text-center lg:text-wrap">
              Your trusted ride, anytime. Connecting owners with professional
              drivers effortlessly.
            </p>
          </div>
        </div>
        <div className="flex-col lg:flex-row flex justify-between gap-5 p-3">
          {/* col1 */}
          {/* <div className=" lg:w-1/5 flex flex-col lg:gap-5 items-center lg:items-start">
            <img className="w-60" src={logo} alt="logo" />
            <div>
              <p className="text-gray-300 text-lg text-center lg:text-wrap">
                Your trusted ride, anytime. Connecting owners with professional
                drivers effortlessly.
              </p>
            </div>
          </div> */}
          {/* cpl2 */}
          <div className="items-center w-full lg:w-1/5 md:p-5">
            <p className="font-bold mb-2 md:mb-4 text-center md:text-2xl text-lg relative after:content-[''] after:absolute after:w-[90px] after:h-[3px] after:bg-driverGreen after:-bottom-1 after:left-1/2 after:-translate-x-1/2">
              Download App
            </p>
            <div className=" flex flex-row lg:flex-col gap-10 justify-center items-center pt-2">
              <a href="https://labs.google.com/search?source=ntp">
                <img
                  className="w-40 md:w-50"
                  src={GoogleStore}
                  alt="PlayStore"
                />
              </a>
              <a href="https://labs.google.com/search?source=ntp">
                <img className="w-40 md:w-50" src={AppStore} alt="AppStore" />
              </a>
            </div>
          </div>
          {/* col3 */}
          <div className="lg:p-2 md:p-5 lg:w-1/6 ">
            {/* <p className="font-bold mb-2 md:mb-4 text-center lg:text-2xl md:text-2xl text-lg">
              Quick Links
            </p> */}
            <p className="font-bold mb-2 md:mb-4 text-center md:text-2xl text-lg relative after:content-[''] after:absolute after:w-[50px] after:h-[3px] after:bg-driverGreen after:-bottom-1 after:left-1/2 after:-translate-x-1/2">
              Quick Links
            </p>
            <ul className="flex justify-center gap-3 text-md md:text-lg lg:text-xl lg:flex-col text-center">
              <li>
                <Link
                  to="/#"
                  className="hover:text-driverGreen hover:underline "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-driverGreen hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="hover:text-driverGreen hover:underline"
                >
                  Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="hover:text-driverGreen hover:underline"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-driverGreen hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-driverGreen hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* col4 */}
          <div className="lg:w-1/5 lg:p-5  flex flex-col  items-center">
            <p className="font-bold mb-2 md:mb-4 text-center md:text-2xl text-lg relative after:content-[''] after:absolute after:w-[90px] after:h-[3px] after:bg-driverGreen after:-bottom-1 after:left-1/2 after:-translate-x-1/2">
              Customer Support
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex gap-2 items-center justify-inline">
                  <i className="fa-solid fa-envelope text-driverGreen"></i>
                  <p className="text-white text-md md:text-lg lg:text-xl">
                    Email:
                  </p>
                </div>
                <Link
                  to="mailto:driverrideyofficial@gmail.com"
                  className="text-gray-400"
                >
                  driverrideyofficial@gmail.com
                </Link>
              </div>
              <div>
                <div className="flex gap-2">
                  <i className="fa-solid fa-phone-volume text-driverGreen"></i>
                  <p className="text-white text-md md:text-lg lg:text-xl">
                    {" "}
                    Phone:{" "}
                  </p>
                </div>
                <Link to="tel:+919355090302" className="text-gray-400">
                  +91 (935)-(509)-(0302)
                </Link>
              </div>
              <div>
                <div className="flex gap-2">
                  <i className="fa-solid fa-location-dot text-driverGreen"></i>
                  <p className="text-white text-md md:text-lg lg:text-xl">
                    {" "}
                    Address:
                  </p>
                </div>
                <p className="text-gray-400">Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
          {/* col 4 */}

          <div className=" w-full lg:w-2/6 py-2 lg:py-5 sm:items-center">
            <div className="flex gap-2 justify-center">
              <i className="fa-solid fa-envelope text-driverGreen lg:text-3xl md:text-2xl text-xl"></i>
              <p className="font-bold mb-2 md:mb-4 text-center md:text-2xl text-lg relative after:content-[''] after:absolute after:w-[150px] after:h-[3px] after:bg-driverGreen after:-bottom-1 after:left-1/2 after:-translate-x-1/2">
                Subscribe To Our Newsletter
              </p>
            </div>
            <p className="lg:my-5 mb-2 text-md  md:text-lg lg:text-xl text-gray-400 text-center">
              Subscribe now for news, updates, and exclusive offers in your
              inbox.
            </p>
            <form
              action="#"
              method=""
              className="flex justify-center"
              onSubmit={msgChange}
              ref={formRef}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter email to subscribe"
                className=" px-2 md:px-4 lg:py-3 rounded-s-lg text-black w-3/4 border-driverGreen border-2"
              />
              <button
                className="bg-driverGreen text-white font-bold lg:px-8 py-2 rounded-e-md w-1/3 hover:bg-green-900  border-driverGreen border-2"
                type="submit"
                value="Submit"
              >
                Subscribe
              </button>
            </form>
            {msg && (
              <p className="mt-4 text-center text-white font-semibold">{msg}</p>
            )}
            <div className="flex justify-center gap-10 text-2xl md:text-3xl pt-4 lg:p-5">
              <Link
                to="https://www.linkedin.com/company/driverridey/?viewAsMember=true"
                target="blank"
              >
                <i className="fa-brands fa-linkedin-in text-driverGreen bg-white/20 p-3 rounded-full hover:text-green-600  hover:scale-110"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/company/driverridey/?viewAsMember=true"
                target="blank"
              >
                <i className="fa-brands fa-instagram text-driverGreen bg-white/20 p-3 rounded-full  hover:text-green-600 hover:scale-110"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/company/driverridey/?viewAsMember=true"
                target="blank"
              >
                <i className="fa-brands fa-x-twitter text-driverGreen bg-white/20 p-3 rounded-full    hover:text-green-600 hover:scale-110"></i>
              </Link>
            </div>
          </div>
          {/* mergo-mail and google sheet will used to subscription handle */}
        </div>
        <hr className="border-gray-700 p-2" />
        <div className="text-center lg:p-5 gap-2 lg:flex justify-between">
          <p className="text-xs md:text-md lg:text-xl">
            Copyright © {year} <span className="font-bold">DriverRidey</span>.
            All rights reserved.
          </p>
          <div className="flex flex-row text-xs md:text-md lg:text-xl underline justify-center gap-2 lg:">
            <Link to="/terms-conditions" className="hover:text-driverGreen">
              Terms and Conditions
            </Link>
            |
            <Link to="/privacy-policy" className="hover:text-driverGreen">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
