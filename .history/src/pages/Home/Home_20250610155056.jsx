import React from 'react';
import Hero from '../../components/hero/Hero';
import { useLoaderData } from 'react-router';
import HomeCourseComponent from '../../components/HomeCoureseComponent/HomeCoureseComponent';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className="max-w-6xl mx-auto">
            <Hero></Hero>
            <HomeCourseComponent courses={courses}></HomeCourseComponent>
            
        </div>
    );
};

export default Home;