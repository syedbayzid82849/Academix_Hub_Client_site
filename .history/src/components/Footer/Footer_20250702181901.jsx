import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-5 mt-16 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Column 1: Logo & Slogan */}
                <div className="md:mx-auto">
                    <h2 className="text-2xl font-bold text-violet-600 dark:text-violet-400">Academix-Hub</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Empowering learners with quality courses and skill-building opportunities.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/syed.bayzidhusain" aria-label="Facebook" target="_blank" rel="noreferrer">
                            <FaFacebook className="text-xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="https://www.youtube.com/@SyedBayzid0.1" aria-label="Youtube" target="_blank" rel="noreferrer">
                            <FaYoutube className="text-xl hover:text-red-600 transition-colors" />
                        </a>
                        <a href="https://github.com/syedbayzid82849" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <FaGithub className="text-xl hover:text-gray-700 dark:hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="md:mx-auto">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li><a href="/" className="hover:underline hover:text-violet-600 dark:hover:text-violet-400">Home</a></li>
                        <li><a href="/courses" className="hover:underline hover:text-violet-600 dark:hover:text-violet-400">Courses</a></li>
                        <li><a href="/faqs" className="hover:underline hover:text-violet-600 dark:hover:text-violet-400">FAQs</a></li>
                    </ul>
                </div>

                {/* Column 3: Useful Links */}
                <div className="md:mx-auto flex justify-end">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Useful</h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li><a href="/login" className="hover:underline hover:text-violet-600 dark:hover:text-violet-400">Login</a></li>
                        <li><a href="/register" className="hover:underline hover:text-violet-600 dark:hover:text-violet-400">Register</a></li>
                        <li><a href="/" className="hover:underline hover:text-violet-600 dark:hover:text-violet-400">Dashboard</a></li>
                    </ul>
                </div>

            </div>

            <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                © 2025 <span className="text-violet-600 dark:text-violet-400">Academix-Hub</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
