"use client";
import React, { useState } from 'react';

// --- TYPES ---
type Role = 'student' | 'organizer' | 'admin';
interface Event {
  id: number; title: string; category: string; date: string; 
  desc: string; slots: number; registered: number;
}

export default function CampusFestPro() {
  // 1. STATE MANAGEMENT (Role & Data)
  const [role, setRole] = useState<Role>('student');
  const [myEvents, setMyEvents] = useState<number[]>([]);
  const [events, setEvents] = useState<Event[]>([
    { id: 1, title: "Hack-Hyderabad", category: "Technical", date: "April 20", desc: "24hr coding challenge.", slots: 100, registered: 45 },
    { id: 2, title: "Cultural Night", category: "Cultural", date: "April 21", desc: "Dance and Music fest.", slots: 500, registered: 120 },
  ]);

  // 2. FUNCTIONS
  const handleRegister = (id: number) => {
    if (!myEvents.includes(id)) {
      setMyEvents([...myEvents, id]);
      setEvents(events.map(e => e.id === id ? { ...e, registered: e.registered + 1 } : e));
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans">
      {/* ROLE SELECTOR (For Demo Purposes) */}
      <div className="bg-black text-white p-2 text-center text-[10px] font-bold uppercase tracking-widest">
        Viewing as: {role} | 
        <button onClick={() => setRole('student')} className="ml-4 underline">Student</button>
        <button onClick={() => setRole('organizer')} className="ml-4 underline">Organizer</button>
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white border-b border-gray-200">
        <h1 className="text-2xl font-black tracking-tighter">FEST.LY</h1>
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-500">Dashboard</span>
          <div className="h-10 w-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-10">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Welcome back, {role === 'student' ? 'Nagabhavit' : 'Admin'}</h2>
          <p className="text-gray-500 mt-2">Manage your registrations and discover new opportunities.</p>
        </div>

        {/* ORGANIZER TOOLS (Conditional Rendering) */}
        {role !== 'student' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase">Total Regs</p>
              <p className="text-3xl font-black mt-1">1,240</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase">Revenue</p>
              <p className="text-3xl font-black mt-1">₹45,000</p>
            </div>
            <button className="md:col-span-2 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors">
              + Create New Event
            </button>
          </div>
        )}

        {/* EVENT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest">{event.category}</span>
                <span className="text-sm font-bold text-blue-600">{event.date}</span>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{event.title}</h3>
              <p className="text-gray-500 mt-4 leading-relaxed">{event.desc}</p>
              
              {/* PROGRESS BAR (Analytics Feature) */}
              <div className="mt-8">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>Registration Capacity</span>
                  <span>{Math.round((event.registered / event.slots) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-1000" 
                    style={{ width: `${(event.registered / event.slots) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button 
                onClick={() => handleRegister(event.id)}
                disabled={myEvents.includes(event.id)}
                className={`w-full mt-8 py-4 rounded-2xl font-bold transition-all ${
                  myEvents.includes(event.id) 
                  ? "bg-green-50 text-green-600 cursor-not-allowed" 
                  : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {myEvents.includes(event.id) ? "✓ Registered" : "Register Now"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}