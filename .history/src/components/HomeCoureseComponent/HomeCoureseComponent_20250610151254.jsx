import React from 'react';
import { NavLink } from 'react-router'; 
const HomeCourseComponent = ({ courses }) => {
    const latestCourses = courses.slice(0, 6);

    return (
        <section className="mt-10">
            <div className="px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Latest Courses</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestCourses.map(course => (
                        <div
                            key={course._id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    Added: {new Date(course.date).toLocaleDateString()}
                                </p>
                                <NavLink
                                    to={`/course/${course._id}`}
                                    className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    View Details
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All Courses Button */}
                <div className="text-center mt-10">
                    <NavLink
                        to="/courses"
                        className="inline-block flex flex-end bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition"
                    >
                        See All Courses
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default HomeCourseComponent;
