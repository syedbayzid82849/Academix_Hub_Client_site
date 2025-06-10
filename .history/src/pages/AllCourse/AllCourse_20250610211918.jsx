import React from 'react';

const AllCourse = () => {

    const courses = useLoaderData();
    console.log(courses);

    // যদি কোনো কোর্স না থাকে
    if (courses.length === 0) {
        return (
            <section className="my-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-10">আমাদের সকল কোর্স</h2>
                <p className="text-center text-gray-600">এখনো কোনো কোর্স উপলব্ধ নেই।</p>
            </section>
        );
    }

    return (
        <section className="my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">আমাদের সকল কোর্স</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course._id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        {/* কোর্সের ছবি */}
                        <img
                            src={course.imageUrl || 'https://placehold.co/400x250/E0E0E0/444444?text=Course Image'}
                            alt={course.title || 'Course'}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E0E0/444444?text=Image+Not+Found'; }}
                        />
                        {/* কোর্সের টাইটেল */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title || 'No Title'}</h3>
                        {/* কোর্স যোগ করার তারিখ (যদি থাকে) */}
                        {course.addedDate && (
                            <p className="text-sm text-gray-500 mb-2">যোগ করা হয়েছে: {new Date(course.addedDate).toLocaleDateString()}</p>
                        )}
                        {/* কোর্সের সংক্ষিপ্ত বিবরণ (যদি থাকে) */}
                        {course.shortDescription && (
                            <p className="text-gray-700 text-sm mb-4 flex-grow">{course.shortDescription}</p>
                        )}
                        {/* কোর্সের বিস্তারিত দেখার জন্য বাটন */}
                        <div className="mt-auto"> {/* এটি নিশ্চিত করবে যে বাটন সবসময় নিচে থাকবে */}
                            {/* 'course._id' আপনার কোর্সের ডিটেইলস পেজের রাউট অনুযায়ী পরিবর্তন করুন */}
                            <Link to={`/courses/${course._id}`} className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center">
                                বিস্তারিত দেখুন
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default AllCourse;