"use client";
import React from 'react';

// Mock Data: Shows recruiters you can handle data structures
const FEATURED_EVENTS = [
  { 
    title: "Code-A-Thon 2026", 
    type: "Technical", 
    date: "Feb 24", 
    color: "bg-blue-500",
    desc: "A 24-hour sprint to build solutions for real-world problems. Join the elite developers of Hyderabad."
  },
  { 
    title: "Groove & Move", 
    type: "Cultural", 
    date: "Feb 25", 
    color: "bg-purple-500",
    desc: "The annual inter-college dance face-off. Show your rhythm and win the championship."
  },
  { 
    title: "Robo-Wars", 
    type: "Technical", 
    date: "Feb 26", 
    color: "bg-orange-500",
    desc: "Custom-built robots clashing for the title. Engineering and destruction at its finest."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-xl font-bold tracking-tighter cursor-pointer">CAMPUS.FEST</div>
        <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-500">
          <a href="#events" className="hover:text-black transition-colors">Events</a>
          <a href="#" className="hover:text-black transition-colors">Schedule</a>
          <a href="#" className="hover:text-black transition-colors">Past Highlights</a>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95">
          Register Now
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="max-w-6xl mx-auto px-8 pt-24 pb-20 text-center">
        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          The University Flagship Event
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black mb-8 leading-[0.9]">
          Experience the <br /> 
          <span className="text-gray-300">Unforgettable.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          The official platform for managing, exploring, and participating in our university's largest annual cultural and technical festivals. Built for students, by students.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="#events" className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-black/20 transition-all active:scale-95">
            Explore Events
          </a>
          <button className="w-full md:w-auto bg-white text-black border border-gray-200 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors">
            Organizer Login
          </button>
        </div>
      </main>

      {/* --- EVENTS DISCOVERY SECTION --- */}
      <section id="events" className="max-w-6xl mx-auto px-8 py-24 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Featured Events</h2>
            <p className="text-gray-500 mt-2 text-lg">Handpicked highlights for this year's fest.</p>
          </div>
          <button className="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            View All 24 Events →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURED_EVENTS.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 w-full bg-gray-50 rounded-3xl mb-6 overflow-hidden border border-gray-100">
                {/* Visual Placeholder for Event Image */}
                <div className={`absolute inset-0 opacity-20 ${event.color}`}></div>
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {event.type}
                </div>
              </div>
              <p className="text-xs font-bold text-blue-600 mb-2 tracking-wide uppercase">{event.date}</p>
              <h3 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4 transition-all">
                {event.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {event.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-50 py-20 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter mb-2">CAMPUS.FEST</h3>
            <p className="text-gray-400 text-sm">© 2026 University Event Management. All rights reserved.</p>
          </div>
          <div className="flex space-x-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-black">Twitter</a>
            <a href="#" className="hover:text-black">Instagram</a>
            <a href="#" className="hover:text-black">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}