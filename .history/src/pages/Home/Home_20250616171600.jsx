import React from 'react';
import Hero from '../../components/hero/Hero';
import { useLoaderData } from 'react-router';
import HomeCourseComponent from '../../components/HomeCoureseComponent/HomeCoureseComponent';
import Testimonials from '../../components/Testimonials/Testimonials';
import StayUpdateSection from '../../components/stayUpdateSection/stayUpdateSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>Home P</title>
            </Helmet>
            <Hero></Hero>
            <HomeCourseComponent courses={courses}></HomeCourseComponent>
            <Testimonials></Testimonials>
            <StayUpdateSection></StayUpdateSection>
        </div>
    );
};

export default Home;