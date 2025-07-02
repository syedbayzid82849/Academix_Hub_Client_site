import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Abdur Rahman",
            image: "https://i.ibb.co/xqw2m2tM/portrait-of-indian-college-boy-holding-books-photo.jpg",
            rating: 5,
            feedback: "This platform helped me enhance my career path greatly!"
        },
        {
            id: 2,
            name: "Tanvir Hasan",
            image: "https://i.ibb.co/TxZPFZ3H/young-chinese-male-student-at-desk-in-library-study-environment-with-books-and-laptop-education-conc.jpg",
            rating: 5,
            feedback: "The courses are well structured and easy to follow. Highly recommended!"
        },
        {
            id: 3,
            name: "Naheyan Khan",
            image: "https://i.ibb.co/mCrnWxHm/ai-generated-youthful-student-boy-on-white-background-photo.jpg",
            rating: 4,
            feedback: "I learned a lot from the courses. The instructors are very helpful."
        }
    ];

    return (
        <section className="my-24 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
                    What Our Students Say
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map(({ id, name, image, rating, feedback }) => (
                        <div
                            key={id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-6 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={image}
                                alt={`${name}'s photo`}
                                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
                            <p className="text-yellow-400 text-lg my-2">
                                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
