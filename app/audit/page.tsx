/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';

const questions = [
  {
    id: 'team',
    question: 'How many people are actively running your business operations?',
    options: [
      { label: 'Just me', value: 1 },
      { label: '2-5 people', value: 2 },
      { label: '6-20 people', value: 3 },
      { label: '20+ people', value: 4 },
    ],
  },
  {
    id: 'ai_current',
    question: 'What best describes your current AI setup?',
    options: [
      { label: "Nothing — I haven't deployed anything", value: 1 },
      { label: 'ChatGPT for writing, occasionally', value: 2 },
      { label: 'A few AI tools, some automations', value: 3 },
      { label: 'Serious infrastructure, actively building', value: 4 },
    ],
  },
  {
    id: 'research_time',
    question: 'How many hours per week do you spend on research, monitoring, and staying informed?',
    options: [
      { label: "I don't — I fly blind", value: 1 },
      { label: '1-3 hours (scattered, reactive)', value: 2 },
      { label: '4-8 hours (regular but manual)', value: 3 },
      { label: "8+ hours (it's a real problem)", value: 4 },
    ],
  },
  {
    id: 'competitor_awareness',
    question: 'How quickly do you know when a competitor makes a significant move?',
    options: [
      { label: 'Usually weeks or months later', value: 1 },
      { label: 'Within a week if I happen to check', value: 2 },
      { label: 'Within a few days via alerts', value: 3 },
      { label: 'Same day — I have systems for this', value: 4 },
    ],
  },
  {
    id: 'morning',
    question: 'How do you typically start your workday?',
    options: [
      { label: 'Reactive — email, Slack, whatever is on fire', value: 4 },
      { label: 'Some structure, but still catching up', value: 3 },
      { label: 'I have a routine but it is manual', value: 2 },
      { label: 'Strong systems — I start informed and ahead', value: 1 },
    ],
  },
  {
    id: 'hardware',
    question: "What's your current Mac situation?",
    options: [
      { label: 'No Mac — Windows or no dedicated machine', value: 1 },
      { label: 'I have a MacBook I could dedicate', value: 2 },
      { label: 'I have a Mac mini (M1/M2/M3/M4)', value: 3 },
      { label: 'I have a Mac Studio or high-end Mac', value: 4 },
    ],
  },
  {
    id: 'bottleneck',
    question: "What's the single biggest bottleneck to growing your business?",
    options: [
      { label: 'Not enough time', value: 4 },
      { label: 'Not enough information to make fast decisions', value: 3 },
      { label: "Can't scale without hiring", value: 2 },
      { label: 'Need better systems and processes', value: 3 },
    ],
  },
];

const tiers = [
  {
    name: 'Starter',
    min: 0, max: 40,
    color: '#10b981',
    headline: "You're leaving serious leverage on the table.",
    body: "The fundamentals are all fixable. A single autonomous agent delivering daily intelligence and handling your research overhead is the highest-leverage move you can make right now.",
    device: 'Mac mini M4 (16GB) — $599 at cost',
    setup: '$297 one-time setup',
    monthly: '$297/mo',
    includes: ['1 autonomous agent', 'Daily intelligence brief', 'Competitor monitoring (up to 3)', 'Content drafts 3x/week', 'Monthly strategy call'],
  },
  {
    name: 'Operator',
    min: 41, max: 70,
    color: '#6366f1',
    headline: "You're ready for a serious deployment.",
    body: "You understand the problem and have some systems — you just need the right infrastructure. The Operator tier gives you the horsepower to run multiple coordinated agents and the full intelligence suite.",
    device: 'Mac mini M4 Pro (24GB) — $799 at cost',
    setup: '$497 one-time setup',
    monthly: '$497/mo',
    includes: ['Up to 3 coordinated agents', 'Daily brief per agent domain', 'Competitor monitoring (up to 10)', 'Content Scout daily', 'Full cron suite', 'Bi-weekly strategy calls'],
  },
  {
    name: 'Studio',
    min: 71, max: 100,
    color: '#8b5cf6',
    headline: 'You need the full stack.',
    body: "Your operation is complex and you need maximum horsepower — both in intelligence capability and the number of agents working in parallel. The Studio tier is built for operators who want the full civilization.",
    device: 'Mac Studio M4 Max (48GB) — $2,499 at cost',
    setup: '$997 one-time setup',
    monthly: '$997/mo',
    includes: ['5+ autonomous agents', 'Full civilization architecture', 'Custom integrations', 'Weekly strategy calls', '70B+ local model capability', 'Named POC (Brandon)'],
  },
];

