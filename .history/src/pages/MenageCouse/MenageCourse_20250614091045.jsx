import React from 'react';

const ManageCourse = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Added Courses</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-200 text-left">
                        <tr>
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Description</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course._id} className="border-t">
                                <td className="p-2 border">{course.title}</td>
                                <td className="p-2 border">{course.description || 'N/A'}</td>
                                <td className="p-2 border flex gap-2">
                                    <button
                                        onClick={() => handleEdit(course._id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(course._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {courses.length === 0 && (
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