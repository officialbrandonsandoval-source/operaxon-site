"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      business: formData.get("business"),
      industry: formData.get("industry"),
      revenue: formData.get("revenue"),
      bottleneck: formData.get("bottleneck"),
      referral: formData.get("referral"),
      tier: formData.get("tier"),
      type: "application",
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us at brandon@operaxon.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/">
            <img src="/logo.svg" alt="Operaxon" style={{ height: "44px", width: "auto" }} />
          </a>
          <a href="/" className="text-white/40 hover:text-white text-sm transition-colors">← Back to site</a>
        </div>
      </header>

      <div className="pt-32 pb-28 px-6">
        <div className="max-w-xl mx-auto">

          {submitted ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-[#6366f1] text-2xl">✓</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">Application received.</h1>
              <p className="text-white/50 text-lg leading-relaxed">
                We'll review your application and reach out within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 text-[#6366f1] text-sm font-medium mb-8 border border-[#6366f1]/30 bg-[#6366f1]/10 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse"></span>
                  Limited spots this quarter
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  Apply for Operaxon
                </h1>
                <p className="text-white/50 text-lg leading-relaxed">
                  We work with a limited number of clients each quarter. Tell us about your business.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Your name <span className="text-[#6366f1]">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Brandon Sandoval"
                    className="w-full bg-[#111] border border-white/10 focus:border-[#6366f1]/60 rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm"
                  />
                </div>

                {/* Business name */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Business name <span className="text-[#6366f1]">*</span>
                  </label>
                  <input
                    name="business"
                    type="text"
                    required
                    placeholder="Acme Corp"
                    className="w-full bg-[#111] border border-white/10 focus:border-[#6366f1]/60 rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Industry <span className="text-[#6366f1]">*</span>
                  </label>
                  <input
                    name="industry"
                    type="text"
                    required
                    placeholder="e.g. Real estate, SaaS, E-commerce, Consulting..."
                    className="w-full bg-[#111] border border-white/10 focus:border-[#6366f1]/60 rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm"
                  />
                </div>

                {/* Monthly revenue */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Monthly revenue range <span className="text-[#6366f1]">*</span>
                  </label>
                  <select
                    name="revenue"
                    required
                    defaultValue=""
                    className="w-full bg-[#111] border border-white/10 focus:border-[#6366f1]/60 rounded-lg px-4 py-3 text-white outline-none transition-colors text-sm appearance-none"
                  >
                    <option value="" disabled className="text-white/20">Select range...</option>
                    <option value="under-10k">Under $10K/mo</option>
                    <option value="10-50k">$10K–$50K/mo</option>
                    <option value="50-100k">$50K–$100K/mo</option>
                    <option value="100k-plus">$100K+/mo</option>
                  </select>
                </div>

                {/* Biggest bottleneck */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Biggest operational bottleneck <span className="text-[#6366f1]">*</span>
                  </label>
                  <textarea
                    name="bottleneck"
                    required
                    rows={4}
                    placeholder="What's falling through the cracks? What doesn't get done? Be specific."
                    className="w-full bg-[#111] border border-white/10 focus:border-[#6366f1]/60 rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    How did you hear about us?
                  </label>
                  <input
                    name="referral"
                    type="text"
                    placeholder="Instagram, referral, LinkedIn, Google..."
                    className="w-full bg-[#111] border border-white/10 focus:border-[#6366f1]/60 rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm"
                  />
                </div>

                {/* Tier interest */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Which tier interests you? <span className="text-[#6366f1]">*</span>
                  </label>
                  <select
                    name="tier"
                    required
                    defaultValue=""
                    className="w-full bg-[#111] border border-white/10 focus:border-[#6366f1]/60 rounded-lg px-4 py-3 text-white outline-none transition-colors text-sm appearance-none"
                  >
                    <option value="" disabled className="text-white/20">Select tier...</option>
                    <option value="core">Core — $997/mo (Agent Delivery, no hardware)</option>
                    <option value="command">Command — $2,500/mo (Full Mac mini installation)</option>
                    <option value="both">Not sure — tell me what fits</option>
                  </select>
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#6366f1] hover:bg-[#5254cc] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg text-base transition-colors"
                >
                  {loading ? "Submitting..." : "Submit Application →"}
                </button>

                <p className="text-white/20 text-xs text-center">
                  We review every application within 24 hours. No spam, ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
