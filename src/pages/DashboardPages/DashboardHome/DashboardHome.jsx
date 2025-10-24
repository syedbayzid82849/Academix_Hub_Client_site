import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { BookOpen, Users, Clock, Award } from "lucide-react";

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const [stats, setStats] = useState([
        { title: "Total Courses", value: 0 },
        { title: "Active Students", value: 0 },
        { title: "Hours Watched", value: "0h" },
        { title: "Achievements", value: 0 },
    ]);
    useEffect(() => {
        if (!user?.email) return;

        const fetchStats = async () => {
            try {
                const res = await axios.get(`https://academix-hub-server-site.vercel.app/dashboard-stats?email=${user?.email}`);
                setStats(res.data);
            } catch (error) {
                console.error("Error fetching dashboard stats:", error);
            }
        };

        fetchStats();
    }, [user]);

    const icons = [<BookOpen className="text-blue-500" size={30} />,
    <Users className="text-green-500" size={30} />,
    <Clock className="text-yellow-500" size={30} />,
    <Award className="text-purple-500" size={30} />];

    const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100"];

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold">Welcome back, {user?.displayName}</h1>
                <p className="text-gray-500">Here's an overview of your academic activity</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white shadow-sm rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition">
                        <div className={`p-3 rounded-xl ${colors[index]}`}>{icons[index]}</div>
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
