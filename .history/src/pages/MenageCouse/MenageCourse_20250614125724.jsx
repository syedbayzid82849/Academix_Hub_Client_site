import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';

const ManageCourse = () => {
    const { user } = useContext(AuthContext);
    const [myCourses, setMyCourses] = useState([]);
    console.log(myCourses);

    useEffect(() => {
        axios.get(`https://academix-hub-server.vercel.app/manage-course/${user?.email}`)
            .then(res => {
                setMyCourses(res.data);

            })
            .catch(err => {
                console.log(err);
            })
    }, [user])

    // handleDelete btn 
    const handleDelete = () => {
        console.log('deleted');
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
                                <td className="p-2 border  md:flex gap-2">
                                    <button>E</button>
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