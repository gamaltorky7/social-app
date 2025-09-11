import React from 'react';
import { Link, useNavigate } from 'react-router';

export default function Notfound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-transparent flex items-center justify-center px-4 py-28">
      <div className="max-w-md w-full text-center">
        {/* Large 404 number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Error message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-blue-700 text-lg leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="space-y-4">
          <Link to={'/home'}>
          <button 
           
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Go Back
          </button>
          </Link>
        
        </div>
        
        {/* Decorative element */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}