import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const HomeCourseComponent = () => {
    const { getAllCourses, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    console.log(courses, loading);

    // Fetching courses data
    useEffect(() => {
        getAllCourses()
            .then(res => setCourses(res))
            .catch(error => console.error(error));
    }, []);

    const latestCourses = courses.slice(0, 6);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <section className="mt-10">
            <div className="px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Latest Courses</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestCourses.map(() => (
                    ))}
                </div>

                {/* View All Courses Button */}
                <div className="text-center mt-10">
                    <NavLink to="/courses">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition"
                        >
                            View All Courses
                        </motion.button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default HomeCourseComponent;
