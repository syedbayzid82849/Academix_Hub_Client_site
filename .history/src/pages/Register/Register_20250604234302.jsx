import React from 'react';

const Register = () => {
    const handleRegister = (event) => {
        `event.preventDefault();
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
            {/* Lottie Animation */}
            <div className="w-full md:w-1/2">
                <Lottie animationData={animationData} loop={true} />
            </div>

            {/* Registration Form */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered w-full mb-3" required />
                    <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered w-full mb-3" required />
                    <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
                    <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
                    <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered w-full mb-3" required />
                    <button type="submit" className="btn btn-primary w-full">Register</button>
                </form>
            </div>
        </div>

    );
};

export default Register;