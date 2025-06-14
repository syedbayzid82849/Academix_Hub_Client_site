import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { user } = useContext(AuthContext);
    const [isEnrolled, setIsEnrolled] = useState(false);
    console.log(isEnrolled);
    console.log(singleCourse, user);
    const { _id, title, totalSeats, instructorName, instructorEmail, image, enrolled, duration, description, createdAt } = singleCourse;
    clg

    const handleEnrollBtn = () => {
        console.log('Enroll button clicked');
        setIsEnrolled(true);
    };
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 bg-amber-50">
            {/* Course Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover rounded-lg mb-6 shadow"
            />

            {/* Course Title */}
            <h2 className="text-3xl font-bold mb-2 text-gray-700">{title}</h2>

            {/* Instructor Info */}
            <p className="text-gray-700 mb-1">
                <span className="font-semibold">Instructor Name:</span> {instructorName}
            </p>
            <p className="text-gray-600 mb-3">
                <span className="font-semibold">Instructor Email:</span> {instructorEmail}
            </p>

            {/* Course Description */}
            <p className="text-gray-600 mt-3">
                <span className="font-semibold">Description:</span>
            </p>
            <p className="text-gray-700 my-1 border rounded-2xl border-gray-200 p-4">{description}</p>

            {/* Other Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p><span className="font-semibold">Duration:</span> {duration}</p>
                <p><span className="font-semibold">Total Seats:</span> {totalSeats}</p>
                <p><span className="font-semibold">Enrolled:</span> {enrolled}</p>
                <p><span className="font-semibold">Created At:</span> {new Date(createdAt).toLocaleDateString()}</p>
            </div>

            <button
                onClick={handleEnrollBtn}
                disabled={!user}
                className={`w-full mt-6 px-4 py-2 rounded font-semibold 
            ${!user ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
                Enroll
            </button>

        </div>

    );
};

export default CourseDetails;