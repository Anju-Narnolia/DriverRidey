
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Review() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;

        return (
            <>
                {Array(fullStars)
                    .fill()
                    .map((_, i) => (
                        <FaStar key={`full-${i}`} className="text-yellow-400" />
                    ))}
                {Array(emptyStars)
                    .fill()
                    .map((_, i) => (
                        <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
                    ))}
            </>
        );
    };
    const [currentCategory, setCurrentCategory] = useState('driver');
    const reviews = currentCategory === 'driver' ? driverReview : ownerReviews;
    return (
        <div className="p-8 bg-gray-200">
            <div>
                <div className="flex justify-center space-x-4 mb-4">
                    <button
                        onClick={() => setCurrentCategory('owner')} className={`px-6 py-2 rounded-lg md:text-xl lg:text-sm font-bold ${currentCategory === 'owner' ? 'bg-driverGreen text-white' : 'bg-white'}`}>  Owner Reviews   </button>
                    <button
                        onClick={() => setCurrentCategory('driver')} className={`px-6 py-2 rounded-lg font-bold  md:text-xl lg:text-sm ${currentCategory === 'driver' ? 'bg-driverGreen text-white' : 'bg-white'}`}>  Driver Reviews  </button>
                </div>
            </div>
            <div className="lg:m-10 m-3">
                <Slider {...settings}>
                    {reviews.map((reviews) => (
                        <div key={reviews.id} className="border-driverGreen border-3 bg-white rounded-lg p-5">
                            <div className="flex justify-center mt-2 md:text-3xl lg:text-2xl">{renderStars(reviews.rating)}</div>
                            <h2 className="md:text-xl lg:text-lg p-3">{reviews.text}</h2>
                            <div className=" flex ">
                                <img src={reviews.img} alt="review" loading="lazy" className="justify-start w-20 h-20 rounded-full border-2 border-gray-400 m-2" />
                                <p className="font-bold font-serif text-center mt-10 px-2">{reviews.author} </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
const driverReview = [
    { id: 1, text: "The app made it easy to connect with the owner. The work was straightforward.", author: "Atual Sharma", img: "https://runawayjuno.com/wp-content/uploads/2013/07/india-kolkata-chai-maker-1024x680.jpg", rating: 3 },
    { id: 2, text: "I appreciate how smoothly the process went. The platform ensures drivers paid fairly", author: "Nitish Chaudhary ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwETENsd3ruqE0Bcgvdk9zMTmZPcJDHDhZWA&s", rating: 4 },
    { id: 3, text: "The owner provided clear instructions and made sure the car was ready for the trip.", author: "Ravi Yadav", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XxQ_ppIlFvaT2iiLcKrBu2mZgwIAsy-QhA&s", rating: 5 },
    { id: 4, text: "It was a pleasure driving this car. car was in great condition and easy to handle", author: "Pardeep Pandey", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPzLVxq8WlBGZAf34OFPazsc5atyoQaUACw&s", rating: 4 }
];

const ownerReviews = [
    { id: 1, text: "The driver was super friendly and drove very safely. It was a smooth, stress-free ride!", author: "Neha Rathod", img: "https://img.freepik.com/premium-photo/indian-woman-portrait-temple_53876-71699.jpg?semt=ais_hybrid", rating: 5 },
    { id: 2, text: "The driver was very helpful and paid attention to all my needs. The whole trip was pleasant and comfortable.", author: "Bhawna Saini", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FBQLR2bgffyuceXXqdOtWHIANdQbFt4mA&s", rating: 4 },
    { id: 3, text: "This platform makes it easy for me to manage my rides efficiently!Good service. The driver was polite .", author: "Ankuj Kumar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFx89yfL9kJdSQnJfz4E8m1Xm3fDiS_6N4Q&s", rating: 4 },
    { id: 4, text: "The driver was helpful and made sure I was settled in the car. The ride was peaceful and quick.", author: "Sunny Sheoran", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTaJce_jziDYsoBeUNxsSuoKkFtc3V0Um5A&s", rating: 3 }
];
export default Review;
