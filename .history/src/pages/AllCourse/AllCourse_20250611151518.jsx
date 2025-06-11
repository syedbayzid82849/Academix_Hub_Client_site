import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';


const AllCourse = () => {
    const { getAllCourses, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    console.log(getAllCourses, loading);

    // Fetching courses data
    useEffect(() => {
        getAllCourses()
            .then(res => setCourses(res))
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }


    // If no courses are available
    if (courses.length === 0) {
        return (
            <section className="my-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
                <p className="text-center text-gray-600">No courses available at the moment.</p>
            </section>
        );
    }

    return (
        <section className="my-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(({ title, image, _id, createdAt }) => (

                ))}
            </div>
        </section>

    );
};

export default AllCourse;