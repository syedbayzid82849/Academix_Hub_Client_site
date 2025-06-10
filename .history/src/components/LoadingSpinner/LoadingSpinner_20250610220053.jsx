import React from 'react';

const LoadingSpinner = () => {
    return (
        // এই div টি পুরো স্ক্রিন উচ্চতা নেবে এবং ভেতরের কন্টেন্টকে মাঝখানে আনবে
        <div className="min-h-screen flex items-center justify-center">
            {/* আপনার স্পিনারের ডিজাইন */}
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-default-600"></div>
        </div>
    );
};

export default LoadingSpinner;