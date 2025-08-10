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
        <div className="w-full md:px-3 rounded-xl">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="relative h-screen md:h-[520px] w-full overflow-hidden rounded--xl"
                    >
                        {/* Dark overlay */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 z-10"
                        ></div>

                        {/* Background image */}
                        <img
                            src={slide.img}
                            alt="Banner"
                            className="w-full h-full object-cover"
                        />

                        {/* Text content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-white px-4">
                            <motion.h2
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="text-4xl md:text-6xl font-bold mb-4"
                            >
                                {slide.title}
                            </motion.h2>
                            <motion.p
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2 }}
                                className="text-lg md:text-xl mb-6"
                            >
                                {slide.subtitle}
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <NavLink
                                    to={'/courses'}
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg font-semibold shadow-lg"
                                >
                                    Get Started
                                </NavLink>
                            </motion.button>

                            {/* Scroll down animation */}
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: 10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.8
                                }}
                                className="absolute bottom-6 flex flex-col items-center"
                            >
                                <span className="text-white text-sm mb-1">
                                    Scroll Down
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default Hero;
