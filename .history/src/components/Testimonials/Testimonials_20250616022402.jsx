import React from 'react';

const Testimonials = () => {
    const testimonials = 
    
    return (
        <section className="my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((id) => (
                    <div key={id} className="bg-white p-6 rounded-2xl shadow-lg">
                        <img src="/user.png" alt="Student" className="w-16 h-16 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-center">Student Name</h3>
                        <p className="text-yellow-400 text-center my-2">★★★★★</p>
                        <p className="text-gray-600 text-sm text-center">"This platform helped me enhance my career path greatly!"</p>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Testimonials;