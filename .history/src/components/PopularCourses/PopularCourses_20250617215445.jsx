import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);
    console.log(object);

    useEffect(() => {
        axios.get('https://academix-hub-server.vercel.app/popular-courses')
            .then(res => {
                console.log(res);
                setCourses(res.data)
            })
            .catch(err => console.error(err));

    });

    return (
        <section className="mt-16 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses?.map(course => (
                    <div key={course._id} className="border p-4 rounded-lg shadow-md">
                        <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
                        <p className="text-gray-600">{course.shortDescription?.slice(0, 60)}...</p>
                        <NavLink to={`/courseDetails/${course._id}`}>
                            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                                Details
                            </button>
                        </NavLink>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default PopularCourses;