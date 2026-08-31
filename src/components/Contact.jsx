import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/heetkapatel1505@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject.trim() 
            ? `Portfolio Message: ${formData.subject}` 
            : `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || (data.message && data.message.toLowerCase().includes('activation')))) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        'Unable to send message via form service. Please try again or click the button below to send directly from your email client.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('heetkapatel1505@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoHref = `mailto:heetkapatel1505@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Get In Touch</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Let's Connect & Collaborate</h3>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Send me a message below — inquiries are delivered directly to my inbox at <span className="text-slate-300 font-medium">heetkapatel1505@gmail.com</span>.
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
                    className="text-xs text-slate-400 hover:text-emerald-400 transition-colors" 
                    title="Copy Email"
                    type="button"
                  >
                    <i className={`fas ${copied ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
                  </button>
                </div>
                {copied && <span className="text-[10px] text-emerald-400 font-mono">Copied to clipboard!</span>}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400">Phone Number</p>
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
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-sm font-semibold text-white">Nadiad, Gujarat</p>
                <p className="text-xs text-slate-400 mt-0.5">Open to Vadodara / Ahmedabad / Remote</p>
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
                href="https://github.com/heetp72"
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
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <i className="fas fa-paper-plane text-emerald-400"></i>
                <span>Send a Direct Message</span>
              </h4>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Direct to Inbox
              </span>
            </div>
            
            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-3 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                  <i className="fas fa-check"></i>
                </div>
                <h5 className="text-lg font-bold text-white">
                  Message Sent Successfully!
                </h5>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! Your message has been received. <strong className="text-emerald-300">Heet</strong> will connect with you as soon as possible!
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs space-y-2">
                    <p className="flex items-center gap-2">
                      <i className="fas fa-circle-exclamation text-red-400"></i>
                      <span>{errorMessage}</span>
                    </p>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 text-emerald-400 underline font-semibold hover:text-emerald-300"
                    >
                      <i className="fas fa-envelope-open-text"></i> Open in Email App instead
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Heet, we'd love to connect with you regarding..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-[1.01] flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
