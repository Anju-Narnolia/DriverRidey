import { useState } from "react";
import driver from "../Img/driver-safety.png";
import owner from "../Img/owner_safety.png";
function Safety() {
  const [currentOwner, setcurrentOwner] = useState(true);
  function handelDriver() {
    setcurrentOwner(false);
  }
  function handelOwner() {
    setcurrentOwner(true);
  }
  return (
    <div className="mt-14">
      <section className="p-5">
        <div className="flex justify-center space-x-6 my-5 lg:my-10">
          <button
            onClick={handelOwner}
            className={`px-9 text-xl lg:text-2xl py-3 font-serif rounded-lg ${
              currentOwner === true
                ? " bg-driverGreen text-white"
                : "bg-gray-200"
            }`}
          >Owner</button>
          <button
            onClick={handelDriver}
            className={`px-9 py-3  text-xl lg:text-2xl font-serif rounded-lg ${
              currentOwner === false
                ? " bg-driverGreen text-white"
                : "bg-gray-200"
            }`}
          >
            Driver
          </button>
        </div>
        <div className="relative overflow-hidden flex flex-col lg:flex-row items-center">
          <div className=" transition-transform duration-1000 ease-in-out text-center lg:w-1/2  flex justify-center">
            <div className="w-3/4">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-950 text-center m-5 underline decoration-driverGreen">
                {currentOwner ? "Owner" : "Driver"} Safety
              </h2>
              <p className="text-gray-800 text-center lg:text-xl text-md lg:ml-10 items-center flex justify-center">
                {currentOwner
                  ? `Looking for someone to drive you safely to your destination? Our trusted drivers ensure your journey is comfortable and stress-free. 
                                   Book a driver easily through our app and enjoy peace of mind while we take care of the rest.`
                  : `Earn by driving safely and professionally. 
                                   Connect with owners who need your expertise and reliability. 
                                   Join our platform to start driving and building your reputation today!`}
              </p>
            </div>
          </div>
          <div className=" flex justify-center mt-6 md:mt-0 content-center">
            <img
              src={currentOwner ? owner : driver}
              alt="Safety"
              loading="lazy"
              className=" rounded-lg shadow-lg ml-5 items-center w-96"
            />
          </div>
        </div>
      </section>

      {/* box */}
      <div className="items-center my-10">
        <div className=" items-center">
          <h3 className="text-2xl lg:text-3xl font-bold p-5 text-center">
            Measures to ensure the well-being of both, our Owner and Driver.
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start space-x-4 bg-driverGreen p-10">
              <div>
                <i className="fa-solid fa-headset text-3xl lg:text-6xl text-white"></i>
                <h3 className="lg:text-xl text-2xl font-bold text-white">
                  24 / 7 Support
                </h3>
                <p className="text-white text-xl lg:text-xs  mt-2">
                  Round-the-clock emergency support for drivers and passengers.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-driverGreen/80  p-10">
              <div>
                <i className="fa-solid fa-headset  text-6xl text-white"></i>
                <h3 className="lg:text-xl text-2xl font-bold text-white">
                  24 / 7 Support
                </h3>
                <p className="text-white text-xl lg:text-xs  mt-2">
                  Round-the-clock emergency support for drivers and passengers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 lg:bg-driverGreen bg-driverGreen/80 p-10">
              <div>
                <i className="fa-solid fa-umbrella  text-6xl text-white"></i>
                <h3 className="lg:text-xl text-2xl  font-bold text-white">
                  Insurance Coverage
                </h3>
                <p className="text-white text-xl lg:text-xs  mt-2">
                  Comprehensive insurance coverage for every ride.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 lg:bg-driverGreen/80 bg-driverGreen p-10">
              <div>
                <i className="fa-solid fa-user-shield  text-6xl text-white"></i>
                <h3 className="lg:text-xl text-2xl  font-bold text-white">
                  Thorough Background Checks
                </h3>
                <p className="text-white text-xl lg:text-xs  mt-2">
                  Every driver undergoes comprehensive background screening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Safety;
