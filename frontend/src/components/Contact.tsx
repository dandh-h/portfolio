'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    setStatus('loading')
    try {
      const res = await fetch('https://contact-api-23hr.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-[#F9F7F5]">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#B08EC0]" />
          <span className="font-mono text-[#B08EC0] text-xs tracking-[0.15em] uppercase">
            Get In Touch
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2D2926] mb-4">
          Let&apos;s <span className="text-[#B08EC0]">Work Together</span>
        </h2>

        <p className="text-[#8C8078] max-w-xl mb-12 leading-relaxed">
          Whether you have an opportunity, a project, or just want to connect —
          my inbox is always open. I&apos;ll do my best to get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-4">
            <a href="mailto:dandycarreon.2001@gmail.com" className="flex items-center gap-4 bg-white rounded-2xl border border-[#EDE9E4] p-5 shadow-sm hover:border-[#B08EC0] hover:shadow-md transition-all duration-200 group">
              <div className="w-10 h-10 rounded-full bg-[#F3EDF7] flex items-center justify-center text-[#B08EC0]">✉</div>
              <div>
                <p className="font-mono text-xs text-[#B08EC0] tracking-widest uppercase mb-1">Email</p>
                <p className="text-sm text-[#8C8078] group-hover:text-[#B08EC0] transition-colors">dandycarreon.2001@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/dandycarreon2001" target="_blank" className="flex items-center gap-4 bg-white rounded-2xl border border-[#EDE9E4] p-5 shadow-sm hover:border-[#B08EC0] hover:shadow-md transition-all duration-200 group">
              <div className="w-10 h-10 rounded-full bg-[#F3EDF7] flex items-center justify-center text-[#B08EC0]">⊕</div>
              <div>
                <p className="font-mono text-xs text-[#B08EC0] tracking-widest uppercase mb-1">LinkedIn</p>
                <p className="text-sm text-[#8C8078] group-hover:text-[#B08EC0] transition-colors">linkedin.com/in/dandycarreon2001</p>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-[#EDE9E4] p-6 shadow-sm">
            <p className="font-mono text-xs text-[#B08EC0] tracking-widest uppercase mb-6">Send a Message</p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE9E4] bg-[#F9F7F5] text-sm text-[#2D2926] placeholder-[#C4B9B0] focus:outline-none focus:border-[#B08EC0] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE9E4] bg-[#F9F7F5] text-sm text-[#2D2926] placeholder-[#C4B9B0] focus:outline-none focus:border-[#B08EC0] transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE9E4] bg-[#F9F7F5] text-sm text-[#2D2926] placeholder-[#C4B9B0] focus:outline-none focus:border-[#B08EC0] transition-colors resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="w-full py-3 rounded-full bg-[#B08EC0] text-white text-sm hover:bg-[#9B7AB0] transition-all duration-200 shadow-sm disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : status === 'error' ? 'Failed — Try Again' : 'Send Message ✦'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}