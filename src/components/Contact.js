import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const mailto = `mailto:your.email@example.com?subject=Hello Him Kishan Das&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <Section
      id="contact"
      title="Let’s work together"
      subtitle="Open to internships and full-time roles in frontend/React."
      className="section-contact py-24 transition-colors duration-500"
    >
      <motion.div
        className="card contact-card container mx-auto max-w-xl p-8 rounded-xl shadow-md transition-colors duration-500"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 16 }}>
          <input
            className="input"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          />
          <input
            className="input"
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          />
          <textarea
            className="textarea"
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          />
          <div style={{ display: 'flex', gap: 10 }}>
            <a className="btn" href={mailto}>Send Message</a>
            <a className="btn btn-outline" href="mailto:your.email@example.com">Email directly</a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}