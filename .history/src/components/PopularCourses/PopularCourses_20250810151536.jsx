import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('https://academix-hub-server.vercel.app/popular-courses')
            .then(res => {
                setCourses(res.data);
            })
            .catch(err => {
                console.error('Failed to fetch popular courses:', err);
            });
    }, []);
    if (!courses.length) {

    const filteredCourses = courses.slice(0, 3);

    return (
        <section className="mt-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">
                    🔥 Popular Courses
                </h2>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCourses.map(course => (
                        <div
                            key={course._id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-40 object-cover rounded-xl"
                            />

                            <div className="mt-4 text-left flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{course.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Instructor: {course.instructorName}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Duration: {course.duration}</p>
                                <p className="text-sm mt-2 text-gray-700 dark:text-gray-200 flex-grow">
                                    {course.description?.slice(0, 80)}...
                                </p>
                                <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                                    🔥 Enrolled: {course.enrollCount}
                                </p>

                                {/* This button will stick at the bottom */}
                                <NavLink to={`/courseDetails/${course._id}`}>
                                    <button className="mt-auto w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition">
                                        View Details
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
