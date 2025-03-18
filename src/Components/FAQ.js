import { useState } from "react";
import { motion } from "framer-motion";
import hh from "../Img/faq.jpg";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does DriverRidey work?",
      answer:
        "DriverRidey connects you with professional drivers for your travel needs. Simply log in, enter your ride details, and click on find driver. The driver will get notification for your request and arrive at your location at the scheduled time.",
    },
    {
      question: "How do I book a driver on DriverRidey?",
      answer:
        "Booking a driver is simple! Just log in, enter your ride details (pickup location, destination, date, and time), and confirm your booking. You will receive instant confirmation along with driver details.",
    },
    {
      question:
        "Can I book a driver for a single trip, round trip or multiple days?",
      answer:
        "Yes! You can book a driver for a one-time trip, round trip or for multiple days based on your requirements. We offer flexible booking options to suit your needs.",
    },
    {
      question: "Do I need to pay in advance?",
      answer:
        "Yes this is your choice to pay in advance or You can choose to pay after the service is completed via cash, UPI, or other available payment methods.",
    },
    {
      question: "Are the drivers insured and background-checked?",
      answer:
        "Yes, all our drivers go through a strict verification process, including background checks and Driving license validation, ensuring a safe and reliable experience for our customers.",
    },
    {
      question: "What if I face an issue with my driver?",
      answer:
        "If you encounter any issues, you can report them through the app or contact our customer support. We take customer feedback seriously and will address any concerns promptly.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can cancel or reschedule your booking in 5 min. through the app after 5 min. you can't cancel or reschedule your booking. Cancellation policies may apply, depending on the timing of your request.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email, or live chat through the app or website. We are available to assist you with any questions or concerns.",
    },
    {
      question: "What is DriverRidey, and who can use it?",
      answer:
        "DriverRidey is a platform that connects customers with professional drivers for hire. Whether you need a driver for a short trip, a full day, or long-distance travel, DriverRidey is available for anyone looking for a safe and reliable driving service.",
    },
    {
      question: "Do you offer drivers for long-distance trips?",
      answer:
        "Yes, we provide drivers for both short and long-distance trips. Whether you need a driver for a city ride or an outstation journey, you can book a professional driver through DriverRidey.",
    },
  ];
  return (
    <div className="mt-14">
      <div className=" relative flex justify-center items-center text-5xl">
        <img
          src={hh}
          alt="we-are"
          className="relative object-cover w-full lg:h-[80vh] md:h-[50vh]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4  bg-black bg-opacity-30">
          <p className="lg:text-6xl text-3xl md:text-4xl  font-bold text-center">
            Frequently Asked Questions
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-center w-2/3 p-2">
            Got questions about DriverRidey? Find answers here or contact us!
          </p>
        </div>
      </div>
      <div className="items-center flex flex-col justify-center py-12">
        <div className="w-10/12 md:w-2/3 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <button
                className={`flex justify-between items-center w-full lg:px-6 lg:py-4 px-4 py-2 text-lg font-medium text-wrap ${
                  openIndex === index
                    ? "bg-driverGreen text-white"
                    : "bg-driverGreen/50 text-gray-800"
                } transition`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`text-xl ${
                    openIndex === index
                      ? " fa-solid fa-caret-up text-white"
                      : "fa-solid fa-caret-down text-gray-800"
                  }`}
                ></span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 bg-white text-gray-700">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQ;
