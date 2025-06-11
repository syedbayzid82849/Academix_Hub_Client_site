import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(singleCourse, user);
    const { _id, title, seats, instructorName, instructorEmail, image, enrolled, duration, description, createdAt } = singleCourse;

    const handleEnrollBtn = () => {
        console.log('Enroll button clicked');
    };
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 bg-amber-50">
            {/* Course Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover rounded-lg mb-6 shadow"
            />

            {/* Course Description */}
            <p className="text-gray-600 mt-3">
                <span className="font-semibold">Description:</span>
            </p>
            <p className="text-gray-800 mb-5 border rounded-2xl border-gray-200 p-4">{description}</p>


            {/* Course Title */}
            <h2 className="text-3xl font-bold mb-2 text-gray-700">{title}</h2>

            {/* Instructor Info */}
            <p className="text-gray-700 mb-1">
                <span className="font-semibold">Instructor:</span> {instructorName}
            </p>
            <p className="text-gray-600 mb-3">
                <span className="font-semibold">Email:</span> {instructorEmail}
            </p>

            {/* Other Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p><span className="font-semibold">Duration:</span> {duration}</p>
                <p><span className="font-semibold">Total Seats:</span> {seats}</p>
                <p><span className="font-semibold">Enrolled:</span> {enrolled}</p>
                <p><span className="font-semibold">Created At:</span> {new Date(createdAt).toLocaleDateString()}</p>
            </div>

<button disabled={!user}>Enroll</button>

        </div>

    );
};

export default CourseDetails;