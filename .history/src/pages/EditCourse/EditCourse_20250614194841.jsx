import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

const EditCourse = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData(); // loader থেকে course data
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        // প্রি-ফিল্ড ডাটা সেট করো
        reset({
            title: course.title,
            shortDesc: course.shortDesc,
            image: course.image,
            duration: course.duration
        });
    }, [course, reset]);

    const onSubmit = async (data) => {
        const updatedCourse = {
            ...data,
            editedAt: new Date()
        };

        try {
            const res = await axios.put(`https://academix-hub-server.vercel.app/courses/${course._id}`, updatedCourse);
            if (res.data.modifiedCount > 0) {
                Swal.fire('Success', 'Course updated successfully!', 'success');
                navigate('/dashboard/manage-courses');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'Something went wrong!', 'error');
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">Edit Course</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register("title")} type="text" placeholder="Course Title" className="w-full p-3 border rounded" required />
                <input {...register("shortDesc")} type="text" placeholder="Short Description" className="w-full p-3 border rounded" required />
                <input {...register("image")} type="text" placeholder="Image URL" className="w-full p-3 border rounded" required />
                <input {...register("duration")} type="text" placeholder="Duration (e.g., 4 weeks)" className="w-full p-3 border rounded" required />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Update Course</button>
            </form>
        </div>
    );
};

export default EditCourse;
