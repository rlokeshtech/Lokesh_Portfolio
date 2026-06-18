import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    // Replace these 3 strings with your actual EmailJS dashboard credentials
    const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatusMessage({ type: 'success', text: 'Message sent successfully! I will get back to you soon.' });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatusMessage({ type: 'error', text: 'Something went wrong. Please try emailing directly.' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="h-dvh bg-[#EBF4F8]/60 text-[#331F14] font-sans selection:bg-[#331F14] selection:text-[#F2EDE4] flex items-center justify-center  md:p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Contact Info & Socials */}
        <div className="md:col-span-5 flex flex-col gap-5 animate-[slideInLeft_0.5s_ease-out_forwards]">
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#5FA2FD] mb-0.5 uppercase">GET IN TOUCH</h3>
            <h1 className="text-3xl md:text-4xl font-serif text-[#331F14] tracking-tight">Let's Connect</h1>
          </div>
          
          <p className="text-xs md:text-sm text-[#565E64] leading-relaxed max-w-sm">
            I'm currently looking for full-time opportunities. Drop a message, and let's build something great together.
          </p>

          {/* Contact Details Stack */}
          <div className="flex flex-col gap-3 mt-1">
            {/* Email Link */}
            <a href="mailto:rlokeshtech@gmail.com" className="bg-white border border-[#D9E8F0] rounded-xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-[3px] border-l-[#A68F7A]">
              <div className="bg-[#EBF4F8] text-[#5FA2FD] p-2 rounded-lg">
                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] text-[#A68F7A] font-bold tracking-widest block">EMAIL ME</span>
                <span className="text-xs md:text-sm font-bold text-[#331F14]">rlokeshtech@gmail.com</span>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/lokeshr19/" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#D9E8F0] rounded-xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-[3px] border-l-[#5FA2FD]">
              <div className="bg-[#EBF5FF] text-[#4086F4] p-2 rounded-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] text-[#A68F7A] font-bold tracking-widest block">LINKEDIN</span>
                <span className="text-xs md:text-sm font-bold text-[#331F14]">lokeshr19</span>
              </div>
            </a>

            {/* GitHub Link */}
            <a href="https://github.com/rlokeshtech" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#D9E8F0] rounded-xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-[3px] border-l-[#331F14]">
              <div className="bg-[#F6F6F6] text-[#331F14] p-2 rounded-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] text-[#A68F7A] font-bold tracking-widest block">GITHUB</span>
                <span className="text-xs md:text-sm font-bold text-[#331F14]">rlokeshtech</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="md:col-span-7 bg-[#FAF6F0]/40 border border-[#D9E8F0] rounded-2xl p-5 md:p-6 flex flex-col gap-4 shadow-sm border-t-[3px] border-t-[#5FA2FD] w-full animate-[slideInRight_0.5s_ease-out_forwards]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-[#A68F7A] tracking-wider uppercase">Your Name</label>
              <input type="text" name="from_name" required className="w-full bg-white border border-[#D9E8F0] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#331F14] outline-none focus:border-[#5FA2FD] transition-all duration-200" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-[#A68F7A] tracking-wider uppercase">Your Email</label>
              <input type="email" name="reply_to" required className="w-full bg-white border border-[#D9E8F0] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#331F14] outline-none focus:border-[#5FA2FD] transition-all duration-200" placeholder="john@example.com" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-[#A68F7A] tracking-wider uppercase">Message</label>
            <textarea name="message" required rows="4" className="w-full bg-white border border-[#D9E8F0] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#331F14] outline-none focus:border-[#5FA2FD] transition-all duration-200 resize-none" placeholder="Write your message here..."></textarea>
          </div>

          {/* Status Notifications */}
          {statusMessage.text && (
            <div className={`text-xs px-3 py-2 rounded-xl border ${
              statusMessage.type === 'success' ? 'bg-[#ECFDF5] border-[#10B981] text-[#065F46]' : 'bg-[#FEF2F2] border-[#EF4444] text-[#991B1B]'
            }`}>
              {statusMessage.text}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="bg-[#331F14] text-[#F2EDE4] font-semibold text-xs md:text-sm py-2.5 rounded-xl transition-all duration-200 hover:bg-[#4a3122] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1 shadow-sm"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-[#F2EDE4] border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>

      </div>

      <style>{`
        @keyframes slideInLeft { 0% { transform: translateX(-20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { 0% { transform: translateX(20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
      `}</style>
    </div>
  );
}