import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { user } = useContext(AuthContext);
    const [isEnrolled, setIsEnrolled] = useState(false);
    console.log(isEnrolled);
    const [totalEnroll, setTotalEnroll] = useState(0);
    const { _id, title, totalSeats, instructorName, instructorEmail, image, duration, description, createdAt } = singleCourse;
    const userEmail = user?.email;
    const [isSeatAvailable, sert]
    // const navigate = useNavigate();

    const enrolledUserDetails = {
        userEmail: userEmail,
        courseId: _id,
        title,
        instructorName
    };


    // to get all enrolled users data 
    useEffect(() => {
        axios.get(`http://localhost:3000/enrolled-users/${_id}`)
            .then(res => {
                setTotalEnroll(res.data.length)
            })
            .catch(err => {
                console.log(err);
            })
    }, [_id]);

    // find to user enroll or not enroll 
        axios.get(`http://localhost:3000/enrolled-users/${_id}?email=${user?.email}`)
            .then(res => {
                if (res.data) {
                    setIsEnrolled(true);
                }
            })
            .catch(err => {
                console.log(err);
            })




    const handleEnrollBtn = () => {
        if (!user) {
            return;
        }

        if (isEnrolled) {
            Swal.fire({
                icon: 'error',
                title: 'You Have Already Enrolled!',
                text: 'You Have Already Enrolled.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
            return;
        }


        axios
            .post('http://localhost:3000/enrolled-users', enrolledUserDetails)
            .then(res => {
                console.log(res);
                setIsEnrolled(true);
                Swal.fire({
                    icon: 'success',
                    title: 'Enroll Successful!',
                    text: 'Your Enroll has been successful.',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            })
            .catch(err => console.log(err))
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
                <p><span className="font-semibold">Enrolled:</span> {totalEnroll}</p>
                <p><span className="font-semibold">Created At:</span> {new Date(createdAt).toLocaleDateString()}</p>
            </div>

            <button
                onClick={() => handleEnrollBtn()}
                disabled={!user}
                className={`w-full mt-6 px-4 py-2 rounded font-semibold 
            ${!user || isEnrolled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
                {isEnrolled ? 'Enrolled' : 'Enroll'}
            </button>

        </div>

    );
};

export default CourseDetails;