function getScore(answers: Record<string, number>): number {
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = questions.length * 4;
  return Math.round((total / max) * 100);
}

function getTier(score: number) {
  return tiers.find(t => score >= t.min && score <= t.max) ?? tiers[1];
}

export default function AuditPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const complete = answered === questions.length;
  const score = complete ? getScore(answers) : 0;
  const tier = complete ? getTier(score) : null;

  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      {/* Nav */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(8,8,8,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.05)', height: '64px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ color: '#fff', fontWeight: 700, fontSize: '18px', textDecoration: 'none', letterSpacing: '-0.5px' }}>OPERA<span style={{ color: '#6366f1' }}>X</span>ON</a>
          <a href="/apply" style={{ background: '#6366f1', color: '#fff', fontSize: '14px', fontWeight: 500, padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>Apply for a Spot</a>
        </div>
      </header>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '100px 24px 80px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#6366f1', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>AI OS Readiness Assessment</p>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.2 }}>How ready is your business for an AI operating system?</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px', lineHeight: 1.6 }}>7 questions. 3 minutes. We tell you exactly which tier fits and what it would do for your operation.</p>
          {/* Progress */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            <div style={{ height: '4px', borderRadius: '2px', background: '#6366f1', width: `${Math.max(4, (answered / questions.length) * 200)}px`, transition: 'width 0.3s' }} />
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>{answered}/{questions.length}</span>
          </div>
        </div>

        {/* Questions */}
        {!submitted && (
          <div>
            {questions.map((q, qi) => (
              <div key={q.id} style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>
                  <span style={{ color: '#6366f1', marginRight: '8px', fontSize: '13px' }}>{String(qi + 1).padStart(2, '0')}</span>
                  {q.question}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt.value && q.id in answers;
                    return (
                      <label
                        key={`${q.id}-${opt.label}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', background: selected ? 'rgba(99,102,241,0.12)' : '#111827', border: `1px solid ${selected ? '#6366f1' : '#1e293b'}`, borderRadius: '10px', padding: '12px 16px', cursor: 'pointer', transition: 'all 0.15s' }}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          onChange={() => setAnswers(prev => ({ ...prev, [q.id]: opt.value }))}
                          checked={selected}
                          style={{ accentColor: '#6366f1', width: '16px', height: '16px', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '14px', color: selected ? '#fff' : 'rgba(203,213,225,0.8)' }}>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}

            {complete && (
              <button
                onClick={() => setSubmitted(true)}
                style={{ width: '100%', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '12px', padding: '16px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', marginTop: '8px' }}
              >
                See My Results
              </button>
            )}
          </div>
        )}

        {/* Results */}
        {submitted && tier && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '40px', padding: '40px', background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px' }}>
              <div style={{ fontSize: '72px', fontWeight: 800, color: tier.color, lineHeight: 1, marginBottom: '8px' }}>{score}</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', marginBottom: '20px' }}>out of 100</div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{tier.headline}</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.6 }}>{tier.body}</p>
            </div>

            <div style={{ background: '#0d0d0d', border: `2px solid ${tier.color}40`, borderRadius: '20px', padding: '32px', marginBottom: '24px' }}>
              <p style={{ color: tier.color, fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Recommended Tier</p>
              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '4px' }}>{tier.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', marginBottom: '20px' }}>{tier.device}</p>
              <div style={{ marginBottom: '8px' }}>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>{tier.setup}</div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: tier.color }}>{tier.monthly}</div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '20px 0' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                {tier.includes.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                    <span style={{ color: tier.color }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/apply" style={{ display: 'block', textAlign: 'center', background: tier.color, color: '#fff', padding: '14px', borderRadius: '10px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
                Apply for {tier.name}
              </a>
            </div>

            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '12px', marginBottom: '16px' }}>
              Month-to-month. No contracts. Hardware at Apple cost, or use what you have.
            </p>
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => { setAnswers({}); setSubmitted(false); }} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)', padding: '8px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit' }}>
                Retake assessment
              </button>
            </div>
          </div>
        )}
      </div>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>
        <p>Operaxon · <a href="/" style={{ color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>Home</a> · <a href="/apply" style={{ color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>Apply</a> · brandon@operaxon.com</p>
      </footer>
    </div>
  );
}
