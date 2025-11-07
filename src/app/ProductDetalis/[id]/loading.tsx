import React from 'react'

export default function loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Spinner Animation */}
            <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 border-4 border-red-600 rounded-full opacity-30"></div>
                <div className="absolute inset-0 border-4 border-t-red-600 border-transparent rounded-full animate-spin"></div>
            </div>

            {/* Text */}
            <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
                Loading Product Details...
            </h2>

            {/* Small dots animation */}
            <div className="flex space-x-1 mt-2">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
}

