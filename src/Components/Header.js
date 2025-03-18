import heroPhoto from "../Img/hero.jpg";
import drive from "../Img/women-key.jpg";
import how from "../Img/how.jpg";
import think from "../Img/driverthinking.jpg";
// import Video from "../"
import Review from "./Review";

function Header() {
  return (
    <div className="mt-14">
      {/* <div class="relative w-full h-screen overflow-hidden">
                <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
                    <source src="https://videocdn.cdnpk.net/videos/1d4c1162-3d5b-471d-bbdd-e175dd61539c/horizontal/previews/watermarked/large.mp4" type="video/mp4"/>
                      
                </video>
                <div class="relative z-10 flex items-center justify-center h-full text-white text-center flex-col"> <h1 className="font-bold text-5xl md:text-6xl leading-tight">
                        Find Reliable Drivers at Your Fingertips!
                    </h1>
                    <p className="font-serif text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                        Connecting people who need a ride with skilled drivers in an easy, efficient, and secure way. Whether you're looking for a ride or ready to offer your driving services, we’ve got you covered.
                    </p>
                </div>
            </div> */}

      <div
        className="w-full h-[50vh] lg:h-[80vh] relative"
        style={{
          backgroundImage: `url(${heroPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="font-bold lg:text-6xl  md:text-4xl text-3xl">
            Find Reliable Drivers at Your Fingertips!
          </h1>
          <p className="text-lg lg:text-3xl mt-4 w-3/4">
            Connecting people who need a ride with skilled drivers in an easy,
            efficient, and secure way. Whether you're looking for a ride or
            ready to offer your driving services, we’ve got you covered.
          </p>
        </div>
      </div>
      {/* how work */}
      <div className="py-16 px-4">
        <p className="lg:text-5xl text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
          How It Works
        </p>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-between">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="w-64 h-72 rounded-2xl border-4 border-driverGreen hidden lg:block">
                <img
                  src={think}
                  loading="lazy"
                  alt="Rider"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="lg:absolute lg:top-32 lg:left-32 w-full lg:w-96 h-80 rounded-2xl border-4 border-driverGreen">
                <img
                  src={how}
                  loading="lazy"
                  alt="Woman"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="lg:w-1/2 flex flex-col ml-10 mt-5">
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
      <div className="p-5 lg:p-10">
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-gray-800 lg:mb-8 m-5">
          Why Choose Us
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:m-10 m-5 items-center">
            <img
              src={drive}
              alt="Car"
              loading="lazy"
              className="rounded-md w-full"
            />
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
