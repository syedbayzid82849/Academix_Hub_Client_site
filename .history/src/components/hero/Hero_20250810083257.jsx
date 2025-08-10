import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpeg";
import banner3 from "../../assets/banner3.jpeg";
import banner4 from "../../assets/banner4.jpeg";
import { NavLink } from "react-router";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    const slides = [
        {
            id: 1,
            title: "Learn New Skills Online",
            subtitle: "Explore a variety of courses and expand your knowledge.",
            img: banner1,
        },
        {
            id: 2,
            title: "Upgrade Your Career",
            subtitle: "Join top-rated courses and learn from experts today.",
            img: banner2,
        },
        {
            id: 3,
            title: "Build Real Projects",
            subtitle: "Apply your knowledge through hands-on projects and grow faster.",
            img: banner3,
        },
        {
            id: 4,
            title: "Join a Learning Community",
            subtitle: "Connect with other learners and share your journey.",
            img: banner4,
        },
    ];

    return (
        <div className="w-full max-h-screen mt-16 rounded-2xl overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative h-[500px] w-full rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 z-10"
                        ></div>
                        <img
                            src={slide.img}
                            alt="Banner"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        {/* Text Content */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
