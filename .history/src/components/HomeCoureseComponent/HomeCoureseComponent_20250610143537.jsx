import React from 'react';

const HomeCourseComponent = ({co}) => {
    <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Latest Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
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
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">
                                Added: {new Date(course.date).toLocaleDateString()}
                            </p>
                            <Link
                                to={`/course/${course._id}`}
                                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default HomeCourseComponent;