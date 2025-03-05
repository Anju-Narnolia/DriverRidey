import heroPhoto from "../Img/hero.jpg";
import drive from "../Img/women-key.jpg";
import how from "../Img/how.jpg";
import think from "../Img/driver thinking.jpg";
// import Video from "../"
import Review from "./Review";

function Header() {
    return (
        <div>
            <div class="relative w-full h-screen overflow-hidden">
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
            </div>

            <div className="w-full h-[50vh] lg:h-[80vh] relative"
                style={{ backgroundImage: `url(${heroPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                    <h1 className="font-bold text-5xl md:text-6xl leading-tight">
                        Find Reliable Drivers at Your Fingertips!
                    </h1>
                    <p className="font-serif text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                        Connecting people who need a ride with skilled drivers in an easy, efficient, and secure way. Whether you're looking for a ride or ready to offer your driving services, we’ve got you covered.
                    </p>
                </div>
            </div>

            {/* how work */}
            <div className="m-10 flex flex-col lg:flex-row gap-10 justify-center">
                <div className="lg:w-1/2">
                    <p className="text-5xl font-bold mb-8 text-gray-800 text-center">How It Works</p>
                    <div className="lg:relative">
                        <div className="lg:relative w-64 h-72  rounded-2xl border-4 border-driverGreen md:hidden lg:block" >
                            <img
                                src={think}
                                alt="Rider"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="lg:absolute top-44 left-52 lg:w-96 lg:h-64 h-full w-3/4 content-center rounded-2xl border-4 border-driverGreen md:ml-32 lg:m-0">
                            <img
                                src={how}
                                alt="Woman"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex lg:w-1/2 m-10 md:ml-40 lg:ml-0">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-driverGreen text-white font-bold rounded">1 </div>
                        <div className="w-1 h-16 bg-driverGreen"></div>
                        <div className="w-10 h-10 flex items-center justify-center bg-driverGreen text-white font-bold rounded">2 </div>
                        <div className="w-1 h-16 bg-driverGreen"></div>
                        <div className="w-10 h-10 flex items-center justify-center bg-driverGreen text-white font-bold rounded">3 </div>
                        <div className="w-1 h-16 bg-driverGreen"></div>
                        <div className="w-10 h-10 flex items-center justify-center bg-driverGreen text-white font-bold rounded">4 </div>
                        <div className="w-1 h-16 bg-driverGreen"></div>
                        <div className="w-10 h-10 flex items-center justify-center bg-driverGreen text-white font-bold rounded">5</div>
                    </div>
                    <div className="flex flex-col px-5">
                        <div className="">
                            <p className="font-bold md:text-xl lg:text-lg">Sign Up/Login </p>
                            <p className="text-lg lg:text-sm ">Download the app and create your account effortlessly with just a few details. Get started quickly and enjoy a seamless experience with ease.</p>
                        </div>
                        <div className="w-1 lg:h-8 md:h-6"></div>
                        <div className="">
                            <p className="font-bold md:text-xl lg:text-lg">Find a experienced Driver</p>
                            <p className="text-lg lg:text-sm ">Select your preferred date, time, and location effortlessly. Our system will quickly match you with a reliable driver.</p>
                        </div>
                        <div className="w-1 lg:h-8 md:h-5 "></div>
                        <div className="">
                            <p className="font-bold md:text-xl lg:text-lg">Meet Your Driver</p>
                            <p className="text-lg lg:text-sm ">our driver arrives punctually, ready to take you to your destination safely and efficiently. Enjoy a reliable, stress-free ride with professional service.</p>
                        </div>
                        <div className="w-1 lg:h-8 md:h-5"></div>
                        <div className="">
                            <p className="font-bold md:text-xl lg:text-lg">Enjoy Your Ride</p>
                            <p className="text-lg lg:text-sm ">Sit back and relax while our experienced drivers provide a comfortable journey, ensuring you reach your destination stress-free and on time.</p>
                        </div>
                        <div className="w-1 lg:h-8 md:h-5 "></div>
                        <div className="">
                            <p className="font-bold md:text-xl lg:text-lg">Review our Service</p>
                            <p className="text-lg lg:text-sm ">Share your feedback and help us improve. Your review ensures we continue providing the best service and experience for you. Let us know how we did!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* why us */}
            <div className=" rounded-lg shadow-lg p-10">
                <p className="lg:text-5xl text-6xl font-bold text-center text-gray-800 lg:mb-8 m-5">Why Choose Us</p>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 lg:m-10 m-5 items-center">
                        <img src={drive} alt="Car" className="rounded-md w-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:m-10 m-5">
                        <div className=" bg-gray-200 p-4  rounded-lg shadow-sm hover:shadow-lg transition">
                            <div className="md:w-20 lg:w-16 bg-driverGreen rounded-full flex items-center justify-center border-2 border-white content-centerp-2">
                                <i className="fa-solid fa-clock-rotate-left text-white  text-5xl lg:text-4xl hover:scale-105 m-2"></i>
                            </div>
                            <div>
                                <span className="block text-3xl lg:text-2xl font-bold text-gray-700">24/7 Support</span>
                                <p className="text-lg lg:text-sm text-gray-600">We are here to assist you at any time of the day.</p>
                            </div>
                        </div>
                        <div className=" items-center  bg-gray-200 p-4   rounded-lg shadow-sm hover:shadow-lg transition ">
                            <div className="md:w-20 lg:w-16 md:h-20 lg:h-16 bg-driverGreen rounded-full flex items-center justify-center border-2 border-white content-center">
                                <i className="fa-solid fa-user-shield text-white  text-5xl lg:text-4xl hover:scale-105"></i>
                            </div>
                            <div>
                                <span className="block text-3xl lg:text-2xl font-bold text-gray-700">Verified Drivers</span>
                                <p className="text-lg lg:text-sm text-gray-600">All our drivers are thoroughly verified for your safety.</p>
                            </div>
                        </div>
                        <div className=" items-center  bg-gray-200 p-4  rounded-lg shadow-sm hover:shadow-lg transition ">
                            <div className="md:w-20 lg:w-16 md:h-20 lg:h-16 bg-driverGreen rounded-full flex items-center justify-center border-2 border-white content-center">
                                <i className="fa-solid fa-hand-holding-dollar text-white  text-5xl lg:text-4xl hover:scale-105"></i>
                            </div>
                            <div>
                                <span className="block text-3xl lg:text-2xl font-bold text-gray-700">Affordable Rates</span>
                                <p className="text-lg lg:text-sm text-gray-600">High-quality service at competitive prices.</p>
                            </div>
                        </div>
                        <div className=" items-center  bg-gray-200 p-4   rounded-lg shadow-sm hover:shadow-lg transition">
                            <div className="md:w-20 lg:w-16 md:h-20 lg:h-16 bg-driverGreen rounded-full flex items-center justify-center border-2 border-white content-center">
                                <i i className="fa-solid fa-check text-white  text-5xl lg:text-4xl hover:scale-105"></i>
                            </div>
                            <div>
                                <span className="block text-3xl lg:text-2xl font-bold text-gray-700">Reliable Service</span>
                                <p className="text-lg lg:text-sm text-gray-600">We prioritize dependability to ensure your needs are met consistently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Our Values */}
            < div div className="py-16 bg-white text-center px-6 md:px-12" >
                <h2 className="lg:text-5xl text-6xl font-bold text-gray-800 mb-10">Our Values</h2>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className=" relative bg-gray-50 p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
                        <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-driverGreen px-5">
                            <i className="fa-brands fa-accessible-icon text-driverGreen hover:rotate-360 text-5xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
                        </div>
                        <p className="text-3xl lg:text-2xl font-semibold text-gray-800 pt-8">Accessibility </p>
                        <p className="text-gray-600 mt-2 text-lg lg:text-sm">We believe everyone should have access to reliable transportation options.</p>
                    </div>
                    <div className=" relative bg-gray-50 p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
                        <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-driverGreen px-5">
                            <i className="fa-solid fa-people-arrows text-driverGreen hover:rotate-360 text-5xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
                        </div>
                        <p className="text-3xl lg:text-2xl font-semibold text-gray-800 pt-8">Community Connection</p>
                        <p className="text-gray-600 mt-2 text-lg lg:text-sm">Our platform fosters relationships between car owners and drivers, creating a supportive travel community.</p>
                    </div>
                    <div className=" relative bg-gray-50 p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
                        <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-driverGreen px-5">
                            <i className="fa-solid fa-chalkboard-user text-driverGreen hover:rotate-360 text-5xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
                        </div>
                        <p className="text-3xl lg:text-2xl font-semibold text-gray-800 pt-8">User-Centric Design</p>
                        <p className="text-gray-600 mt-2 text-lg lg:text-sm">We focus on creating a user-friendly app that caters to the specific needs of our users.</p>
                    </div>
                    <div className=" relative bg-gray-50 p-6 rounded-xl shadow-lg border-2 border-driverGreen hover:scale-105 transform transition duration-[500ms]">
                        <div className="icon-container absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-driverGreen px-5">
                            <i className="fa-solid fa-user-shield text-driverGreen hover:rotate-360 text-5xl lg:text-4xl hover:text-green-600 hover:scale-105"></i>
                        </div>
                        <p className="text-3xl lg:text-2xl font-semibold text-gray-800 pt-8">Integrity</p>
                        <p className="text-gray-600 mt-2 text-lg lg:text-sm">Transparency and honesty are fundamental to our operations, ensuring trust between all parties.</p>
                    </div>
                </div>
            </div>

            {/* reviews */}
            <div>
                <Review />
            </div>
        </div >
    );
}
export default Header;
