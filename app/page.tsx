"use client";
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

// --- TYPES ---
type Role = 'participant' | 'organizer' | 'admin';

export default function CampusFestPro() {
  const [role, setRole] = useState<Role>('participant');
  const [registrations, setRegistrations] = useState<{ [key: number]: boolean }>({});
  const [teamNames, setTeamNames] = useState<{ [key: number]: string }>({});

  const events = [
    { id: 1, name: "Hackathon 2026", cat: "Technical", venue: "Lab 1", date: "April 20", desc: "Build the future in 24 hours." },
    { id: 2, name: "Street Dance", cat: "Cultural", venue: "Open Air Theatre", date: "April 21", desc: "Showcase your moves on the big stage." },
    { id: 3, name: "E-Sports Arena", cat: "Gaming", venue: "Auditorium", date: "April 22", desc: "Valorant and FIFA tournament." },
  ];

  const toggleReg = (id: number) => {
    setRegistrations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900" style={{ backgroundColor: '#f8fafc' }}>
      
      {/* 🔐 ROLE SWITCHER */}
      <div className="bg-slate-900 text-white p-3 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ backgroundColor: '#0f172a' }}>
        <span className="opacity-50">Switch Role:</span>
        <button onClick={() => setRole('participant')} className={`transition-colors ${role === 'participant' ? 'text-blue-400' : 'hover:text-blue-400'}`}>Participant</button>
        <button onClick={() => setRole('organizer')} className={`transition-colors ${role === 'organizer' ? 'text-green-400' : 'hover:text-green-400'}`}>Organizer</button>
        <button onClick={() => setRole('admin')} className={`transition-colors ${role === 'admin' ? 'text-red-400' : 'hover:text-red-400'}`}>Admin</button>
      </div>

      {/* 🧭 NAVIGATION */}
      <nav className="p-6 bg-white border-b border-gray-200 flex justify-between items-center sticky top-0 z-50 shadow-sm" style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <h1 className="text-2xl font-black tracking-tighter italic text-slate-900">
          CAMPUS.FEST <span className="text-blue-600 not-italic text-xs bg-blue-50 px-2 py-1 rounded ml-1" style={{ color: '#2563eb', backgroundColor: '#eff6ff' }}>PRO</span>
        </h1>
        <div className="flex gap-4 items-center">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Status</p>
            <p className="text-sm font-bold text-slate-700 uppercase">{role} Mode</p>
          </div>
          <div className="h-10 w-10 bg-blue-600 rounded-full border-2 border-white shadow-md" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)' }}></div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 px-6">
        
        {role === 'participant' ? (
          <section>
            <div className="mb-12">
                <h2 className="text-4xl font-black text-slate-900 mb-2">Discover Events</h2>
                <p className="text-gray-500">Explore and register for university flagship events.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(e => (
                <div key={e.id} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all" style={{ backgroundColor: 'white', borderRadius: '2rem', border: '1px solid #f1f5f9' }}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>{e.cat}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">{e.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{e.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{e.desc}</p>
                  
                  <button 
                    onClick={() => toggleReg(e.id)}
                    className={`w-full py-4 rounded-2xl font-black tracking-tight transition-all shadow-md ${
                        registrations[e.id] ? 'bg-green-100 text-green-700' : 'bg-slate-900 text-white hover:bg-blue-600'
                    }`}
                    style={registrations[e.id] ? { backgroundColor: '#dcfce7', color: '#15803d' } : { backgroundColor: '#0f172a', color: 'white' }}
                  >
                    {registrations[e.id] ? '✓ REGISTERED' : 'REGISTER NOW'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-black text-slate-900">Admin Portal</h2>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg" style={{ backgroundColor: '#2563eb' }}>+ New Event</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Registrations</p>
                <p className="text-3xl font-black text-blue-600">1,284</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Revenue</p>
                <p className="text-3xl font-black text-green-600">₹54,000</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Volunteers</p>
                <p className="text-3xl font-black text-purple-600">32</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="text-center py-12 border-t border-gray-100 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
        Built for Portfolio • Campus Fest 2026
      </footer>
    </div>
  );
}