import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">
                            <path d="M27.912 7.289..." />
                            <path d="M22.094 19.451..." />
                        </svg>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        {['Home', 'About', 'Courses', 'Contact'].map((text, index) => (
                            <li key={index} className="flex">
                                <a href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:text-gray-700 hover:dark:text-violet-600 dark:border-transparent hover:dark:border-violet-600 transition-colors">{text}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Auth Buttons - Desktop */}
                    <div className="items-center hidden lg:flex space-x-2">
                        <button className="px-4 py-2 rounded border dark:border-gray-600">Sign in</button>
                        <button className="px-4 py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                    </div>

                    {/* Hamburger - Mobile */}
                    <button className="p-4 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-2 space-y-2 px-4">
                        {['Home', 'About', 'Courses', 'Contact'].map((text, index) => (
                            <a key={index} href="#" className="block px-4 py-2 rounded dark:hover:bg-violet-100 dark:text-gray-800">{text}</a>
                        ))}
                        <div className="flex flex-col gap-2 mt-2">
                            <button className="px-4 py-2 rounded border dark:border-gray-600">Sign in</button>
                            <button className="px-4 py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;
