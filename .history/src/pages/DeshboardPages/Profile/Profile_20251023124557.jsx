const profile = () => {
    const { name, title, bio, followers, following, bannerUrl, avatarUrl, socialLinks } = profileData;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">

            {/* Profile Card Container */}
            <div className="w-full max-w-sm bg-white shadow-xl rounded-xl overflow-hidden transform hover:shadow-2xl transition duration-500 ease-in-out">

                {/* Banner Area */}
                <div className="relative">
                    {/* Banner Image */}
                    <img
                        src={bannerUrl}
                        alt="Profile Banner"
                        className="w-full h-32 object-cover object-center"
                        // Fallback for image loading issues
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x250/1E40AF/ffffff?text=Banner"; }}
                    />

                    {/* Avatar Positioned over Banner */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="p-1 bg-white rounded-full shadow-lg">
                            <img
                                src={avatarUrl}
                                alt={`${name}'s Avatar`}
                                className="w-28 h-28 object-cover rounded-full border-4 border-white"
                                // Fallback for image loading issues
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/112x112/374151/ffffff?text=AA"; }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content Area - Adjusted padding to account for avatar overlap */}
                <div className="text-center pt-16 pb-6 px-6">

                    {/* Name and Title */}
                    <h1 className="text-2xl font-bold text-gray-800 mt-2">{name}</h1>
                    <p className="text-sm text-blue-600 font-medium tracking-wide uppercase">{title}</p>

                    {/* Bio */}
                    <p className="text-gray-500 mt-4 mb-6 text-sm leading-relaxed max-w-xs mx-auto">
                        {bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center border-t border-b border-gray-200 py-3 mb-6">
                        {socialLinks.map(({ name, url }) => {
                            // Ensure IconComponent is correctly mapped and is a valid React component
                            const IconComponent = SocialIconMap[name];
                            return (
                                // Pass the retrieved IconComponent as the 'Icon' prop
                                <SocialLink key={name} name={name} Icon={IconComponent} url={url} />
                            );
                        })}
                    </div>

                    {/* Stats (Followers/Following) */}
                    <div className="flex justify-center space-x-8">
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold text-gray-800">{followers}</span>
                            <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Followers</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold text-gray-800">{following}</span>
                            <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Following</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
