// import hero1 from "../Img/hero1.png";
import hero2 from "../Img/hero2.png";
import hero3 from "../Img/hero3.png";
import grid2 from "../Img/grid2.png";
import grid1 from "../Img/grid1.png";
import grid3 from "../Img/whyUs.jpeg";
import grid5 from "../Img/grid3.png";
import grid4 from "../Img/grid4.png";
import Review from "./Review";

function Header() {
  return (
    <div className="lg:mt-24">
      <div className="p-10 items-center grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center my-10 gap-1 p-5">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <div class="absolute top-4 -left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-lg rounded-l-[70px] rounded-br-[70px]"></div>
              <img
                src={hero2}
                alt="hero1"
                className="rounded-l-[70px] rounded-br-[70px] z-10 relative border-2 border-white"
              />
            </div>
            <div className="h-20 bg-driverGreen/70 rounded-l-[70px] rounded-tr-[70px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" h-20 bg-driverGreen/70 rounded-t-[70px] rounded-br-[70px] "></div>
            <div className="relative">
              <div class="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-lg rounded-b-[70px] rounded-tr-[70px]"></div>
              <img
                src={hero3}
                alt="hero2"
                className="rounded-b-[70px] rounded-tr-[70px] h-1/4 z-10 relative border-2 border-white"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="font-bold lg:text-6xl  md:text-4xl text-3xl">
            Seamless Rides, Anytime, Anywhere
          </h1>
          {/* <h1 className="font-bold lg:text-6xl  md:text-4xl text-3xl">
            Find Reliable Drivers at Your Fingertips!
          </h1> */}
          <p className="text-lg lg:text-3xl mt-4 w-3/4">
            Experience hassle-free travel with our professional drivers. We
            handle the wheel while you focus on what matters.
          </p>
          <p className="text-lg lg:text-2xl mt-4 w-3/4">
            <strong className="text-driverGreen">DriverRidey</strong>
            connects people who need a ride with skilled drivers in an easy,
            efficient, and secure way. Whether you're looking for a ride or
            ready to offer your driving services, we’ve got you covered.
          </p>
        </div>
      </div>
      {/* how work */}
      <div className="py-16 px-4">
        <p className="lg:text-5xl text-3xl md:text-4xl font-bold text-gray-800 text-center">
          How It Works
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between lg:m-5">
          <div className="flex m-5 gap-5">
            <div className="">
              <div className="relative">
                <div class="absolute top-2 lg:top-4 left-2 lg:left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-b-[50px] rounded-t-[50px] lg:rounded-b-[70px] lg:rounded-t-[70px]"></div>
                <img
                  src={grid2}
                  alt="grid"
                  className="relative rounded-b-[50px] rounded-t-[50px] border-2 border-white lg:rounded-b-[70px] lg:rounded-t-[70px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative">
                <div class="absolute top-2 lg:top-4 left-2  lg:left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-b-[30px] rounded-t-[30px] lg:rounded-b-[50px] lg:rounded-t-[50px]"></div>
                <img
                  src={grid4}
                  alt="grid"
                  className="relative rounded-b-[30px] border-2 border-white rounded-t-[30px] lg:rounded-b-[50px] lg:rounded-t-[50px]"
                />
              </div>
              <div className="relative">
                <div class="absolute top-2 lg:top-4 left-2  lg:left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-b-[30px] rounded-t-[30px] lg:rounded-b-[50px] lg:rounded-t-[50px]"></div>
                <img
                  src={grid1}
                  alt="grid"
                  className="relative rounded-b-[30px] border-2 border-white rounded-t-[30px] lg:rounded-b-[50px] lg:rounded-t-[50px]"
                />
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className=" flex flex-col ml-10 mt-5">
            {[
              {
                step: 1,
                title: "Sign Up/Login",
                desc: "Download the app and create your account effortlessly with just a few details.",
              },
              {
                step: 2,
                title: "Find a experienced Driver",
                desc: "Select your preferred date, time, and location effortlessly. Our system will quickly match you with a driver.",
              },
              {
                step: 3,
                title: "Meet Your Driver",
                desc: "Your driver arrives punctually, ready to take you to your destination safely.",
              },
              {
                step: 4,
                title: "Enjoy Your Ride",
                desc: "Sit back and relax while our experienced drivers provide a comfortable journey.",
              },
              {
                step: 5,
                title: "Review our Service",
                desc: "Share your feedback and help us improve our service.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-driverGreen text-white font-bold rounded-full">
                    {item.step}
                  </div>
                  {index !== 4 && (
                    <div className="w-1 h-16 bg-driverGreen"></div>
                  )}
                </div>
                <div>
                  <p className="font-bold text-xl lg:text-lg">{item.title}</p>
                  <p className="text-gray-600 text-base lg:text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* why us */}
      <div className="p-5 lg:p-10 items-center">
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-gray-800 lg:mb-8 m-5">
          Why Choose Us
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div className="lg:w-1/2 lg:m-10 m-5 flex flex-col gap-3">
            {/* First child (aligned left) */}
            <div className="flex justify-start">
              <div className="relative w-2/3">
                <div className="absolute -top-2 lg:-top-4 -left-2 lg:-left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-b-[20px] rounded-t-[20px] lg:rounded-b-[40px] lg:rounded-t-[40px]"></div>
                <img
                  src={grid3}
                  alt="Car"
                  loading="lazy"
                  className="rounded-bl-[20px] rounded-t-[20px] lg:rounded-bl-[40px] lg:rounded-t-[40px] w-full relative border-2 border-whit"
                />
              </div>
            </div>

            {/* Second child (aligned right) */}
            <div className="flex justify-end">
              <div className="relative w-2/3">
                <div className="absolute top-2 lg:top-4 left-2 lg:left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-b-[20px] rounded-t-[20px] lg:rounded-b-[40px] lg:rounded-t-[40px]"></div>
                <img
                  src={grid5}
                  alt="Car"
                  loading="lazy"
                  className="rounded-b-[20px] rounded-tr-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] w-full relative border-2 border-whit"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:m-10 m-5">
            <div className=" bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition">
              <i className="fa-solid fa-clock-rotate-left bg-driverGreen rounded-full px-4 py-3 border-2 border-white text-white  text-3xl lg:text-4xl hover:scale-105 m-2"></i>
              <div>
                <span className="block text-xl lg:text-2xl font-bold text-gray-700">
                  24/7 Support
                </span>
                <p className="text-sm text-gray-800">
                  We are here to assist you at any time of the day.
                </p>
              </div>
            </div>
            <div className=" bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition">
              <i className="fa-solid fa-user-shield bg-driverGreen rounded-full px-3 py-3 border-2 border-white text-white  text-3xl lg:text-4xl hover:scale-105"></i>
              <div>
                <span className="block text-xl lg:text-2xl font-bold text-gray-700">
                  Verified Drivers
                </span>
                <p className="text-sm text-gray-800">
                  All our drivers are thoroughly verified for your safety.
                </p>
              </div>
            </div>
            <div className=" bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition">
              <i className="fa-solid fa-hand-holding-dollar bg-driverGreen rounded-full px-3 py-3 border-2 border-white text-white  text-3xl lg:text-4xl hover:scale-105"></i>
              <div>
                <span className="block text-xl lg:text-2xl font-bold text-gray-700">
                  Affordable Rates
                </span>
                <p className="text-sm text-gray-800">
                  High-quality service at competitive prices.
                </p>
              </div>
            </div>
            <div className=" bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition">
              <i className="fa-solid fa-check text-white bg-driverGreen rounded-full px-4 py-3 border-2 border-white text-3xl lg:text-4xl hover:scale-105"></i>
              <div>
                <span className="block text-xl lg:text-2xl font-bold text-gray-700">
                  Reliable Service
                </span>
                <p className="text-sm text-gray-800">
                  We prioritize dependability to ensure your needs are met
                  consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div div className="py-16 bg-white px-6 md:px-12">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-gray-800 lg:mb-8 m-5">
          Our Values
        </h2>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:m-10 ">
          <div className=" relative bg-gray-50 p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
            <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full border-2 border-driverGreen px-4 py-3">
              <i className="fa-brands fa-accessible-icon text-driverGreen text-2xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-gray-800 pt-3">
              Accessibility
            </p>
            <p className="text-gray-600 mt-2 text-xs lg:text-sm">
              We believe everyone should have access to reliable transportation
              options.
            </p>
          </div>
          <div className=" relative bg-gray-50 p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
            <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 border-2 border-driverGreen py-3">
              <i className="fa-solid fa-people-arrows text-driverGreen hover:rotate-360 text-2xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-gray-800 pt-3">
              Community Connection
            </p>
            <p className="text-gray-600 mt-2 text-xs lg:text-sm">
              We connect car owners and drivers, fostering a supportive travel
              community.
            </p>
          </div>
          <div className=" relative bg-gray-50 pt-5 p-2 lg:p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
            <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-driverGreen px-5">
              <i className="fa-solid fa-chalkboard-user text-driverGreen hover:rotate-360 text-2xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-gray-800 pt-3">
              User-Centric Design
            </p>
            <p className="text-gray-600 mt-2 text-xs lg:text-sm">
              We focus on creating a user-friendly app that caters to the
              specific needs of our users.
            </p>
          </div>
          <div className=" relative bg-gray-50 p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
            <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-driverGreen px-5">
              <i className="fa-solid fa-user-shield text-driverGreen hover:rotate-360 text-2xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-gray-800 pt-3">
              Integrity
            </p>
            <p className="text-gray-600 mt-2 text-xs lg:text-sm">
              Transparency and honesty are fundamental to our operations,
              ensuring trust between all parties.
            </p>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div>
        <Review />
      </div>
    </div>
  );
}
export default Header;
