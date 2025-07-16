'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally, add API call here
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600 text-center">✅ Thank you! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border px-4 py-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-2 rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full border px-4 py-2 rounded h-32"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="bg-[#C5F302] text-black px-6 py-2 rounded hover:bg-black hover:text-white w-full cursor-pointer transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
