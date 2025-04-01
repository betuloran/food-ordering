import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Customers = () => {
    function NextBtn({ onClick }) {
        return (
            <button className="text-white absolute flex items-center justify-center right-1/2 -bottom-12 bg-primary rounded-full p-2 mr-3" onClick={onClick}>
                <IoIosArrowBack />
            </button>
        );
    }
    function PrevBtn({ onClick }) {
        return (
            <button className="text-white absolute flex items-center justify-center left-1/2 -bottom-12 bg-primary rounded-full p-2" onClick={onClick}>
                <IoIosArrowForward />
            </button>
        );
    }
    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
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
        <div className="container mx-auto my-20">
            <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
            <Slider {...settings}>
                <CustomerItem imgSrc="/images/client1.jpg" />
                <CustomerItem imgSrc="/images/client2.jpg" />
                <CustomerItem imgSrc="/images/client1.jpg" />
                <CustomerItem imgSrc="/images/client2.jpg" />
                <CustomerItem imgSrc="/images/client1.jpg" />
                <CustomerItem imgSrc="/images/client2.jpg" />
            </Slider>
        </div>
    );
};

export default Customers;