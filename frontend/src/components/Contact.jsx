import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success'
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Create a pre-filled mailto link for reliable zero-server message delivery
    const mailtoUrl = `mailto:heetkapatel1505@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Opportunity Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('heetkapatel1505@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Get In Touch</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Let's Connect & Build</h3>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Currently open for full-time Full-Stack Developer roles in Ahmedabad, Vadodara, and Remote.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left 2 Cols: Direct Contact Channels */}
        <div className="md:col-span-2 space-y-4">
          <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-6">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <i className="fas fa-address-book text-emerald-400"></i> Direct Channels
            </h4>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-400">Email Address</p>
                <div className="flex items-center gap-2">
                  <a href="mailto:heetkapatel1505@gmail.com" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    heetkapatel1505@gmail.com
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="text-xs text-slate-400 hover:text-emerald-400" 
                    title="Copy Email"
                  >
                    <i className={`fas ${copied ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
                  </button>
                </div>
                {copied && <span className="text-[10px] text-emerald-400 font-mono">Copied to clipboard!</span>}
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400">Phone & WhatsApp</p>
                <a href="tel:+919408355242" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                  +91 9408355242
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400">Location & Availability</p>
                <p className="text-sm font-semibold text-white">Nadiad / Vadodara, Gujarat</p>
                <p className="text-xs text-emerald-400 font-medium mt-0.5">Immediate Joiner (0 Days Notice)</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800 flex gap-3">
              <a
                href="https://linkedin.com/in/Heet-Kapatel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <i className="fab fa-linkedin text-blue-400"></i> LinkedIn
              </a>
              <a
                href="https://github.com/Heet-Kapatel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right 3 Cols: Message Form */}
        <div className="md:col-span-3">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-4">Send a Direct Message</h4>
            
            {status === 'success' && (
              <div className="p-4 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <i className="fas fa-check-circle text-base"></i>
                <span>Your email client was opened! Looking forward to connecting.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject / Role Opportunity</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full Stack Developer Role - [Company Name]"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Heet, we'd like to discuss an opportunity with our engineering team..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
              >
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
