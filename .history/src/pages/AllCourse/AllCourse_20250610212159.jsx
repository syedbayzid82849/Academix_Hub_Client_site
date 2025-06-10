import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllCourse = () => {

    const courses = useLoaderData();
    console.log(courses);

    // যদি কোনো কোর্স না থাকে
    if (courses.length === 0) {
        return (
            <section className="my-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
                <p className="text-center text-gray-600">No courses available at the moment.</p>
            </section>
        );
    }

    return (
        <section className="my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course._id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        {/* course image */}
                        <img
                            src={course.imageUrl || 'https://placehold.co/400x250/E0E0E0/444444?text=Course Image'}
                            alt={course.title || 'Course'}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E0E0/444444?text=Image+Not+Found'; }}
                        />
                        {/* course title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title || 'No Title'}</h3>
                        {/* course added date (if available) */}
                        {course.addedDate && (
                            <p className="text-sm text-gray-500 mb-2">Added onAuthStateChanged: {new Date(course.addedDate).toLocaleDateString()}</p>
                        )}
                        {/* course short description (if available) */}
                        {course.shortDescription && (
                            <p className="text-gray-700 text-sm mb-4 flex-grow">{course.shortDescription}</p>
                        )}
                        {/* course details button */}
                        <div className="mt-auto"> {/* This will ensure the button is always at the bottom */}
                            {/* 'course._id' should be changed according to your course details page route */}  
                            <Link to={`/courses/${course._id}`} className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default AllCourse;