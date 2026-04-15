import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <div className="text-xl font-bold tracking-tighter">CAMPUS.FEST</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black">Events</a>
          <a href="#" className="hover:text-black">Schedule</a>
          <a href="#" className="hover:text-black">Past Highlights</a>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all">
          Register
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-8 pt-20 pb-16 text-center">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
          Coming Winter 2026
        </span>
        <h1 className="mt-8 text-6xl md:text-8xl font-extrabold tracking-tight text-black">
          Experience the <br /> 
          <span className="text-gray-400">Unforgettable.</span>
        </h1>
        <p className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          The official platform for managing, exploring, and participating in our university's largest annual cultural and technical festivals.
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
            Explore Events
          </button>
          <button className="bg-white text-black border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
            Organizer Login
          </button>
        </div>
      </main>
    </div>
  );
}