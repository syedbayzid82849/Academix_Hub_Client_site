import React from 'react';
import { NavLink } from 'react-router';
const HomeCourseComponent = ({ courses }) => {
    
    const latestCourses = courses.slice(0, 6);

    return (
        <section className="mt-10">
            <div className="px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Latest Courses</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestCourses.map(({title, image, _id, date, }) => (
                        <div
                            key={_id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    Seats: {seats}
                                </p>
                                <NavLink
                                    to={`/course/${_id}`}
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
                    >
                        <button
                            className="flex justify-end bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition"
                        >
                            View All Courses
                        </button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default HomeCourseComponent;
