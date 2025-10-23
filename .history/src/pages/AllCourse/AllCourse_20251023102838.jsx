import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AllCourse = () => {
    const { getAllCourses, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getAllCourses()
            .then(res => setCourses(res))
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (courses.length === 0) {
        return (
            <section className="my-16 px-4 max-w-6xl mx-auto">
                <HelmetProvider>
                    <Helmet>
                        <title>All Courses | Academix Hub</title>
                    </Helmet>
                </HelmetProvider>
                <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Our Courses</h2>
                <p className="text-center text-gray-600 dark:text-gray-300">
                    No courses available at the moment.
                </p>
            </section>
        );
    }

    return (
        <section className="my-16 px-4">
            <HelmetProvider>
                <Helmet>
                    <title>All Courses | Academix Hub</title>
                </Helmet>
            </HelmetProvider>

            <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Our Courses</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courses.map(({ title, image, _id, createdAt }) => (
                    <motion.div
                        key={_id}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden flex flex-col"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                Added: {new Date(createdAt).toLocaleDateString()}
                            </p>

                            {/* Button bottom-aligned with mt-auto */}
                            <NavLink
                                to={`/courseDetails/${_id}`}
                                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
                            >
                                View Details
                            </NavLink>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AllCourse;
