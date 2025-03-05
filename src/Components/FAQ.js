import { useState } from "react";
import hh from "../Img/faq.jpg";
function FAQ() {
    const [open, setOpen] = useState(null);
    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index); // Close previous and open new one
    };
    return (<>
        <div className="flex justify-center items-center text-5xl text-driverGreen" style={{ backgroundImage: `url(${hh})`, backgroundSize: 'cover', backgroundPosition:"top-center",height: '80vh' }}>
        <div className=" m-2 flex justify-center items-center flex-col">
                <p className="text-6xl  font-bold text-center">Frequently Asked Questions</p>
                <p className="text-2xl text-center w-2/3 p-2">Got questions about DriverRidy? Find answers here or contact us!</p>
            </div>
        </div>
        <div className="m-10 flex flex-col items-center">
            

            <div className="w-2/3 flex  flex-col ">
                {/* 1 */}
               
                {/* 2 */}
               
                {/* 3 */}
               
                {/* 4 */}
                
                {/* 5 */}
               
                {/* 6 */}
               
                {/* 7 */}
               
                {/* 8 */}
                
                {/* 9 */}
                
                {/* 10 */}
                <div className={`p-5  m-2 ${open === 9 ?"bg-driverGreen text-white":"bg-gray-100"} rounded-md  `} onClick={() => toggleFAQ(9)}>
                    <div className={`flex justify-between items-center cursor-pointer `} >
                        <p className={`font-bold ${open===9?"":"hover:text-green-500"}`}>Do you offer drivers for long-distance trips?</p>
                        <i className={`fa-solid ${open === 9 ? "fa-caret-up" : "fa-caret-down"}`}></i>
                    </div>
                    {/* {open === 9 && ( */}
                        <div
                        className={`mt-2 text-gray-800 p-2 rounded transition-all ease-in-out duration-600 overflow-hidden ${
                            open === 9 ? "max-h-40 opacity-100 text-white" : "max-h-0 opacity-0"
                        }`}
                    >
                        Simply log in, enter your ride details, and choose a driver. Confirm your booking, and you're all set!
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    </>)
}
export default FAQ;
