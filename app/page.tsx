"use client";
import React, { useState } from 'react';

export default function CampusFestPro() {
  const [role, setRole] = useState('participant');
  const [registrations, setRegistrations] = useState<{ [key: number]: boolean }>({});
  const [search, setSearch] = useState("");

  const events = [
    { id: 1, name: "Hackathon 2026", cat: "Technical", date: "April 20", desc: "Build the future in 24 hours. Prize pool: ₹50,000" },
    { id: 2, name: "Street Dance", cat: "Cultural", date: "April 21", desc: "Showcase your moves on the big stage." },
    { id: 3, name: "E-Sports Arena", cat: "Gaming", date: "April 22", desc: "Valorant and FIFA tournament." },
  ];

  const filteredEvents = events.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '20px', fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
      
      {/* 🔐 TOP ROLE SWITCHER BAR */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '12px', borderRadius: '12px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '20px' }}>
        <span style={{ opacity: 0.5 }}>LOGIN AS:</span>
        <button onClick={() => setRole('participant')} style={{ background: 'none', border: 'none', color: role === 'participant' ? '#60a5fa' : 'white', cursor: 'pointer' }}>STUDENT</button>
        <button onClick={() => setRole('admin')} style={{ background: 'none', border: 'none', color: role === 'admin' ? '#f87171' : 'white', cursor: 'pointer' }}>ADMIN/ORGANIZER</button>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* 🧭 NAV CARD */}
        <div style={{ backgroundColor: 'white', padding: '20px 30px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 900, letterSpacing: '-1px' }}>
            CAMPUS.FEST <span style={{ color: '#2563eb', fontSize: '12px', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '6px' }}>PRO</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8', fontWeight: 'bold' }}>VERSION</p>
                <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}>3.0.1 (Live)</p>
            </div>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', borderRadius: '50%' }}></div>
          </div>
        </div>

        {role === 'participant' ? (
          <section>
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 10px 0' }}>Discover Events</h2>
              <input 
                type="text" 
                placeholder="Search events (e.g. Hackathon)..." 
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '2px solid #e2e8f0', outline: 'none', fontSize: '16px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              {filteredEvents.map(e => (
                <div key={e.id} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '25px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#2563eb', backgroundColor: '#eff6ff', padding: '5px 10px', borderRadius: '50px' }}>{e.cat}</span>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8' }}>{e.date}</span>
                  </div>
                  <h3 style={{ fontSize: '22px', margin: '0 0 10px 0', fontWeight: 800 }}>{e.name}</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, marginBottom: '25px' }}>{e.desc}</p>
                  
                  <button 
                    onClick={() => setRegistrations(prev => ({...prev, [e.id]: !prev[e.id]}))}
                    style={{ 
                        width: '100%', 
                        padding: '15px', 
                        borderRadius: '15px', 
                        border: 'none', 
                        fontWeight: 'bold', 
                        cursor: 'pointer',
                        transition: '0.3s',
                        backgroundColor: registrations[e.id] ? '#dcfce7' : '#0f172a',
                        color: registrations[e.id] ? '#15803d' : 'white'
                    }}
                  >
                    {registrations[e.id] ? '✓ REGISTERED' : 'ONE-CLICK REGISTER'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section style={{ backgroundColor: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '30px' }}>Organizer Dashboard</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '25px', backgroundColor: '#eff6ff', borderRadius: '20px' }}>
                    <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#3b82f6' }}>TOTAL REGISTRATIONS</p>
                    <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 900 }}>1,402</p>
                </div>
                <div style={{ padding: '25px', backgroundColor: '#f0fdf4', borderRadius: '20px' }}>
                    <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#22c55e' }}>NET REVENUE</p>
                    <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 900 }}>₹64,200</p>
                </div>
                <div style={{ padding: '25px', backgroundColor: '#faf5ff', borderRadius: '20px' }}>
                    <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#a855f7' }}>VOLUNTEERS</p>
                    <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 900 }}>48</p>
                </div>
            </div>
          </section>
        )}
      </div>

      <footer style={{ textAlign: 'center', marginTop: '50px', color: '#94a3b8', fontSize: '12px', fontWeight: 'bold' }}>
        BUILD FOR PORTFOLIO 2026 • UNIVERSITY PROJECT
      </footer>
    </div>
  );
}