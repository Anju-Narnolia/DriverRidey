import React, { useState } from "react";

function ContactForm() {
    const [msg, setMsg] = useState("");

    function msgChange(event) {
        event.preventDefault();
        setMsg("Thank you for reaching out! we’ll get back to you soon.😊");
        event.target.reset();
    }

    return (
        <div className=" rounded-lg shadow-md p-6 bg-gray-200 bg-opacity-40 m-3 border-driverGreen border-2 sm:w-full">
            <form onSubmit={msgChange}>
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-driverGreen">Contact Form</h2>
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
                        className="block w-full rounded-lg border-gray-300 bg-gray-100 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
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
                        className="block w-full rounded-lg border-gray-300 bg-gray-100 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
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
                        className="block w-full rounded-lg border-gray-300 bg-gray-100 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
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
                        className="block w-full rounded-lg border-gray-300 bg-gray-100 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
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
                        className="block w-full rounded-lg border-gray-300 bg-gray-100 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 h-28 resize-none"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-driverGreen hover:bg-green-700 text-white font-bold rounded-lg py-2 px-4 transition duration-200"
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
