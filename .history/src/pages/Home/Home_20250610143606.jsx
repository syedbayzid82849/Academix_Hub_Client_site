import React from 'react';
import Hero from '../../components/hero/Hero';

const Home = () => {
    const courses = useLoaderData();
    console.log();
    return (
        <div>
            <Hero></Hero>
        </div>
    );
};

export default Home;