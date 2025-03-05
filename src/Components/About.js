import hero from "../Img/we-are.jpg";
import mission from "../Img/mission.jpg";
import problem from "../Img/problem solved.jpg";
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
    return (< >
        {/* heroSection */}
        <div className="relative bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 w-full">
            <img
                src={hero}
                alt="we-are"
                className=" relative object-cover opacity-70 w-full lg:h-[80vh] md:h-[50vh]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 ">
                <h1 className="font-bold lg:text-5xl text-6xl">
                    Who We Are ?
                </h1>
                <p className="font-serif text-3xl lg:text-xl mt-4 w-3/4">
                    Our user-friendly app connects car owners with nearby skilled drivers, providing convenient and reliable travel solutions for seamless journeys.
                </p>
            </div>
        </div>

        {/* About Section */}
        <div className="flex md:flex-col lg:flex-row items-center m-10">
            <div className="lg:w-1/2 md:w-3/4 text-center">
                <img src={office} alt="j" className="rounded-md text-center" />
            </div>
            <div className="lg:w-1/2  m-5 px-5 md:w-3/4">
                <p className="text-3xl lg:text-xl text-gray-800"><strong className="lg:text-3xl text-4xl text-driverGreen">DriverRidey</strong> core mission is to eliminate transportation
                    stress by offering a reliable and user-friendly mobile app that seamlessly connects car
                    owners with qualified drivers. This service caters to a variety of needs, from daily
                    commutes and special trips to urgent rides, ensuring a smooth and efficient experience
                    every time. We specifically address the challenges faced by car owners who may be unable
                    or unwilling to drive, particularly during long journeys. By leveraging technology and
                    prioritizing convenience, we're transforming the landscape of personal transportation,
                    making travel enjoyable and stress-free for everyone. This platform directly connects
                    car owners with experienced drivers ready to provide assistance, offering a practical
                    solution for those seeking reliable transportation.</p>
            </div>
        </div>

        {/* big Image */}
        <div className="relative w-full lg:h-[80vh] md:h-[50vh] bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 "
            style={{
                backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(20, 184, 166, 0.4), rgba(128, 90, 213, 0.4)), url(${us})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}        >
            <div id="animatedText"
                className="absolute inset-0 flex justify-center items-center text-center text-white px-4 sm:px-6 md:px-10">
                <h1 className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl transition duration-700">
                    <p className={`${isVisible ? "animate-slideInLeft" : "animate-slideOutLeft"}`}>
                        DriverRidey: Built on Trust,
                    </p>
                    <p className={`${isVisible ? "animate-slideInRight" : "animate-slideOutRight"}`}>
                        Driven by Your Success.
                    </p>
                </h1>
            </div>
        </div>

        {/* mission */}
        <div className="p-16 bg-white flex flex-col lg:flex-row items-center lg:justify-center gap-10">
            <div class="relative lg:w-80 w-full">
                <div class="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-lg"></div>
                <img
                    src={mission}
                    alt="problem"
                    class="relative w-full h-80 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="md:w-3/4 lg:w-1/2 lg:text-left text-center p-10">
                <p className="lg:text-xl text-3xl font-medium text-gray-600 max-w-3xl mx-auto "><strong className="text-5xl text-driverGreen">Our Mission</strong> is to simplify transportation for everyone. We aim to provide a reliable and user-friendly app that allows car owners to hire drivers based on proximity and specific trip requirements, ensuring a seamless travel experience.</p>
            </div>
        </div>

        {/* proble we solve */}
        <div className="flex lg:flex-row md:flex-col lg:items-center m-10">
            <div className="lg:w-1/2 p-5 text-center  flex-col" >
                <h2 className="text-5xl font-bold text-driverGreen text-center pb-2">The Problem We Solve</h2>
                <p className="lg:text-xl text-3xl  text-black m-5 text-center justify-center lg:text-left max-w-3xl mx-auto sm:mx-0 pl-2">
                    Many car owners face challenges when it comes to driving whether it’s due to inexperience, the desire to relax on long trips, or simply wanting to enjoy the journey without the stress of being behind the wheel. On the other hand, skilled drivers often struggle to find reliable opportunities to offer their services. <strong>DriverRidey</strong> bridges this gap, connecting car owners with experienced drivers on a trusted platform that benefits both sides seamlessly. </p>
            </div>
            <div className="lg:w-1/2 relative m-10">
                <div class="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-green-400 to-driverGreen rounded-lg"></div>
                <img src={problem} alt="problem" className="w-full relative rounded-lg shadow-lg " />
            </div>
        </div>

        {/* Meet Our Team */}
        <div>
            
        </div>
    </>)
}
export default About;