import { Link } from "react-router-dom";
function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="bg-black md:text-white  " >
                <div className=" md:flex-col  lg:flex-row flex  justify-between p-5  ">

                    <div className="items-center  md:w-full lg:w-1/5 p-5 " >
                        <p className="font-bold  md:text-4xl font-serif lg:text-2xl text-center mb-5">Download App</p>
                        <div className=" flex md:flex-row lg:flex-col gap-10 justify-center">
                            <a href="https://labs.google.com/search?source=ntp" className=" w-40">
                                <img
                                    className="md:w-60"
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="PlayStore"
                                /></a>
                            <a href="https://labs.google.com/search?source=ntp" className=" w-40">
                                <img
                                    className="md:w-64"
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="PlayStore"
                                />
                            </a>
                        </div>
                    </div>

                    <div className=" p-5 lg:w-1/5 ">
                        <p className="font-bold  md:text-3xl mb-4 text-center lg:text-2xl">Quick Links</p>
                        <ul className="  md:flex justify-center gap-3  md:text-2xl lg:text-xl lg:flex-col text-center">
                            <li >
                                <Link to="/#" className="hover:text-gray-300 hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-300 hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/safety" className="hover:text-gray-300 hover:underline" >
                                    Safety
                                </Link>
                            </li>
                            <li>
                                <Link to="/career" className="hover:text-gray-300 hover:underline">
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-300 hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="p-5 lg:w-1/5">
                        <p className="font-bold text-xl mb-4 r text-center  md:text-3xl lg:text-2xl">Follow Us</p>
                        <div className="flex justify-center gap-5  md:text-4xl lg:text-3xl">
                           <a href="https://www.linkedin.com/company/driverridey/?viewAsMember=true" target="blank"><i className="fa-brands fa-linkedin text-driverGreen  hover:text-green-800 hover:scale-110"></i></a> 
                            <i className="fa-brands fa-facebook text-driverGreen  hover:text-green-600 hover:scale-110"></i>
                            <i className="fa-brands fa-instagram text-driverGreen  hover:text-green-600 hover:scale-110"></i>
                            <i className="fa-brands fa-twitter text-driverGreen  hover:text-green-600 hover:scale-110"></i>
                        </div>
                    </div>

                    <div className="md:w-full content-center lg:w-2/5 p-5">
                        <div className="flex gap-2 justify-center">
                            <i className="fa-solid fa-envelope text-driverGreen lg:text-3xl  md:text-4xl"></i>
                            <h3 className=" md:text-3xl lg:text-2xl font-bold">Subscribe To Our Newsletter</h3>
                        </div>
                        <p className="lg:my-5 md:my-2 md:text-2xl text-center lg:text-xl">Subscribe now for news, updates, and exclusive offers in your inbox.</p>
                        <form action="#" method="" className=" md:flex justify-center">
                            <input type="email" name="email" placeholder="Enter email to subscribe" className="px-5 py-2 rounded-s-lg text-black" />
                            <button className="bg-driverGreen text-white font-bold px-5 py-2 rounded-e-md" type="submit" value="Submit" >Subscribe</button>
                        </form>
                    </div>
                    {/* mergo-mail and google sheet will used to subscription handle */}
                </div>
                <hr className="border-gray-700" />
                <div className="text-center p-5 ">
                    <p className=" md:text-2xl lg:text-xl">
                        Copyright © {year} <span className="font-bold">DriverRidey</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
}
export default Footer;
