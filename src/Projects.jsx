import React, { useState } from 'react';

export default function Projects() {
  // Mouse position state for the floating preview
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectsData = [
    {
      title: "Decentralized Credential Verification System",
      linkText: "digital-learning-platform-bay.vercel.app",
      linkUrl: "https://digital-learning-platform-bay.vercel.app",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Solidity", "Ethereum", "Ethers.js", "Tailwind CSS"],
      description: "Full-stack MERN application for decentralized academic credential verification. Built and deployed Solidity smart contracts on Ethereum for tamper-proof on-chain credential issuance; integrated Ethers.js for MetaMask wallet connection from the React frontend.",
      previewImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80" // Replace with your actual project screenshot path
    },
    {
      title: "Shopy — E-Commerce Web Application",
      linkText: "shopyapp-ten.vercel.app",
      linkUrl: "https://shopyapp-ten.vercel.app",
      tags: ["React.js", "Tailwind CSS", "Context API", "React Router"],
      description: "Responsive e-commerce platform with dynamic cart functionality via useState/useContext, product browsing, and client-side routing. Deployed on Vercel with a clean, user-friendly shopping experience.",
      previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" // Replace with your actual project screenshot path
    },
    {
      title: "Admin Dashboard — Institutional Management",
      linkText: "admindashboard-seven-roan.vercel.app",
      linkUrl: "https://admindashboard-seven-roan.vercel.app",
      tags: ["React.js", "Tailwind CSS", "Context API"],
      description: "Role-based admin dashboard with reusable React components and Context API state management for managing students, attendance, and course data across an institution.",
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" // Replace with your actual project screenshot path
    }
  ];

  const handleMouseMove = (e) => {
    // Tracks coordinates relative to the viewport to place the floating preview accurately
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-139 bg-[#EBF4F8]/60 text-[#331F14] font-sans selection:bg-[#331F14] selection:text-[#F2EDE4] flex items-center justify-center p-4 md:p-8 relative">
      <div className="w-full max-w-7xl flex flex-col gap-5">
        
        {/* Section Header */}
        <div className="animate-[fadeInDown_0.4s_ease-out_forwards]">
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#5FA2FD] mb-0.5 uppercase">THINGS I'VE BUILT</h3>
          <h1 className="text-3xl md:text-4xl font-serif text-[#331F14] tracking-tight">Projects</h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch w-full mt-1 relative">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
              className="bg-[#FAF6F0]/40 border border-[#D9E8F0] rounded-2xl p-5 md:p-6 flex flex-col gap-3.5 shadow-sm hover:shadow-md transition-all duration-200 border-t-[3px] border-t-[#5FA2FD] cursor-pointer relative overflow-hidden group"
              style={{
                animation: `slideUpCard 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Project Title & Link Block */}
              <div className="flex flex-col gap-1">
                <h2 className="text-base md:text-lg font-serif font-bold text-[#331F14] leading-snug tracking-tight">
                  {project.title}
                </h2>
                <a 
                  href={project.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-[#5FA2FD] font-medium inline-flex items-center gap-1 hover:underline self-start relative z-10"
                >
                  <svg className="w-2.5 h-2.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  {project.linkText}
                </a>
              </div>

              {/* Flex Tag Box */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="bg-transparent border border-[#BCE0FD] text-[#3A5B85] px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-[#565E64] leading-relaxed mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Preview Image Layer */}
      {hoveredIndex !== null && (
        <div 
          className="fixed pointer-events-none z-50 rounded-lg overflow-hidden shadow-xl border-2 border-[#5FA2FD] bg-white transition-transform duration-100 ease-out animate-[popIn_0.15s_ease-out_forwards]"
          style={{
            top: `${mousePos.y + 20}px`, // Offsets the image 20px below the cursor
            left: `${mousePos.x + 15}px`, // Offsets the image 15px to the right of the cursor
            width: '260px',
            aspectRatio: '16/10'
          }}
        >
          <img 
            src={projectsData[hoveredIndex].previewImage} 
            alt="Project Preview" 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Styles */}
      <style>{`
        @keyframes fadeInDown {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUpCard {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}