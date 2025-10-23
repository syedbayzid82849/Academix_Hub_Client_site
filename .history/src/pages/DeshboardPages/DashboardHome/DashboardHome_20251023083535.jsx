import React from "react";
import { BookOpen, Users, Clock, Award } from "lucide-react";

const DashboardHome = () => {
    const stats = [
        {
            title: "Total Courses",
            value: 12,
            icon: <BookOpen className="text-blue-500" size={30} />,
            color: "bg-blue-100",
        },
        {
            title: "Active Students",
            value: 48,
            icon: <Users className="text-green-500" size={30} />,
            color: "bg-green-100",
        },
        {
            title: "Hours Watched",
            value: "132h",
            icon: <Clock className="text-yellow-500" size={30} />,
            color: "bg-yellow-100",
        },
        {
            title: "Achievements",
            value: 8,
            icon: <Award className="text-purple-500" size={30} />,
            color: "bg-purple-100",
        },
    ];

    return (
        <div className="min-h-screen p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">Welcome back, Bayzid 👋</h1>
                <p className="text-gray-500">Here's an overview of your academic activity</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-sm rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition"
                    >
                        <div className={`p-3 rounded-xl ${stat.color}`}>{stat.icon}</div>
                        <div>
                            <p className="text-sm text-gray-500">{stat.title}</p>
                            <h2 className="text-2xl font-semibold text-gray-800">{stat.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
                <ul className="divide-y divide-gray-200">
                    <li className="py-3 flex items-center justify-between">
                        <span className="text-gray-700">Completed “React Basics” course</span>
                        <span className="text-sm text-gray-500">2 hours ago</span>
                    </li>
                    <li className="py-3 flex items-center justify-between">
                        <span className="text-gray-700">Enrolled in “Node.js Mastery”</span>
                        <span className="text-sm text-gray-500">Yesterday</span>
                    </li>
                    <li className="py-3 flex items-center justify-between">
                        <span className="text-gray-700">Submitted Quiz: JavaScript ES6</span>
                        <span className="text-sm text-gray-500">3 days ago</span>
                    </li>
                    <li className="py-3 flex items-center justify-between">
                        <span className="text-gray-700">Achieved “Top Learner” badge</span>
                        <span className="text-sm text-gray-500">5 days ago</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardHome;
