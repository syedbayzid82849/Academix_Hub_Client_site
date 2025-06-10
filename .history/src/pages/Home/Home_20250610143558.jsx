import React from 'react';
import Hero from '../../components/hero/Hero';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Hero></Hero>
        </div>
    );
};

export default Home;