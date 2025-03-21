import React, { useState } from "react";

function ContactForm() {
    const [msg, setMsg] = useState("");

    function msgChange(event) {
        event.preventDefault();
        setMsg("Thank you for reaching out! we’ll get back to you soon.😊");
        event.target.reset();
    }

    return (
        <div className="rounded-lg shadow-xl shadow-gray-500 p-5 bg-opacity-40 border-driverGreen border-2 w-full">
            <form onSubmit={msgChange}>
                <div className="text-center mb-4">
                    <h2 className="lg:text-3xl text-xl font-bold text-driverGreen">Contact Form</h2>
                    <p className="text-sm text-gray-800">
                        Please fill out the form below, and we'll get back to you shortly.
                    </p>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-bold text-black mb-1"
                    >
                        Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="focus:outline-driverGreen block w-full rounded-lg border-gray-300 bg-gray-100  p-1 lg:p-2  "
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-bold text-black mb-1"
                    >
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className=" focus:outline-driverGreen block w-full rounded-lg border-gray-300 bg-gray-100 p-1 lg:p-2  "
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="mobile"
                        className="block text-sm font-bold text-black mb-1"
                    >
                        Mobile Number:
                    </label>
                    <input
                        id="mobile"
                        type="tel"
                        placeholder="Your Mobile Number"
                        className=" focus:outline-driverGreen block w-full rounded-lg border-gray-300 bg-gray-100 p-1 lg:p-2  "
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-black mb-1"
                    >
                        Subject:
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Your Subject"
                        className=" focus:outline-driverGreen block w-full rounded-lg border-gray-300 bg-gray-100 p-1 lg:p-2 "
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm font-bold text-black mb-1"
                    >
                        Message:
                    </label>
                    <textarea
                        id="message"
                        placeholder="Write Your Message Here"
                        className="focus:outline-driverGreen block w-full rounded-lg border-gray-300 bg-gray-100 p-1 lg:p-2 h-28 resize-none"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full hover:bg-white hover:text-driverGreen  text-white border-2 border-driverGreen bg-driverGreen font-bold rounded-lg py-2 px-4 transition duration-200"
                    >
                        Submit
                    </button>
                </div>

                {msg && (
                    <p className="mt-4 text-center text-black font-semibold">
                        {msg}
                    </p>
                )}
            </form>
        </div>
    );
}

export default ContactForm;
