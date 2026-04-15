"use client";
import React, { useState } from 'react';

export default function CampusFestPro() {
  const [role, setRole] = useState('student');
  const [regs, setRegs] = useState<{ [key: number]: boolean }>({});

  const containerStyle: React.CSSProperties = { 
    backgroundColor: '#0f172a', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif', color: 'white' 
  };
  const cardStyle: React.CSSProperties = { 
    backgroundColor: '#1e293b', borderRadius: '20px', padding: '30px', maxWidth: '600px', margin: '0 auto', textAlign: 'center', border: '1px solid #334155' 
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: '#38bdf8', margin: '0 0 10px 0', fontSize: '2rem' }}>CAMPUS.FEST PRO 🚀</h1>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Mode: <b style={{color: '#38bdf8'}}>{role.toUpperCase()}</b></p>
        
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={() => setRole('student')} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: role === 'student' ? '#38bdf8' : '#334155', color: 'white', fontWeight: 'bold' }}>STUDENT</button>
          <button onClick={() => setRole('admin')} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: role === 'admin' ? '#f87171' : '#334155', color: 'white', fontWeight: 'bold' }}>ADMIN</button>
        </div>

        {role === 'student' ? (
          <div style={{ backgroundColor: '#334155', padding: '25px', borderRadius: '15px', textAlign: 'left' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Code-A-Thon 2026</h3>
            <p style={{ fontSize: '14px', color: '#cbd5e1' }}>Hyderabad's premier coding sprint.</p>
            <button 
              onClick={() => setRegs({...regs, 1: !regs[1]})}
              style={{ width: '100%', padding: '15px', marginTop: '20px', borderRadius: '10px', border: 'none', cursor: 'pointer', backgroundColor: regs[1] ? '#4ade80' : '#38bdf8', color: '#0f172a', fontWeight: 'bold' }}>
              {regs[1] ? '✓ REGISTERED' : 'REGISTER NOW'}
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1, backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>REGISTRATIONS</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0 0 0' }}>1,402</p>
            </div>
            <div style={{ flex: 1, backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>REVENUE</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0 0 0', color: '#4ade80' }}>₹54k</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// Build Trigger: 18:00