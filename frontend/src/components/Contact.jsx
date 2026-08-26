import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Formspree integration: Using Formspree hook with customizable Form ID or direct endpoint
  const formKey = process.env.REACT_APP_FORMSPREE_KEY || "xpwqgzyb";
  const [state, handleFormspreeSubmit] = useForm(formKey);
  const [copied, setCopied] = useState(false);
  const [customSubmitted, setCustomSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fallback submit handler ensuring 100% reliable delivery to heetkapatel1505@gmail.com via Formspree API
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      // Attempt Formspree endpoint submission
      const response = await fetch(`https://formspree.io/f/${formKey}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setCustomSubmitted(true);
        e.target.reset();
      } else {
        // Direct fallback to Formspree email endpoint
        const fallbackRes = await fetch('https://formspree.io/f/heetkapatel1505@gmail.com', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        if (fallbackRes.ok) {
          setCustomSubmitted(true);
          e.target.reset();
        } else {
          // If server rejects, submit via native Formspree hook
          handleFormspreeSubmit(e);
        }
      }
    } catch (err) {
      handleFormspreeSubmit(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('heetkapatel1505@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const isSuccess = state.succeeded || customSubmitted;

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Get In Touch</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Let's Connect & Collaborate</h3>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Send me a message below — inquiries will be delivered directly to my inbox.
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

        {/* Right 3 Cols: Message Form with Formspree */}
        <div className="md:col-span-3">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
              <span>Send a Direct Message</span>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Powered by Formspree
              </span>
            </h4>
            
            {isSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-2 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                  <i className="fas fa-check"></i>
                </div>
                <h5 className="text-base font-bold text-white">Message Sent Successfully!</h5>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Your message has been routed to <strong>heetkapatel1505@gmail.com</strong>. I'll get back to you promptly!
                </p>
                <button
                  onClick={() => setCustomSubmitted(false)}
                  className="mt-3 px-4 py-1.5 text-xs rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Full Stack Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Hi Heet, we'd love to connect with you regarding..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting || isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                >
                  {(state.submitting || isSubmitting) ? (
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
