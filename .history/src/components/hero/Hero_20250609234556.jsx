import React from 'react';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = () => {

]        const settings = {
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            autoplay: true,
            arrows: false
        };

        return (
            <Slider {...settings}>
                <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('/banner1.jpg')` }}>
                    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-3xl font-bold">Learn New Skills Online</div>
                </div>
                <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('/banner2.jpg')` }}>
                    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-3xl font-bold">Explore Top Courses</div>
                </div>
            </Slider>
        );
    };


    export default Hero;