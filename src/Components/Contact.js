import ContactForm from "./ContactForm";
import contact from "../Img/contact.jpg";
function Contact() {
    return (<>
        <div>
            <div className=""
                style={{ backgroundImage: `url(${contact})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                <div className=" text-center">
                    <h1 className="text-5xl sm::text-5xl font-bold text-black p-4">Contact Us</h1>
                    <p className="text-gray-900 text-2xl ml-20">
                        We’d love to hear from you! Reach out with any questions or feedback.
                    </p>
                </div>

                <div className=" items-center m-10 md:flex flex-row gap-16">
                    <div className="sm:w-full md:w-1/2">
                        <ContactForm />
                    </div>
                    <div className=" bg-gray-100  rounded-lg p-6 text-center border-driverGreen border-2  bg-opacity-30 w-2/5">
                        <h2 className="text-2xl font-bold text-black mb-4 underline">Get in Touch</h2>
                        <p className="text-black font-semibold mb-2 text-xl">
                            <strong>Email:</strong> driverrideyofficial@gmail.com
                        </p>
                        <p className="text-black font-semibold mb-2 text-xl">
                            <strong>Phone:</strong> +91 8922827029
                        </p>
                        <p className="text-black font-semibold texr-xl">
                            <strong>Address:</strong>  Noida,Uttar Pardesh, India
                        </p>
                    </div>
                </div>
            </div >
            {/* map */}
            <div className="px-5 pb-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123586552!2d77.23701468919643!3d28.5221023514615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1738047205582!5m2!1sen!2sin"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Contact Form Map"
                    className="w-full h-96 rounded-lg shadow-md"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div >
    </>
    );
}

export default Contact;
