import career from "../Img/career.jpg";

function Career() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[80vh] bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500" id="section1">
                <img
                    src={career}
                    alt="career"
                    className="object-cover w-[length:200%]  opacity-85 h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-10">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Career Opportunities Await You!
                    </h1>
                    <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl mx-auto">
                        We're on a mission to innovate, inspire, and create a brighter future, and
                        we know that our success is driven by the talent and dedication of our team.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <section className="flex flex-col items-center px-4 sm:px-10 lg:px-20">
                <div className="bg-driverGreen text-white rounded-xl w-full max-w-4xl p-6 md:p-8 mt-10 shadow-lg m-10">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                        Apply Now
                    </p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    First Name <span className="text-red-600 pl-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    Last Name 
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Last Name"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    Phone Number <span className="text-red-600 pl-1">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    Email Address <span className="text-red-600 pl-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    Highest Qualification <span className="text-red-600 pl-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Highest Qualification"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    Applying For <span className="text-red-600 pl-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Applying For"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                                
                            </div>
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    Previous Work Experience <span className="text-red-600 pl-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Work Experience"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex mb-1">
                                    Address 
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                        {/* Upload CV */}
                        <div>
                            <label className="text-sm font-medium flex mb-1">
                                Upload CV <span className="text-red-600 pl-1">*</span>
                            </label>
                            <input
                                type="file"
                                className="w-full text-black px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="mt-6 flex justify-center">
                            <button
                                type="submit"
                                className="w-full sm:w-1/2 bg-white text-driverGreen font-bold py-2 px-4 rounded-lg hover:bg-green-900 hover:text-white focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Career;
