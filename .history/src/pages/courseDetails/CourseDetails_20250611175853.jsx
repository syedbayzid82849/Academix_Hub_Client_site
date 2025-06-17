import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { user } = useContext(AuthContext);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [enrolledCount, setEnrolledCount] = useState(singleCourse.enrolled || 0);

    const { _id, title, seats, instructorName, instructorEmail, image, duration, description, createdAt } = singleCourse;

    // Check if user already enrolled
    useEffect(() => {
        if (user) {
            axios
                .get(`https://academix-hub-server.vercel.app/enrollments?userEmail=${user.email}&courseId=${_id}`)
                .then(res => {
                    if (res.data?.enrolled) {
                        setIsEnrolled(true);
                    }
                })
                .catch(err => {
                    console.error('Enrollment check error:', err);
                });
        }
    }, [user, _id]);

    const handleEnrollBtn = async () => {
        if (!user) return;

        const enrollmentData = {
            userEmail: user.email,
            courseId: _id,
            enrolledAt: new Date()
        };

        try {
            const res = await axios.post('https://academix-hub-server.vercel.app/enrollments', enrollmentData);
            if (res.data.success) {
                setIsEnrolled(true);
                setEnrolledCount(prev => prev + 1);
                toast.success('Enrollment Successful!');
            } else {
                toast.error(res.data.message || 'Already enrolled or seat full');
            }
        } catch (error) {
            console.error(error);
            toast.error('Enrollment failed');
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 bg-amber-50">
            <img src={image} alt={title} className="w-full h-72 object-cover rounded-lg mb-6 shadow" />

            <p className="text-gray-600 mt-3">
                <span className="font-semibold">Description:</span>
            </p>
            <p className="text-gray-800 my-5 border rounded-2xl border-gray-200 p-4">{description}</p>

            <h2 className="text-3xl font-bold mb-2 text-gray-700">{title}</h2>

            <p className="text-gray-700 mb-1">
                <span className="font-semibold">Instructor:</span> {instructorName}
            </p>
            <p className="text-gray-600 mb-3">
                <span className="font-semibold">Email:</span> {instructorEmail}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p><span className="font-semibold">Duration:</span> {duration}</p>
                <p><span className="font-semibold">Total Seats:</span> {seats}</p>
                <p><span className="font-semibold">Enrolled:</span> {enrolledCount}</p>
                <p><span className="font-semibold">Created At:</span> {new Date(createdAt).toLocaleDateString()}</p>
            </div>

            <button
                onClick={handleEnrollBtn}
                disabled={!user || isEnrolled || enrolledCount >= seats}
                className={`w-full mt-6 px-4 py-2 rounded font-semibold 
                ${!user || isEnrolled || enrolledCount >= seats
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
                {!user ? 'Login to Enroll' : isEnrolled ? 'Enrolled' : enrolledCount >= seats ? 'No Seats Available' : 'Enroll'}
            </button>
        </div>
    );
};

export default CourseDetails;
