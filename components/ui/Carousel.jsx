import Image from "next/image";
import Title from "./Title";
import Slider from "react-slick";
import Link from 'next/link';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full -mt-[180px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/second-bg.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 container mx-auto text-white flex flex-col items-start gap-y-5 ml-20">
            <Title addClass="text-6xl">Welcome!</Title>
            <p className="text-md sm:w-2/5 w-full p-3">
              Enjoy an unforgettable taste experience with our delicious burgers prepared with the freshest ingredients, crispy pizzas and refreshing drinks!
            </p>
            <Link href="/menu">
              <button className="btn-primary">Order Now</button>
            </Link>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8 ml-20">
            <Title addClass="text-6xl">Click for the most <br /> delicious pizzas!</Title>
            <p className="text-md sm:w-2/5 w-full p-3 rounded-lg">
              Guaranteed quality and flavor in every bite, in the comfort of your home or in our restaurant!
            </p>
            <Link href="/menu">
              <button className="btn-primary">Order Now</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;