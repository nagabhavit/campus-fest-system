"use client";
import React, { useState } from 'react';

// --- TYPES ---
type Role = 'participant' | 'organizer' | 'admin';

export default function CampusFestPro() {
  // 1. STATE MANAGEMENT
  const [role, setRole] = useState<Role>('participant');
  const [registrations, setRegistrations] = useState<{ [key: number]: boolean }>({});
  const [teamNames, setTeamNames] = useState<{ [key: number]: string }>({});

  const events = [
    { id: 1, name: "Hackathon 2026", cat: "Technical", venue: "Lab 1", date: "April 20", desc: "Build the future in 24 hours." },
    { id: 2, name: "Street Dance", cat: "Cultural", venue: "Open Air Theatre", date: "April 21", desc: "Showcase your moves on the big stage." },
    { id: 3, name: "E-Sports Arena", cat: "Gaming", venue: "Auditorium", date: "April 22", desc: "Valorant and FIFA tournament." },
  ];

  // 2. LOGIC FUNCTIONS
  const toggleReg = (id: number) => {
    setRegistrations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTeamChange = (id: number, name: string) => {
    setTeamNames(prev => ({ ...prev, [id]: name }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      
      {/* 🔐 ROLE SWITCHER (Demo Feature for Interviewers) */}
      <div className="bg-slate-900 text-white p-3 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
        <span className="opacity-50">Switch Role:</span>
        <button onClick={() => setRole('participant')} className={`transition-colors ${role === 'participant' ? 'text-blue-400' : 'hover:text-blue-400'}`}>Participant</button>
        <button onClick={() => setRole('organizer')} className={`transition-colors ${role === 'organizer' ? 'text-green-400' : 'hover:text-green-400'}`}>Organizer</button>
        <button onClick={() => setRole('admin')} className={`transition-colors ${role === 'admin' ? 'text-red-400' : 'hover:text-red-400'}`}>Admin</button>
      </div>

      {/* 🧭 NAVIGATION */}
      <nav className="p-6 bg-white border-b border-gray-200 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-white/80">
        <div>
            <h1 className="text-2xl font-black tracking-tighter italic">CAMPUS.FEST <span className="text-blue-600 not-italic text-xs bg-blue-50 px-2 py-1 rounded ml-1">PRO</span></h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Logged in as</p>
            <p className="text-sm font-bold text-slate-700 uppercase">{role}</p>
          </div>
          <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-white shadow-md"></div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 px-6">
        
        {/* --- 👤 PARTICIPANT VIEW --- */}
        {role === 'participant' && (
          <section>
            <div className="mb-12">
                <h2 className="text-4xl font-black text-slate-900 mb-2">Discover Events</h2>
                <p className="text-gray-500">Explore and register for the upcoming university flagship events.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(e => (
                <div key={e.id} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-widest">{e.cat}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">{e.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{e.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{e.desc}</p>
                  
                  {/* Team Input Field */}
                  <div className="mb-6">
                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Team Name (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Team Hyd"
                      value={teamNames[e.id] || ''}
                      onChange={(ev) => handleTeamChange(e.id, ev.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <button 
                    onClick={() => toggleReg(e.id)}
                    className={`w-full py-4 rounded-2xl font-black tracking-tight transition-all ${
                        registrations[e.id] 
                        ? 'bg-green-100 text-green-700 scale-[0.98]' 
                        : 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-200'
                    }`}
                  >
                    {registrations[e.id] ? '✓ REGISTERED' : 'ONE-CLICK REGISTER'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- 🧑‍💼 ORGANIZER / ADMIN VIEW --- */}
        {(role === 'organizer' || role === 'admin') && (
          <section className="animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h2 className="text-4xl font-black text-slate-900">Organizer Portal</h2>
                <p className="text-gray-500">Real-time registration tracking and event control.</p>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95">
                + Create New Event
              </button>
            </div>

            {/* 🔥 ANALYTICS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Total Regs', value: '1,284', color: 'text-blue-600' },
                { label: 'Revenue', value: '₹54,000', color: 'text-green-600' },
                { label: 'Volunteers', value: '32', color: 'text-purple-600' },
                { label: 'Live Events', value: '8', color: 'text-orange-600' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* 📊 REGISTRATION TABLE */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-lg text-slate-800">Recent Registrations</h3>
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-sm outline-none focus:ring-2 ring-blue-500/20"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                      <th className="px-8 py-4">Student Name</th>
                      <th className="px-8 py-4">Event</th>
                      <th className="px-8 py-4">Team</th>
                      <th className="px-8 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr className="text-sm hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-4 font-bold text-slate-700">Nagabhavit P.</td>
                      <td className="px-8 py-4 text-gray-500">Hackathon 2026</td>
                      <td className="px-8 py-4"><span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[10px] font-bold uppercase">Team Alpha</span></td>
                      <td className="px-8 py-4 text-green-500 font-bold">Confirmed</td>
                    </tr>
                    <tr className="text-sm hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-4 font-bold text-slate-700">Rahul K.</td>
                      <td className="px-8 py-4 text-gray-500">Street Dance</td>
                      <td className="px-8 py-4 text-gray-400 italic">Solo</td>
                      <td className="px-8 py-4 text-orange-500 font-bold">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 🏁 FOOTER */}
      <footer className="text-center py-12 border-t border-gray-100 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
        Built for Portfolio • Campus Fest 2026 • Deployed on Vercel
      </footer>
    </div>
  );
}