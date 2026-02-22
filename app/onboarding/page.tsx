'use client';

import { useState } from 'react';

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/xnjbgwjy', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please email brandon@operaxon.com directly.');
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ fontSize: '48px', marginBottom: '24px' }}>⚔️</div>
          <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>You&apos;re in the system.</h1>
          <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
            Brandon will review your answers and have your AI operating system configured within 5–7 days.
            Your first brief fires the morning after setup is complete.
          </p>
          <p style={{ color: '#6366f1', fontSize: '14px', fontWeight: 500 }}>Done for you. First time. Right way.</p>
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#111827',
    border: '1px solid #1e293b',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#f1f5f9',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 500,
    color: '#cbd5e1',
    marginBottom: '8px',
  };

  const fieldStyle: React.CSSProperties = { marginBottom: '20px' };

  const hintStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#475569',
    marginTop: '6px',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#6366f1',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(99,102,241,0.2)',
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '48px 20px', fontFamily: 'Inter, sans-serif', color: '#f1f5f9' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
            OPERA<span style={{ color: '#6366f1' }}>X</span>ON
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>Let&apos;s build your system</h1>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, maxWidth: '460px', margin: '0 auto' }}>
            This takes about 5 minutes. Your answers let us configure your AI operating system
            specifically for your business — not a generic template.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Section 1 — About You */}
          <div style={{ marginBottom: '40px' }}>
            <div style={sectionTitleStyle}>About You</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>First Name <span style={{ color: '#6366f1' }}>*</span></label>
                <input style={inputStyle} type="text" name="first_name" placeholder="Brandon" required />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Last Name <span style={{ color: '#6366f1' }}>*</span></label>
                <input style={inputStyle} type="text" name="last_name" placeholder="Sandoval" required />
              </div>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Company Name <span style={{ color: '#6366f1' }}>*</span></label>
              <input style={inputStyle} type="text" name="company" placeholder="Acme Auto Group" required />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Your Role / Title</label>
              <input style={inputStyle} type="text" name="role" placeholder="COO, GM, Founder..." />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Email <span style={{ color: '#6366f1' }}>*</span></label>
              <input style={inputStyle} type="email" name="email" placeholder="you@company.com" required />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Phone</label>
              <input style={inputStyle} type="tel" name="phone" placeholder="+1 (555) 000-0000" />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Telegram Username <span style={{ color: '#6366f1' }}>*</span></label>
              <input style={inputStyle} type="text" name="telegram" placeholder="@yourhandle" required />
              <div style={hintStyle}>Your daily brief delivers here. Free at telegram.org if you don&apos;t have it.</div>
            </div>
          </div>

          {/* Section 2 — Your Business */}
          <div style={{ marginBottom: '40px' }}>
            <div style={sectionTitleStyle}>Your Business</div>

            <div style={fieldStyle}>
              <label style={labelStyle}>What does your business do? <span style={{ color: '#6366f1' }}>*</span></label>
              <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} name="business_description" placeholder="Describe what you do, who your customers are, and how you make money..." required />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Annual Revenue (approximate)</label>
              <select style={inputStyle} name="revenue">
                <option value="">Select range</option>
                <option>Under $500K</option>
                <option>$500K – $1M</option>
                <option>$1M – $5M</option>
                <option>$5M – $20M</option>
                <option>$20M+</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Your top 3–5 competitors <span style={{ color: '#6366f1' }}>*</span></label>
              <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} name="competitors" placeholder="List names and websites. These get tracked daily." required />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Topics or markets to monitor daily <span style={{ color: '#6366f1' }}>*</span></label>
              <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} name="topics" placeholder="e.g. Used car market, dealership tech news, Facebook ad policy, OEM incentives..." required />
            </div>
          </div>

          {/* Section 3 — Brief Preferences */}
          <div style={{ marginBottom: '40px' }}>
            <div style={sectionTitleStyle}>Your Daily Brief</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Delivery time <span style={{ color: '#6366f1' }}>*</span></label>
                <select style={inputStyle} name="brief_time" required>
                  <option value="">Select time</option>
                  <option>5:00 AM</option>
                  <option>5:30 AM</option>
                  <option>6:00 AM</option>
                  <option>6:30 AM</option>
                  <option>7:00 AM</option>
                  <option>7:30 AM</option>
                  <option>8:00 AM</option>
                </select>
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Timezone <span style={{ color: '#6366f1' }}>*</span></label>
                <select style={inputStyle} name="timezone" required>
                  <option value="">Select timezone</option>
                  <option>Eastern (ET)</option>
                  <option>Central (CT)</option>
                  <option>Mountain (MT)</option>
                  <option>Arizona (MST — no DST)</option>
                  <option>Pacific (PT)</option>
                </select>
              </div>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>What information do you wish you had every morning?</label>
              <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} name="morning_wish" placeholder="What decisions would be easier with the right data before 9 AM?" />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>What does success look like after 30 days?</label>
              <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} name="success" placeholder="What would make you say 'this was worth every penny'?" />
            </div>
          </div>

          {/* Section 4 — Hardware */}
          <div style={{ marginBottom: '40px' }}>
            <div style={sectionTitleStyle}>Hardware</div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Do you have a Mac mini? <span style={{ color: '#6366f1' }}>*</span></label>
              {[
                { value: 'have_m4', label: 'Yes — Mac mini M4 (16GB+)' },
                { value: 'have_older', label: 'Yes — older Mac mini (M1/M2/M3)' },
                { value: 'need_one', label: 'No — I need one (Operaxon will source it)' },
              ].map(opt => (
                <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#111827', border: '1px solid #1e293b', borderRadius: '10px', padding: '12px 16px', marginBottom: '8px', cursor: 'pointer' }}>
                  <input type="radio" name="hardware" value={opt.value} required style={{ accentColor: '#6366f1', width: '16px', height: '16px' }} />
                  <span style={{ fontSize: '13px', color: '#cbd5e1' }}>{opt.label}</span>
                </label>
              ))}
              <div style={hintStyle}>Your Mac mini runs 24/7. After setup you never touch it again.</div>
            </div>
          </div>

          {/* Section 5 — Notes */}
          <div style={{ marginBottom: '40px' }}>
            <div style={sectionTitleStyle}>Anything Else</div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Anything we should know before configuring your system?</label>
              <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} name="notes" placeholder="Special requests, sensitive topics to avoid, team members who should also receive the brief..." />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{ width: '100%', background: submitting ? '#4338ca' : '#6366f1', color: '#fff', border: 'none', borderRadius: '12px', padding: '16px', fontSize: '15px', fontWeight: 600, cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}
          >
            {submitting ? 'Submitting...' : "Submit — Let's Build This ⚔️"}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '40px', color: '#475569', fontSize: '12px' }}>
          <p>Questions? Email brandon@operaxon.com</p>
          <p style={{ marginTop: '8px' }}>Operaxon · Done for you. First time. Right way.</p>
        </div>
      </div>
    </div>
  );
}
