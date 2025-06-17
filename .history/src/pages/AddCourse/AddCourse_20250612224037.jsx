import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../assets/add a course animation.json'; // replace with your actual Lottie JSON
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

const AddCourse = () => {
    const { user } = useContext(AuthContext)
    const { email, displayName } = user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCourse = Object.fromEntries(formData.entries());
        console.log(newCourse);

        // send course data to the database
        fetch('https://academix-hub-server.vercel.app/all-course',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCourse),
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Course Added!',
                        text: 'Your course has been successfully created.',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
                    form.reset();
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again.',
                    });
                }
            });
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

                <label className="block">Name: </label>
                <input name="instructorName" type='text' defaultValue={displayNam} className="w-full p-3 border rounded-lg" placeholder="Name" required />
                <label className="block">Email: </label>
                <input name="instructorEmail" type='email' defaultValue={} className="w-full p-3 border rounded-lg" placeholder="Email" required />

                <div className="w-32 mx-auto">
                    <Lottie animationData={animationData} loop={true} />
                </div>

                <label className="block">Course Name: </label>
                <input name="title" type='text' className="w-full p-3 border rounded-lg" placeholder="Course Name" required />
                <label className="block">Short Description: </label>
                <textarea
                    name="description"
                    rows="4"
                    className="  border rounded w-full py-2 px-3  "
                    placeholder="Provide a brief description of the course"
                    required
                ></textarea>
                <label className="block">Released Date: </label>
                <input type="date" name="createdAt" className="input input-bordered w-full" required />
                <label className="block">Image URL: </label>
                <input name="image" type='url' className="w-full p-3 border rounded-lg" placeholder="Image URL" required />
                <label className="block">Duration: </label>
                <input name="duration" type='text' className="w-full p-3 border rounded-lg" placeholder="Duration" required />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">Add Course</button>

            </form>
        </motion.div>
    );
};

export default AddCourse;
