import React from 'react';

const StayUpdateSection = () => {
    return (
        <section className='my-16 px-4 border-2 rounded-3xl mt-1q'>
            <div className=" p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-2 text-white">Stay Updated!</h2>
                <p className="mb-4 text-gray-600">Subscribe to our newsletter to get latest course updates.</p>
                <div className="flex justify-center gap-2">
                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg border" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
                </div>
            </div>

        </section>
    );
};

export default StayUpdateSection;