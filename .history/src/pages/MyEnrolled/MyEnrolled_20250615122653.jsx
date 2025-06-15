import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myEnroll, setMyEnroll] = useState([]);
    console.log(myEnroll);

    useEffect(() => {
        if (user?.email) {
            const email = encodeURIComponent(user.email);
            axios.get(`http://localhost:3000/myEnrolls?email=${email}`)
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
                axios.delete(`http://localhost:3000/myEnrolls/${id}`)
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

    // ✅ মূল JSX return এখন ঠিক জায়গায়
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Enrolled Courses</h2>
            {myEnroll.length === 0 ? (
                <p>You have not enrolled in any courses yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border">
                        <thead>
                            <tr className=" text-left">
                                <th className="p-2 border">#</th>
                                <th className="p-2 border">Title</th>
                                <th className="p-2 border">Instructor</th>
                                <th className="p-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myEnroll.map((course, index) => (
                                <tr key={course._id} className="hover:bg-gray-50">
                                    <td className="p-2 border hover:">{index + 1}</td>
                                    <td className="p-2 border hover:">{course.title}</td>
                                    <td className="p-2 border hover:">{course.instructorName}</td>
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
