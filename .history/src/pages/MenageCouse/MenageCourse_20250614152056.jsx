import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router';

const ManageCourse = () => {
    const { user } = useContext(AuthContext);
    const [myCourses, setMyCourses] = useState([]);
    const navigate = useNavigate();
    console.log(myCourses);

    useEffect(() => {
        axios.get(`http://localhost:3000/manage-course/${user?.email}`)
            .then(res => {
                setMyCourses(res.data);

            })
            .catch(err => {
                console.log(err);
            })
    }, [user]);

    // handle edit btn
    const handleEdit = (id) =>{
        navigate(`/edit-course/${id}`)
    }

    // handleDelete btn 
    const handleDelete = (id) => {
        Axios.delete
    }



    return (
        <div className="p-4">
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
                        {myCourses?.map(course => (
                            <tr key={course._id} className="border-t">
                                <td className="p-2 border">{course.title}</td>
                                <td className="p-2 border">{course.description || 'N/A'}</td>
                                <td className="p-2 border flex flex-col md:flex-row gap-2 items-center justify-center">
                                    <button 
                                    onClick={()=> handleEdit(course._id)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 sm: rounded focus:outline-none focus:shadow-outline text-xs">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(course._id)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline text-xs"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {myCourses?.length === 0 && (
                            <tr>
                                <td colSpan="3" className="p-4 text-center text-gray-500">
                                    No courses found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageCourse;