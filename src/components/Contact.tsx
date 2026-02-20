import { useState } from 'react';
import { Phone, Mail, Instagram, Send, CheckCircle } from 'lucide-react';

// Form submissions are sent to Formspree using the endpoint from the VITE_FORMSPREE_ENDPOINT env variable.
// If the variable is not set, the form falls back to a mailto: link.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const services = [
  'Demolition Services',
  'Green Waste Removal',
  'Household Items',
  'Property Cleanout',
  'Garage Cleanout',
  'Storage Unit Cleanout',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    zip: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Quote Request from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nZip Code: ${form.zip}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:ketchumjunkremoval@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', service: '', zip: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-subtitle">Get In Touch</p>
            <h2 className="section-title mb-6">
              Get Your
              <span className="text-green-400"> Free Quote</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Ready to get rid of the junk? Reach out and we'll give you a free, no-obligation estimate.
              Most jobs can be done same day or next day.
            </p>

            <div className="space-y-5">
              <a
                href="tel:9512932666"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-green-600/15 border border-green-700/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/25 transition-colors">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-white font-bold text-lg group-hover:text-green-400 transition-colors">
                    (951) 293-2666
                  </p>
                </div>
              </a>

              <a
                href="mailto:ketchumjunkremoval@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-green-600/15 border border-green-700/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/25 transition-colors">
                  <Mail size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-white font-bold group-hover:text-green-400 transition-colors break-all">
                    ketchumjunkremoval@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/ketchumjunkremoval"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-green-600/15 border border-green-700/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/25 transition-colors">
                  <Instagram size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Instagram</p>
                  <p className="text-white font-bold group-hover:text-green-400 transition-colors">
                    @ketchumjunkremoval
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle size={56} className="text-green-400 mb-5" />
                <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 mb-6">
                  Thanks! We'll be in touch shortly with your free estimate.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-green-400 hover:text-green-300 text-sm font-bold underline underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-gray-900 border border-gray-700 focus:border-green-600 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(951) 555-0000"
                      className="w-full bg-gray-900 border border-gray-700 focus:border-green-600 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-gray-900 border border-gray-700 focus:border-green-600 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 focus:border-green-600 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    placeholder="92501"
                    maxLength={10}
                    className="w-full bg-gray-900 border border-gray-700 focus:border-green-600 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                    Describe Your Job
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what needs to be removed, your approximate address, and any details that will help us give you an accurate quote..."
                    className="w-full bg-gray-900 border border-gray-700 focus:border-green-600 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs bg-red-950/50 border border-red-800 rounded-lg p-3">
                    Something went wrong. Please try again or call us directly at (951) 293-2666.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Request My Free Quote
                    </>
                  )}
                </button>
                <p className="text-gray-600 text-xs text-center">
                  No spam. We'll only contact you about your quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
