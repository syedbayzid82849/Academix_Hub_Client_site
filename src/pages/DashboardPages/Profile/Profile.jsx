import React from 'react';
import { Facebook, Twitter, Linkedin, Dribbble, Globe } from 'lucide-react';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';

const Profile = () => {
    const profileData = {
        name: "Apurbo Akhond",
        title: "UI/UX Designer",
        bio: "Passionate designer creating modern and user-friendly web experiences. Always exploring creative design solutions.",
        followers: 78,
        following: 12,
        bannerUrl: "https://placehold.co/800x250/1E40AF/1D4ED8?text=Blue+Wave+Design",
        avatarUrl: "https://placehold.co/128x128/374151/ffffff?text=AA",
        socialLinks: [
            { name: 'Facebook', url: '#' },
            { name: 'Twitter', url: '#' },
            { name: 'LinkedIn', url: '#' },
            { name: 'Dribbble', url: '#' },
        ]
    };
    // Map social media names to Lucide icons
    const SocialIconMap = {
        'Facebook': Facebook,
        'Twitter': Twitter,
        'LinkedIn': Linkedin,
        'Dribbble': Globe
    };
    const SocialLink = ({ Icon, url }) => (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition duration-300 mx-3 p-2 rounded-full hover:bg-blue-50"
        >
            <Icon size={20} />
        </a>
    );
    const { name, title, bio, followers, following, bannerUrl, avatarUrl, socialLinks } = profileData;
    const { user } = useContext(AuthContext);

    return (
        <div className=" flex items-center justify-center p-4 font-inter">
            <div className="w-full  bg-white shadow-xl rounded-xl overflow-hidden transform hover:shadow-2xl transition duration-500 ease-in-out">

                {/* Banner */}
                <div className="relative">
                    <img
                        src={bannerUrl}
                        alt="Profile Banner"
                        className="w-full h-32 object-cover"
                        onError={(e) => (e.target.src = "https://placehold.co/800x250/1E40AF/ffffff?text=Banner")}
                    />
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="p-1 bg-white rounded-full shadow-lg">
                            <img
                                src={user?.photoURL}
                                alt={`${name}'s Avatar`}
                                className="w-28 h-28 object-cover rounded-full border-4 border-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="min-h-screen text-center pt-16 pb-6 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">{name}</h2>
                    <p className="text-sm text-blue-600 font-medium uppercase">{title}</p>

                    <p className="text-gray-500 mt-4 mb-6 text-sm leading-relaxed max-w-xs mx-auto">
                        {bio}
                    </p>

                    <div className="flex justify-center border-t border-b border-gray-200 py-3 mb-6">
                        {socialLinks.map(({ name, url }) => {
                            const IconComponent = SocialIconMap[name];
                            return IconComponent ? (
                                <SocialLink key={name} Icon={IconComponent} url={url} />
                            ) : null;
                        })}
                    </div>

                    <div className="flex justify-center space-x-8">
                        <div>
                            <span className="text-xl font-extrabold text-gray-800">{followers}</span>
                            <span className="block text-xs font-semibold uppercase text-gray-500 tracking-wider">Followers</span>
                        </div>
                        <div>
                            <span className="text-xl font-extrabold text-gray-800">{following}</span>
                            <span className="block text-xs font-semibold uppercase text-gray-500 tracking-wider">Following</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
