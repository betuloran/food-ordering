
import Image from "next/image";
import Title from "./ui/Title";
const About = () => {
    return (
        <div className="bg-secondary py-14">
            <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
                <div className="flex justify-center">
                    <div className="relative sm:w-[445px] sm:h-[600px] flex justify-center w-[300px] h-[450px]">
                        <Image src="/images/about-img.png" alt="" layout="fill" />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Title addClass="text-[40px]">We Are Feasta</Title>
                    <p className="my-5 flex flex-col items-center">
                        We have been offering quality fast food experience since 2015. With 50+ branches, 1000+ happy customers and our never-ending search for flavor, we are Turkey's most popular fast food brand. Fresh ingredients, hygienic kitchen, friendly service... As Feasta, we aim perfection in every detail. Because you, our valued customers, deserve it!
                    </p>
                    <button className="btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};
export default About;