import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { FaCircleUser } from "react-icons/fa6";
import Swal from 'sweetalert2';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    clg

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-violet-600 font-semibold' : 'text-gray-800';

    const links = (
        <div className="list-none flex flex-col lg:flex-row gap-4 lg:gap-6">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-violet-600 font-semibold" : "text-gray-800"}
                >Home</NavLink>
            </li>
            <li>
                <NavLink
                    to="/courses"
                    className={({ isActive }) => isActive ? "text-violet-600 font-semibold" : "text-gray-800"}
                >All Courses</NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink
                            to="/add-course"
                            className={({ isActive }) => isActive ? "text-violet-600 font-semibold" : "text-gray-800"}
                        >Add A Course</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/manage-courses"
                            className={({ isActive }) => isActive ? "text-violet-600 font-semibold" : "text-gray-800"}
                        >Manage Courses</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myEnrolls"
                            className={({ isActive }) => isActive ? "text-violet-600 font-semibold" : "text-gray-800"}
                        >My Enrolled Courses</NavLink>
                    </li>
                </>
            )}
            {/* <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-violet-600 font-semibold" : "text-gray-800"}
                >About</NavLink>
            </li> */}
        </div>
    );

    // user sign out 
    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You have been logged out successfully.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong during logout.",
                            icon: "error"
                        });
                    });
            }
        });
    };


    return (
        <header className="p-2 bg-gray-100 text-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center h-16">
                {/* Logo */}
                <NavLink to="/" className=" flex items-center space-x-2 text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-violet-600">
                        <path d="M27.912 7.289..."></path>
                        <path d="M22.094 19.451..."></path>
                    </svg>
                    <span className=' font-bold text-2xl tracking-wide text-violet-600 italic'>HobbyHub</span>
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6 items-center">
                    {links}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex gap-5 flex items-center">
                    {
                        user ? (
                            <>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                                    <NavLink to="/profile">
                                        {user?.photoURL ? (
                                            <img
                                                className="w-10 h-10 border border-black rounded-full object-cover"
                                                src={user?.photoURL}
                                                alt="Profile"
                                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/E0E0E0/444444?text=User'; }}
                                            />
                                        ) : (
                                            // যদি photoURL না থাকে, তবে FaCircleUser আইকনটি দেখান
                                            <FaCircleUser className="text-4xl text-gray-700 hover:text-violet-600 cursor-pointer" />
                                        )}
                                    </NavLink>
                                </div>

                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200"
                                >
                                    Sign in
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                >
                                    Sign up
                                </NavLink>
                            </>
                        )
                    }

                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
                    <nav className="flex flex-col p-4 space-y-2">
                        {links}
                    </nav>
                    <div className="flex flex-col px-4 pb-4 space-y-2">
                        {
                            user ? (
                                <>
                                    <div className='flex flex-row-reverse items-center justify-around mt-4'>
                                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                                            <NavLink to="/profile">
                                                {user?.photoURL ? (
                                                    <img
                                                        className="w-10 h-10 border border-black rounded-full"
                                                        src={user.photoURL}
                                                        alt="Profile"
                                                    />
                                                ) : (
                                                    <FaCircleUser className="text-4xl hover:text-violet-600" />
                                                )}
                                            </NavLink>
                                        </div>

                                        <div>
                                            <button
                                                onClick={handleSignOut}
                                                className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <NavLink
                                        to="/login"
                                        className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200"
                                    >
                                        Sign in
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                    >
                                        Sign up
                                    </NavLink>
                                </>
                            )
                        }

                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
