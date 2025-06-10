import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-5 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Column 1: Logo & Slogan */}
                <div className="mx">
                    <h2 className="text-2xl font-bold text-blue-400">Academix-Hub</h2>
                    <p className="mt-2 text-sm text-gray-300">
                        Empowering learners with quality courses and skill-building opportunities.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="text-xl hover:text-blue-500 transition" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter className="text-xl hover:text-blue-400 transition" />
                        </a>
                        <a href="#" aria-label="GitHub">
                            <FaGithub className="text-xl hover:text-gray-400 transition" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="mx-auto">
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/courses" className="hover:underline">Courses</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                    </ul>
                </div>

                {/* Column 3: Useful Links */}
                <div className="mx-auto">
                    <h3 className="text-lg font-semibold mb-3">Useful</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/login" className="hover:underline">Login</a></li>
                        <li><a href="/register" className="hover:underline">Register</a></li>
                        <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                    </ul>
                </div>

            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
                @2025 Academix-Hub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


[
    {
    
        "title": "React Basics",
        "description": "Learn the fundamentals of React including components, hooks, and state management.",
        "image": "https://i.ibb.co/NKqjVHL/react-course.jpg",
        "duration": "4 weeks",
        "seats": 10,
        "enrolled": 3,
        "createdAt": "2025-06-01T10:00:00Z",
        "instructorName": "John Doe",
        "instructorEmail": "john@example.com"
    },
    {
    
        "title": "Node.js Masterclass",
        "description": "Deep dive into backend development using Node.js, Express, and MongoDB.",
        "image": "https://i.ibb.co/YZW2pzr/node-course.jpg",
        "duration": "5 weeks",
        "seats": 8,
        "enrolled": 5,
        "createdAt": "2025-06-02T10:00:00Z",
        "instructorName": "Alice Smith",
        "instructorEmail": "alice@example.com"
    },
    {
    
        "title": "Advanced JavaScript",
        "description": "Master JavaScript ES6+, closures, promises, async/await and design patterns.",
        "image": "https://i.ibb.co/j8XjDpP/js-course.jpg",
        "duration": "3 weeks",
        "seats": 12,
        "enrolled": 6,
        "createdAt": "2025-06-03T09:30:00Z",
        "instructorName": "David Miller",
        "instructorEmail": "david@example.com"
    },
    {
    
        "title": "Python for Beginners",
        "description": "Get started with Python programming. Perfect for absolute beginners.",
        "image": "https://i.ibb.co/1rY4vkr/python-course.jpg",
        "duration": "4 weeks",
        "seats": 10,
        "enrolled": 9,
        "createdAt": "2025-06-04T08:15:00Z",
        "instructorName": "Sarah Khan",
        "instructorEmail": "sarah@example.com"
    },
    {
    
        "title": "Web Design Essentials",
        "description": "Learn HTML, CSS, and basic design principles for creating responsive websites.",
        "image": "https://i.ibb.co/9cjXDyf/web-design.jpg",
        "duration": "2 weeks",
        "seats": 15,
        "enrolled": 7,
        "createdAt": "2025-06-05T12:00:00Z",
        "instructorName": "Michael Lin",
        "instructorEmail": "michael@example.com"
    },
    {
    
        "title": "Data Structures & Algorithms",
        "description": "Master the basics of data structures and algorithms in C++ and JavaScript.",
        "image": "https://i.ibb.co/hdfX3BB/dsa-course.jpg",
        "duration": "6 weeks",
        "seats": 9,
        "enrolled": 3,
        "createdAt": "2025-06-06T11:30:00Z",
        "instructorName": "Emily Watson",
        "instructorEmail": "emily@example.com"
    },
    {
    
        "title": "MongoDB Crash Course",
        "description": "A quick but comprehensive course on MongoDB and Mongoose.",
        "image": "https://i.ibb.co/zZQ7KH1/mongo-course.jpg",
        "duration": "2 weeks",
        "seats": 10,
        "enrolled": 2,
        "createdAt": "2025-06-07T14:20:00Z",
        "instructorName": "Robert Taylor",
        "instructorEmail": "robert@example.com"
    },
    {
    
        "title": "UI/UX Fundamentals",
        "description": "Understand the principles of user interface and experience design.",
        "image": "https://i.ibb.co/DbhXsHP/uiux-course.jpg",
        "duration": "3 weeks",
        "seats": 10,
        "enrolled": 5,
        "createdAt": "2025-06-08T10:10:00Z",
        "instructorName": "Anna Lee",
        "instructorEmail": "anna@example.com"
    },
    {
    
        "title": "Fullstack Project Bootcamp",
        "description": "Build a complete fullstack project using MERN stack from scratch.",
        "image": "https://i.ibb.co/9yhnKk4/fullstack-course.jpg",
        "duration": "6 weeks",
        "seats": 7,
        "enrolled": 4,
        "createdAt": "2025-06-09T09:00:00Z",
        "instructorName": "Chris Park",
        "instructorEmail": "chris@example.com"
    },
    {
        
        "title": "Firebase Integration",
        "description": "Learn how to integrate Firebase Auth, Firestore, and Hosting in your projects.",
        "image": "https://i.ibb.co/yBHv9V1/firebase-course.jpg",
        "duration": "2 weeks",
        "seats": 10,
        "enrolled": 1,
        "createdAt": "2025-06-10T10:00:00Z",
        "instructorName": "Lily Chan",
        "instructorEmail": "lily@example.com"
    },
    {
        
        "title": "Tailwind CSS from Scratch",
        "description": "Master utility-first CSS using Tailwind to build modern UIs.",
        "image": "https://i.ibb.co/Qv0tM8S/tailwind-course.jpg",
        "duration": "1 week",
        "seats": 20,
        "enrolled": 8,
        "createdAt": "2025-06-11T16:45:00Z",
        "instructorName": "Nashit Rafi",
        "instructorEmail": "nashit@example.com"
    },
    {
        
        "title": "Git & GitHub Essentials",
        "description": "Learn version control using Git and collaborate using GitHub.",
        "image": "https://i.ibb.co/Yj2JKtH/git-course.jpg",
        "duration": "1 week",
        "seats": 25,
        "enrolled": 10,
        "createdAt": "2025-06-12T11:00:00Z",
        "instructorName": "Tanvir Hossain",
        "instructorEmail": "tanvir@example.com"
    }
]

