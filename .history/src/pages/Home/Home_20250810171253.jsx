import React from 'react';
import Hero from '../../components/hero/Hero';
import { useLoaderData } from 'react-router';
import HomeCourseComponent from '../../components/HomeCoureseComponent/HomeCoureseComponent';
import Testimonials from '../../components/Testimonials/Testimonials';
import StayUpdateSection from '../../components/stayUpdateSection/stayUpdateSection';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PopularCourses from '../../components/PopularCourses/PopularCourses';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className="">
            <HelmetProvider>
                <title>Home Page</title>
            </HelmetProvider>
            <Hero></Hero>
            <HomeCourseComponent courses={courses}></HomeCourseComponent>
            <PopularCourses></PopularCourses>
            <<section className="py-16 bg-base-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div className="p-6 rounded-xl shadow-md bg-base-200 text-center">
        <div className="text-5xl mb-4">👨‍🏫</div>
        <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
        <p>Learn from industry-leading professionals.</p>
      </div>

      <div className="p-6 rounded-xl shadow-md bg-base-200 text-center">
        <div className="text-5xl mb-4">📚</div>
        <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
        <p>Study at your own pace anytime.</p>
      </div>

      <div className="p-6 rounded-xl shadow-md bg-base-200 text-center">
        <div className="text-5xl mb-4">🏆</div>
        <h3 className="text-xl font-semibold mb-2">Certificate</h3>
        <p>Get certified after course completion.</p>
      </div>

      <div className="p-6 rounded-xl shadow-md bg-base-200 text-center">
        <div className="text-5xl mb-4">⏰</div>
        <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
        <p>Learn anywhere, anytime at your convenience.</p>
      </div>

    </div>
  </div>
</section>

            <Testimonials></Testimonials>
            <StayUpdateSection></StayUpdateSection>
        </div>
    );
};

export default Home;