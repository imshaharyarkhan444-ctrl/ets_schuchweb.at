import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, Send, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-green/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-deep-blue/3 rounded-full blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-soft-green/10 px-4 py-2 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-soft-green" />
            <span className="text-sm font-semibold text-soft-green-dark uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-dark leading-tight">
            Let's Start Your{' '}
            <span className="text-deep-blue">Project</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            Ready for a consultation? Reach out to us and let's discuss how we can help 
            with your electrical or solar project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-deep-blue rounded-2xl p-8 lg:p-10 text-white h-full">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-3 text-white/60 leading-relaxed text-sm">
                We're here to help with your electrical needs. 
                Reach out via phone, email, or the contact form.
              </p>

              <div className="mt-10 space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5 text-soft-green-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="mt-1 text-white/70 text-sm leading-relaxed">
                      Obere Hauptstraße 37<br />
                      7536 Güttenbach, Austria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="h-5 w-5 text-soft-green-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a
                      href="tel:+436645106075"
                      className="mt-1 block text-white/70 text-sm hover:text-white transition-colors"
                    >
                      +43 664 5106075
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-5 w-5 text-soft-green-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a
                      href="mailto:ets@schuchweb.at"
                      className="mt-1 block text-white/70 text-sm hover:text-white transition-colors"
                    >
                      ets@schuchweb.at
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock className="h-5 w-5 text-soft-green-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Working Hours</p>
                    <p className="mt-1 text-white/70 text-sm">
                      Mon – Fri: 7:00 – 17:00<br />
                      Sat: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 leading-relaxed">
                  Elektro Technik Schuch — Your local electrical partner since 2000.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-light-gray rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-accent-dark">Send an Inquiry</h3>
              <p className="mt-2 text-gray-500 text-sm">Fill out the form below and we'll get back to you promptly.</p>

              {submitted && (
                <div className="mt-6 rounded-xl bg-soft-green/10 border border-soft-green/20 p-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-soft-green">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-soft-green-dark font-medium text-sm">Thank you! Your inquiry has been sent. We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/10"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+43 ..."
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/10 appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">Electrical Installation</option>
                      <option value="maintenance">Service & Maintenance</option>
                      <option value="photovoltaic">Photovoltaic Systems</option>
                      <option value="aircon">Air Conditioning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/10 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-deep-blue px-8 py-4 text-base font-semibold text-white shadow-lg shadow-deep-blue/20 transition-all duration-300 hover:bg-deep-blue-light hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  Send Inquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
