import React from 'react';
import Hero from '../../components/hero/Hero';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <Hero></Hero>
        </div>
    );
};

export default Home;