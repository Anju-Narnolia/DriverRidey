import { useState } from "react";
import driver from "../Img/driver-safety.jpg";
import owner from "../Img/owner-safety.jpg";
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
          >
            {" "}
            Owner{" "}
          </button>
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
        <div className="relative overflow-hidden flex flex-col lg:flex-row">
          <div className=" transition-transform duration-1000 ease-in-out text-center lg:w-1/2  flex justify-center">
            <div className="w-3/4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-950 text-center m-5 underline decoration-driverGreen">
                {currentOwner ? "Owner" : "Driver"} Safety
              </h2>
              <p className="text-gray-800 text-center lg:text-lg text-md lg:ml-10 items-center flex justify-center">
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
      <div className="flex justify-center">
        <div className="flex justify-center lg:w-2/3 bg-driverGreen p-10 m-10 items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="mb-12 text-wrap">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Measures to ensure the well-being of both, our Owner and Driver.
              </h3>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <i className="fa-solid fa-headset  text-6xl text-white"></i>
                <h3 className="lg:text-xl text-2xl font-bold text-white">
                  24 x 7 Customer Support
                </h3>
                <p className="text-white text-xl lg:text-xs  mt-2">
                  Both, our owners and drivers can report any kind of issues to
                  DriverRidey through the 24×7 support feature on the app post &
                  during the ride.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div>
                <i className="fa-solid fa-umbrella  text-6xl text-white"></i>
                <h3 className="lg:text-xl text-2xl  font-bold text-white">
                  Insurance
                </h3>
                <p className="text-white text-xl lg:text-xs  mt-2">
                  Insurance can be claimed for any accident that occurs during
                  the ride covering OPD treatment, hospitalisation, and
                  accidental benefit with a maximum sum insured of ₹5 Lakh. It
                  can be claimed as soon as the ride ends.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start space-x-4">
              <div>
                <i className="fa-solid fa-user-shield  text-6xl text-white"></i>
                <h3 className="lg:text-xl text-2xl  font-bold text-white">
                  Verified Drivers
                </h3>
                <p className="text-white text-xl lg:text-xs  mt-2">
                  All DriverRidey's driver undergo a strict background
                  verification process and training to ensure safety and quality
                  service for every ride.{" "}
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
