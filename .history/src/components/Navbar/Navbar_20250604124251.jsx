import { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navlinks = {
        <><
    }

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-violet-600 font-semibold' : 'text-gray-800';

    return (
        <header className="p-4 bg-gray-100 text-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center h-16">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-violet-600">
                        <path d="M27.912 7.289..."></path>
                        <path d="M22.094 19.451..."></path>
                    </svg>
                    <span className='flex items-center'><span><img className='w-8 ' src={logo} alt="HobbyHub Logo" /></span>HobbyHub</span>
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6 items-center">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/login" className={navLinkClass}>Jobs</NavLink>
                    <NavLink to="/register" className={navLinkClass}>Add A Job</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About</NavLink>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex gap-2">
                    <NavLink to="/login" className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200">Sign in</NavLink>
                    <NavLink to="/register" className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700">Sign up</NavLink>
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
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/login" className={navLinkClass}>Login</NavLink>
                        <NavLink to="/register" className={navLinkClass}>Register</NavLink>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    </nav>
                    <div className="flex flex-col px-4 pb-4 space-y-2">
                        <NavLink to="/login" className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100">Sign in</NavLink>
                        <NavLink to="/register" className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700">Sign up</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
