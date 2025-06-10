import React from 'react';
import Hero from '../../components/hero/Hero';
import { useLoaderData } from 'react-router';
import HomeCourseComponent from '../../components/HomeCoureseComponent/HomeCoureseComponent';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className="max-w-6xl mx-auto">
            <Hero className="h-[900]"></Hero>
            <HomeCourseComponent courses={courses}></HomeCourseComponent>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;