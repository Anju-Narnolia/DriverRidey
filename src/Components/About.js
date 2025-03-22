// import mission from "../Img/mission.jpg";
import problem from "../Img/problem.png";
import colleague from "../Img/dr1.jpeg";
import us1 from "../Img/us1.png";
import us2 from "../Img/us2.png";
import React, { useEffect, useState } from "react";
function About() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("animatedText");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="mt-28">
      {/* About Section */}
      <div className="grid-col-1 md:grid-cols-2 grid items-center lg:m-10">
        <div className="flex p-5">
          <div className="flex flex-col">
            <img
              src={us1}
              alt="us"
              className="rounded-s-full border-r-4 border-driverGreen"
            />
            <div className="flex justify-end py-5">
              <p className="bg-driverGreen/50 w-2/3 rounded-s-full  text-driverGreen/10 p-5 md:p-10">
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start py-5">
              <p className="bg-driverGreen/50 h-ful w-2/3 rounded-e-full text-driverGreen/10 p-5 md:p-10 ">
                .
              </p>
            </div>
            <img
              src={us2}
              alt="us"
              className="rounded-e-full border-l-4 border-driverGreen"
            />
          </div>
        </div>
        <div className="m-2 lg:p-8 flex flex-col gap-3 text-center">
          <p className="text-3xl lg:text-5xl font-bold text-center">
            Who We Are?
          </p>
          <p className="text-lg  md:text-xl lg:text-2xl text-gray-800">
            Our user-friendly app connects car owners with nearby skilled
            drivers, providing convenient and reliable travel solutions for
            seamless journeys.
          </p>
          <p className="text-lg  md:text-xl lg:text-2xl text-gray-800">
            <strong className="lg:text-2xl text-xl text-driverGreen">
              DriverRidey
            </strong>{" "}
            makes travel easy by connecting car owners with skilled drivers
            through a simple, reliable app. Whether it’s for daily commutes,
            long trips, or urgent rides, we ensure a smooth and stress-free
            experience. Our platform helps those who can’t or prefer not to
            drive, providing a safe, convenient, and dependable way to get
            around.
          </p>
        </div>
      </div>

      {/* big Image */}
      <div
        className="relative w-full lg:h-[70vh] h-[50vh]  "
        style={{
          backgroundImage: `url(${colleague})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="animatedText"
          className="absolute inset-0 flex justify-end items-center text-center text-white px-4 sm:px-6 md:px-10"
        >
          <h1 className="font-bold text-3xl lg:text-6xl transition duration-700">
            <p
              className={`${
                isVisible ? "animate-slideInLeft" : "animate-slideOutLeft"
              }`}
            >
              {" "}
              DriverRidey: Built on Trust,
            </p>
            <p
              className={`${
                isVisible ? "animate-slideInRight" : "animate-slideOutRight"
              }`}
            >
              Driven by Your Success.
            </p>
          </h1>
        </div>
      </div>

      {/* mission */}
      <div className=" mt-10 text-center  bg-driverGreen/30">
        <div className="text-md md:text-xl lg:text-2xl font-medium text-gray-700 max-w-3xl mx-auto py-16">
          <p className="text-xl lg:text-4xl font-bold text-gray-800 p-5">
            Our Mission
          </p>
          <p>At DriverRidey, we're committed to revolutionizing personal
          transportation by connecting professional drivers with car owners,
          creating opportunities and ensuring safe, reliable journeys for
          everyone.</p>
        </div>
      </div>

      {/* problem we solve */}
      <div className="pt-16 mr-2 lg:p-16 items-center m-5">
        <div className="flex flex-col lg:flex-row gap-2 ">
          <div className=" flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:m-2">
              The Problem We Solve
            </h1>
            <div className="flex justify-start items-start gap-5 p-5">
              <i class="fa-solid fa-circle-radiation text-2xl lg:text-3xl text-driverGreen bg-driverGreen/30 rounded-full px-4 py-3"></i>
              <div className="">
                <p className="font-bold text-lg">For Car Owners</p>
                <p className="text-md text-gray-600">
                  We eliminate the stress of driving in busy cities while
                  ensuring your vehicle is in professional hands.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-5 p-5">
              <i class="fa-solid fa-users text-2xl lg:text-3xl text-driverGreen bg-driverGreen/30 rounded-full p-3"></i>
              <div className="p-2">
                <p className="font-bold text-lg">For Drivers</p>
                <p className="text-md text-gray-600">
                  We provide flexible employment opportunities and competitive
                  compensation for professional drivers.
                </p>
              </div>
            </div>
          </div>
          <div class="relative mx-10 my-5">
            <div class="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-lg"></div>
            <img
              src={problem}
              alt="problem"
              class="relative w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Meet Our Team */}
      <div></div>
    </div>
  );
}
export default About;
