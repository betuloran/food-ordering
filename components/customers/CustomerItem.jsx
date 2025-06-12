import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CustomerItem = ({ imgSrc, name, location, comment, rating = 5 }) => {
    return (
        <div className="mt-5 mx-3">
            <div className="p-6 bg-secondary text-white rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Rating Stars */}
                <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={`${i < rating ? 'text-primary' : 'text-gray-400'} mr-1 text-sm`}
                        />
                    ))}
                </div>

                {/* Comment */}
                <p className="text-sm md:text-base leading-relaxed mb-4">
                    "{comment}"
                </p>

                {/* Customer Info */}
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">{name}</span>
                    <span className="text-[15px] text-gray-300">{location}</span>
                </div>
            </div>

            {/* Profile Image - before elemanını düzelttim */}
            <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 mx-auto before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 shadow-lg">
                <Image
                    src={imgSrc}
                    alt={`${name} profile`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default CustomerItem;