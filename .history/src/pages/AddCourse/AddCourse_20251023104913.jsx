import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../assets/add a course animation.json'; // replace with your actual Lottie JSON
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AddCourse = () => {
    const { user } = useContext(AuthContext);
    const { email, displayName } = user;
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCourse = Object.fromEntries(formData.entries());
        console.log(newCourse);
        axios
            .post('https://academix-hub-server.vercel.app/all-course', newCourse)
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Course Added!',
                    text: 'Your course has been successfully created.',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });

            })
            .catch(err => console.log(err));
        navigate('/')
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-4 p-8 md:p-12 bg-gray-800 shadow-lg rounded-3xl my-16"
        >
            <HelmetProvider>
                <Helmet>
                    <title>Create Course | Academix Hub</title>
                </Helmet>
            </HelmetProvider>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">
                Add New Course
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Lottie Animation */}
                <div className="w-full md:w-1/3">
                    <Lottie animationData={animationData} loop={true} />
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-2/3 flex flex-col gap-4"
                >
                    <input
                        name="instructorName"
                        type="text"
                        defaultValue={displayName}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Instructor Name"
                        required
                    />
                    <input
                        name="instructorEmail"
                        type="email"
                        defaultValue={email}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Instructor Email"
                        required
                    />
                    <input
                        name="title"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Course Name"
                        required
                    />
                    <textarea
                        name="description"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        placeholder="Short Description"
                        required
                    ></textarea>
                    <input
                        type="date"
                        name="createdAt"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                    <input
                        name="image"
                        type="url"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Course Image URL"
                        required
                    />
                    <input
                        name="totalSeats"
                        type="number"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Total Seats"
                        required
                    />
                    <input
                        name="duration"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Duration (e.g., 3 months)"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
                    >
                        Add Course
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default AddCourse;
