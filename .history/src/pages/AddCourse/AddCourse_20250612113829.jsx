import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../assets/add a course animation.json'; // replace with your actual Lottie JSON

const AddCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        duration: '',
        email: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const courseData = {
            ...formData,
            createdAt: new Date().toISOString(),
        };
        console.log('Course Submitted:', courseData);
        // API call to submit courseData
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto border rounded-lg p-8 rounded-2xl shadow-md mt-10"
        >
            <h2 className="text-2xl font-bold text-center mb-6">Add Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <label htmlFor="email" className="block">Course Name: </label>
                <input name="title" onChange={handleChange} value={formData.title} className="w-full p-3 border rounded-lg" placeholder="Course Name" required />
                <label htmlFor="description" className="block">Short Description: </label>
                <input name="description" onChange={handleChange} value={formData.description} className="w-full p-3 border rounded-lg" placeholder="Short Description" required />
                <label htmlFor="imageUrl" className="block">Image URL: </label>
                <input name="imageUrl" onChange={handleChange} value={formData.imageUrl} className="w-full p-3 border rounded-lg" placeholder="Image URL" required />
                <label htmlFor="duration" className="block">Duration: </label>
                <input name="duration" onChange={handleChange} type='number' value={formData.duration} className="w-full p-3 border rounded-lg" placeholder="Duration" required />


                <div className="w-32 mx-auto">
                    <Lottie animationData={animationData} loop={true} />
                </div>

                <label htmlFor="email" className="block">Email: </label>
                <input name="email" onChange={handleChange}  value={formData.email} className="w-full p-3 border rounded-lg" placeholder="Email" required />
                <label htmlFor="name" className="block">Name: </label>
                <input name="name" onChange={handleChange} value={formData.name} className="w-full p-3 border rounded-lg" placeholder="Name" required />

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">Add Course</button>
            </form>
        </motion.div>
    );
};

export default AddCourse;
