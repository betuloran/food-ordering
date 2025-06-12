import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { customerReviews } from "./data/customerData";

const Customers = () => {
    // Buton yönlerini düzelttim
    function PrevBtn({ onClick }) {
        return (
            <button
                className="text-white absolute flex items-center justify-center right-1/2 -bottom-12 bg-primary rounded-full p-2 mr-3 hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                onClick={onClick}
            >
                <IoIosArrowBack /> 
            </button>
        );
    }

    function NextBtn({ onClick }) {
        return (
            <button
                className="text-white absolute flex items-center justify-center left-1/2 -bottom-12 bg-primary rounded-full p-2 hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                onClick={onClick}
            >
                <IoIosArrowForward /> 
            </button>
        );
    }

    const settings = {
        dots: false,
        arrows: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, 
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        pauseOnHover: true, // Hover'da durdur
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto my-20 px-4">
            <Title addClass="text-[40px] text-center mb-4">What Says Our Customers</Title>
            <p className="text-center text-gray-900 mb-10 max-w-2xl mx-auto ">
                Binlerce mutlu müşterimizin deneyimlerini keşfedin ve neden bizi tercih ettiklerini öğrenin.
            </p>

            <div className="relative pb-16"> {/* Bottom padding for buttons */}
                <Slider {...settings}>
                    {customerReviews.map((customer) => (
                        <CustomerItem
                            key={customer.id}
                            imgSrc={customer.imgSrc}
                            name={customer.name}
                            location={customer.location}
                            comment={customer.comment}
                            rating={customer.rating}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Customers;