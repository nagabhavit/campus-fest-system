"use client";
import React, { useState } from 'react';

export default function CampusFestPro() {
  const [role, setRole] = useState('participant'); // participant, organizer, or admin
  const [registrations, setRegistrations] = useState<{ [key: number]: boolean }>({});

  const events = [
    { id: 1, name: "Hackathon 2026", cat: "Technical", venue: "Lab 1", slots: 50 },
    { id: 2, name: "Street Dance", cat: "Cultural", venue: "Open Air Theatre", slots: 20 },
  ];

  const toggleReg = (id: number) => {
    setRegistrations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* ROLE SWITCHER - Pro Resume Move */}
      <div className="bg-slate-900 text-white p-3 flex justify-center gap-6 text-xs font-bold uppercase tracking-widest">
        <span>Login As:</span>
        <button onClick={() => setRole('participant')} className={`hover:text-blue-400 ${role === 'participant' && 'text-blue-400'}`}>Participant</button>
        <button onClick={() => setRole('organizer')} className={`hover:text-green-400 ${role === 'organizer' && 'text-green-400'}`}>Organizer</button>
        <button onClick={() => setRole('admin')} className={`hover:text-red-400 ${role === 'admin' && 'text-red-400'}`}>Admin</button>
      </div>

      <nav className="p-6 bg-white border-b flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-black text-slate-800">CAMPUS.FEST <span className="text-blue-600 text-sm">PRO</span></h1>
        <div className="flex gap-4 items-center">
          <span className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full uppercase text-slate-500">Mode: {role}</span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-12 px-6">
        {/* DASHBOARD LOGIC */}
        {role === 'participant' ? (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Available Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map(e => (
                <div key={e.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">{e.cat}</span>
                    <span className="text-xs font-bold text-slate-400 underline">{e.venue}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{e.name}</h3>
                  <button 
                    onClick={() => toggleReg(e.id)}
                    className={`w-full py-4 rounded-2xl font-black transition-all ${registrations[e.id] ? 'bg-green-100 text-green-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                  >
                    {registrations[e.id] ? '✓ REGISTERED' : 'ONE-CLICK REGISTER'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Organizer Analytics</h2>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold">+ Create Event</button>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-10 text-center">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <p className="text-slate-500 text-xs font-bold uppercase mb-2">Registrations</p>
                <p className="text-3xl font-black">452</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <p className="text-slate-500 text-xs font-bold uppercase mb-2">Revenue</p>
                <p className="text-3xl font-black">₹12,400</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <p className="text-slate-500 text-xs font-bold uppercase mb-2">Volunteers</p>
                <p className="text-3xl font-black">24</p>
              </div>
            </div>
            {/* SEARCH & FILTER PLACEHOLDER */}
            <input type="text" placeholder="Search registered students..." className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-500" />
          </section>
        )}
      </main>
    </div>
  );
}