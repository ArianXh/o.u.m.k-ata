import React from "react";

const UnderConstruction = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="text-center text-white p-8 rounded-lg shadow-lg bg-opacity-75 bg-gray-900">
                <h1 className="text-5xl font-bold mb-4">🚧 Under Construction 🚧</h1>
                <p className="text-xl mb-6">
                    Our website is currently being built
                </p>
                <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md transition duration-300">
                    Check Back Soon
                </button>
            </div>
        </div>
    );
};

export default UnderConstruction;
