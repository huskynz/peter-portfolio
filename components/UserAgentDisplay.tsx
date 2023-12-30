import React from 'react';

const UserAgentDisplay: React.FC = () => {
    const userAgent = navigator.userAgent;

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">User Agent Display</h1>
                <p className="text-lg">User Agent: {userAgent}</p>
            </div>
        </div>
    );
};

export default UserAgentDisplay;
