import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/contact_messages`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-6 py-4 bg-stone-100 text-stone-900 placeholder-stone-600 focus:outline-none focus:bg-stone-200 transition-all duration-300"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-6 py-4 bg-stone-100 text-stone-900 placeholder-stone-600 focus:outline-none focus:bg-stone-200 transition-all duration-300"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-6 py-4 bg-stone-100 text-stone-900 placeholder-stone-600 focus:outline-none focus:bg-stone-200 transition-all duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-50 text-stone-900 text-sm tracking-widest uppercase font-light hover:bg-stone-200 disabled:opacity-50 transition-all duration-300 group"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-3 p-4 bg-green-100 text-green-800 rounded">
          <CheckCircle size={20} />
          <span className="text-sm font-light">Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-100 text-red-800 rounded">
          <AlertCircle size={20} />
          <span className="text-sm font-light">{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
