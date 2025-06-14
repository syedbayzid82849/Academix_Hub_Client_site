import React from 'react';

const EditCourse = (params) => {
    console.log(params);
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