import React from 'react';
import { Link } from 'react-router';

export default function WelcomePage() {
  return (
   
    <div className="min-h-screen   flex items-center justify-center py-40">
      <div className="max-w-full mx-auto text-center">
        {/* Logo/Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-7xl dark:text-white">
            Keep Contact
          </h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Stay connected with the people who matter most. Build meaningful relationships 
            and never lose touch with your network.
          </p>
          <p className="text-lg text-gray-500">
            Simple. Social. Always Connected.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to='register'>
          <button className="hover:cursor-pointer bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors  shadow-lg hover:shadow-xl  ">
            Get Started
          </button>
          </Link>
          <Link to='login'>
          <button className="hover:cursor-pointer bg-white hover:bg-gray-200 text-blue-700 font-semibold py-3 px-8 rounded-lg border-2 border-blue-700 transition-colors  shadow-lg hover:shadow-xl  ">
            Log In
          </button>
          </Link>
        </div>

        {/* Features Highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Connect</h3>
            <p className="text-gray-600 text-sm">Build and maintain your professional and personal network effortlessly.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Communicate</h3>
            <p className="text-gray-600 text-sm">Stay in touch with seamless messaging and real-time conversations.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Organize</h3>
            <p className="text-gray-600 text-sm">Keep your contacts organized and never miss an important connection.</p>
          </div>
        </div>
      </div>
    </div>
  );
}