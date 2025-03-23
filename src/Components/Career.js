import career1 from "../Img/career1.png";
import career2 from "../Img/career2.png";
import { useState, useRef } from "react";

function Career() {
  const [msg, setMsg] = useState("");
  const formRef = useRef(null);
  function msgChange(event) {
    event.preventDefault();
    setMsg(
      "Thank you for your application! We’ll review it and get back to you soon."
    );
    formRef.current.reset();
  }
  return (
    <div className="mt-14 lg:mt-28">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-tight">
            Career Opportunities Await You!
          </h1>
          <p className="text-lg lg:text-3xl mt-4 max-w-3xl mx-auto">
            We're on a mission to innovate, inspire, and create a brighter
            future, and we know that our success is driven by the talent and
            dedication of our team.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/2 max-w-md flex justify-end">
            <img
              src={career1}
              alt="career"
              className="rounded-bl-full border-l-8 border-driverGreen w-4/5"
            />
          </div>
          <div className="w-1/2 max-w-md">
            <img
              src={career2}
              alt="career"
              className="w-4/5 rounded-tr-full border-r-8 border-driverGreen "
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 lg:p-10 p-5">
        <p p className="font-bold text-4xl text-center">
          Why Join Us?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 lg:m-10 my-5">
          <div className="rounded-md shadow-xl hover:shadow-2xl p-5 flex flex-col items-center gap-2 bg-gray-100">
            <i className="fa-solid fa-envelope text-2xl lg:text-4xl text-driverGreen bg-driverGreen/30 rounded-full p-5 m-3"></i>
            <strong className="text-sm lg:text-lg">Flexible Hours</strong>
            <p className="text-center text-sm lg:text-lg">
              Choose when you want to work and maintain work-life balance.
            </p>
          </div>
          <div className="rounded-md shadow-xl hover:shadow-2xl p-5 flex flex-col items-center gap-2 bg-gray-100">
            <i className="fa-solid fa-phone-volume text-2xl lg:text-4xl text-driverGreen bg-driverGreen/30 rounded-full p-5 m-3"></i>
            <strong className="text-sm lg:text-lg">Competitive Pay</strong>
            <p className="text-center text-sm lg:text-lg">
              Earn more with our industry-leading compensation package.
            </p>
          </div>
          <div className="rounded-md shadow-xl hover:shadow-2xl  flex flex-col items-center gap-2 bg-gray-100 p-5">
            <i class="fa-solid fa-location-dot text-2xl lg:text-4xl text-driverGreen bg-driverGreen/30 rounded-full py-5 px-6  m-3"></i>
            <strong className="text-sm lg:text-lg">Supportive Community</strong>
            <p className="text-center text-sm lg:text-lg">
              Join a network of professional drivers and grow together.
            </p>
          </div>
        </div>
      </div>
      {/* Form Section */}
      <section className="flex flex-col items-center m-10 lg:px-20">
        <div className="bg-driverGreen text-white rounded-xl w-full max-w-4xl p-8 mt-10 shadow-lg">
          <p className=" text-2xl  lg:text-3xl font-bold text-center mb-2 lg:mb-6">
            Apply Now
          </p>
          <form onSubmit={msgChange} ref={formRef}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium flex mb-1">
                  First Name <span className="text-red-600 pl-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
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
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
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
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
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
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium flex mb-1">
                  Highest Qualification{" "}
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Highest Qualification"
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
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
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium flex mb-1">
                  Previous Work Experience{" "}
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Work Experience"
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium flex mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="w-full text-black px-4 py-1 lg:py-2 border border-gray-300 rounded-lg focus:outline-none"
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
                className="w-full text-black px-4 py-1 lg:py-2 bg-white border border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>
            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-full lg:w-1/2 bg-white text-driverGreen font-bold py-1 lg:py-2 px-4 rounded-lg hover:border-white border-2 hover:bg-driverGreen  hover:text-white focus:outline-none"
              >
                Submit
              </button>
            </div>
            {msg && (
              <p className="mt-4 text-center text-black font-semibold">{msg}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Career;
