import { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { FaCircleUser } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-violet-600 font-semibold' : 'text-gray-800';

    const links =
        (
            <>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink>
                <NavLink to="/create-job" className={navLinkClass}>Add A Job</NavLink>
                <NavLink to="/about" className={navLinkClass}>About</NavLink>
            </>
        );

        // user sign out 
        

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
                                                className="w-10 h-10 border border-black rounded-full"
                                                src={user.photoURL}
                                                alt="Profile"
                                            />
                                        ) : (
                                            <FaCircleUser className="text-4xl hover:text-violet-600" />
                                        )}
                                    </NavLink>
                                </div>

                                <NavLink
                                    to="/logout"
                                    className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                >
                                    Logout
                                </NavLink>
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
                                            <NavLink
                                                to="/logout"
                                                className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                            >
                                                Logout
                                            </NavLink>
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
