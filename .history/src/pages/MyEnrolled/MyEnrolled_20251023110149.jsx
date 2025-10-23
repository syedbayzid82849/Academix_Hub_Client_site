import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myEnroll, setMyEnroll] = useState([]);
    console.log(myEnroll);

    useEffect(() => {
        if (user?.email) {
            const email = encodeURIComponent(user.email);
            axios.get(`https://academix-hub-server.vercel.app/myEnrolls?email=${email}`)
                .then(res => {
                    setMyEnroll(res.data);
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong while loading your enrolled courses!',
                    });
                    console.error("Error loading enrollments:", err);
                });
        }
    }, [user?.email]);

    const handleRemove = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to remove this enrollment?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://academix-hub-server.vercel.app/myEnrolls/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'Your enrollment has been removed.',
                                'success'
                            );
                            const updated = myEnroll.filter(item => item._id !== id);
                            setMyEnroll(updated);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed to remove',
                            text: 'Something went wrong!',
                        });
                    });
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:my-16 md:px-4  mx-auto"
        >
            <HelmetProvider>
                <title>Manage Courses | Academix Hub</title>
            </HelmetProvider>
            <div className="p-1.5 lg:p-4">
                <h2 className="text-2xl font-bold mb-4">My Added Courses</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-gray-200 text-left">
                            <tr>
                                <th className="p-2 border text-black">Title</th>
                                <th className="p-2 border text-black">Description</th>
                                <th className="p-2 border text-black">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myEnroll.map((course) => (
                                <tr key={course._id} className="">
                                    <td className="p-2 border">{course.title}</td>
                                    <td className="p-2 border">{course.instructorName}</td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => handleRemove(course._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Cancel Enrollment
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            </div>
            );
};

            export default MyEnrolled;
