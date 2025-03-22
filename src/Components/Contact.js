import ContactForm from "./ContactForm";
import contact from "../Img/contact.png";
function Contact() {
  return (
    <>
      <div className=" mt-16 lg:pt-28 m-5">
        <div className="text-center m-2 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black p-4">
            Get in Touch
          </h1>
          <p className="text-gray-900 text-lg md:text-2xl px-5 md:px-20">
            Have questions? We're here to help. Contact our support team 24/7
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-4 lg:m-10 m-5">
          <div className="rounded-md shadow-xl hover:shadow-2xl p-3 flex items-center gap-2">
            <i class="fa-solid fa-envelope text-2xl lg:text-4xl text-driverGreen bg-driverGreen/30 rounded-full p-5 m-3"></i>
            <div className="text-xl">
              <p className="font-bold">Email:</p> <p className="text-sm md:text-md">driverrideyofficial@gmail.com</p>
            </div>
          </div>
          <div className="rounded-md shadow-xl hover:shadow-2xl p-3 flex items-center gap-2">
            <i class="fa-solid fa-phone-volume text-2xl lg:text-4xl text-driverGreen bg-driverGreen/30 rounded-full p-5 m-3"></i>
            <div className="text-xl">
              <p className="font-bold">Phone:</p> <p className="text-sm md:text-md">+91 (935)-(509)-(0302)</p>
            </div>
          </div>
          <div className="rounded-md shadow-xl hover:shadow-2xl p-3 flex items-center gap-2">
            <i class="fa-solid fa-location-dot text-2xl lg:text-4xl text-driverGreen bg-driverGreen/30 rounded-full py-5 px-6  m-3"></i>
            <div className="text-xl">
              <p className="font-bold">Address:</p> <p className="text-sm md:text-md">Noida, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
        <div className="m-10 md:m-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="">
            <ContactForm />
          </div>
          <div className="  items-center">
            <img src={contact} alt="contact" className="w-full rounded shadow-lg shadow-gray-500" />
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="m-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123586552!2d77.23701468919643!3d28.5221023514615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1738047205582!5m2!1sen!2sin"
          title="Contact Form Map"
          className="w-full h-80 sm:h-96 rounded-lg shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
