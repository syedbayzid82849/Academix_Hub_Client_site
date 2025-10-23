import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaCircleUser } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);

    const links = (isMobile = false) => (
        <ul className={`list-none ${isMobile ? 'flex flex-col gap-4' : 'flex flex-row gap-6'} font-medium`}>
            <li>
                <NavLink
                    to="/"
                    onClick={() => isMobile && setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/courses"
                    onClick={() => isMobile && setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                    }
                >
                    Courses
                </NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink
                            to="/add-course"
                            onClick={() => isMobile && setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                            }
                        >
                            Add Course
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/manage-courses"
                            onClick={() => isMobile && setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                            }
                        >
                            Manage Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myEnrolls"
                            onClick={() => isMobile && setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                            }
                        >
                            My Enrolls
                        </NavLink>
                    </li>
                </>
            )}

            <li>
                <NavLink
                    to="/faqs"
                    onClick={() => isMobile && setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                    }
                >
                    FAQs
                </NavLink>
            </li>
        </ul>
    );

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
        <header className="bg-white dark:bg-[#131313] shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center h-16 px-4 md:px-6">
                {/* Logo */}
                <NavLink to="/" className="flex items-center text-2xl font-bold tracking-wide text-violet-600 dark:text-violet-400 italic">
                    Academix-Hub
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-6">{links()}</nav>

                {/* Right Side Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    {user ? (
                        <>
                            <NavLink to="/dashboard/profile" className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                                {user?.photoURL ? (
                                    <img className="w-10 h-10 rounded-full object-cover border border-gray-300" src={user.photoURL} alt="Profile" />
                                ) : (
                                    <FaCircleUser className="text-4xl text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400" />
                                )}
                            </NavLink>
                            <button
                                onClick={handleSignOut}
                                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold rounded transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-700">
                                Sign In
                            </NavLink>
                            <NavLink to="/register" className="px-4 py-2 bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold rounded transition">
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-6 h-6 text-gray-800 dark:text-gray-200" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md transition">
                    <nav className="flex flex-col gap-4 p-4">{links(true)}</nav>
                    <div className="flex flex-col p-4 gap-2">
                        {user ? (
                            <div className="flex items-center justify-between">
                                <NavLink to="/dashboard/profile">
                                    {user?.photoURL ? (
                                        <img className="w-10 h-10 rounded-full border border-gray-300" src={user.photoURL} alt="Profile" />
                                    ) : (
                                        <FaCircleUser className="text-4xl text-gray-800 dark:text-gray-200" />
                                    )}
                                </NavLink>
                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold rounded transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <NavLink to="/login" className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-700">
                                    Sign In
                                </NavLink>
                                <NavLink to="/register" className="px-4 py-2 bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold rounded transition">
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
