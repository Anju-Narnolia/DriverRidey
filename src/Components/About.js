import hero from "../Img/we-are.jpg";
import mission from "../Img/mission.jpg";
import problem from "../Img/problemsolved.jpg";
import office from "../Img/business-executives-discussing.jpg";
import us from "../Img/people-working-office.jpg";
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
    <div className="mt-14">
      {/* heroSection */}
      <div className="relative bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 w-full">
        <img
          src={hero}
          alt="we-are"
          className="relative object-cover opacity-70 w-full lg:h-[80vh] md:h-[50vh]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 ">
          <h1 className="font-bold lg:text-6xl  md:text-4xl text-3xl">
            Who We Are ?
          </h1>
          <p className="text-lg lg:text-3xl mt-4 w-3/4">
            Our user-friendly app connects car owners with nearby skilled
            drivers, providing convenient and reliable travel solutions for
            seamless journeys.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center m-10">
        <div className="lg:w-1/2 md:w-3/4 text-center lg:p-10">
          <img src={office} alt="j" className="rounded-md text-center" />
        </div>
        <div className="lg:w-1/2 m-2 lg:p-5">
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
        className="relative w-full lg:h-[80vh] h-[50vh] bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(20, 184, 166, 0.4), rgba(128, 90, 213, 0.4)), url(${us})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="animatedText"
          className="absolute inset-0 flex justify-center items-center text-center text-white px-4 sm:px-6 md:px-10"
        >
          <h1 className="font-bold text-3xl lg:text-6xl transition duration-700">
            <p
              className={`${
                isVisible ? "animate-slideInLeft" : "animate-slideOutLeft"
              }`}
            >
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
      <div className="lg:p-16 p-5 bg-white flex flex-row items-center lg:justify-center gap-10">
        <div class="relative w-1/2">
          <div class="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-lg"></div>
          <img
            src={mission}
            alt="problem"
            class="relative w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 lg:text-left ">
          <p className="text-md md:text-xl lg:text-2xl font-medium text-gray-600 max-w-3xl mx-auto ">
            <strong className="text-xl lg:text-2xl text-driverGreen">
              Our Mission
            </strong>{" "}
            is to simplify transportation for everyone. We aim to provide a
            reliable and user-friendly app that allows car owners to hire
            drivers based on proximity and specific trip requirements, ensuring
            a seamless travel experience.
          </p>
        </div>
      </div>

      {/* proble we solve */}
      <div className="p-5 pt-16 mr-2 lg:p-16">
        <h1 className="text-driverGreen text-3xl md:text-4xl lg:text-5xl font-bold text-center m-2">The Problem We Solve </h1>
        <div className="flex flex-row lg:items-center gap-2">
          <div className="w-1/2 flex-col">
            <p className="text-md md:text-xl lg:text-2xl text-black lg:m-5 justify-center lg:text-left max-w-3xl  lg:pl-2">
              Many car owners struggle with driving, whether due to
              inexperience, long trips, or simply wanting a stress-free ride.
              Meanwhile, skilled drivers seek reliable job opportunities.
              <strong className="text-driverGreen">DriverRidey</strong> connects
              both, providing a trusted platform that makes travel easier .
            </p>
          </div>
          <div class="relative w-1/2">
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
