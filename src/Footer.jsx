import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  // Keeps a live clock updated for a clean tech-professional touch
  useEffect(() => {
    const updateClock = () => {
      const options = { timeStyle: 'short', hour12: true };
      setCurrentTime(new Date().toLocaleTimeString('en-US', options));
    };
    
    updateClock();
    const intervalId = setInterval(updateClock, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-[#F2EDE4] border-t border-[#D9E8F0] text-[#331F14] font-sans pt-10 pb-6 px-6 md:px-12 lg:px-24 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Top Segment: Brand & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Column 1: Identity Branding */}
          <div className="md:col-span-5 flex flex-col gap-2.5 animate-[footerFadeUp_0.5s_ease-out_both]">
            <div className="flex items-center gap-2">
              <img className="h-7 w-auto" src="./src/assets/lokeshlogo.png" alt="Logo" />
            </div>
            <p className="text-xs md:text-sm text-[#565E64] max-w-sm leading-relaxed">
              Final year B.Tech student specializing in AI & Data Science. Passionate about constructing high-performance MERN stack applications and writing optimized code.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-2 animate-[footerFadeUp_0.5s_ease-out_0.1s_both]">
            <h4 className="text-[10px] font-bold tracking-widest text-[#5FA2FD] uppercase">SITEMAP</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 max-w-xs">
              {[
                { to: "/", label: "Home" },
                { to: "/About", label: "About" },
                { to: "/Skills", label: "Skills" },
                { to: "/Experience", label: "Experience" },
                { to: "/Project", label: "Projects" },
                { to: "/Education", label: "Education" },
                { to: "/Contact", label: "Contact" }
              ].map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="text-xs text-[#565E64] hover:text-[#5FA2FD] hover:translate-x-0.5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Live Meta Info & Location status */}
          <div className="md:col-span-3 flex flex-col gap-2 md:items-end text-left md:text-right animate-[footerFadeUp_0.5s_ease-out_0.2s_both]">
            <h4 className="text-[10px] font-bold tracking-widest text-[#5FA2FD] uppercase">LOCAL ENVIRONMENT</h4>
            <div className="flex flex-col gap-0.5 text-xs text-[#565E64]">
              <div className="flex items-center md:justify-end gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse"></span>
                <span>Chennai, India</span>
              </div>
              {currentTime && (
                <p className="font-mono text-[11px] text-[#A68F7A] mt-0.5">
                  {currentTime} IST
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Separator Accent Divider Line */}
        <hr className="border-[#D9E8F0] my-1" />

        {/* Bottom Segment: Copyright & External Direct Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A68F7A] font-medium animate-[footerFadeUp_0.5s_ease-out_0.3s_both]">
          <p>© {new Date().getFullYear()} Lokesh R. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/rlokeshtech" target="_blank" rel="noopener noreferrer" className="hover:text-[#331F14] transition-colors duration-200 flex items-center gap-1">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/lokeshr19/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4086F4] transition-colors duration-200 flex items-center gap-1">
              LinkedIn
            </a>
            <a href="mailto:rlokeshtech@gmail.com" className="hover:text-[#5FA2FD] transition-colors duration-200 flex items-center gap-1">
              Email
            </a>
          </div>
        </div>

      </div>

      {/* Lightweight Keyframe Animations */}
      <style>{`
        @keyframes footerFadeUp {
          0% { transform: translateY(15px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </footer>
  );
}