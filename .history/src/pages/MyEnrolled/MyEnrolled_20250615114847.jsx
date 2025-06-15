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
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Enrolled Courses</h2>
            {myEnroll.length === 0 ? (
                <p>You have not enrolled in any courses yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2 border">#</th>
                                <th className="p-2 border">Title</th>
                                <th className="p-2 border">Instructor</th>
                                <th className="p-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myEnroll.map((course, index) => (
                                <tr key={course._id} className="hover:bg-gray-50">
                                    <td className="p-2 border">{index + 1}</td>
                                    <td className="p-2 border">{course.title}</td>
                                    <td className="p-2 border">{course.instructor}</td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => handle(course._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Remove Enrollment
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