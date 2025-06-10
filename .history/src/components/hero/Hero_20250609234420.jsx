import React from 'react';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

const Hero = () => {
    return (
        <div>
            <img src={banner1} alt="Banner 1" />
            <img src={banner2} alt="Banner 2" />
        </div>
    );
};

export default Hero;